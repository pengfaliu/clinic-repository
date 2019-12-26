<!--
- 方剂管理
-->
<template>
  <div class="titemAdviceC">
    <advice-header></advice-header>
    <advice-list :adviceLists="adviceLists" :loading="loading"></advice-list>
    <add-advice></add-advice>
  </div>
</template>

<script>
import AdviceHeader from './Components/AdviceHeader'
import AdviceList from './Components/AdviceList'
import AddAdvice from './Components/AddAdvice'
import { queryTItemAdviceList } from '@/api/titemadvice'
export default {
  name: 'titemadviceControl',
  components: { AdviceHeader, AdviceList, AddAdvice },
  data () {
    return {
      req: {
        "currentPage": 1,
        "pageSize": 10
      },
      adviceLists: [],
      loading: false
    }
  },
  created () {
    this.queryAdviceList(this.req)
  },
  methods: {
    // 获取方剂列表
    queryAdviceList (req) {
      this.loading = true
      queryTItemAdviceList(req).then(res => {
        console.log(res)
        if (res && res.data.data.code === 200) {
          this.adviceLists = res.data.data.data.list
          this.loading = false
        }
      })
    },
    // 获取方剂列表
    getAdviceList () {
      this.queryAdviceList(this.req)
    }
  }
}
</script>

<style scoped lang="scss">
.titemAdviceC {
  height: 100%;
  padding: 10px 0 10px 10px;
}
</style>