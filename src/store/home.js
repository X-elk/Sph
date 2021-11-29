// Vuex管理home里的数据
// 引入请求模块
import { reqtypeNavDate } from '../api/index'

const state = {
    categoryList: []

}
const mutations = {
    ReqtypeNavDate(state, payload) {
        // console.log('aaa', payload.data)

        state.categoryList = payload.data
    }

}
const actions = {
    async reqtypeNavDate(context) {
        // console.log('aaaaaaaaaaaaaaaaaaaaaaa')
        // 得到请求的信息
        const result = await reqtypeNavDate()
        // console.log('resultsdad', result)
        // 进一步判断是否是真正的信息
        if (result.code === 200) {
            // 提交mutations执行操作数据
            context.commit('ReqtypeNavDate', result)


        }
    }

}
const getter = {}

export default {
    namespaced: true,//开启命名空间
    state,
    mutations,
    actions,
    getter,
}