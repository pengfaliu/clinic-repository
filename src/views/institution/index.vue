<template>
  <div class="institution">
    <institution-header></institution-header>
    <institution-list :institutionLists="institutionLists" :loading="loading"></institution-list>
    <add-institu></add-institu>
    <paging :pagination="pagination" @setCurrentPage="setCurrentPage" @setPageSize="setPageSize"></paging>
  </div>
</template>

<script>
import InstitutionHeader from './components/InstitutionHeader'
import InstitutionList from './components/InstitutionList'
import AddInstitu from './components/AddInstitu'
import paging from '@/components/paging'
import { fmelnstitutionList } from '@/api/stitution'
export default {
  name: 'institution',
  components: { InstitutionHeader, InstitutionList, paging, AddInstitu },
  data () {
    return {
      req: {
        "currentPage": 1,
        "pageSize": 10,
      },
      institutionLists: [],
      pagination: {},
      loading: false
    }
  },
  created () {
    this.getFmelnstitutionList(this.req)
  },
  methods: {
    // 获取机构列表
    getFmelnstitutionList (req) {
      this.loading = true
      fmelnstitutionList(req).then(res => {
        console.log(res)
        if (res && res.data.data.code === 200) {
          this.institutionLists = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        }
      })
    },
    getStitu () {
      this.getFmelnstitutionList(this.req)
    },
    // 设置当前显示页
    setCurrentPage (page) {
      console.log(page)
    },
    // 设置每页显示条数
    setPageSize (size) {
      console.log(size)
    }
  }
}
</script>

<style scoped lang="scss">
.institution {
  height: 100%;
  padding: 10px 0 10px 10px;
}
</style>