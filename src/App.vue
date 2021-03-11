<template>
<div>
  <keep-alive><router-view></router-view></keep-alive>
  <tabBarMain></tabBarMain>
</div>
</template>

<script>
import tabBarMain from "components/content/tabbar/tabBarMain";

  export default {
    name: 'app',
    components: {
     tabBarMain
    }
  }
</script>

<style>
@import "assets/css/base.css";

</style>
