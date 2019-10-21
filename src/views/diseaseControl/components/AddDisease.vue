<template>
  <div class="addDisease">
    <div class="close" title="关闭" @click="addClose"><i class="el-icon-caret-right"></i></div>
    <div class="content">
      <div class="header">
        <h2>{{ title }}</h2>
        <el-link v-show="!tepFlag" :underline="false" @click="isAdd"><i class="el-icon-circle-plus-outline">新增说明</i></el-link>
      </div>
      <div class="detail">
        <el-scrollbar>
          <base-info v-show="tepFlag"></base-info>
          <product-line v-show="!tepFlag" :addFlag="addFlag" @setAddFlag="setAddFlag"></product-line>
        </el-scrollbar>
      </div>
      <div class="footer">
        <el-button :size="size" type="primary" @click="tepClick">{{ tepMessage }}</el-button>
        <el-button :size="size" type="success" @click="reset">{{ finishFlag }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInfo from './BaseInfo'
import ProductLine from './ProductLine'
export default {
  name: 'AddDisease',
  components: {BaseInfo, ProductLine},
  data () {
    return {
      size: 'mini',
      tepFlag: true,
      tepMessage: '下一步',
      finishFlag: '保存',
      title: '基础信息',
      addFlag: false
    }
  },
  props: {
    addShow: Boolean
  },
  methods: {
    isAdd () {
      this.addFlag = true
    },
    setAddFlag () {
      this.addFlag = false
    },
    addClose () {
      this.$parent.closeAdd()
    },
    tepClick () {
      this.tepFlag = !this.tepFlag
      this.tepMessage = this.tepMessage === '下一步' ? '上一步' : '下一步'
      this.finishFlag = this.finishFlag === '保存' ? '完成' : '保存'
      this.title = this.title === '基础信息' ? '生产厂家说明' : '基础信息'
    },
    reset () {

    }
  }
}
</script>

<style scoped lang="scss">
.addDisease {
  position: relative;
  .close {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    background-color: rgb(64, 158, 255);
    position: absolute;
    right: 0;
    top: 45%;
    i {
      color: #fff;
      padding: 0;
      margin: 0;
    }
  }
  .content {
    border-radius: 6px;
    overflow: hidden;
    background-color: #fcfcfc;
    max-width: 1200px;
    box-shadow: 0 4px 8px -4px #333;
    margin: 0 auto;
    position: relative;
    height: 100%;
    .header {
      background-color: #eee;
      border-bottom: 1px solid #e1e1e1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      h2 {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .detail {
      padding-left: 10px;
      height: calc(100% - 100px);
      overflow: hidden;
      .el-scrollbar {
        height: 100%;
      }
    }
    .footer {
      border-top: 1px solid #e1e1e1;
      padding: 10px 20px 16px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: right;
      background-color: #eee;
    }
  }
}
</style>
<style>
.detail .el-scrollbar__wrap {
  overflow-x: hidden!important;
}
</style>