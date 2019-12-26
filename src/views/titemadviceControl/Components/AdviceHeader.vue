<template>
  <div class="adviceHeader">
    <el-form :inline="true" :size="size">
      <el-form-item>
        <el-button type="danger">删除选中内容</el-button>
        <el-button type="success" @click="addAdvice">添加方剂</el-button>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="根据方剂名称搜索" style="margin-top: 1px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AdviceHeader',
  data () {
    return {
      size: "mini"
    }
  },
  methods: {
    // 添加方剂
    addAdvice () {
      this.$store.dispatch('SetAdviceTitle', '新增方剂')
      this.$store.dispatch('SetAdviceDialog', true)
      this.$store.dispatch('SetAdviceForm', {})
    }
  }
}
</script>

<style>

</style>