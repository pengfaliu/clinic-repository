<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" :class="sidebar.opened ? '' : 'sidebarCurStatus'"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain, TagsView } from './components'
export default {
  name: 'layout',
  components: { Navbar, Sidebar, AppMain, TagsView },
  computed: {
    ...mapGetters(['sidebar'])
  }
}
</script>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  .sidebar-container {
    width: 210px;
    overflow: hidden;
    height: 100%;
    background-color: #f5f5f5;
    transition: all 0.3s;
    flex-shrink: 0;
  }
  .sidebarCurStatus {
    width: 63px;
  }
  .main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
<style>
.sidebar-container .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>