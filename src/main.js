import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
