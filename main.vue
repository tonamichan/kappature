<template>
  <div class="section">
    <div class="container block">
      <div class="columns block">
        <div class="column is-four-fifths has-background-danger">
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
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths task-list has-background-link">
          <template v-for="task in displayTasks" :key="task.id">
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
        <div class="column side-menu has-background-warning" @click="changeProgressView()">
          <h3 class="title is-3">進捗率</h3>
          <div style="transform:rotate(-90deg)">
            <svg
              height="100%"
              viewBox="0 0 20 20"
              width="100%"
              style="overflow: visible;"
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
                style="stroke-dasharray: 56.5487;"
                :style="{'stroke-dashoffset': 56.5487 - (progress * 0.565487)}"
              />
            </svg>
          </div>
          <p v-if="progressViewMode === 1" class="title is-1 progress-count">{{ progress }}%</p>
          <p v-else-if="progressViewMode === 2" class="title is-1 progress-count">{{ execList.length }}/{{ kappaRequireTasks.length }}</p>
        </div>
      </div>
    </div>
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
    progress: function () {
      per = this.execList.length / this.kappaRequireTasks.length;
      return isNaN(per) ? 0 : Math.round(100 * per);
    },
  },
  methods: {
    setTaskData: function() {
      fetch("./task-data/tasks.json")
      .then((response) => response.json())
      .then((json) => this.tasks = json.data);
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
</style>
