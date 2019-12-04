<template>
  <div class="enterning">
    <doctor-info></doctor-info>
    <el-row>
      <el-col :span="2">主诉：</el-col>
      <el-col :span="22">
        <el-popover
          placement="bottom-start"
          width="100%"
          v-model="complaintVisible1"
          trigger="click">
          <complaint @closeVisible="closeCurVisible" @setData1="setData1"></complaint>
          <div class="edit" contenteditable="true" slot="reference">
            <span :class="data11 === '' ? 'noText' : ''">{{ data11 || '[通用特征]' }}</span>
            <span :class="data12 === '' ? 'noText' : ''">{{ data12 || '[主诉]' }}</span>
            <span :class="data13 === '' ? 'noText' : ''">{{ data13 || '[症状]' }}</span>
            <span :class="data14 === '' ? 'noText' : ''">{{ data14 || '[时间]' }}</span>
          </div>
        </el-popover>
      </el-col>
      <el-col :span="2">现病史：</el-col>
      <el-col :span="22">
        <span v-show="!d2Show" class="noText" @click="changeD2Show">点击添加现病史</span>
        <el-popover
          placement="bottom-start"
          width="100%"
          v-model="complaintVisible2"
          trigger="click">
          <record @closeVisible="closeCurVisible" @setData2="setData2"></record>
          <div class="edit" contenteditable="true" slot="reference" style="display: inline-block;">
            <span v-show="d2Show">患者</span>
            <span v-show="d2Show" :class="data14 === '' && data21 === '' ? 'noText' : ''">{{ data21 || data14 || '时间' }}</span>
            <span v-show="d2Show">
              前
              <span v-show="d2Show" :class="data22 === '' ? 'noText' : ''">
                {{ data22 || '诱因' }}
              </span>
              出现
              {{ data12 }}
            </span>
            <span>{{ data22 }}</span>
            <span>{{ data23 }}</span>
            <span>{{ data24 }}</span>
            <span>{{ data25 }}</span>
            <span>{{ data26 }}</span>
            <span>{{ data27 }}</span>
            <span v-show="d2Show">
              遂来就诊。
              自病以来
            </span>
          </div>
        </el-popover>
        <el-popover
          placement="bottom-start"
          width="100%"
          v-model="complaintVisible21"
          v-show="d2Show"
          trigger="click">
          <recordchild @closeVisible="closeCurVisible" @setData21="setData21"></recordchild>
          <span contenteditable="true" slot="reference">
              <span :class="data28 === '' ? 'noText' : ''">{{ data28 || '[意识情况]' }}，</span>
              <span :class="data29 === '' ? 'noText' : ''">{{ data29 || '[精神状态]' }}，</span>
              <span :class="data210 === '' ? 'noText' : ''">{{ data210 || '[食欲]' }}，</span>
              <span :class="data211 === '' ? 'noText' : ''">{{ data211 || '[睡眠]' }}，</span>
              <span :class="data212 === '' ? 'noText' : ''">{{ data212 || '[二便情况]' }}，</span>
              <span :class="data213 === '' ? 'noText' : ''">{{ data213 || '[体重情况]' }}。</span>
          </span>
        </el-popover>
      </el-col>
      <el-col :span="2">其他史：</el-col>
      <el-col :span="22">
        <el-popover
          placement="bottom-start"
          width="100%"
          v-model="complaintVisible3"
          trigger="click">
          <others @closeVisible="closeCurVisible" @setData3="setData3"></others>
          <div class="edit" contenteditable="true" slot="reference" @click="changeD3Show">
            <span :class="data31 === '' ? 'noText' : ''"> {{ data31 || '[既往史]' }} </span>
            <span :class="data32 === '' ? 'noText' : ''"> {{ data32 || '[过敏史]' }} </span>
            <span :class="data33 === '' ? 'noText' : ''"> {{ data33 || '[个人史]' }} </span>
            <span :class="data34 === '' ? 'noText' : ''"> {{ data34 || '[婚姻史]' }} </span>
            <span :class="data35 === '' ? 'noText' : ''"> {{ data35 || '[家族史]' }} </span>
            <span :class="data36 === '' ? 'noText' : ''"> {{ data36 || '[家族相关传染病史]' }} </span>
          </div>
        </el-popover>
      </el-col>
      <el-col :span="2">查体：</el-col>
      <el-col :span="22">
        <el-popover
          placement="bottom-start"
          width="100%"
          v-model="complaintVisible4"
          trigger="click">
          <checkup @closeVisible="closeCurVisible" @setData4="setData4"></checkup>
          <div class="edit" contenteditable="true" slot="reference" @click="changeD4Show">
            <span :class="data41 === '' ? 'noText' : ''">体温 {{ data41 || '[填写]' }} ℃， </span>
            <span :class="data42 === '' ? 'noText' : ''">脉搏 {{ data42 || '[填写]' }} 次/分， </span>
            <span :class="data43 === '' ? 'noText' : ''">呼吸 {{ data43 || '[填写]' }} 次/分， </span>
            <span :class="data44 === '' ? 'noText' : ''">部位（收缩压） {{ data44 || '[填写]' }} mmHg，</span>
            <span :class="data45 === '' ? 'noText' : ''">舒张压 {{ data45 || '[填写]' }} mmHg</span>
          </div>
        </el-popover>
      </el-col>
      <el-col :span="2">诊断：</el-col>
      <el-col :span="22" style="border-bottom: 0 none;padding: 0;">
        <div class="diagnoseP" style="min-height: 20px;">
          <diagnose></diagnose>
        </div>
      </el-col>
      <el-col :span="2">化验：</el-col>
      <el-col :span="22" style="border-bottom: 0 none;padding: 0;">
        <div class="assayp" style="min-height: 20px;">
          <assay></assay>
        </div>
      </el-col>
      <el-col :span="2">辅检：</el-col>
      <el-col :span="22" style="border-bottom: 0 none;padding: 0;">
        <div class="assistP" style="min-height: 20px;">
          <assist></assist>
        </div>
      </el-col>
      <el-col :span="2">医嘱：</el-col>
      <el-col :span="22">
        <div class="assistP" style="min-height: 40px; outline: none; padding: 6px 10px;" contenteditable="true">
          
        </div>
      </el-col>
    </el-row>
    <div class="edit-save">
      <el-button :size="size">清除</el-button>
      <el-button :size="size" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
import DoctorInfo from './DoctorInfo/index'
import complaint from './Hovering/complaint'
import record from './Hovering/record'
import recordchild from './Hovering/recordchild'
import others from './Hovering/others'
import checkup from './Hovering/checkup'
import diagnose from './diagnose/index'
import assay from './assay/index'
import assist from './assist/index'
export default {
  name: 'PearlangxEntering',
  components: { DoctorInfo, complaint, record, recordchild, others, checkup, diagnose, assay, assist },
  data () {
    return {
      size: 'small',
      d2Show: false,
      complaintVisible1: false,
      complaintVisible2: false,
      complaintVisible21: false,
      complaintVisible3: false,
      complaintVisible4: false,
      data11: '',
      data12: '',
      data13: '',
      data14: '',
      data21: '',
      data22: '',
      data23: '',
      data24: '',
      data25: '',
      data26: '',
      data27: '',
      data28: '',
      data29: '',
      data210: '',
      data211: '',
      data212: '',
      data213: '',
      data31: '',
      data32: '',
      data33: '',
      data34: '',
      data35: '',
      data36: '',
      data41: '',
      data42: '',
      data43: '',
      data44: '',
      data45: '',
    }
  },
  methods: {
    // 改变现病史的解释内容的显示
    changeD2Show () {
      if (this.data12) {
        this.d2Show = true
      } else {
        this.$message.warning('请先选择主诉')
        this.complaintVisible2 = true
        this.complaintVisible21 = true
      }
    },
    changeD3Show () {
      if (this.data12) {
        this.d2Show = true
      } else {
        this.$message.warning('请先选择主诉')
        this.complaintVisible3 = true
      }
    },
    changeD4Show () {
      if (this.data12) {
        this.d2Show = true
      } else {
        this.$message.warning('请先选择主诉')
        this.complaintVisible4 = true
      }
    },
    closeCurVisible (el) {
      this[el] = false
    },
    setData1 (obj) {
      this.data11 = ''
      this.data12 = ''
      this.data13 = ''
      this.data14 = ''
      obj.data1.forEach(element => {
        this.data11 += element
      });
      obj.data2.forEach(element => {
        this.data12 += element + '、'
      });
      obj.data3.forEach(element => {
        this.data13 += element + '、'
      });
      obj.data4.forEach(element => {
        this.data14 += element
      });
    },
    setData2 (obj) {
      this.data21 = ''
      this.data22 = ''
      this.data23 = ''
      this.data24 = ''
      this.data25 = ''
      this.data26 = ''
      this.data27 = ''
      obj.data1.forEach(element => {
        this.data21 += element
      });
      obj.data2.forEach(element => {
        this.data22 += element + ","
      });
      obj.data3.forEach(element => {
        this.data23 += element + ","
      });
      obj.data4.forEach(element => {
        this.data24 += element + ","
      });
      obj.data5.forEach(element => {
        this.data25 += element + ","
      });
      obj.data6.forEach(element => {
        this.data26 += element + ","
      });
      obj.data7.forEach(element => {
        this.data27 += element
      });
    },
    setData21 (obj) {
      this.data28 = ''
      this.data29 = ''
      this.data210 = ''
      this.data211 = ''
      this.data212 = ''
      this.data213 = ''
      obj.data1.forEach(element => {
        this.data28 += element
      });
      obj.data2.forEach(element => {
        this.data29 += element
      });
      obj.data3.forEach(element => {
        this.data210 += element
      });
      obj.data4.forEach(element => {
        this.data211 += element
      });
      obj.data5.forEach(element => {
        this.data212 += element
      });
      obj.data6.forEach(element => {
        this.data213 += element
      });
    },
    setData3 (obj) {
      this.data31 = ''
      this.data32 = ''
      this.data33 = ''
      this.data34 = ''
      this.data35 = ''
      this.data36 = ''
      obj.data1.forEach(element => {
        this.data31 += element + "、"
      });
      obj.data2.forEach(element => {
        this.data32 += element + "、"
      });
      obj.data3.forEach(element => {
        this.data33 += element + "、"
      });
      obj.data4.forEach(element => {
        this.data34 += element + "、"
      });
      obj.data5.forEach(element => {
        this.data35 += element + "、"
      });
      obj.data6.forEach(element => {
        this.data36 += element + "、"
      });
    },
    setData4 (obj) {
      this.data41 = ''
      this.data42 = ''
      this.data43 = ''
      this.data44 = ''
      this.data45 = ''
      obj.data1.forEach(element => {
        this.data41 += element
      });
      obj.data2.forEach(element => {
        this.data42 += element
      });
      obj.data3.forEach(element => {
        this.data43 += element
      });
      obj.data4.forEach(element => {
        this.data44 += element
      });
      obj.data5.forEach(element => {
        this.data45 += element
      });
    }
  }
}
</script>

<style scoped lang="scss">
.enterning {
  border: 1px solid #e5e5e5;
  height: 100%;
  width: 76%;
  padding: 10px;
  position: relative;
  .el-row {
    width: 100%;
    height: calc(100% - 54px);
    overflow: auto;
    .el-col {
      margin-bottom: 10px;
      line-height: 20px;
      padding: 4px;
      font-size: 14px;
      .noText {
        color: #bbb;
        cursor: default;
      }
    }
    .el-col:nth-child(2n+1) {
      font-weight: bold;
      text-align: right;
    }
    .el-col:nth-child(2n) {
      position: relative;
      // border-bottom: 1px dashed #c5c5c5;
      background-color: #fafafa;
      .edit {
        outline: none;
      }
      .diagnoseP {
        width: 100%;
      }
      &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: #ccc;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
  }
  .edit-save {
    width: 100%;
    background-color: #fff;
    z-index: 999;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px;
    text-align: right;
  }
}
</style>