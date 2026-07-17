<template>
  <div>
    <OneTimeModal />
    <router-view></router-view>
  </div>
</template>

<script>
import OneTimeModal from './components/OneTimeModal.vue'

export default {
  components: {
    OneTimeModal
  },
  data() {
    return {}
  }
}
</script>
