import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)
new Vue({
  VueRouter,
  store,
  render: h => h(App)
}).$mount('#app')
