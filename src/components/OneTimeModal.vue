<template>
  <div v-if="showModal" class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card one-time-modal-card">
      <header class="modal-card-head">
        <p class="modal-title">KAPPATUREクローズについて</p>
      </header>
      <section class="modal-card-body">
        <p>
        EscapeFromTarkov日本語公式アカウントより <a href="https://x.com/jp_tarkov/status/2077759293336519144?s=20" target="_blank">Kappa要求タスクの大幅な緩和</a> がアナウンスされました。
        </br>
        今後のアップデート次第ではありますが、恐らく本ツールは役目を終えると思います。
        </br>
        </br>
        最後に、このツールがどれぐらい使われていたか知りたいので
        </br>
        X(旧Twitter)に
        <a href="https://x.com/search?q=%23%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86KAPPATURE&src=typed_query&f=top" target="_blank">#ありがとうKAPPATURE</a> タグを付けて感想を投稿してもらえたら嬉しいです。
        </p>
        </br>
        今までありがとうございました！
        </br>トナミちゃん
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
      modalClosedFlag: '2026_07_17_closing_announce'
    }
  },
  mounted() {
    // LocalStorageにフラグが無い場合、モーダルを表示
    if (!localStorage.getItem(this.modalClosedFlag)) {
      this.showModal = true;
    }
    // rootからの強制表示イベントを受け取れるようにする
    if (this.$root && this.$root.$on) {
      this.$root.$on('open-one-time-modal', () => {
        this.showModal = true;
      });
    }
  },
  beforeDestroy() {
    if (this.$root && this.$root.$off) {
      this.$root.$off('open-one-time-modal');
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
/* 横幅を1.5倍に拡張（最大幅は表示幅に合わせる） */
.one-time-modal-card {
  /* Bulma のデフォルト .modal-card 幅が約640px のため、その1.5倍を目安に指定 */
  width: 800px;
  max-width: 95vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
