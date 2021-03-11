import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/category')
const Shopcart=()=>import('../views/shopcart/shopcart')
const Profile=()=>import('../views/profile/profile')
const routes = [
  {
  path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
