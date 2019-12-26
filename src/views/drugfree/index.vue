<template>
  <div class="disease">
    <tree-info :treeData="treeData" :treeItemData="treeItemData"></tree-info>
    <table-info :breadcrumbList="breadcrumbList" :tableData="tableData" :loading="loading" :pagination="pagination"></table-info>
  </div>
</template>

<script>
import TableInfo from './components/DurgfreeTable'
import TreeInfo from './components/DurgfreeTree'
import { medicineType, medicineList } from '@/api/medicine'
export default {
  name: 'drugfree',
  components: { TableInfo, TreeInfo },
  data () {
    return {
      loading: false,
      breadcrumbList: [],
      tableData: [],
      treeData: [],
      treeItemData: [],
      pagination: {},
      req: {
        currentPage: 1,
        pageSize: 10,
        DirectoryID: 1
      }
    }
  },
  created () {
    medicineType().then(res => {
      if (res && res.data.code === 200) {
        var data = res.data.data
        this.treeData = res.data.data
        this.setDirectoryID(data[0].childrens.length ? data[0].childrens[0].directoryID : data[0].directoryID)
        this.breadcrumbList = data[0].childrens.length ? [data[0].fname, data[0].childrens[0].fname] : [data[0].fname]
      } else {
        this.$message.error("加载药品分类失败")
      }
    })
  },
  methods: {
    setBreadcrumbList (list) {
      this.breadcrumbList = list
    },
    queryMedByid (req) {
      this.loading = true
      medicineList(req).then(res => {
        if (res && res.data.code === 200) {
          this.tableData = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        } else {
          this.$message.error("加载药品列表失败")
        }
      })
    },
    // 设置分类ID
    setDirectoryID (id) {
      if (id) {
        this.req.DirectoryID = id
      }
      this.queryMedByid(this.req)
    },
    // 设置当前显示页码
    setCurrentPage (currentPage) {
      console.log(currentPage)
      this.req.currentPage = currentPage
      this.queryMedByid(this.req)
    },
    // 设置每页显示条数
    setPageSize (pageSize) {
      this.req.pageSize = pageSize
      this.queryMedByid(this.req)
    }
  }
}
</script>

<style scoped lang="scss">
.disease {
  display: flex;
  width: 100%;
  height: 100%;
  // background-color: #f0f3f8;
}
</style>