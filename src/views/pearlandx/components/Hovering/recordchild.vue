<template>
  <div class="recordchild">
    <div class="item item1">
      <span>意识情况：</span>
      <div class="content">
        <ul v-for="(data, index) in datas1" :key="index">
          <li v-for="d in data" :key="d" :class="data1.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data1)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData1">清空选项</el-link>
    </div>
    <div class="item item2">
      <span>精神状态：</span>
      <div class="content">
        <ul v-for="(data, index) in datas2" :key="index">
          <li v-for="d in data" :key="d" :class="data2.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data2)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData2">清空选项</el-link>
    </div>
    <div class="item item3">
      <span>食欲：</span>
      <div class="content">
        <ul v-for="(data, index) in datas3" :key="index">
          <li v-for="d in data" :key="d" :class="data3.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data3)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData3">清空选项</el-link>
    </div>
    <div class="item item4">
      <span>睡眠：</span>
      <div class="content">
        <ul v-for="(data, index) in datas4" :key="index">
          <li v-for="d in data" :key="d" :class="data4.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data4)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <div class="item item5">
      <span>二便情况：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas5" :key="index">
          <li v-for="d in data" :key="d" :class="data5.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data5)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData5">清空选项</el-link>
    </div>
    <div class="item item6">
      <span>体重情况：</span>
      <div class="content">
        <ul v-for="(data, index) in datas6" :key="index">
          <li v-for="d in data" :key="d" :class="data6.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data6)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData6">清空选项</el-link>
    </div>
    <el-link type='primary' :underline="false" @click.native="changeVisible">确认</el-link>
  </div>
</template>

<script>
export default {
  name: 'recordchild',
  data () {
    return {
      datas1: [['神清', '意识模糊', '嗜睡状态', '昏睡状态', '意识丧失']],
      datas2: [['精神可', '精神一般', '精神欠佳', '精神差', '精神亢奋']],
      datas3: [['胃纳可', '胃纳差', '食欲欠佳', '食欲较好', '食欲亢进', '拒食', '厌食']],
      datas4: [['睡眠一般', '睡眠可', '睡眠质量欠佳', '失眠', '白天嗜睡']],
      datas5: [['二便无殊', '大便无殊', '大便不规律', '大便稀', '大便硬', '大便干结'], ['小便无殊', '小便黄', '小便困难', '遗尿', '小便带血', '小便偏少']],
      datas6: [['肥胖', '偏瘦', '营养不良', '恶病质', '体重下降', '体重下降（）kg/（）月', '体重增加', '体重增加（）kg/（）月', '体重无明显变化']],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: []
    }
  },
  created () {
    
  },
  methods: {
    changeVisible () {
      console.log("123")
      this.$emit('closeVisible', 'complaintVisible21')
    },
    selectTextOne (d, arr) {
      arr.splice(0, 1)
      arr.push(d)
      this.setListData()
    },
    selectText (d, arr) {
      if (arr.find(da => da === d)) {
        arr.forEach((el, index) => {
          if (el === d) {
            arr.splice(index, 1)
          }
        });
      } else {
        arr.push(d)
      }
      this.setListData()
    },
    setListData () {
      const obj = {
        data1: this.data1,
        data2: this.data2,
        data3: this.data3,
        data4: this.data4,
        data5: this.data5,
        data6: this.data6
      }
      this.$emit("setData21", obj)
    },
    clearData1 () {
      this.data1 = []
      this.setListData()
    },
    clearData2 () {
      this.data2 = []
      this.setListData()
    },
    clearData3 () {
      this.data3 = []
      this.setListData()
    },
    clearData4 () {
      this.data4 = []
      this.setListData()
    },
    clearData5 () {
      this.data5 = []
      this.setListData()
    },
    clearData6 () {
      this.data6 = []
      this.setListData()
    }
  }
}
</script>

<style scoped lang="scss">
.recordchild {
  display: flex;
  padding-bottom: 30px;
  position: relative;
  &>.el-link {
    position: absolute;
    right: 10px;
    bottom: 0;
    font-size: 16px;
  }
  .item {
    border-right: 1px dashed #ccc;
    margin-right: 10px;
    &>span {
      color: #000;
    }
    .explain {
      font-size: 12px;
      color: #bbb;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .el-link {
      margin-left: 10px;
      font-size: 12px;
    }
    &:last-child {
      border-right: 0 none;
    }
    ul {
      padding: 10px;
    }
    li {
      margin-bottom: 2px;
      color: #333;
      font-size: 12px;
      padding: 2px 6px;
      cursor: pointer;
      transition: all 0.2s;
      border-radius: 2px;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid rgb(64, 158, 255);
      }
    }
    li.choise {
      background-color: rgb(64, 158, 255);
      color: #fff;
    }
  }
  .item1, .item2, .item3, .item4, .item5, .item6 {
    .content {
      display: flex;
    }
  }
  .item7 {
    border-right: 0 none;
  }
}
</style>