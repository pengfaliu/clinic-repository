<template>
  <div class="others">
    <div class="item item1">
      <span>既往史：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas1" :key="index">
          <li v-for="d in data" :key="d" :class="data1.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data1)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData1">清空选项</el-link>
    </div>
    <div class="item item2">
      <span>过敏史：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas2" :key="index">
          <li v-for="d in data" :key="d" :class="data2.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data2)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData2">清空选项</el-link>
    </div>
    <div class="item item3">
      <span>个人史：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas3" :key="index">
          <li v-for="d in data" :key="d" :class="data3.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data3)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData3">清空选项</el-link>
    </div>
    <div class="item item4">
      <span>婚姻史：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas4" :key="index">
          <li v-for="d in data" :key="d" :class="data4.find(da => da === d) ? 'choise' : ''" @click="selectTextOne(d, data4)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData4">清空选项</el-link>
    </div>
    <div class="item item5">
      <span>家族史：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas5" :key="index">
          <li v-for="d in data" :key="d" :class="data5.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data5)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData5">清空选项</el-link>
    </div>
    <div class="item item6">
      <span>家族相关传染病史：</span>
      <div class="explain">按点击顺序成文</div>
      <div class="content">
        <ul v-for="(data, index) in datas6" :key="index">
          <li v-for="d in data" :key="d" :class="data6.find(da => da === d) ? 'choise' : ''" @click="selectText(d, data6)">{{ d }}</li>
        </ul>
      </div>
      <el-link type="danger" :underline="false" @click="clearData6">清空选项</el-link>
    </div>
    <el-link type='primary' :underline="false" @click="changeVisible">确认</el-link>
  </div>
</template>

<script>
export default {
  name: 'others',
  data () {
    return {
      datas1: [['无', '有', '否认'], ['高血压', '糖尿病', '冠心病', '脑梗死', '脑出血', '消化性溃疡', '慢性胃炎', '心肌梗死', '高脂血症', '痛风', '骨折'], ['乙肝', '结核', '伤寒', '艾滋病', '梅毒', '丙肝', '肝炎']],
      datas2: [['无食物及药物过敏...'], ['有"青霉素"过敏...', '有"磺胺类"过敏...', '有"蚕豆"过敏史', '有"牛奶"过敏史', '有"海鲜"过敏史', '有"( )"过敏...']],
      datas3: [['无烟酒嗜好', '无饮酒嗜好', '无吸烟嗜好'], ['有饮酒习惯', '有吸烟习惯', '饮酒，每天约( ...', '吸烟，每天约( ...']],
      datas4: [['已婚', '已婚未育', '未婚', '离异']],
      datas5: [['父母', '父母兄弟姐妹', '父亲', '母亲', '哥哥', '姐姐', '弟弟', '妹妹', '直系亲属中', '家族中'], ['体健', '均体健'], ['无家族遗传病及特...', '无同样疾病', '否认族遗传病及特...', '否认样疾病', '有家族遗传病及特...', '有同样疾病'], ['无', '否认', '有', '家族有', '患有'], ['1型糖尿病', '血友病', '遗传性多囊肾', '先天性聋哑', '21三体综合征', '苯丙酮尿症', '地中海贫血', '先天性心脏病', '2型糖尿病', '原发性高血压']],
      datas6: [['父母', '父母兄弟姐妹', '父亲', '母亲', '哥哥', '姐姐', '弟弟', '妹妹', '直系亲属中', '家族中'], ['否认家族性传染病...'], ['无', '否认', '有', '家族有', '患有'], ['结核', '肝炎', '性病', '艾滋病'], ['等传染病史', '等病史', '病史']],
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
      this.$emit('closeVisible', 'complaintVisible3')
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
      this.$emit("setData3", obj)
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
.others {
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
      padding: 2px 4px;
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
  .item6 {
    border-right: 0 none;
  }
}
</style>