import ParcelBossItem from './components/ParcelBossItem'
import ParcelAdd from './components/ParcelAdd'
import ParcelAppoint from './components/ParcelAppoint'
import Main from './views/Main'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: "/",
    component: Main,
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
const router = new Router({routes});

export default router
