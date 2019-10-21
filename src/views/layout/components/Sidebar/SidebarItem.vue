<template>
  <div>
    <template v-for="routes in $router.options.routes">
      <el-submenu v-if="routes.children && routes.children.length > 0" :key="routes.path" :index="routes.path" v-show="!routes.meta.hide">
        <template slot="title">
          <i class="iconfont" v-html="routes.meta.icon" style="color: #555"></i>
          <span slot="title">{{ routes.meta.title }}</span>
        </template>
        <el-menu-item v-for="menu in routes.children" :key="menu.path" :index="routes.path + '/' + menu.path">
          {{ menu.meta.title }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item :key="routes.path" v-else :index="routes.path" style="font-size: 14px;" v-show="!routes.meta.hide">
        <i class="iconfont" v-html="routes.meta.icon" style="color: #555"></i>
        <span slot="title">{{ routes.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  created () {
    console.log(this.$router.options.routes)
  }
}
</script>

<style>

</style>