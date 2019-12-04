<template>
  <div class="paging">
    <el-pagination
      v-if="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagination.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'paging',
  data () {
    return {
      currentPage: 4
    }
  },
  props: {
    pagination: Object
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("setPageSize", val)
    },
    handleCurrentChange(val) {
      this.$emit("setCurrentPage", val)
    }
  }
}
</script>

<style scoped lang="scss">
.paging {
  margin-top: 5px;
  text-align: center;
}
</style>