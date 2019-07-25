import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ParcelBossItem from './components/ParcelBossItem'
import ParcelAdd from './components/ParcelAdd'
import ParcelAppoint from './components/ParcelAppoint'
import Home from './components/Home'
import Main from './views/Main'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)
const routes = [
  {
    path: "/",
    component: Home,
    name: "Main",
    children: [
      {
        path: "",
        component: ParcelBossItem,
        name: "ParcelBossItem"
      },
      {
        path: "/ParcelBossItem",
        component: ParcelBossItem,
        name: "ParcelBossItem"
      },
      {
        path: "/ParcelAdd",
        component: ParcelAdd,
        name: "ParcelAdd"
      }, {
        path: "ParcelAppoint",
        component: ParcelAppoint,
        name: "ParcelAppoint"
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
