import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'


// 解决search重复点击 出现的报错
// 官方版解决
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


export default new Router({
    routes: [
        { name: 'home', path: '/home', component: Home },
        { name: 'login', path: '/login', component: Login },
        { name: 'register', path: '/register', component: Register },
        { name: 'search', path: '/search', component: Search },
        { path: '/', redirect: '/home' }

    ]
})