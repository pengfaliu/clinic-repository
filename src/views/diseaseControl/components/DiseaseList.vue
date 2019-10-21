<template>
  <div class="diseaseList">
    <el-table
      :data="lists"
      :header-cell-style="{background:'#f5f5f5'}"
      stripe>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <!-- <el-table-column
        type="index"
        width="50">
      </el-table-column> -->
      <el-table-column
        label="药品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="名称2"
        prop="data1">
      </el-table-column>
      <el-table-column
        label="名称3"
        prop="data2">
      </el-table-column>
      <el-table-column
        label="名称4"
        prop="data3">
      </el-table-column>
      <el-table-column
        label="名称5"
        prop="data4">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template>          
          <el-link type="primary" :underline="false" @click="editInfo">编辑</el-link>
          <el-link type="danger" :underline="false">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DiseaseList',
  data () {
    return {

    }
  },
  props: {
    lists: Array,
    message: ''
  },
  methods: {
    editInfo () {
      this.$parent.addInfo()
    }
  }
}
</script>

<style scoped lang="scss">
.diseaseList {
  height: 100%;
  .el-table {
    margin-top: 10px;
    border: 1px solid #EBEEF5;
    border-bottom: 0 none;
  }
}
</style>