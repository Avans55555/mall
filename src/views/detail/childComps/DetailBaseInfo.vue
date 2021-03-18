<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }

      }
    },

  }
</script>

<style scoped>
  .info-title{

    padding: 15px 5px ;
  }
  .info-price{
    padding: 0 5px 20px;
  }
  .n-price{
    font-size: 23px;
    color: var(--color-high-text);
  }
  .o-price{
    font-size: 12px;
    text-decoration: line-through;
    color: #b6b3b9;
    margin: 0 3px;
  }
  .discount{
    background-color: var(--color-high-text);
    color: #f6f6f6;
    padding: 3px;
    border-radius: 8px;
    font-size: 12px;
    position: relative;
    bottom: 8px;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    padding: 0 5px 6px;
    font-size: 13px;
    color: #b6b3b9;
    border-bottom: #d3d3d3 solid 2px;
    width: 95%;
    margin: 0 auto;

  }
.info-service{
  padding: 15px 5px;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
}
.info-service img{
  width: 12px;
}
</style>