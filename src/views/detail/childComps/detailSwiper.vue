<template>
  <Swiper class="top-swiper" v-if="Object.keys(topImg).length!==0">
    <SwiperItem v-for="item in topImg">
      <div>
        <img :src="item" alt="">
      </div>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "detailSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      topImg: {
        type: Array,
        default: []
      }
    }

  }
</script>

<style scoped>
.top-swiper{
  height: 280px;
  margin-top: 35px;
}
</style>