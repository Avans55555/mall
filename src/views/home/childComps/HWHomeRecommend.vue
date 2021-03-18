<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HWHomeRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  text-align: center;
  padding: 13px 0 10px;
  border-bottom: 8px solid rgba(144,144,144,0.3);
}
  .recommend-item{
    width: 65px;

  }
  .recommend-item img{
    width: 100%;
    margin-bottom: 5px;
  }

</style>