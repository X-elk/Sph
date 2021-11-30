// Vuex管理home里的数据
// 引入请求模块
import { reqtypeNavDate, reqBannerListData, reqFloorsDate } from '@/api/index'


const state = {
    categoryList: [],
    bannerListData: [],
    floorData: []

}
const mutations = {
    ReqtypeNavDate(state, payload) {
        // console.log('aaa', payload.data)
        state.categoryList = payload
    },
    ReqBannerListData(state, payload) {
        state.bannerListData = payload
    },
    ReqFloorsDate(state, payload) {
        state.floorData = payload
    }

}
const actions = {
    async gettypeNavDate(context) {
        // console.log('aaaaaaaaaaaaaaaaaaaaaaa')
        // 得到请求的信息
        const result = await reqtypeNavDate()
        // console.log('resultsdad', result)
        // 进一步判断是否是真正的信息
        if (result.code === 200) {
            // 提交mutations执行操作数据
            context.commit('ReqtypeNavDate', result.data)
        } else {
            alert(result.message)
        }
    },
    async getBannerListData(context) {
        const result = await reqBannerListData()
        if (result.code === 200) {
            context.commit('ReqBannerListData', result.data)
        } else {
            alert(result.message)
        }
    },
    async getFloorsDate(context) {
        // console.log('floor')
        const result = await reqFloorsDate()
        // console.log('floor', result)
        if (result.code === 200) {
            context.commit('ReqFloorsDate', result.data)
        } else {
            alert(result.message)
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