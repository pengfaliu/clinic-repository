<template>
  <div class="disease">
    <tree-info :treeData="treeData" :treeItemData="treeItemData"></tree-info>
    <table-info :breadcrumbList="breadcrumbList" :tableData="tableData" :tableLoading="tableLoading" :pagination="pagination"></table-info>
  </div>
</template>

<script>
import TableInfo from './components/DiseaseTable'
import TreeInfo from './components/DiseaseTree'
import { diseaseType, diseaseList } from '@/api/disease'
export default {
  name: 'disease',
  components: { TableInfo, TreeInfo },
  data () {
    return {
      tableLoading: false,
      breadcrumbList: ['疾病', '内科'],
      tableData: [],
      page: {},
      treeData: [],
      treeItemData: [],
      pagination: {},
      req: {
        currentPage: 1,
        pageSize: 10,
        FDiseaseTypeID: 1
      }
    }
  },
  created () {
    diseaseType().then(res => {
      if (res && res.data.code === 200) {
        this.treeData = res.data.data
        this.setFDiseaseTypeID(res.data.data[0].childrens[0].fdiseaseTypeID)
        this.breadcrumbList = [res.data.data[0].fname, res.data.data[0].childrens[0].fname]
      } else {
        this.$message.error("加载疾病分裂失败")
      }
    })
  },
  methods: {
    setBreadcrumbList (list) {
      this.breadcrumbList = list
    },
    queryDiseaseList (req) {
      this.tableLoading = true
      diseaseList(req).then(res => {
        console.log(res)
        if (res && res.data.code === 200) {
          this.tableData = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.tableLoading = false
        } else {
          this.$message.error("加载疾病列表失败")
        }
      })
    },
    // 设置当前请求疾病分类id
    setFDiseaseTypeID (id) {
      this.req.FDiseaseTypeID = id
      this.queryDiseaseList(this.req)
    },
    // 设置当前显示页码
    setCurrentPage (currentPage) {
      console.log(currentPage)
      this.req.currentPage = currentPage
      this.queryDiseaseList(this.req)
    },
    // 设置每页显示条数
    setPageSize (pageSize) {
      this.req.pageSize = pageSize
      this.queryDiseaseList(this.req)
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