// 引入ajax
import ajax from './ajax'
// 封装成函数暴露
// export function reqtypeNav() {
//     return ajax.get("/api/product/getBaseCategoryList")
// }
// 简化书写(请求)
export const reqtypeNavDate = () => ajax.get("/api/product/getBaseCategoryList")