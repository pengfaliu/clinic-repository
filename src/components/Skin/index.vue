<template>
  <div>
    <el-dropdown @command="changeSkin">
      <span class="el-dropdown-link">
        <i class="iconfont" :style="'color:'+color">&#xe6f8;</i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="skin in skins" :key="skin.label" :command="skin">{{ skin.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Skin',
  data () {
    return {
      skins: [
        { name: '#409eff', label: '天空蓝', icon: '#fff' },
        { name: '#009A61', label: '典雅绿', icon: '#fff'  },
        { name: '#F44336', label: '樱桃红', icon: '#fff'  },
        { name: '#7B7DE5', label: '贵族紫', icon: '#fff'  },
        { name: '#409eff', label: '默认', icon: '#fff'  }
      ]
    }
  },
  props: {
    color: String
  },
  methods: {
    changeSkin (skin) {
      this.$store.dispatch('SetSkin', skin)
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