<template>
  <div class="userList">
    <el-table
      :data="userList"
      :size="size"
      v-loading="loading"
      height="100%">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        type="index"
        label="#"
        width="50">
      </el-table-column>
      <el-table-column
        prop="fname"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="mechanismName"
        label="机构">
      </el-table-column>
      <el-table-column
        prop="fgroupName"
        label="科室">
      </el-table-column>
      <el-table-column
        prop="fnumber"
        label="编码">
      </el-table-column>
      <el-table-column
        prop="fjob"
        label="职务">
      </el-table-column>
      <el-table-column
        prop="ftype"
        label="类型">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100px">
        <template slot-scope="{ row }">
          <el-link :underline="false" type="primary" @click="editUser(row)">编辑</el-link>
          <el-link :underline="false" type="danger" @click="delUser(row.fuserid)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import parseTime from '@/utils/parseTime'
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
  },
  filters: {
    setTime (time) {
      return time ? parseTime(time, '{y}-{m}-{d}') : time
    }
  },
  methods: {
    editUser (data) {
      this.$store.dispatch('SetUserTitle', '修改人员（' + data.fgroupid + '）')
      this.$store.dispatch('SetUserDialog', true)
      this.$store.dispatch('SetUserForm', data)
    },
    delUser (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.userList {
  height: 90%;
}
</style>>