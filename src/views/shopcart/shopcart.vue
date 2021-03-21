<template>
<div>
  <NavBar class="shop-cart">
    <div slot="center">购物车({{getShopLength}})</div>
  </NavBar>
  <scroll  ref="scroll" :pullUpLoad="true" class="content">
    <cartList/>
  </scroll>
  <cartListBottomBar />
</div>

</template>

<script>
  import scroll from "components/common/scroll/scroll";
  import NavBar from "components/common/navbar/NavBar";
  import cartList from "./childComps/cartList";
  import {mapGetters} from 'vuex'
  import cartListBottomBar from "./childComps/cartListBottomBar";
  export default {
    name: "shopcart",
    components:{
      NavBar,
      cartList,
      scroll,
      cartListBottomBar
    },
    computed:{
      ...mapGetters(['getShopLength'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>

.shop-cart{
  position: relative;
  background-color: var(--color-tint);
  color: #f6f6f6;

}
.content {
  position: absolute;
  top: 20px;
  bottom: 90px;
  left: 0;
  right: 0;
}
</style>
