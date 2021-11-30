import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/mockServe'//引入就会开启服务

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
