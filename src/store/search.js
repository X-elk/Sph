// Vuex管理home里的数据
// 引入请求模块
import { reqSearchDate } from '@/api/index'


const state = {
    searceListData: {}
}

const mutations = {
    GetSearchDate(state, payload) {
        // console.log('payload', payload)
        state.searceListData = payload
    }
}
const actions = {
    async getSearchDate(context, searchData) {
        // console.log('searchData', searchData)
        // 得到请求的信息
        const result = await reqSearchDate(searchData)
        // 进一步判断是否是真正的信息
        if (result.code === 200) {
            // 提交mutations执行操作数据
            context.commit('GetSearchDate', result.data)
            // console.log('resultsdad', result.data)
        } else {
            alert(result.message)
        }
    },
}
const getters = {
    goodsList(state) {
        return state.searceListData.goodsList
    },
    attrsList(state) {
        return state.searceListData.attrsList
    },
    trademarkList(state) {
        return state.searceListData.trademarkList
    }

}

export default {
    namespaced: true,//开启命名空间
    state,
    mutations,
    actions,
    getters,
}