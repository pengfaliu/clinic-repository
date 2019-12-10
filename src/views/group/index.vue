<template>
  <div class="group">
    <group-header></group-header>
    <group-list :groupLists="groupLists" :loading="loading"></group-list>
    <add-group></add-group>
    <paging :pagination="pagination" @setCurrentPage="setCurrentPage" @setPageSize="setPageSize"></paging>
  </div>
</template>

<script>
import GroupHeader from './components/GroupHeader'
import GroupList from './components/GroupList'
import AddGroup from './components/AddGroup'
import paging from '@/components/paging'
import { groupList } from "@/api/group";
export default {
  name: 'group',
  components: { GroupHeader, GroupList, paging, AddGroup },
  data () {
    return {
      req: {
        "currentPage": 1,
        "pageSize": 10,
      },
      groupLists: [],
      pagination: {},
      loading: false
    }
  },
  created () {
    this.getGroupList(this.req)
  },
  methods: {
    // 获取所有科室列表
    getGroupList (req) {
      this.loading = true
      groupList(req).then(res => {
        console.log(res)
        if (res && res.data.code === 200) {
          this.groupLists = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        }
      })
    },
    // 获取科室列表
    getGroup () {
      this.getGroupList(this.req)
    },
    // 设置当前页
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
.group {
  height: 100%;
  padding: 10px 0 10px 10px;
}
</style>