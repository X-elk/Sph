import axios from 'axios'
const mockAjax = axios.create({
    baseURL: '/mock',
    timeout: 1000
})
// 设置请求拦截器
mockAjax.interceptors.request.use(config => {
    return config
})
// 设置响应拦截器
mockAjax.interceptors.response.use(result => {
    return result.data
}, err => {
    return Promise.reject(new Error(err.message))
})
export default mockAjax