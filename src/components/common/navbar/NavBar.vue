<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;



  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;

  }
</style>