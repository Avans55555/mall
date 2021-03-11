<template>
  <div id="home">
      <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name: "Home",
    beforeRouteLeave(to,from,next){
      this.isActive=true
      next()
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    }
  }


</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
