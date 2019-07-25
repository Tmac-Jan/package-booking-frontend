import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ParcelBossGroup from './components/ParcelBossGroup'
import Home from './components/Home'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)
const routes = [
  {
    path: "/",
    component: Home,
    name:"Home",
    children: [
      {
        path: "/ParcelBossGroup",
        component: ParcelBossGroup,
        name:"ParcelBossGroup"
      },
      {
        path: "/User",
        component: User,
        name:"User"

      }
    ]
  }
];
const router = new VueRouter({routes});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
