//引入本地数据文件Json
import banner from './banner.json'
import floor from './floor.json'
import Mock from 'mockjs'

// 配置服务器
// 使用Mock.mock
Mock.mock('/mock/banner', 'get', { code: 200, data: banner })
Mock.mock('/mock/floor', 'get', { code: 200, data: floor })

// 使用是在main中使用，为了页面数据一加载就调用
// 真正获取数据是在home中