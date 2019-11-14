<template>
  <div class="record">
    <div class="item item1">
      <span>患者发病时间：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas1" :key="d" @click="selectTextOne(d, data1)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData1">清空选项</el-link>
    </div>
    <div class="item item2">
      <span>诱因：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas2" :key="d" :class="data2.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data2)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData2">清空选项</el-link>
    </div>
    <div class="item item3">
      <span>发作特征：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas3" :key="index">
          <li v-for="d in data" :key="d" :class="data3.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data3)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData3">清空选项</el-link>
    </div>
    <div class="item item4">
      <span>发作因素：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas4" :key="index">
          <li v-for="d in data" :key="d" :class="data4.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data4)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <div class="item item5">
      <span>其他情况：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas5" :key="index">
          <li v-for="d in data" :key="d" :class="data5.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data5)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <div class="item item6">
      <span>添加其他症状：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas6" :key="index">
          <li v-for="d in data" :key="d" :class="data6.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data6)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <div class="item item7">
      <span>有无治疗：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas7" :key="d" @click="selectText(d, data7)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData2">清空选项</el-link>
    </div>
    <el-link type='primary' :underline="false" @click="changeVisible">确认</el-link>
  </div>
</template>

<script>
export default {
  name: 'record',
  data () {
    return {
      datas1: ['1', '2', '3', '分钟', '周', '余', '4', '5', '6', '小时', '年', '次', '7', '8', '9', '天', '月', '岁', '.', '0', '~'],
      datas2: ['无明显诱因下', '淋雨后', '受凉后', '吸入花粉后', '接触刺激性气体后', '活动劳累后', '不洁饮食后', '暴饮暴食后', '酗酒后', '久卧起床'],
      datas3: [['呈'], ['突发性发作', '一过性发作', '阵发性发作', '持续性发作', '反复性发作', '突发突止']],
      datas4: [['运动后', '饱食后', '受惊后', '劳累后', '饥饿后', '爬楼梯后', '用力排便后', '在紧张或压力下', '激动时'], ['易发', '加重'], ['休息后', '情绪稳定后'], ['缓解']],
      datas5: [['伴', '无'], ['心前区痛，', '发热，', '血压下降，', '出汗，', '呼吸困难，', '抽搐，'], ['胸痛，', '无力，', '头晕，']],
      datas6: [['伴', '无'], ['气急', '咳嗽', '心悸', '咳痰', '胸痛', '哮喘', '头晕', '乏力', '恶心', '腹胀']],
      datas7: ['未经治疗', '使用（）后好转', '使用（）后未见明显好转', '于当地医院诊治，未见明显好转', '于（）诊治（），未见明显好转', '于（）诊治，经（）后未见明显好转', '于（），经（）后好转，未痊愈'],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      data7: []
    }
  },
  created () {
    
  },
  methods: {
    changeVisible () {
      this.$emit('closeVisible', 'complaintVisible2')
    },
    selectTextOne (d, arr) {
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
        data6: this.data6,
        data7: this.data7,
      }
      this.$emit("setData2", obj)
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
    }
  }
}
</script>

<style scoped lang="scss">
.record {
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
  .item1 {
    .content {
      ul {
        display: flex;
        width: 260px;
        flex-wrap: wrap;
        li {
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border: 1px solid transparent;
          &:hover {
            background-color: #fff;
            color: #333;
            border: 1px solid rgb(64, 158, 255);
          }
        }
      }
    }
  }
  .item2 {
    .content {
      // width: 345px;
      ul {
        li {
          // width: 65px;
        }
      }
    }
  }
  .item3, .item4, .item5, .item6 {
    .content {
      display: flex;
    }
  }
  .item7 {
    border-right: 0 none;
  }
}
</style>