<template>
  <div class="xEntering" v-loading="loading">
    <div class="title">西医辅助诊疗</div>
    <el-form label-width="100px" :size="size" :model="enteringForm">
      <el-form-item label="诊断：">
        <el-input v-model="enteringForm.zd"></el-input>
      </el-form-item>
      <el-form-item label="主诉：">
        <el-input v-model="enteringForm.zs"></el-input>
      </el-form-item>
      <el-form-item label="现病史：">
        <el-input v-model="enteringForm.xbs"></el-input>
      </el-form-item>
      <el-form-item label="既往史：">
        <el-input v-model="enteringForm.jws"></el-input>
      </el-form-item>
      <el-form-item label="体格检查：">
        <el-input v-model="enteringForm.tgjc"></el-input>
      </el-form-item>
    </el-form>
    <el-button :size="size" type='primary' @click="searchData()"><i class="iconfont">&#xe639;</i> 智能助诊</el-button>
  </div>
</template>

<script>
export default {
  name: 'PearlangEntering',
  data () {
    return {
      size: "",
      enteringForm: {}
    }
  },
  props: {
    loading: Boolean
  },
  methods: {
    searchData () {
      this.$parent.changeShowStatus(false, this.enteringForm)
    }
  }
}
</script>

<style scoped lang="scss">
.xEntering {
  padding-top: 40px;
  width: 600px;
  margin: 0 auto;
  text-align: center;
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .el-button {
    width: 200px;
    margin-top: 20px;
  }
}
</style>