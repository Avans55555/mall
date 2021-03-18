<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from'better-scroll'
  export default {
    name: "scroll",
    data(){
      return{
        scroll:null,

      }
    },
    props:{
      probeType: {
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad: {
        type:Boolean,
        default(){
          return false
        }
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        observeDOM:true,
        observeImage:true
      })

      this.scroll.on('scroll',(position)=>{
        this.$emit('scrollPosition',position)
      })

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
        this.scroll && this.scroll.finishPullUp()
      })
    },
    methods:{
      toTop(x,y,time=300){
        this.scroll &&  this.scroll.scrollTo(x,y,time)
      },
      getScrollY(){
        return this.scroll?this.scroll.y:0
      },
      // finishPullUp(){
      //   this.scroll.finishPullUp()
      // },
      refresh(){
        this.scroll &&  this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    overflow: hidden;
  }
  .content {
    padding-top: 15.2px;
    padding-bottom: 58px;
  }
</style>