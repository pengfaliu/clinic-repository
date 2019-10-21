<template>
  <div class="navBar" :style="'background:'+skin.name">
    <div class="sideFlag" :class="sidebar.opened ? '' : 'sideClick'" @click="changeSideStatus"><i class="el-icon-s-fold" :style="'color:'+skin.icon"></i></div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="arr in breadcrumbArr" :key="arr"><span style="color: #fff">{{ arr }}</span></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="userMenu">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <full-screen :color="skin.icon"></full-screen>
      </el-tooltip>
      <el-tooltip effect="dark" content="主题" placement="bottom">
        <Skin :color="skin.icon"></Skin>
      </el-tooltip>
      <el-tooltip effect="dark" content="字体大小" placement="bottom">
        <font-size :color="skin.icon"></font-size>
      </el-tooltip>
      <div class="avatar">
        <el-dropdown>
          <span class="el-dropdown-link">
            <div class="avatarInfo">
              <div class="userName" :style="'color:'+skin.icon">张三四</div>
              <el-avatar size="medium" :src="picSrc"></el-avatar>
            </div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>完善信息</el-dropdown-item>
            <el-dropdown-item>我的关注</el-dropdown-item>
            <el-dropdown-item>我的收藏</el-dropdown-item>
            <el-dropdown-item>我的反馈</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FullScreen from '@/components/FullScreen'
import Skin from '@/components/Skin'
import FontSize from '@/components/FontSize'
import avatarImage from '@/assets/images/pic1.png'
export default {
  name: 'Navbar',
  components: { FullScreen, Skin, FontSize },
  data () {
    return {
      sideStatus: 0,
      picSrc: avatarImage,
      breadcrumbArr: []
    }
  },
  watch: {
    '$route': {
      handler () {
        this.getCurTouter()
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'skin'])
  },
  methods: {
    // 获取当前路由标题
    getCurTouter () {
      const paths = this.$route.path.split('/')
      const routes = this.$router.options.routes
      const path1 = routes.find(val => val.name === paths[1])
      this.breadcrumbArr = [path1.meta.title]
      if (path1.children) {
        const path2 = path1.children.find(val => val.name === paths[2])
        this.breadcrumbArr = [path1.meta.title, path2.meta.title]
      }
    },
    changeSideStatus () {
      this.$store.dispatch('ToggleSideBar')
    },
    loginOut () {
      this.$router.push({path: '/login'})
      this.$store.dispatch('RemoveToken')
    }
  }
}
</script>

<style scoped lang="scss">
.navBar {
  height: 60px;
  border-bottom: 1px solid #ccc;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .sideFlag {
    font-size: 26px;
    color: #333;
    transition: all 0.3s;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .sideClick {
    transition: all 0.3s;
    transform: rotate(-180deg)
  }
  .userMenu {
    flex-shrink: 0;
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    &>div {
      margin-right: 10px;
    }
    .avatarInfo {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      cursor: default;
      .userName {
        margin-right: 10px;
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>