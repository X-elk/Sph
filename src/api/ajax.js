// 引入axios
import axios from 'axios'
// 引入进度条
import 'nprogress/nprogress.css'
// 进度条样式
import nprogress from 'nprogress'
const ajax = axios.create({
    baseURL: 'http://39.98.123.211',
    timeout: 5000
})
// 请求拦截
ajax.interceptors.request.use(req => {
    // 进度条开始
    nprogress.start()
    // console.log('请求', req)
    return req
})
// 响应拦截
ajax.interceptors.response.use(res => {
    // 进度条结束
    nprogress.done()
    // console.log('响应', res)
    return res.data
}, err => {
    // 返回promise对象，不然就算返回的错误也是字符串，还是走正确的判断
    return Promise.reject(new Error(err.message))
})
export default ajax
