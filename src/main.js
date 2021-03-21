import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
//解决移动端300s延迟
// FastClick.attach(document.body)
//实现图片懒加载
Vue.use(VueLazyLoad,{
  loading: require('assets/img/common/placeholder.png')
})
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
