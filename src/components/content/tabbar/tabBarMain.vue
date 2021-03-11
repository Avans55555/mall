<template>
  <TabBar>
    <!--    <TabBarItem slot="tabbar-img"><img src="../src/assets/img/tab-bar/home.svg" alt=""></TabBarItem>-->
    <TabBarItem path="/home" activeColors="hotpink">
      <img slot="tab-bar-img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="tab-bar-img-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="tab-bar-name">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="tab-bar-img" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="tab-bar-img-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="tab-bar-name">推荐</div>
    </TabBarItem>
    <TabBarItem path="shopcart">
      <img slot="tab-bar-img" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="tab-bar-img-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="tab-bar-name">购物车</div>
    </TabBarItem>
    <TabBarItem path="profile">
      <img slot="tab-bar-img" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="tab-bar-img-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="tab-bar-name">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "tabBarMain",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
