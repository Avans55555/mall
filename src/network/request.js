import axios from 'axios'

export function request(config) {
  const instance1 = new axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5'
  })
  //请求拦截
  instance1.interceptors.request.use(config=>{
    return config
  }, error => {
        console.log(error)
      })

  // 响应拦截
  instance1.interceptors.response.use(response=>{

    return response.data
  },error => {
    console.log(error)
  })
return instance1(config)
}


