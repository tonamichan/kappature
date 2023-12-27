<template>
  <div class="section" :class="{'is-lk-section': !displayKappaTasks}">
    <div class="container block">
      <div class="level">
        <div class="level-left" :class="{'is-lk-title': !displayKappaTasks}">
          <div class="level-item is-size-3">
            <span v-if="displayKappaTasks">
              ᴋᴀᴘᴘᴀᴛᴜʀᴇ
            </span>
            <span v-else>
              ᴋᴀᴘᴘᴀᴛᴜʀᴇ ᴏɴ ʟᴋ
            </span>
          </div>
          <div class="level-item title-info">
            Escape from Tarkovのアシストツールです。
            <a
                      href="https://twitter.com/tonami_ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="has-text-link"
                    >
              作者
            </a>
          </div>
        </div>
      </div>
      <div class="columns block">
        <div class="column is-four-fifths has-background-danger">
          <div class="container flex">
            <div
              class="card trader-card"
              :class="{
                'card-active': viewPrapor,
                'has-background-grey': !viewPrapor,
              }"
              @click="viewPrapor = !viewPrapor"
            >
              <div class="card-content">
                <div class="content">Prapor</div>
              </div>
            </div>
            <div
              class="card trader-card"
              :class="{
                'card-active': viewTherapist,
                'has-background-grey': !viewTherapist,
              }"
              @click="viewTherapist = !viewTherapist"
            >
              <div class="card-content">
                <div class="content">Therapist</div>
              </div>
            </div>
            <div
              class="card trader-card"
              :class="{
                'card-active': viewFence,
                'has-background-grey': !viewFence,
              }"
              @click="viewFence = !viewFence"
            >
              <div class="card-content">
                <div class="content">Fence</div>
              </div>
            </div>
            <div
              class="card trader-card"
              :class="{
                'card-active': viewSkier,
                'has-background-grey': !viewSkier,
              }"
              @click="viewSkier = !viewSkier"
            >
              <div class="card-content">
                <div class="content">Skier</div>
              </div>
            </div>
          </div>
          <div class="container flex">
            <div
              class="card trader-card"
              :class="{
                'card-active': viewPeacekeeper,
                'has-background-grey': !viewPeacekeeper,
              }"
              @click="viewPeacekeeper = !viewPeacekeeper"
            >
              <div class="card-content">
                <div class="content">Peacekeeper</div>
              </div>
            </div>
            <div
              class="card trader-card"
              :class="{
                'card-active': viewMechanic,
                'has-background-grey': !viewMechanic,
              }"
              @click="viewMechanic = !viewMechanic"
            >
              <div class="card-content">
                <div class="content">Mechanic</div>
              </div>
            </div>
            <div
              class="card trader-card"
              :class="{
                'card-active': viewRagman,
                'has-background-grey': !viewRagman,
              }"
              @click="viewRagman = !viewRagman"
            >
              <div class="card-content">
                <div class="content">Ragman</div>
              </div>
            </div>
            <div
              class="card trader-card"
              :class="{
                'card-active': viewJaeger,
                'has-background-grey': !viewJaeger,
              }"
              @click="viewJaeger = !viewJaeger"
            >
              <div class="card-content">
                <div class="content">Jaeger</div>
              </div>
            </div>
            <div class="search-form is-one-third">
              <div>
                <input
                  v-model="searchText"
                  class="input"
                  type="text"
                  placeholder="タスク検索"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="column side-menu has-background-warning">
          <div class="menu-button">
            <button
              v-if="displayKappaTasks"
              class="level-item button is-dark"
              @click="toggleDisplayKappaTasks"
            >
              LightKeeperモードにする
            </button>
            <button
              v-else
              class="level-item button is-primary"
              @click="toggleDisplayKappaTasks"
            >
              Kappaモードにする
            </button>
          </div>
          <div class="menu-button">
            <button
              v-if="!displayDoneTasks"
              class="level-item button is-info is-light"
              @click="toggleDisplayDoneTask"
            >
              完了済を表示
            </button>
            <button
              v-else
              class="level-item button is-info"
              @click="toggleDisplayDoneTask"
            >
              完了済を隠す
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths task-list has-background-link">
          <transition-group name="fade" tag="div">
            <div v-for="task in filteredTasks" :key="task.id" class="box">
              <div class="card-name-line">
                {{ task.name }}
              </div>
              <div class="flex">
                <div class="card-info-line">
                  <div class="card-link">
                    <a
                      :href="generateWikiUrl(task)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="has-text-link"
                    >
                      日本語wiki
                      <span class="material-symbols-outlined google-icon">
                        open_in_new
                      </span>
                    </a>
                  </div>
                  <div class="card-link">
                    <a
                      :href="task.wikiLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="has-text-link"
                    >
                      英語wiki
                      <span class="material-symbols-outlined google-icon">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                <div class="done-button">
                  <button
                    v-if="execList.includes(task.id)"
                    class="button is-info is-light"
                    @click="toggleDoneState(task.id)"
                  >
                    UNDONE
                  </button>
                  <button
                    v-else
                    class="button is-primary"
                    @click="toggleDoneState(task.id)"
                  >
                    DONE!
                  </button>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
        <div
          class="column side-menu has-background-warning"
        >
          <div>
            <h3 class="title is-3">進捗率</h3>
            <div style="transform: rotate(-90deg)" @click="changeProgressView()">
              <svg
                height="100%"
                viewBox="0 0 20 20"
                width="100%"
                style="overflow: visible"
              >
                <circle
                  cx="50%"
                  cy="50%"
                  fill="none"
                  stroke-width="2"
                  r="9"
                  stroke="#E6ECF0"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  fill="none"
                  stroke-width="2"
                  r="9"
                  stroke="#1DA1F2"
                  style="stroke-dasharray: 56.5487"
                  :style="{ 'stroke-dashoffset': 56.5487 - progress * 0.565487 }"
                />
              </svg>
            </div>
            <p v-if="progressViewMode === 1" class="title is-1 progress-count" @click="changeProgressView()">
              {{ progress }}%
            </p>
            <p
              v-else-if="progressViewMode === 2"
              class="title is-1 progress-count"
              @click="changeProgressView()"
            >
              <template v-if="displayKappaTasks">
                {{ execListOfKappa.length }}/{{ kappaRequireTasks.length }}
              </template>
              <template v-else>
                {{ execListOfLK.length }}/{{ LKRequireTasks.length }}
              </template>
            </p>
            <button
              class="button is-danger reset-button"
              @click="openAllResetModal"
            >
              進捗をリセットする
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="{'is-active': requirementsCompleteModal}">
      <div class="modal-background" @click="closeRequirementsCompleteModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">前提・関連タスク</p>
          <button class="delete" aria-label="close"  @click="closeRequirementsCompleteModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="modal-card-body-info">
            以下のタスクがUNDONEで残っています。<br/>一緒にDONE!しますか？
          </div>
          <div v-for="task in RelatedUndoneTasks" :key="task.id">
            <p class="is-size-5">{{ task.name }}</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button"  @click="closeRequirementsCompleteModal">キャンセル</button>
          <button class="button is-success"  @click="modalExecute">DONE!する</button>
        </footer>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeRequirementsCompleteModal"></button>
    </div>
    <div class="modal" :class="{'is-active': allResetModal}">
      <div class="modal-background" @click="closeAllResetModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">全ての進捗をリセット</p>
          <button class="delete" aria-label="close"  @click="closeAllResetModal"></button>
        </header>
        <section class="modal-card-body">
          今までにDONE!したタスクを全てUNDONEします。<br/>
          よろしいですか？
        </section>
        <footer class="modal-card-foot">
          <button class="button"  @click="closeAllResetModal">キャンセル</button>
          <button class="button is-danger"  @click="resetExecTask">やってくれ</button>
        </footer>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeAllResetModal"></button>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      tasks: [],
      execList: [],
      displayDoneTasks: false,
      viewPrapor: true,
      viewTherapist: true,
      viewFence: true,
      viewSkier: true,
      viewPeacekeeper: true,
      viewMechanic: true,
      viewRagman: true,
      viewJaeger: true,
      viewLightkeeper: true,
      progressViewMode: 1,
      searchText: "",
      requirementsCompleteModal: false,
      allResetModal: false,
      displayKappaTasks: true,
      RelatedUndoneTasks: []
    };
  },
  mounted() {
    if (localStorage.execList) {
      this.execList = JSON.parse(localStorage.execList);
    }
    this.setTaskData()
  },
  computed: {
    kappaRequireTasks: function () {
      tasks = this.tasks.filter((task) => task.kappaRequired);
      return tasks;
    },
    LKRequireTasks: function () {
      tasks = this.tasks.filter((task) => task.lightkeeperRequired);
      return tasks;
    },
    filteredTasks: function () {
      if (this.searchText === "") {
        return this.displayTasks;
      }

      return this.displayTasks.filter((task) =>
        task.name.toLowerCase().includes(this.searchText)
      );
    },
    displayTasks: function () {
      // 計算量注意
      if (this.displayKappaTasks) {
        tasks = this.kappaRequireTasks.filter((task) => {
          return (
            (this.viewPrapor || task.trader.name !== "Prapor") &&
            (this.viewTherapist || task.trader.name !== "Therapist") &&
            (this.viewFence || task.trader.name !== "Fence") &&
            (this.viewSkier || task.trader.name !== "Skier") &&
            (this.viewPeacekeeper || task.trader.name !== "Peacekeeper") &&
            (this.viewMechanic || task.trader.name !== "Mechanic") &&
            (this.viewRagman || task.trader.name !== "Ragman") &&
            (this.viewJaeger || task.trader.name !== "Jaeger") &&
            (this.displayDoneTasks || !this.execList.includes(task.id))
          );
        });
      } else {
        tasks = this.LKRequireTasks.filter((task) => {
          return (
            (this.viewPrapor || task.trader.name !== "Prapor") &&
            (this.viewTherapist || task.trader.name !== "Therapist") &&
            (this.viewFence || task.trader.name !== "Fence") &&
            (this.viewSkier || task.trader.name !== "Skier") &&
            (this.viewPeacekeeper || task.trader.name !== "Peacekeeper") &&
            (this.viewMechanic || task.trader.name !== "Mechanic") &&
            (this.viewRagman || task.trader.name !== "Ragman") &&
            (this.viewJaeger || task.trader.name !== "Jaeger") &&
            (this.displayDoneTasks || !this.execList.includes(task.id))
          );
        })
      }
      return tasks;
    },
    execListOfKappa: function () {
      return this.execList.filter((taskId) => this.kappaRequireTasks.some((task) => task.id === taskId))
    },
    execListOfLK: function () {
      return this.execList.filter((taskId) => this.LKRequireTasks.some((task) => task.id === taskId))
},
    progress: function () {
      per = 0
      if (this.displayKappaTasks) {
        per = this.execList.length / this.kappaRequireTasks.length;
      } else {
        per = this.execList.length / this.LKRequireTasks.length;
      }
      return isNaN(per) ? 0 : Math.floor(100 * per);
    }
  },
  methods: {
    setTaskData: function() {
      fetch("./task-data/task.json")
      .then((response) => response.json())
      .then((json) => this.tasks = json.data);
    },
    toggleDoneState: function (id) {
      const index = this.execList.findIndex((el) => el == id);
      if (index === -1) {
        // 新規に完了した
        this.execList.push(id);
        const doneTask = this.kappaRequireTasks.find((el) => el.id == id);
        if (doneTask.taskRequirements.length > 0) {
          // 前提タスク自動完了モーダルを用意してあげる
          this.setRelatedUndoneTasks(doneTask)
          if (this.RelatedUndoneTasks.length > 0) {
            this.openRequirementsCompleteModal()
          }
        }
      } else {
        // 完了から戻した
        this.execList.splice(index, 1);
      }

      localStorage.execList = JSON.stringify(this.execList, undefined, 1);
    },
    setRelatedUndoneTasks: function(task) {
      // タスク自動完了モーダルのため、関連タスクを収集する
      let tasks = []
      this.digRequirementsTasks(task.id, tasks)
      // 初動のタスクはDONEボタンの処理でDONEしているので省く
      originalTaskIndex = tasks.findIndex((el) => el.id == task.id);
      tasks.splice(originalTaskIndex, 1)
      // 頑張っていい感じにソートする。限界はある。
      this.RelatedUndoneTasks = tasks.sort((a, b) => {
        if (a.minPlayerLevel !== b.minPlayerLevel) {
          return (a.minPlayerLevel > b.minPlayerLevel) ? 1 : -1
        }
        return (a.name > b.name) ? 1 : -1
      })
    },
    digRequirementsTasks: function(taskId, diggedTasks) {
      // 再帰的にタスクを掘るための関数
      const targetTask = this.tasks.find((el) => el.id == taskId);
      if (!diggedTasks.includes(targetTask) && !this.execList.includes(targetTask.id)) {
        // まだ掘ってなくて未完了のやつだけ集める
        diggedTasks.push(targetTask)
      }
      targetTask.taskRequirements.forEach(requireInfo => {
        this.digRequirementsTasks(requireInfo.task.id, diggedTasks)
      })
    },
    autoDoneRelatedUndoneTasks: function() {
      this.RelatedUndoneTasks.forEach((task) => {
        this.execList.push(task.id)
      })
      localStorage.execList = JSON.stringify(this.execList, undefined, 1);
    },
    modalExecute: function() {
      this.autoDoneRelatedUndoneTasks()
      this.closeRequirementsCompleteModal()
    },
    toggleDisplayDoneTask: function () {
      this.displayDoneTasks = !this.displayDoneTasks;
    },
    toggleDisplayKappaTasks: function () {
      this.displayKappaTasks = !this.displayKappaTasks;
    },
    openRequirementsCompleteModal: function () {
      this.requirementsCompleteModal = true
    },
    closeRequirementsCompleteModal: function () {
      this.requirementsCompleteModal = false
    },
    openAllResetModal: function () {
      this.allResetModal = true
    },
    closeAllResetModal: function () {
      this.allResetModal = false
    },
    resetExecTask: function () {
      this.execList = []
      localStorage.execList = JSON.stringify(this.execList, undefined, 1);
      this.closeAllResetModal()
    },
    generateWikiUrl: function (task) {
      // 末尾のハテナのはほぼWhat’s on the Flash Drive?用
      return (
        "https://wikiwiki.jp/eft/" +
        task.trader.name +
        "/" +
        task.name.replace(/[?]/g, "%3F")
      );
    },
    changeProgressView: function() {
      this.progressViewMode = this.progressViewMode + 1
      if (this.progressViewMode === 3) { this.progressViewMode = 1 }
    }
  },
};
</script>

<style scoped>
.done-button {
  margin-left: auto;
}
.side-menu {
  text-align: center;
  min-width: 250px;
}
.card-info-line {
  margin-right: auto;
  padding-top: 1rem;
  display: flex;
}
.card-name-line {
  font-weight: 600;
  display: flex;
}
.flex {
  display: flex;
}
.google-icon {
  vertical-align: -6px;
}
.card-content {
  width: 8rem;
}
.trader-card {
  margin: 2px;
  cursor: pointer;
}
.box {
  margin-bottom: 0.5rem;
}
.icon-on-card {
  margin-left: 2px;
}
.progress-count {
  position: relative;
  bottom: 160px;
}
.card-link {
  margin-right: 1rem;
}
.search-form {
  margin-left: auto;
  margin-top: auto;
  padding: 2px;
}
.modal-card-foot {
  justify-content: flex-end;
  padding: 10px;
}
.modal-background {
  background-color: rgba(10,10,10,.5)
}
.modal-card-body {
  padding: 10px;
}
.modal-card-body-info {
  padding-bottom: 8px;
  border-bottom: 1px;
}
.block {
  margin-bottom: 0.7rem;
}
.section {
  padding: 2px;
}
.title-info {
  margin-top: 13px;
}
.menu-button {
  margin-bottom: 8px;
}
.is-lk-section {
  background-color: dimgray;
}
.is-lk-title {
  color: white;
}
.reset-button {
  margin-top: -48px;
}
.fade-move, /* 移動する要素にトランジションを適用 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
