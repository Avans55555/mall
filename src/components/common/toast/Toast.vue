<template>
  <div >
    <div class="toast" v-show="isSShow">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        message: '',
        isSShow:false
      }
    },
    methods:{
      show(message,time=2000){
        this.isSShow=true
        this.message=message
        setTimeout(()=>{
             this.isSShow=false
            }, time)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 60%;
  z-index: 2;
  transform: translateX(-50%)translateY(-50%) ;
  background-color: rgba(0,0,0,0.75);
  padding: 6px 15px;
  color: #f6f6f6;
  border-radius: 5px;
}
</style>