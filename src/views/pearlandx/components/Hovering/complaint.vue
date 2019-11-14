<template>
  <div class="complaint">
    <div class="item item1">
      <span>主诉通用特征描述：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas1" :key="index">
          <li v-for="d in data" :key="d" :class="data1.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data1)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData1">清空选项</el-link>
    </div>
    <div class="item item2">
      <span>主诉：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas2" :key="d" :class="data2.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data2)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData2">清空选项</el-link>
    </div>
    <div class="item item3">
      <span>症状：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas3" :key="d" :class="data3.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data3)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData3">清空选项</el-link>
    </div>
    <div class="item item4">
      <span>时间单位：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas4" :key="d" @click="selectText(d, data4)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <el-link type='primary' :underline="false" @click="changeVisible">确认</el-link>
  </div>
</template>

<script>
export default {
  name: 'complaint',
  data () {
    return {
      datas1: [['反复', '突发', '持续', '间断', '阵发性', '转移性'], ['左', '右'], ['前', '后'], ['上', '中', '下']],
      datas2: ['胸痛', '发热', '咳嗽', ' 腹泻', '头痛', '腹痛', '胸闷', '咽喉痛', '心悸', '鼻塞', '呕吐', '头晕', '呼吸困难', '晕厥', '便血', '眩晕', '咯血', '意识障碍', '呕血', '高热', '尿急', '发绀', '皮肤瘙痒', '气促'],
      datas3: ['咳嗽', '发热', '头痛', '胸闷', '便血', '眩晕', '咯血', '意识障碍', '呕血'],
      datas4: ['1', '2', '3', '分钟', '周', '余', '4', '5', '6', '小时', '年', '次', '7', '8', '9', '天', '月', '岁', '.', '0', '~'],
      data1: [],
      data2: [],
      data3: [],
      data4: []
    }
  },
  created () {
    
  },
  methods: {
    changeVisible () {
      this.$emit('closeVisible', 'complaintVisible1')
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
        data4: this.data4
      }
      this.$emit("setData1", obj)
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
.complaint {
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
      margin-left: 2px;
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
      display: flex;
    }
  }
  .item2 {
    .content {
      width: 360px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 65px;
        }
      }
    }
  }
  .item3 {

  }
  .item4 {
    border-right: 0 none;
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
}
</style>