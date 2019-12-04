<template>
  <div class="checkup">
    <div class="item item1">
      <span>体温：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas2" :key="d" @click="selectText(d, data1)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData1">清空选项</el-link>
    </div>
    <div class="item item2">
      <span>脉搏：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas1" :key="d" @click="selectText(d, data2)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData2">清空选项</el-link>
    </div>
    <div class="item item3">
      <span>呼吸：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas1" :key="d" @click="selectText(d, data3)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData3">清空选项</el-link>
    </div>
    <div class="item item4">
      <span>部位（收缩压）：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <div class="otherLi">
          <span style="font-size: 12px;" @click="selectTextOt('左上肢', data4)">左上肢</span>
          <span style="font-size: 12px;" @click="selectTextOt('右上肢', data4)">右上肢</span>
        </div>
        <ul>
          <li v-for="d in datas1" :key="d" @click="selectText(d, data4)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <div class="item item5">
      <span>舒张压：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul>
          <li v-for="d in datas1" :key="d" @click="selectText(d, data5)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData5">清空选项</el-link>
    </div>
    <el-link type='primary' :underline="false" @click="changeVisible">确认</el-link>
  </div>
</template>

<script>
export default {
  name: 'checkup',
  data () {
    return {
      datas1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '~'],
      datas2: ['35.', '36.', '37.', '38.', '39.', '40.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '~'],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: []
    }
  },
  created () {
    
  },
  methods: {
    changeVisible () {
      this.$emit('closeVisible', 'complaintVisible4')
    },
    selectTextOt (d, arr) {
      if (arr.length > 0) {
        arr.push('mmHg ' + d)
      } else {
        arr.push(d)
      }
      this.setListData()
    },
    selectText (d, arr) {
      arr.push(d)
      this.setListData()
    },
    setListData () {
      const obj = {
        data1: this.data1,
        data2: this.data2,
        data3: this.data3,
        data4: this.data4,
        data5: this.data5
      }
      this.$emit("setData4", obj)
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
    }
  }
}
</script>

<style scoped lang="scss">
.checkup {
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
  .item1, .item2, .item3, .item4 {
    border-right: 1px dashed #ccc;
  }
  .item5 {
    border-right: 0 none;
  }
  .item1, .item2, .item3, .item4, .item5 {
    .content {
      .otherLi {
        padding: 0 10px;
        margin-top: 6px;
        span {
          border: 1px solid transparent;
          cursor: pointer;
          padding: 2px 6px;
          transition: all 0.2s;
          border-radius: 4px;
          &:hover {
            background-color: #fff;
            color: #333;
            border: 1px solid rgb(64, 158, 255);
          }
        }
      }
      ul {
        display: flex;
        width: 150px;
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