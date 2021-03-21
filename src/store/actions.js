import {
  ADD_CART,
  ADD_TO_CART
} from './StoreStyle'
export default {
  addCard(context,payload){

    return new Promise((resolve,reject)=>{
      let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid
      )
      if(oldProduct){
        context.commit(ADD_CART,oldProduct)
        resolve('成功添加商品')
      }else {
        payload.count=1
        context.commit(ADD_TO_CART,payload)
        resolve('加入购物车成功')
      }
    })
  }
}