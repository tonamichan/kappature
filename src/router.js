import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from './views/MainView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/kappature",
      component: MainView,
    },
    {
      path: "/",
      component: MainView,
    },
  ],
})

export default router
