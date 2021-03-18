<template>
<div>
  <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
  <tabBarMain v-show="this.$route.path.indexOf('detail')==-1"></tabBarMain>

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
