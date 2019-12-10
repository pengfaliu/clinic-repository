<template>
  <div class="user">
    <user-header></user-header>
    <user-list :userList="userList" :loading="loading"></user-list>
    <add-user></add-user>
    <paging :pagination="pagination" @setCurrentPage="setCurrentPage" @setPageSize="setPageSize"></paging>
  </div>
</template>

<script>
import UserList from './components/UserList'
import UserHeader from './components/UserHeader'
import AddUser from './components/AddUser'
import paging from '@/components/paging'
import { userList } from '@/api/user'
export default {
  name: 'user',
  components: { UserList, UserHeader, AddUser, paging },
  data () {
    return {
      userList: [],
      loading: false,
      pagination: {},
      req: {
        "currentPage": 1,
        "pageSize": 10,
      }
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    // 获取人员列表
    getUserList () {
      this.loading = true
      userList().then(res => {
        console.log(res)
        if (res && res.data.code === 200) {
          this.userList = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        }
      })
    },
    // 获取人员列表
    getUser () {
      this.getUserList(this.req)
    },
    // 设置当前显示页
    setCurrentPage (page) {
      this.req.currentPage = page
      this.getUser()
    },
    // 设置每页显示条数
    setPageSize (size) {
      this.req.pageSize = size
      this.getUser()
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  padding: 10px;
  height: 100%;
}
</style>