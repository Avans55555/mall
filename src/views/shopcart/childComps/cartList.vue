<template>
  <div class="cart-list">
    <cartListItem  v-for="item in getCartList" :goods-item="item"/>
  </div>
</template>

<script>
  import cartListItem from "./cartListItem";
  import {mapGetters} from 'vuex'
  export default {
    name: "cartList",
    components:{
      cartListItem
    },
    computed:{
      ...mapGetters(['getCartList'])
    }
  }
</script>

<style scoped>
.cart-list{
   padding-top: 40px;

 }

</style>