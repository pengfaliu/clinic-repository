<template>
  <div class="groupList">
    <el-table
      :data="groupLists"
      stripe
      :size="size"
      height="100%">
      <el-table-column
        type="selection"
        width="50px">
      </el-table-column>
      <el-table-column
        prop="fgroupid"
        label="科室ID">
      </el-table-column>
      <el-table-column
        prop="mechanismID"
        label="机构">
      </el-table-column>
      <el-table-column
        prop="fname"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="forderNumber"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="fnumber"
        label="编码">
      </el-table-column>
      <el-table-column
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'GroupList',
  data() {
    return {
      size: "small"
    }
  },
  props: {
    groupLists: Array
  }
}
</script>

<style scoped lang="scss">
.groupList {

}
</style>