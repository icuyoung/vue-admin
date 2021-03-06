import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import '../src/icons/iconfont.css'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
