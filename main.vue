<template>
  <div class="section">
    <div class="container block">
      <div class="columns block">
        <div class="column is-four-fifths has-background-danger">
          <div class="columns">
            <div class="column">
              <div class="container flex">
                <div
                  class="card"
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
                  class="card"
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
                  class="card"
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
                  class="card"
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
                  class="card"
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
                  class="card"
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
                  class="card"
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
                  class="card"
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
              </div>
            </div>
            <div class="search-form column is-one-third">
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
          <button class="level-item button is-info" @click="openModal">
            その他
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths task-list has-background-link">
          <template v-for="task in filteredTasks" :key="task.id">
            <div class="box">
              <div class="card-name-line">
                {{ task.name }}
                <!-- <div v-if="task.difficulty === 5" class="icon-on-card">
                  <span class="material-symbols-outlined">
                    skull
                  </span>
                </div> -->
              </div>

              <div class="flex">
                <div class="card-info-line">
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
          </template>
        </div>
        <div
          class="column side-menu has-background-warning"
          @click="changeProgressView()"
        >
          <h3 class="title is-3">進捗率</h3>
          <div style="transform: rotate(-90deg)">
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
          <p v-if="progressViewMode === 1" class="title is-1 progress-count">
            {{ progress }}%
          </p>
          <p
            v-else-if="progressViewMode === 2"
            class="title is-1 progress-count"
          >
            {{ execList.length }}/{{ kappaRequireTasks.length }}
          </p>
          <a
            target="_blank"
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-size="large"
            :data-text="tweetText"
            data-url="https://tonamichan.github.io/kappa_chan/"
            data-hashtags="トナちゃんツール"
            data-dnt="true"
            data-show-count="false"
            >進捗を共有する</a
          >
        </div>
      </div>
    </div>
    <modal name="modal">
      <div class="modal-inner">
        <div class="special-functions">
          <div>
            <button class="level-item button is-danger" @click="resetProgressAll">
              進捗をリセットする
            </button>
          </div>
          <div>
            <button class="button">なんか特殊機能</button>
          </div>
        </div>
        <div class="block"></div>
        <div class="author-display content">
          <h5>作った人</h5>
          <div class="flex">
            <div class="author-content">
              <span class="has-text-weight-bold">トナミちゃん</span>
            </div>
            <div class="author-content">
              <a
                href="https://twitter.com/tonami_ch"
                target="_blank"
                rel="noopener noreferrer"
                class="has-text-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </div>
            <div class="author-content">
              <a
                href="https://www.twitch.tv/tonami_ch"
                target="_blank"
                rel="noopener noreferrer"
                class="has-text-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16">
                  <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                  <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>なんかあったらTwitterで連絡ください。</div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      tasks: [],
      not_require_tasks: [
        "TestDrivePart2",
        "TestDrivePart3",
        "NoOffence",
        "BigCustomer",
        "NoOffence",
        "CapturingOutposts",
        "Escort",
        "OurOwnLand",
        "YouveGotMail",
        "GlorytoCPSUPart1",
        "GlorytoCPSUPart2",
        "BestJobintheWorld",
        "KingsoftheRooftops",
        "GreenCorridor",
        "GendarmerieMallCop",
        "GendarmerieTicketsPlease",
        "GendarmerieDistrictPatrol",
        "GendarmerieSchoolGuard",
        "SupplyPlans",
        "AnAppleaDayKeepstheDoctorAway",
        "ColleaguesPart3",
        "OutofCuriosity",
        "TrustRegain",
        "HippocraticOath",
        "PopulationCensus",
        "DangerousRoad",
        "UrbanMedicine",
        "PetsWontNeedIt",
        "AmbulancesAgain",
        "ChemicalPart4",
        "LoyaltyBuyout",
        "KindofSabotage",
        "NightSweep",
        "TopSecret",
        "HouseArrestPart1",
        "HouseArrestPart2",
        "Debtor",
        "BeyondtheRedMeatPart1",
        "BeyondtheRedMeatPart2",
        "Peacekeeper",
        "Mentor",
        "TheCleaner",
        "SpecialEquipment",
        "Counteraction",
        "Trophies",
        "RevisionStreetsofTarkov",
        "RoadClosed",
        "WorstJobintheWorld",
        "YourCarNeedsaService",
        "GunsmithPart23",
        "GunsmithPart24",
        "GunsmithPart25",
        "Calibration",
        "TheCourier",
        "BroadcastPart2",
        "Surveillance",
        "WatchingYou",
        "NetworkProviderPart1",
        "NetworkProviderPart2",
        "AssessmentPart1",
        "AssessmentPart2",
        "AssessmentPart3",
        "KeytotheTower",
        "KnockKnock",
        "KeytotheTower",
        "GettingAcquainted",
        "MakeAmendsBuyout",
        "MakeAmendsEquipment",
        "MakeAmendsSecurity",
        "MakeAmendsSweepUp",
        "MakeAmends",
        "TheDoor",
        "TextilePart1",
        "TextilePart2",
        "TheStylishOne",
        "LongLine",
        "Booze",
        "Audit",
        "BalletLover",
        "Audiophile",
        "OutofTime",
        "TheSurvivalistPathColdBlooded",
        "TheHuntsmanPathSadist",
        "Hunter",
        "SwiftOne",
        "TheHuntsmanPathRelentless",
        "CeaseFire",
        "Slaughterhouse",
        "BroadcastPart3",
        "BroadcastPart4",
        "TheHuntsmanPathAdministrator",
        "TheHuntsmanPathBigGame",
        "BroadcastPart5",
        "HarleyForever",
        "TheChoice",
      ],
      execList: [],
      displayDoneTasks: false,
      tradors: [
        "Dummy",
        "Prapor",
        "Therapist",
        "Fence",
        "Skier",
        "Peacekeeper",
        "Mechanic",
        "Ragman",
        "Jaeger",
        "Lightkeeper",
      ],
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
      displayModal: false,
    };
  },
  mounted() {
    if (localStorage.execList) {
      this.execList = JSON.parse(localStorage.execList);
    }
    this.setTaskData();
  },
  computed: {
    kappaRequireTasks: function () {
      tasks = this.tasks.filter((task) => this.isKappaRequire(task.name));
      return tasks;
    },
    displayTasks: function () {
      // 計算量注意
      tasks = this.kappaRequireTasks.filter((task) => {
        return (
          (this.viewPrapor || task.owner !== 1) &&
          (this.viewTherapist || task.owner !== 2) &&
          (this.viewFence || task.owner !== 3) &&
          (this.viewSkier || task.owner !== 4) &&
          (this.viewPeacekeeper || task.owner !== 5) &&
          (this.viewMechanic || task.owner !== 6) &&
          (this.viewRagman || task.owner !== 7) &&
          (this.viewJaeger || task.owner !== 8) &&
          (this.displayDoneTasks || !this.execList.includes(task.id))
        );
      });
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
    progress: function () {
      per = this.execList.length / this.kappaRequireTasks.length;
      return isNaN(per) ? 0 : Math.floor(100 * per);
    },
    tweetText: function () {
      return `うおお！Kappa必須タスクが${this.progress}%終わったよ！`;
    },
  },
  methods: {
    test: async function () {
      var limit = 50;
      var offset = 0;
      var result = [];
      // 無限ループ保険
      while (offset < 500) {
        const getted_task = await fetch("https://api.tarkov.dev/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `{
              tasks(limit:${limit}, offset: ${offset}) {
                id
                tarkovDataId
                name
                trader {
                  name
                }
                wikiLink
                minPlayerLevel
                taskRequirements {
                  task {
                    id
                    name
                  }
                  status
                }
                factionName
                kappaRequired
                lightkeeperRequired
                }
              }`,
          }),
        })
          .then((r) => r.json())
          .then((data) => data.data.tasks);
        console.log(getted_task);
        if (getted_task.length < limit) {
          break;
        }
        result = result.concat(getted_task);
        offset += limit;
      }
      console.log(result);
      const blob = new Blob([JSON.stringify(result, null, "  ")], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "exportData.json"; // 出力するファイルの名前
      link.click();
      link.remove();
    },
    setTaskData: function () {
      fetch("./task-data/tasks.json")
        .then((response) => response.json())
        .then((json) => (this.tasks = json.data));
    },
    toggleDoneState: function (id) {
      const index = this.execList.findIndex((el) => el == id);
      if (index === -1) {
        this.execList.push(id);
      } else {
        this.execList.splice(index, 1);
      }

      localStorage.execList = JSON.stringify(this.execList, undefined, 1);
    },
    toggleDisplayDoneTask: function () {
      this.displayDoneTasks = !this.displayDoneTasks;
    },
    openModal: function () {
      this.$modal.show('modal');
    },
    closeModal: function () {
      this.$modal.hide('modal');
    },
    getPersonName: function (id) {
      // トレーダーに振ったidと添字が一致するようにしてる
      return this.tradors[id];
    },
    isKappaRequire: function (name) {
      return !this.not_require_tasks.includes(
        name.replace(/[^0-9a-zA-Z]/g, "")
      );
    },
    generateWikiUrl: function (task) {
      // 末尾のハテナのはほぼWhat’s on the Flash Drive?用
      return (
        "https://wikiwiki.jp/eft/" +
        this.getPersonName(task.owner) +
        "/" +
        task.name.replace(/[?]/g, "%3F")
      );
    },
    resetProgressAll: function () {
      confirm("全ての進捗をリセットします。よろしいですか？")
      .then(result => {
        this.execList = [];
        localStorage.execList = JSON.stringify(this.execList, undefined, 1);
      });
    },
    changeProgressView: function () {
      this.progressViewMode = this.progressViewMode + 1;
      if (this.progressViewMode === 3) {
        this.progressViewMode = 1;
      }
    },
  },
};
</script>

<style scoped>
.done-button {
  margin-left: auto;
}

.side-menu {
  text-align: center;
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

.card {
  margin: 2px;
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

.modal-inner {
  padding: 1rem
}

.author-display {
  border-top: 1px solid;
  padding-top: 1.5rem;
}

.author-content {
  padding-right: 16px;
}
</style>
