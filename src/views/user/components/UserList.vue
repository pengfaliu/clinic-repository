<template>
  <div class="userList">
    <el-table
      :data="userList"
      :size="size"
      v-loading="loading">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        type="index"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fcreateuserID"
        label="fcreateuserID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fname"
        label="fname"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fnumber"
        label="fnumber"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fuserid"
        label="fuserid"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fcreateDate"
        label="fcreateDate"
        min-width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      size: "medium"
    }
  },
  props: {
    userList: Array,
    loading: Boolean
  }
}
</script>

<style lang="scss" scoped>
.userList {

}
</style>>