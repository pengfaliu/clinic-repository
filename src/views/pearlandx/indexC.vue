<template>
  <div class="pearlangx">
    <pearlangx-entering v-if="show" :loading="loading"></pearlangx-entering>
    <pearlangx-result v-else :enterData="enterData"></pearlangx-result>
  </div>
</template>

<script>
import PearlangxEntering from './components/PearlangxEntering'
import PearlangxResult from './components/PearlangxResult'
export default {
  name: 'pearlandx',
  components: { PearlangxEntering, PearlangxResult },
  data () {
    return {
      show: true,
      enterData: {},
      loading: false
    }
  },
  methods: {
    changeShowStatus (flag, enterData) {
      this.loading = true
      const _this = this
      setTimeout(function () {
        _this.show = flag
        _this.enterData = enterData
        _this.loading = false
      }, 1000)
    },
    changeStatus (flag) {
      this.show = flag
    }
  }
}
</script>

<style scoped lang="scss">
.pearlangx {
  height: 100%;
  padding: 10px;
  position: relative;
  overflow: auto;
}
</style>