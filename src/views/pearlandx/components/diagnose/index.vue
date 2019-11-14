<template>
  <div class="diagnose">
    <div class="list">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="iteml"><span class="no">{{ index + 1 }}、</span>{{ item.val }}<span class="sta" @click="staClick(item)"> {{ item.sta }} </span></div>
        <div class="itemr">
          <span class="fun"> 治疗方法</span>
          <span class="del">
            <i class="el-icon-delete" @click="del(item.val)"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="additem">
      <el-popover
        placement="bottom-start"
        width="100%"
        trigger="click">
        <el-select ref="select" v-model="value" filterable placeholder="请选择" size="small" @change="selectChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <i class="el-icon-circle-plus-outline" slot="reference"> 添加诊断结果</i>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'diagnose',
  data () {
    return {
      items: [
        {
          val: '以前创伤引起骨坏死',
          sta: '初诊'
        }, {
          val: '特指性偏好障碍',
          sta: '初诊'
        }, {
          val: '需求和接受行为和心理上干预措施，这些措施已知是危害和有害',
          sta: '初诊'
        }
      ],
      options: [{
        value: '1',
        label: '头部浅表损伤后遗症'
      }, {
        value: '2',
        label: '头面部动静脉瘘'
      }, {
        value: '3',
        label: '头皮皮肤恶性肿瘤'
      }, {
        value: '4',
        label: '头部特指关节和韧带扭伤和劳损'
      }, {
        value: '5',
        label: '头皮血肿'
      }],
      value: ''
    }
  },
  methods: {
    selectChange (val) {
      var op = this.options.find(va => va.value === val)
      this.$confirm('确定选择“' + op.label + '”为', '提示', {
        confirmButtonText: '初诊',
        cancelButtonText: '复诊',
        type: 'warning'
      }).then(() => {
        if (this.items.find(item => item.val === op.label)) {
          this.$message.warning('该诊断已经被添加')
        } else {
          this.items.push({
            val: op.label,
            sta: '初诊'
          })
          this.$refs.select.blur()
        }
      }).catch(() => {
        if (this.items.find(item => item.val === op.label)) {
          this.$message.warning('该诊断已经被添加')
        } else {
          this.items.push({
            val: op.label,
            sta: '复诊'
          })
          this.$refs.select.blur()
        }
      });
    },
    // 状态改变
    staClick (data) {
      data.sta = data.sta === '初诊' ? '复诊' : '初诊'
    },
    del (val) {
      this.items.forEach((item, index) => {
        console.log(item, index)
        if (item.val === val) {
          this.items.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.diagnose {
  width: 100%;
  background-color: rgb(234, 247, 253);
  padding: 10px;
  .list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .item {
      flex-shrink: 0;
      // border-bottom: 1px dashed #ccc;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .iteml {
        color: #000;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        .no {
          font-weight: normal;
        }
        .sta {
          font-size: 12px;
          font-weight: normal;
          border: 1px solid #3b9ed0;
          color: #3b9ed0;
          border-radius: 5px;
          padding: 2px 4px;
          margin-left: 4px;
        }
      }
      .itemr {
        font-size: 14px;
        margin-left: 4px;
        span {
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .del:hover {
          color: red;
        }
        i {
          font-size: 16px;
        }
      }
    }
  }
  .additem {
    margin-top: 10px;
    margin-left: 10px;
    i {
      color: #3b9ed0;
      cursor: pointer;
    }
  }
}
</style>