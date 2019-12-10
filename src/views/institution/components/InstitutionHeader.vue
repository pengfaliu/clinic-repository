<template>
  <div class="institutionHeader">
    <el-button type="danger" :size="size">删除</el-button>
    <el-button type="primary" :size="size" @click="add">新增</el-button>
    <div class="query">
      <el-input :size="size" placeholder="请输入搜索内容"></el-input>
    </div>
    <el-button type="success" :size="size">查询</el-button>
  </div>
</template>

<script>
export default {
  name: "InstitutionHeader",
  data () {
    return {
      size: 'mini'
    }
  },
  methods: {
    add () {
      this.$store.dispatch('SetInstituDialog', true)
      this.$store.dispatch('SetInstituForm', {})
      this.$store.dispatch('SetInstituTitle', '新增机构')
    }
  }
}
</script>

<style scoped lang="scss">
.institutionHeader {
  display: flex;
  align-items: center;
  .query {
    width: 250px;
    margin: 0 10px;
  }
}
</style>