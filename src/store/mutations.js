import {
  ADD_CART,
  ADD_TO_CART
} from './StoreStyle'

export default {
  [ADD_CART](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked=false
    state.cartList.push(payload)
  }
}