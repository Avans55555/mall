<template>
  <div>
    <h2>首页</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    // created() {
    //   console.log(1)
    // },
    // destroyed() {
    //   console.log(2)
    // }
    // activated() {
    //   this.isActive=true
    // },
    // destroyed() {
    //   this.isActive=false
    // }
    beforeRouteLeave(to,from,next){
      this.isActive=true
      next()
    }
  }


</script>

<style scoped>

</style>
