// point.2 vue-router のルーティング
const router = new VueRouter({
    routes: [{
      path: '/',
      component: httpVueLoader('./page1.vue')
    }, {
      path: '/page2',
      component: httpVueLoader('./page2.vue')
    }]
  });
  
  // point.1 Vueインスタンスの作成
  const app = new Vue({
    el: "#app",
    components: {
      // 起点となる app.vue コンポーネントの指定
      'app-vue': httpVueLoader('./app.vue')
    },
    router // ← vue-router のマウントも忘れずに
  });
  