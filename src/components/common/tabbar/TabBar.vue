<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>
<style scoped>

  .tab-bar{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 49px;
    box-shadow: 0 -1px 2px rgba(140,140,140,0.3);
    position: fixed;
    bottom: 0;
    background-color: #f6f6f6;
    right: 1px;

  }

</style>
