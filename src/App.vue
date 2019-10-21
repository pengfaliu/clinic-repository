<template>
  <div id="app">
    <!--登入动画-->
    <transition name="rotate-sides">
      <router-view  class="app-router-view"></router-view>
    </transition>
    <!-- <transition name="rotate-fall">
      <router-view  class="app-router-view"></router-view>
    </transition> -->
  </div>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/iconfont.css');
.app .app-router-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  visibility: visible;
}
/* .el-scrollbar__wrap {
  overflow-x: hidden!important;
} */
#nprogress .bar {
  background: green !important;
}
</style>
