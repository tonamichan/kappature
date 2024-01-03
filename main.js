const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/kappature",
      component: httpVueLoader("./main.vue"),
    },
    {
      // ローカル用の定義
      path: "/",
      component: httpVueLoader("./main.vue"),
    },
  ],
});

const app = new Vue({
  el: "#app",
  components: {
    "app-vue": httpVueLoader("./app.vue"),
  },
  router,
});