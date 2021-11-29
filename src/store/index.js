import Vue from 'vue'
import Vuex from 'vuex'
// 引入分离出去的选项
import home from './home'
// console.log('home', home)

Vue.use(Vuex)

// 以后文件可能或过多，继续将选项分离出去
// const state = {}
// const mutations = {}
// const actions = {}
// const getter = {}
// 
const store = new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getter,
    modules: { home } //进一步细分，模块化管理，也可以嵌套子模块再细分
})
export default store