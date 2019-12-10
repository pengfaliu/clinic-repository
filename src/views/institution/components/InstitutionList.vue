<template>
  <div class="institutionList">
    <el-table
      :data="institutionLists"
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
        width="50px">
      </el-table-column>
      <el-table-column
        prop="fnumber"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="forderNumber"
        label="编码">
      </el-table-column>
      <el-table-column
        prop="fname"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="fcreateDate"
        label="创建日期">
      </el-table-column>
      <el-table-column
        prop="fmodifyDate"
        label="修改日期">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100px">
        <template slot-scope="{ row }">
          <el-link :underline="false" type="primary" @click="editInstitu(row)">编辑</el-link>
          <el-link :underline="false" type="danger" @click="delInstitu(row.fmeInstitutionID)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { delInstitu } from '@/api/stitution'
export default {
  name: 'InstitutionList',
  data () {
    return {
      size: 'medium'
    }
  },
  props: {
    institutionLists: Array,
    loading: Boolean
  },
  methods: {
    editInstitu (data) {
      this.$store.dispatch('SetInstituDialog', true)
      this.$store.dispatch('SetInstituForm', data)
      this.$store.dispatch('SetInstituTitle', '修改机构（' + data.fmeInstitutionID + '）')
    },
    delInstitu (id) {
      this.$confirm('此操作将永久删除该机构, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delInstitu(id).then(res => {
          if (res && res.data.data.code === 200) {
            this.$message.success("机构删除成功")
            this.$parent.getStitu()
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
.institutionList {
  height: 90%;
}
</style>