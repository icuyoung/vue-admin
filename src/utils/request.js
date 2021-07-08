import axios from 'axios'
import { Message } from 'element-ui'
import store from '@store'
import { getToken } from './auth'

const service = axios.create({
  baseURL:process.env.BASE_API,
  timeout:5000
})

//request 拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() 
  }
},error => {
  console.error(error)
  Promise.reject(error)
})

//response 拦截器
service.interceptors.response.use(response => {
  response
  },error => {
  console.log(error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service