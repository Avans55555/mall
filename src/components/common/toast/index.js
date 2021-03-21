import Toast from "./Toast";
const obj={
}

obj.install=function(Vue){
  //1.创建组件构造器
  const toastConstructor=Vue.extend(Toast)
  //2.new的方式 根据组价构造器可以创建一个组件对象
  const toast = new toastConstructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast
}


export default obj