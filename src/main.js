// import ProLayout from '@ant-design-vue/pro-layout'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
import App from './App.vue';
// import './core/lazy_use'
import './global.less';
import router from './router';
import store from './store/';
// 公共组件
// Vue.component('pro-layout', ProLayout)
import './utils/filter';
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

store.dispatch('GenerateRoutes', { roles: {permissionList: ['form']} })
