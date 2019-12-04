<template>
  <div class="user">
    <user-header></user-header>
    <user-list :userList="userList" :loading="loading"></user-list>
  </div>
</template>

<script>
import UserList from './components/UserList'
import UserHeader from './components/UserHeader'
import { userList } from '@/api/user'
export default {
  name: 'user',
  components: { UserList, UserHeader },
  data () {
    return {
      userList: [],
      loading: false
    }
  },
  created () {
    this.loading = true
    userList().then(res => {
      console.log(res)
      if (res && res.data.code === 200) {
        this.userList = res.data.data.data.list
        console.log(this.userList)
        this.loading = false
      }
    })
  }
}
</script>

<style scoped lang="scss">
.user {
  padding: 10px;
}
</style>