<template>
  <div class="pearlangx">
    <pearlangx-entering></pearlangx-entering>
    <pearlangx-result></pearlangx-result>
  </div>
</template>

<script>
import PearlangxEntering from './components/PearlangxEntering'
import PearlangxResult from './components/PearlangxResult'
export default {
  name: 'pearlangx',
  components: { PearlangxEntering, PearlangxResult }
}
</script>

<style scoped lang="scss">
.pearlangx {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>