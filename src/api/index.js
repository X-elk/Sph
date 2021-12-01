// 引入ajax
import ajax from './ajax'
import mockAjax from './mockAjax'
// 封装成函数暴露
// export function reqtypeNav() {
//     return ajax.get("/api/product/getBaseCategoryList")
// }
// 简化书写(请求)
// 获取三级导航数据
export const reqtypeNavDate = () => ajax.get("/api/product/getBaseCategoryList")
// 获取轮播图数据
export const reqBannerListData = () => mockAjax.get('/banner')
// 获取楼层数据
export const reqFloorsDate = () => mockAjax.get('/floor')
//获取搜索页面的数据
export const reqSearchDate = (searchData) => ajax.post('/api/list', searchData)