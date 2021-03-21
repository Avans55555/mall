<template>
  <div class="bottom-bar">
   <div class="check-wrapper">
     <checkBox class="check-box" :class="{isChecked:isAllChecked}" @click.native="allCheckedClick"/>
     <span>全选</span>
   </div>
    <div class="price">￥{{totalPrice}}</div>
    <div class="submit" @click="submitClick">去结算({{getCartList.length}})</div>
  </div>


</template>

<script>
  import checkBox from "./checkBox";
  import {mapGetters} from 'vuex'
  export default {
    name: "cartListBottomBar",
    components:{
      checkBox
    },
    computed:{
      ...mapGetters(['getCartList']),
      totalPrice(){
        const cartList=this.getCartList
       return  cartList.filter(item=>item.checked).reduce((preValue,item)=>{
         return preValue + item.price*item.count
       },0).toFixed(2)
      },
      isAllChecked(){
        if (!this.getCartList.length) return false
        return this.getCartList.every(item=>item.checked)
      }
    },
    methods:{
      allCheckedClick(){
        if(this.isAllChecked){
          this.getCartList.forEach(item=>item.checked=false)
        }else {
          this.getCartList.forEach(item=>item.checked=true)
        }
      },
      submitClick(){
        if(!this.getCartList.length){
          this.$toast.show('请先挑选商品',1500)
        }
      }
    }

  }
</script>

<style scoped>
.bottom-bar{
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #f4f4f4;
  align-items: center;
  position: fixed;
  bottom: 51px;
}
.check-box{
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
  .check-wrapper{
    display: flex;
    align-items: center;
    line-height: 40px;
    width: 60px;
  }
  .check-wrapper span{
    margin-left: 3px;
    font-size: 14px;

  }
  .price{
    color: red;
    margin-left: 6px;
    flex: 1;
  }
  .submit{
    width: 130px;
    height: 40px;
    color: seashell;
    line-height: 40px;
    background-color: red;
    text-align: center;
  }
  .isChecked{
    background-color: var(--color-tint);
  }
</style>