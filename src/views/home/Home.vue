<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <TabControl :titles="['推荐','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl1"
                :class="{a:!isTabFixed}"
    />
        <scroll class="content" ref="scroll"
                @scrollPosition="scrollPosition"
                :probe-type="3"
                :pull-up-load="true"
                @pullingUp="loadMore"
        >
          <HomeSwiper  :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
          <HWHomeRecommend :recommends="recommends"></HWHomeRecommend>
          <feature></feature>
          <TabControl :titles="['推荐','新款','精选']" @tabClick="tabClick" ref="tabControl2"></TabControl>
          <GoodList :goods="goodsList"></GoodList>
        </scroll>
        <BackTop @click.native="bcClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import HWHomeRecommend from "./childComps/HWHomeRecommend";
  import feature from "./childComps/feature";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import scroll from "components/common/scroll/scroll";
  import GoodList from "components/content/goods/GoodList";
  import {RemoveScroll} from "common/utils";
  import {toTopMix} from "common/mixin";
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  // import {debounce} from "common/utils";
  document.body.style.overflow='hidden'
  export default {
    name: "Home",
    beforeRouteLeave(to,from,next){
      this.isActive=true
      next()
    },
    components:{
      HomeSwiper,
      HWHomeRecommend,
      feature,
      NavBar,
      TabControl,
      GoodList,
      scroll,
    },
    mixins:[toTopMix],
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentControl:'pop',
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      // RemoveScroll();
    },

    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollY()

    },
    computed:{

      goodsList(){
        return this.goods[this.currentControl].list
      }
  },
    methods:{
      //防抖
      //事件监听方法
      tabClick(index){
        switch (index) {
            case 0:
              this.currentControl='pop';
              break;
            case 1:
              this.currentControl='new';
              break;
            case 2:
              this.currentControl='sell';
        }
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },
      //监听滚动事件
      scrollPosition(position){
         this.isShow = (-position.y)>800
         this.isTabFixed=(-position.y)>529
      },
      //监听加载
      loadMore(){
        this.getHomeGoods(this.currentControl)
      },
      //获得粘滞导航栏的高度
      swiperImageLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
      },

      //网络请求方法
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          // this.$refs.scroll.finishPullUp()
          // this.$refs.scroll.refresh()
        })
      }
    }
  }


</script>

<style scoped>

  #home {

  }
  .a{
    opacity: 0;
    position: relative;
    z-index: 222;
  }
  .tab-control{
    position: relative;
    z-index: 100;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }




</style>
