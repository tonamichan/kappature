// point.2 vue-router のルーティング
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/kappature",
      component: httpVueLoader("./main.vue"),
    },
  ],
});

const app = new Vue({
  el: "#app",
  components: {
    // 起点となる app.vue コンポーネントの指定
    "app-vue": httpVueLoader("./app.vue"),
  },
  router, // ← vue-router のマウントも忘れずに
});