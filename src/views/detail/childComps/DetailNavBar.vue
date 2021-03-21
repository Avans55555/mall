<template>
  <div>
    <NavBar class="detail-nav-bar" >
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back-img">
      </div>
      <div slot="center" class="dn-center" >
        <div v-for="(item,index) in titles"
             :class="{active:currentIndex===index}"
             @click="itemClick(index)">
          {{item}}
        </div>
      </div>

    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar,
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      //将index发送给详情页
      itemClick(index){
        this.currentIndex=index
        this.$emit('nbClick',index)
      },
      backClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar{
    background-color: #fff;
  }
  .dn-center{
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    /*margin-top: 10px;*/
   

  }
  .active{
    color: var(--color-tint);
  }
  .back-img{
    margin-top: 10px;
  }
</style>