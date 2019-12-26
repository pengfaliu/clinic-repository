<template>
  <div class="groupList">
    <el-table
      :data="groupLists"
      stripe
      :size="size"
      v-loading="loading"
      height="100%">
      <el-table-column
        type="selection"
        width="50px">
      </el-table-column>
      <el-table-column
        type="index"
        label="#"
        width="50px">
      </el-table-column>
      <el-table-column
        prop="fname"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="mechanismName"
        label="所属机构">
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
        label="创建日期">
        <template slot-scope="{ row }">
          {{ row.fcreateDate | setTime() }}
        </template>
      </el-table-column>
      <el-table-column
        label="修改日期">
        <template slot-scope="{ row }">
          {{ row.fmodifyDate | setTime() }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100px">
        <template slot-scope="{ row }">
          <el-link :underline="false" type="primary" @click="editGroup(row)">编辑</el-link>
          <el-link :underline="false" type="danger" @click="delGroup(row.fgroupid)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { instituDetail } from '@/api/stitution'
import { delGroup } from '@/api/group'
import parseTime from '@/utils/parseTime'
export default {
  name: 'GroupList',
  data() {
    return {
      size: "medium"
    }
  },
  props: {
    groupLists: Array,
    loading: Boolean
  },
  filters: {
    getMechanism: function (mechanismId) {
      instituDetail(mechanismId).then(res => {
        if (res && res.data.data.code === 200) {
          return res.data.data.data.fname
        }
      })
    },
    setTime (time) {
      return time ? parseTime(time, '{y}-{m}-{d}') : time
    }
  },
  methods: {
    editGroup (data) {
      this.$store.dispatch('SetGroupDialog', true)
      this.$store.dispatch('SetGroupForm', data)
      this.$store.dispatch('SetGroupTitle', '修改科室（' + data.fgroupid + '）')
    },
    delGroup (id) {
      this.$confirm('此操作将永久删除该科室, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delGroup(id).then(res => {
          if (res && res.data.data.code === 200) {
            this.$message.success("科室删除成功")
            this.$parent.getGroup()
          } else {
            this.$message.error("科室删除失败")
          }
        })
      }).catch(() => {
        this.$message.info("取消删除")
      });
    }
  }
}
</script>

<style scoped lang="scss">
.groupList {
  height: 90%;
}
</style>