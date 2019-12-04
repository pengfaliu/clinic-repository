<template>
  <div class="addDisease">
    <div class="close" title="关闭" @click="addClose"><i class="el-icon-caret-right"></i></div>
    <div class="content">
      <div class="header">
        <h2>{{ title }} | {{ addEditFlag }}</h2>
        <el-link v-show="!tepFlag" :underline="false" @click="isAdd"><i class="el-icon-circle-plus-outline">新增说明</i></el-link>
      </div>
      <div class="detail">
        <el-scrollbar>
          <base-info ref="infochild" @changeInfo="changeInfo" v-show="tepFlag" :diseaseTypeLists="diseaseTypeLists"></base-info>
          <product-line v-show="!tepFlag" :addFlag="addFlag" @setAddFlag="setAddFlag"></product-line>
        </el-scrollbar>
      </div>
      <div class="footer">
        <el-button :size="size" type="primary" @click="reset(medForm)">{{ tepMessage }}</el-button>
        <el-button :size="size" type="success" @click="save">{{ finishFlag }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInfo from './BaseInfo'
import ProductLine from './ProductLine'
import { updateMed } from '@/api/medicine'
export default {
  name: 'AddDisease',
  components: { BaseInfo, ProductLine },
  data () {
    return {
      size: 'mini',
      tepFlag: true,
      tepMessage: '重置',
      finishFlag: '保存',
      title: '基础信息',
      addEditFlag: '新增',
      addFlag: false
    }
  },
  props: {
    addShow: Boolean,
    diseaseTypeLists: Array
  },
  methods: {
    setRow (row) {
      if (row === '新增') {
        this.addEditFlag = '新增'
      } else {
        this.addEditFlag = '修改（' + row.fmedSpecID + '）'
        this.$refs.infochild.setRow(row)
      }
    },
    isAdd () {
      this.addFlag = true
    },
    setAddFlag () {
      this.addFlag = false
    },
    addClose () {
      this.$parent.closeAdd()
      this.$refs.infochild.resetForm()
    },
    changeInfo () {
      this.title = "生产厂家"
      this.tepFlag = false
      this.finishFlag = "完成"
    },
    reset (formName) {
      this.$refs.infochild.resetForm()
    },
    save () {
      if (this.finishFlag === "保存") {
        this.$refs.infochild.submitForm()
      } else {
        this.title = "基础信息"
        this.tepFlag = true
        this.finishFlag = "保存"
        this.addFlag = false
        this.$parent.closeAdd()
        this.$refs.infochild.resetForm()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.addDisease {
  position: relative;
  .close {
    height: 100px;
    line-height: 100px;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    background-color: rgb(64, 158, 255);
    position: absolute;
    right: 0;
    top: 45%;
    i {
      color: #fff;
      padding: 0 8px;
      font-size: 26px;
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