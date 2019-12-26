<template>
  <div class="adviceList">
    <el-table
      :data="adviceLists"
      :size="size"
      v-loading="loading"
      height="100%">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        type="index"
        label="#"
        width="50">
      </el-table-column>
      <el-table-column
        prop="fname"
        label="方剂名称">
      </el-table-column>
      <el-table-column
        prop="fnumber"
        label="方剂编码">
      </el-table-column>
      <el-table-column
        prop="fdiseaseNAME"
        label="疾病名称">
      </el-table-column>
      <el-table-column
        prop="fdiseaseNumber"
        label="疾病编码">
      </el-table-column>
      <el-table-column
        prop="fcontent"
        label="方剂内容">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100px">
        <template slot-scope="{ row }">
          <el-link :underline="false" type="primary" @click="editAdvice(row)">编辑</el-link>
          <el-link :underline="false" type="danger" @click="delAdvice(row.fitemAdviceID)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AdviceList',
  data () {
    return {
      size: 'medium'
    }
  },
  props: {
    adviceLists: Array,
    loading: Boolean
  },
  methods: {
    // 编辑方剂
    editAdvice (data) {
      this.$store.dispatch('SetAdviceTitle', '修改方剂')
      this.$store.dispatch('SetAdviceDialog', true)
      this.$store.dispatch('SetAdviceForm', data)
    },
    // 删除方剂
    delAdvice (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped lang="scss">
.adviceList {
  height: 90%;
}
</style>