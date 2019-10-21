<template>
  <el-scrollbar>
    <logo></logo>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#f5f5f5"
      text-color="#555"
      :unique-opened="uniqueOpened"
      :active-text-color="skin.name"
      :collapse="sidebar.opened ? false : true"
      router>
      <template v-for="routes in $router.options.routes">
        <el-submenu v-if="routes.children && routes.children.length > 0" :key="routes.path" :index="routes.path" v-show="!routes.meta.hide">
          <template slot="title">
            <i class="iconfont" v-html="routes.meta.icon" :style="'font-size:' + fontsize + ';color:' + skin.name"></i>
            <span slot="title" :style="'font-size:' + fontsize">{{ routes.meta.title }}</span>
          </template>
          <el-menu-item v-for="menu in routes.children" :key="menu.path" :index="routes.path + '/' + menu.path" v-show="!menu.meta.hide">
            <template slot="title">
              <i class="iconfont" v-html="menu.meta.icon" :style="'font-size:' + fontsize + ';color:' + skin.name"></i>
              <span slot="title" :style="'font-size:' + fontsize">{{ menu.meta.title }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :key="routes.path" v-else :index="routes.path" v-show="!routes.meta.hide" :style="'font-size:' + fontsize">
          <i class="iconfont" v-html="routes.meta.icon" :style="'color:' + skin.name"></i>
          <span slot="title">{{ routes.meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- <sidebar-item></sidebar-item> -->
    </el-menu>
  </el-scrollbar>
</template>

<script>
import logo from './logo'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: { logo, SidebarItem },
  data () {
    return {
      uniqueOpened: true,
      screenWidth: document.body.clientWidth
    }
  },
  created () {
    // console.log(this.$router.options)
    // console.log(this.$route.path)
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          // console.log(that.screenWidth)
          if (that.screenWidth < 850) {
            that.$store.dispatch('CloseSideBar', 'false')
          }
          // that.init()
          that.timer = false
        }, 400)
      }
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'fontsize', 'skin'])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
</style>