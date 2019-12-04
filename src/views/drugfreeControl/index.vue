<template>
  <div class="drugfreeControl">
    <search-term></search-term>
    <med-list :medLists="medLists" :loading="loading"></med-list>
    <paging :pagination="pagination" @setCurrentPage="setCurrentPage" @setPageSize="setPageSize"></paging>
  </div>
</template>

<script>
import SearchTerm from './components/SearchTerm'
import MedList from './components/MedList'
import { queryMedListByTypeAndName } from '@/api/medicine'
import paging from '@/components/paging'
export default {
  name: 'drugfreeControl',
  components: { SearchTerm, MedList, paging },
  data () {
    return {
      medLists: [],
      pagination: {},
      loading: false,
      req: {
        "currentPage": 1,
        "pageSize": 10,
        "DirectoryID": "",
        "FMedSpecName": ""
      }
    }
  },
  created () {
    this.getMedList(this.req)
  },
  methods: {
    // 设置类别
    setType (type) {
      this.req.currentPage = 1
      this.req.DirectoryID = type
      this.getMedList(this.req)
    },
    // 设置名称
    setName (name) {
      this.req.currentPage = 1
      this.req.FMedSpecName = name
      this.getMedList(this.req)
    },
    // 设置当前页
    setCurrentPage (page) {
      this.req.currentPage = page
      this.getMedList(this.req)
    },
    // 设置每页显示条数
    setPageSize (pageSize) {
      this.req.pageSize = pageSize
      this.getMedList(this.req)
    },
    // 获取药品列表
    getMedList (req) {
      this.loading = true
      queryMedListByTypeAndName(req).then(res => {
        console.log(res)
        if (res && res.data.data.code === 200) {
          this.medLists = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.drugfreeControl {
  height: 100%;
  padding: 10px 0 10px 10px;
}
</style>