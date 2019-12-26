<template>
  <div class="medList">
    <el-table
      :data="medLists"
      stripe
      :header-cell-style="{background:'#f5f5f5'}"
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
        prop="fexp"
        label="fexp"
        min-width="50px">
      </el-table-column>
      <el-table-column
        prop="directoryID"
        label="directoryID"
        min-width="50px">
      </el-table-column>
      <el-table-column
        prop="fclassTypeID"
        label="fclassTypeID"
        min-width="50px">
      </el-table-column>
      <el-table-column
        prop="fmedSpecName"
        label="fmedSpecName"
        min-width="50px">
      </el-table-column>
      <el-table-column
        prop="fpy"
        label="fpy"
        min-width="50px">
      </el-table-column>
      <el-table-column
        prop="fspec"
        label="fspec"
        min-width="50px">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120px">
        <template slot-scope="{ row }">
          <el-link type="primary">编辑</el-link>
          <el-link type="danger" @click.native="delMed(row.fmedSpecID)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import parseTime from '@/utils/parseTime'
export default {
  name: 'MedList',
  data () {
    return {

    }
  },
  props: {
    medLists: Array,
    loading: Boolean
  },
  filters: {
    setTime (time) {
      return time ? parseTime(time, '{y}-{m}-{d}') : time
    }
  },
  methods: {
    // 删除药品信息
    delMed (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped lang="scss">
.medList {
  height: 90%;
  overflow-y: auto;
}
</style>