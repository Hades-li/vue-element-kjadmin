import Fly from 'flyio/dist/npm/fly'

const fly = new Fly

fly.config.headers['content-type'] = 'application/json'

fly.interceptors.request.use(req => {
  // req.withCredentials = true
  return req
}, error => {
  return Promise.reject(error)
})

fly.interceptors.response.use(res => {
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

export default fly
