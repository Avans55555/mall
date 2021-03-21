<template>
  <div class="checkbox-wrapper">
    <div class="checkbox" :class="{active:isCheck}">
  </div>
  </div>
</template>

<script>
  export default {
    name: "checkBox",
    props:{
      isCheck:{
        type:Boolean,
        default(){
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .checkbox-wrapper{
    width: 40px;
    margin-right: 3px;
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
  .checkbox{
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-tint);
    border-radius: 50%;
    background-image: url('~assets/img/cart/tick.svg');
    background-position: 2px 2px;
  }
   .active{
    background-color: var(--color-tint);

  }
</style>