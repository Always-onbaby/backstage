import Vue from 'vue'
import App from './App.vue'
import mixins from './mixins'
import router from './router'
import store from './store'
Vue.mixin(mixins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
