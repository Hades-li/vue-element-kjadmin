import axios from 'axios'
// import Cookies from "js-cookie";

const instance = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})

// 请求劫持
instance.interceptors.request.use(req => {
  // req.withCredentials = true
  return req
}, error => {
  return Promise.reject(error)
})

// 返回劫持
instance.interceptors.response.use(res => {
  const data = res.data
  if (data.code === 0) {
    return data
  } else {
    return Promise.reject(data)
  }
}, error => {
  if (error.response.status === 401) { // 检测未登录统一进行跳转登录页
    location.href = '/login'
  }
  return Promise.reject(error)
})

export default instance
