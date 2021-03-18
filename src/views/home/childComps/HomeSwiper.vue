<template>
<div>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
  export default {
    name: "HomeSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      },
    },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      swiperImageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>

</style>