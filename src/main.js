import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import $t from './utils/translate.js'

Vue.use(Antd);
Vue.prototype.$t = $t

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



