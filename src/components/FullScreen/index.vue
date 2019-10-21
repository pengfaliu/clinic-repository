<template>
  <div>
    <i class="iconfont" @click="changeFull" v-html="fullIcon" :style="'color:'+color"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'FullScreen',
  data () {
    return {
      fullIcon: '&#xe754;'
    }
  },
  props: {
    color: String
  },
  methods: {
    changeFull () {
      this.fullIcon = this.fullIcon === '&#xe755;' ? '&#xe754;' : '&#xe755;'
      screenfull.toggle()
    }
  }
}
</script>

<style scoped lang="scss">
i {
  cursor: default;
  color: #666;
}
</style>