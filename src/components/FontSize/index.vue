<template>
  <div>
    <el-dropdown @command="changeFontsize">
      <span class="el-dropdown-link">
        <i class="iconfont" :style="'color:'+color">&#xe675;</i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="font in fontData" :key="font.name" :command="font.value">{{ font.name }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'FontSize',
  data () {
    return {
      fontData: [
        {
          name: '小',
          value: '12px'
        }, {
          name: '中',
          value: '14px'
        }, {
          name: '大',
          value: '16px'
        }, {
          name: '默认',
          value: '14px'
        }
      ]
    }
  },
  props: {
    color: String
  },
  methods: {
    changeFontsize (size) {
      this.$store.dispatch('SetMenuFontSize', size)
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