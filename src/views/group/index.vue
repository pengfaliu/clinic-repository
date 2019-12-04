<template>
  <div class="group">
    <group-header></group-header>
    <group-list :groupLists="groupLists"></group-list>
  </div>
</template>

<script>
import GroupHeader from './components/GroupHeader'
import GroupList from './components/GroupList'
import { groupList } from "@/api/group";
export default {
  name: 'group',
  components: { GroupHeader, GroupList },
  data () {
    return {
      req: {
        "currentPage": 1,
        "pageSize": 10,
      },
      groupLists: []
    }
  },
  created () {
    this.getGroupList(this.req)
  },
  methods: {
    // 获取所有科室列表
    getGroupList (req) {
      groupList(req).then(res => {
        console.log(res)
        if (res && res.data.code === 200) {
          this.groupLists = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.group {
  padding: 10px 0 10px 10px;
}
</style>