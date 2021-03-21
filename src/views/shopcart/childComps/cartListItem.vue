<template>
  <div class="cart-list-item">
    <checkBox :is-check="goodsItem.checked" @click.native="checkClick"/>
    <div class="goods-item">
      <img  :src="goodsItem.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{goodsItem.title}}</div>
      <div class="item-desc">{{goodsItem.desc}}</div>
      <div class="bottom-info">
        <div class="price">￥{{goodsItem.price}}</div>
        <div>×{{goodsItem.count}}</div>
      </div>
    </div>

  </div>

</template>

<script>
  import checkBox from "./checkBox";
  export default {
    name: "cartListItem",
    components:{
      checkBox
    },
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },

    methods:{
      checkClick(){
        this.goodsItem.checked=!this.goodsItem.checked
      }
    }
  }
</script>

<style scoped>

  .cart-list-item{
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #CCCCCC;

  }

.item-info{
  font-size: 14px;
  color: #333;
  width: 100%;
  padding: 3px 10px;
  position: relative;
  overflow: hidden;
}
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .item-desc{
    margin-top: 10px;
  }


.goods-item img{
  width: 70px;
  height: 95px;
  border-radius: 10px;
}
  .bottom-info{
    margin-top: 20px;
    justify-content: space-between;
    display: flex;
  }
  .price{
    color: red;
  }


</style>