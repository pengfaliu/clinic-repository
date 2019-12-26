<template>
  <div class="diseaseList">
    <el-table
      ref="table"
      :data="lists"
      :header-cell-style="{background:'#f5f5f5'}"
      stripe
      @row-click="rowClick"
      v-loading="loading"
      height="100%">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        type="index"
        label="#"
        width="50px">
      </el-table-column>
      <el-table-column
        prop="forder"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="fnumber"
        label="药品编码">
      </el-table-column>
      <el-table-column
        prop="fmedSpecName"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="falias"
        label="别名">
      </el-table-column>
      <el-table-column
        prop="fspec"
        label="规格">
      </el-table-column>
      <el-table-column
        prop="funit"
        label="单位">
      </el-table-column>
      <el-table-column
        prop="fmedDosage"
        label="剂型">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="{ row }">
          <el-link type="primary" :underline="false" @click.native="editInfo(row)">编辑</el-link>
          <el-link type="danger" :underline="false" @click.native="delDisease(row.fdiseaseID)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import parseTime from '@/utils/parseTime'
export default {
  name: 'MedicineList',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    lists: Array,
    message: '',
    loading: Boolean
  },
  filters: {
    setTime (time) {
      return time ? parseTime(time, '{y}-{m}-{d}') : time
    }
  },
  methods: {
    // 删除
    delDisease (id) {
      console.log(id)
    },
    editInfo (row) {
      this.$parent.addInfo(row)
    },
    rowClick (row) {
      this.$refs.table.toggleRowSelection(row);
    }
  }
}
</script>

<style scoped lang="scss">
.diseaseList {
  height: 90%;
  .el-table {
    border: 1px solid #EBEEF5;
    border-bottom: 0 none;
  }
}
</style>