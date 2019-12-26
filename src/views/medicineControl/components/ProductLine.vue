<template>
  <div class="productLine">
    <div class="addProduct" v-show="addFlag">
      <el-form label-width="100px">
        <el-form-item label="生产厂家：">
          <el-input :size="size" placeholder="请输入生产厂家名称"></el-input>
        </el-form-item>
        <el-form-item label="药品说明：">
          <el-input type="textarea" :size="size" :rows="4" placeholder="请输入药品说明"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="warning" :size="size" @click="closeAdd">取消</el-button>
          <el-button type="success" :size="size">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-col :span="2" class="title">生产厂家：</el-col>
      <el-col :span="22" class="content">茶碱控释胶囊
        <div class="edit">
          <i class="el-icon-edit"></i>
          <i class="el-icon-delete"></i>
        </div>
      </el-col>
      <el-col :span="2" class="title">药品说明：</el-col>
      <el-col :span="22" class="content curMsg" :class="viewAllFlag ? 'contentMsg' : ''">通用名：茶碱控释胶囊曾用名：商品名：英文名：TheophyllineControlledReleaseCapsules汉语拼音：ChajianKongshiJiaonang本品主要成分为茶碱，化学名称为1，3-二甲基黄嘌呤。其结构式为：茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。茶碱可直接松驰支气管平滑肌，对处于收缩痉挛状态的支气管作用尤为明显，并可抑制肥大细胞和嗜碱性粒细胞释放组胺，具有抗炎作用。能加强膈肌收缩力，降低易疲劳性，从而改善慢性阻塞性肺病（COPD）患者膈肌收缩力。茶碱还有增强心肌收缩和轻微的利尿作用。
        <div class="viewAll">
          <span @click="viewAllClick"><i :class="viewAllIcon"></i> {{ viewAllMsg }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ProductLine',
  data () {
    return {
      size: 'mini',
      viewAllFlag: true,
      form: {},
      viewAllIcon: 'el-icon-arrow-down',
      viewAllMsg: '查看全部'
    }
  },
  props: {
    addFlag: Boolean
  },
  methods: {
    viewAllClick () {
      this.viewAllFlag = !this.viewAllFlag
      if (this.viewAllFlag) {
        this.viewAllIcon = 'el-icon-arrow-down'
        this.viewAllMsg = '查看全部'
      } else {
        this.viewAllIcon = 'el-icon-arrow-up'
        this.viewAllMsg = '收起'
      }
    },
    closeAdd () {
      this.$emit('setAddFlag')
    }
  }
}
</script>

<style scoped lang="scss">
.productLine {
  width: 100%;
  padding-top: 5px;
  .addProduct {
    border: 1px solid rgb(64, 158, 255);
    margin-right: 10px;
    padding: 10px;
  }
  .el-row {
    transition: all 0.2s;
    padding: 10px;
    margin-right: 10px;
    line-height: 30px;
    font-size: 14px;
    border: 1px solid transparent;
    text-align: justify;
    border-bottom: 1px solid #ccc;
    .title {
      color: #666;
    }
    .content {
      color: #333;
      position: relative;
      transition: all 0.2s;
    }
    .viewAll {
      z-index: 10;
      width: 100%;
      height: 40px;
      padding-top: 16px;
      font-size: 12px;
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      background-color: #fcfcfc;
      color: rgb(64, 158, 255);
      background:linear-gradient(rgba(252, 252, 252, 0.5),rgba(252, 252, 252, 1));
      span {
        cursor: pointer;
      }
    }
    .edit {
      float: right;
      opacity: 0;
      transition: all 0.2s;
      i {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-left: 10px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          color: rgb(64, 158, 255);
        }
      }
    }
    .contentMsg {
      height: 160px;
      overflow: hidden;
    }
    .curMsg {
      padding-bottom: 30px;
    }
    &:hover {
      border: 1px solid rgb(64, 158, 255);
      .edit {
        opacity: 1;
      }
    }
  }
}
</style>