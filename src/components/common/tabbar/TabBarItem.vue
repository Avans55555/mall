<template>
 <div class="tab-bar-item" @click="tbClick">

   <div v-if="isActive">
     <slot name="tab-bar-img-active"></slot>
   </div>
   <div v-else>
     <slot name="tab-bar-img"></slot>
   </div>
   <div :style="activeColor">
     <slot name="tab-bar-name"></slot>
   </div>

 </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
        // isActive:false

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeColor(){
        return this.isActive?{color:this.activeColors} : {}
      }
  },
    props:{
      path:String,
      activeColors:{
        type:String,
        default:'red'
      }
    },
    methods:{
      tbClick(){
        this.$router.push(this.path).catch(err=>err)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    text-align: center;
  }
  .tab-bar-item img{
    width: 25px;
    margin-top: 1px;
    /*margin-bottom: -3px;*/
    vertical-align: middle;
  }

</style>
