<!--
- 主要页面结构
-->
<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app-main {
  height: calc(100% - 90px);
  width: 100%;
}
</style>