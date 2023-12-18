// point.2 vue-router のルーティング
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: httpVueLoader("./main.vue"),
    },
  ],
});

// モーダル表示はライブラリに頼っている
Vue.use(window["vue-js-modal"].default);
// point.1 Vueインスタンスの作成
const app = new Vue({
  el: "#app",
  components: {
    // 起点となる app.vue コンポーネントの指定
    "app-vue": httpVueLoader("./app.vue"),
  },
  router, // ← vue-router のマウントも忘れずに
});
