<template>
  <div id="tabControl">
    <div v-for="(item,index) in titles"
         class="tc-item"
         @click="tcItemClick(index)"
         :class="{active:index === currentIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      tcItemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
#tabControl{
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 2;

}
  .tc-item{
    padding:5px;
  }
  .active{
    color: var(--color-high-text);
    padding:5px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>