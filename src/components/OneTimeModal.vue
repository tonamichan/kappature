<template>
  <div v-if="showModal" class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-title">KAPPATUREクローズについて</p>
        <button class="delete" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p>
          EscapeFromTarkov日本語公式アカウントより <a href="https://x.com/jp_tarkov/status/2077759293336519144?s=20" target="_blank">Kappa要求タスクの大幅な緩和がアナウンス</a> されました。
        </br>
        これを機に、KAPPATUREは役目を終えると判断し、クローズに向けて調整する事を検討しています。
        </br>
        </br>
        このツールがどれぐらい使われていたか知りたいので、 <a href="https://x.com/search?q=%23ty_kappature&src=typeahead_click&f=top" target="_blank">#ty_kappature</a> タグを付けてX(旧Twitter)に感想を投稿してもたえたら嬉しいです。
        </p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="closeModal">閉じる</button>
      </footer>
    </div>
  </div>
</template>

<script>
import App from '../App.vue';

export default {
  name: 'OneTimeModal',
  data() {
    return {
      showModal: false,
      modalClosedFlag: 'onetime_modal_closed'
    }
  },
  mounted() {
    // LocalStorageにフラグが無い場合、モーダルを表示
    if (!localStorage.getItem(this.modalClosedFlag)) {
      this.showModal = true;
    }
  },
  methods: {
    closeModal() {
      // LocalStorageにフラグを設置してモーダルを閉じる
      localStorage.setItem(this.modalClosedFlag, 'true');
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
</style>
