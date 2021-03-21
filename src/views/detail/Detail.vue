<template>
  <div class="detail">
    <DetailNavBar @nbClick="nbClick" ref="nav"/>
    <scroll class="content" :pull-up-load="true" ref="scroll" :property="3" @scrollPosition="scrollPosition">
      <detailSwiper :topImg="topImg"></detailSwiper>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shop="shop"/>
      <DetailGoodsInfo :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <DetailGoodsParams ref="params" :paramInfo="paramInfo"/>
      <DetailComment ref="comment" :comment="comment"></DetailComment>
      <GoodList ref="recommends"  :goods="recommends" ></GoodList>
    </scroll>
      <BackTop  @click.native="bcClick" v-show="isShow"/>

    <DetailBottomBar @addToCart="addToCart" />

  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import detailSwiper from "./childComps/detailSwiper";
  import {getDetailData,Goods,Shop,GoodsParam,Recommend} from "network/detail";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import scroll from "components/common/scroll/scroll";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailGoodsParams from "./childComps/DetailGoodsParams";
  import DetailComment from "./childComps/DetailComment";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import GoodList from "components/content/goods/GoodList";
  import {debounce} from "common/utils";
  import BackTop from "components/content/backTop/BackTop";
  import {toTopMix} from "common/mixin";
  export default {
    name: "Detail",
    data(){
      return{
        iid:null,
        topImg:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        recommends:[],
        comment:{},
        themeTopY:[],
        getThemeTopY:null,
        currentIndex:0,
        }
    },

    mixins:[toTopMix],
    components:{
      DetailNavBar,
      detailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      scroll,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailComment,
      GoodList,
      DetailBottomBar,
      BackTop,
    },
    created() {
      //获取iid
     this.iid = this.$route.params.iid
      //请求详细数据
      getDetailData(this.iid).then(res=>{
        const data=res.result
        this.topImg=data.itemInfo.topImages
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop=new Shop(data.shopInfo)
        this.detailInfo=data.detailInfo
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if (data.rate.list) {
          this.comment= data.rate.list[0];
        }
      })
      //请求推荐数据
      Recommend().then(res=>{
          this.recommends=res.data.list

        })
      //

    },

    methods:{
      //导航栏点击跳转
      nbClick(index){
        this.$refs.scroll.toTop(0,-this.themeTopY[index] - 35,300)
      },
      //处理滚动导航栏切换选中
      imgLoad(){
            this.themeTopY=[]
            this.themeTopY.push(0)
            this.themeTopY.push(this.$refs.params.$el.offsetTop)
            this.themeTopY.push(this.$refs.comment.$el.offsetTop)
            this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
            this.themeTopY.push(Number.MAX_VALUE)



      },
      //监听滚动
      scrollPosition(position){
        this.isShow = (-position.y)>800
        const currentTop=-position.y
        // console.log(currentTop)
        this.themeTopY.forEach((i,index)=>{
          //将position.y和[0, 6045, 7109, 7350]作对比
          //当position.y 处于0-6045之间的时候  index为0
          //当position.y 处于6045-7109之间    index为1
          //当position.y 处于7109-7350之间    index为2
          //当position.y 大于7350             index为3
          if(this.currentIndex!==index && (currentTop>=this.themeTopY[index] && currentTop<=this.themeTopY[index+1])){
            this.currentIndex=index
            this.$refs.nav.currentIndex=this.currentIndex
          }

        })

      },
      //添加购物车
      addToCart(){
        const product={}
        product.image=this.topImg[0]
        product.title=this.goods.title
        product.desc=this.goods.desc
        product.price=this.goods.realPrice
        product.iid=this.iid
        //将对象传给 vuex的 mutations
        this.$store.dispatch('addCard',product).then(res=>{
          //   this.message=res
          //   this.isSShow=true
          // setTimeout(()=>{
          //   this.isSShow=false
          // },1500)
          // this.$toast.show(res,1500)
          this.$toast.show(res,1500)
        })

      }
    }


  }
</script>

<style scoped>
.detail{
  height: 100vh;
  position: relative;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}

</style>