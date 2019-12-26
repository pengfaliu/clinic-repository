<!--
- 添加方剂
-->
<template>
  <div class="addAdvice">
    <el-dialog
      :title="adviceTitle"
      :visible.sync="adviceDialog"
      width="30%"
      :before-close="handleClose">
      <el-form :model="adviceForm" label-width="60px">
        <el-form-item label="名称">
          <el-input v-model="adviceForm.fname"></el-input>
        </el-form-item>
        <el-form-item label="疾病">
          <el-select
            v-model="adviceForm.fdiseaseID"
            placeholder="请输入关键词"
            filterable
            remote
            :remote-method="remoteMethod"
            v-loadmore="loadMore"
            :loading="loading"
            @change="selectChange"
            @visible-change="visibleChange">
            <el-option
              v-for="item in diseaseLists"
              :key="item.fdiseaseID"
              :label="item.fdiseaseName"
              :value="item.fdiseaseID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="编码">
          <el-input v-model="adviceForm.fnumber"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="adviceForm.fcontent"></el-input>
        </el-form-item>
        <el-form-item label="标识">
          <el-input v-model="adviceForm.fexp"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="saveAdvice(adviceForm)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { findAllDisease, findLikeDiseaseName } from '@/api/disease'
import { updateTItemAdvice } from '@/api/titemadvice'
export default {
  name: 'AddAdvice',
  data () {
    return {
      loading: false,
      diseaseLists: [],
      req: {
        "currentPage": 1,
        "pageSize": 10,
        "FDiseaseName": ''
      }
    }
  },
  computed: {
    ...mapGetters(['adviceDialog', 'adviceForm', 'adviceTitle'])
  },
  created () {
    this.queryAllDisease(this.req)
  },
  methods: {
    // 弹窗
    visibleChange (flag) {
      console.log(flag)
    },
    // 保存方剂
    saveAdvice (adviceForm) {
      updateTItemAdvice(adviceForm).then(res => {
        // console.log(res)
        if (res && res.data.data.code === 200) {
          if (adviceForm.fitemAdviceID) {
            this.$message.success("方剂修改成功")
          } else {
            this.$message.success("方剂添加成功")
          }
          this.$store.dispatch('SetAdviceDialog', false)
          this.$store.dispatch('SetAdviceForm', {})
          this.$parent.getAdviceList()
        }
      })
    },
    // 关闭弹窗
    handleClose(done) {
      this.$confirm('确认关闭？').then(_ => {
          // done();
          this.$store.dispatch('SetAdviceDialog', false)
        }).catch(_ => {});
    },
    // 关闭弹窗
    closeDialog () {
      this.$store.dispatch('SetAdviceDialog', false)
    },
    // 疾病搜索
    queryAllDisease (req) {
      findLikeDiseaseName(req).then(res => {
        if (res && res.data.data.code === 200) {
          this.diseaseLists = [...this.diseaseLists, ...res.data.data.data.list]
          this.loading = false
        }
      })
    },
    // select加载更多
    loadMore () {
      this.req.currentPage++
      this.queryAllDisease(this.req)
    },
    // select中值变化触发事件
    selectChange (val) {
      console.log(val)
    },
    // 远程搜索
    remoteMethod (query) {
      this.diseaseLists = []
      this.loading = true
      this.req.FDiseaseName = query
      this.queryAllDisease (this.req)
    }
  }
}
</script>

<style scoped lang="scss">

</style>