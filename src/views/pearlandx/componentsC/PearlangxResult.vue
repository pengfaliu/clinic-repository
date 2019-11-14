<template>
  <div class="xResult">
    <div class="searchForm">
      <div class="title">
        <span>诊疗信息</span>
        <el-link type="primary" style="float: right" @click="showStatus()" :size="size">返回</el-link>
      </div>
      <el-row>
        <el-col>诊断：</el-col>
        <el-col>{{ enterData.zd }}</el-col>
        <el-col>主诉：</el-col>
        <el-col>{{ enterData.zs }}</el-col>
        <el-col>现病史：</el-col>
        <el-col>{{ enterData.xbs }}</el-col>
        <el-col>既往史：</el-col>
        <el-col>{{ enterData.jws }}</el-col>
        <el-col>体格检查：</el-col>
        <el-col>{{ enterData.tgjc }}</el-col>
      </el-row>
    </div>
    <div class="partname">
      <div class="title">
        <span>临床诊断</span>
      </div>
      <el-table
        :data="diagnoseDatas"
        stripe
        :size="size"
        height="100%"
        style="width: 100%;">
        <el-table-column
          prop="no"
          label="编码"
          min-width="30%">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          min-width="50%">
        </el-table-column>
        <el-table-column
          prop="xsd"
          label="相似度"
          min-width="20%">
        </el-table-column>
      </el-table>
    </div>
    <div class="diagnose">
      <div class="diagnose-table">
        <div class="title">
          <span>方剂名称</span>
        </div>
        <el-table
          :data="partDatas"
          stripe
          height="98%"
          :size="size"
          style="width: 100%;">
          <el-table-column
            prop="xx"
            label="选项"
            min-width="14%">
          </el-table-column>
          <el-table-column
            prop="fjmc"
            label="方剂名称"
            min-width="14%">
          </el-table-column>
          <el-table-column
            prop="lx"
            label="类型"
            min-width="14%">
          </el-table-column>
          <el-table-column
            prop="yznr"
            label="医嘱内容"
            min-width="14%">
          </el-table-column>
          <el-table-column
            prop="yf"
            label="用法"
            min-width="14%">
          </el-table-column>
          <el-table-column
            prop="yl"
            label="用量"
            min-width="14%">
          </el-table-column>
          <el-table-column
            prop="pc"
            label="频次"
            min-width="14%">
          </el-table-column>
        </el-table>
      </div>
      <div class="diagnose-detail">
        <div class="title">
          <span>诊疗指南</span>
        </div>
        <div class="content">
          概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 流行性感冒（influenza)简称流感．是流感病毒引起的急性呼吸道传染病，流感病毒的主要特点为：抗原多变性、季节流行性强．以及对人群和社会都影响巨大。沉感病毒在各个年龄组均可引起呼吸系统的感染性疾病，常可造成高死亡率，其中老人和慢性病患者艇主餐是主要高发人群。概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 流行性感冒（influenza)简称流感．是流感病毒引起的急性呼吸道传染病，流感病毒的主要特点为：抗原多变性、季节流行性强．以及对人群和社会都影响巨大。沉感病毒在各个年龄组均可引起呼吸系统的感染性疾病，常可造成高死亡率，其中老人和慢性病患者艇主餐是主要高发人群。概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 流行性感冒（influenza)简称流感．是流感病毒引起的急性呼吸道传染病，流感病毒的主要特点为：抗原多变性、季节流行性强．以及对人群和社会都影响巨大。沉感病毒在各个年龄组均可引起呼吸系统的感染性疾病，常可造成高死亡率，其中老人和慢性病患者艇主餐是主要高发人群。概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 流行性感冒（influenza)简称流感．是流感病毒引起的急性呼吸道传染病，流感病毒的主要特点为：抗原多变性、季节流行性强．以及对人群和社会都影响巨大。沉感病毒在各个年龄组均可引起呼吸系统的感染性疾病，常可造成高死亡率，其中老人和慢性病患者艇主餐是主要高发人群。概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 概况展开参《呼吸病学专著-第2版-钟南山-人民卫生出版社》 第402页 流行性感冒（influenza)简称流感．是流感病毒引起的急性呼吸道传染病，流感病毒的主要特点为：抗原多变性、季节流行性强．以及对人群和社会都影响巨大。沉感病毒在各个年龄组均可引起呼吸系统的感染性疾病，常可造成高死亡率，其中老人和慢性病患者艇主餐是主要高发人群。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PearlangxResult",
  data () {
    return {
      size: 'medium',
      partDatas: [{
        xx: '选项1',
        fjmc: '方剂名称1',
        lx: '类型1',
        yznr: '医嘱内容1',
        yf: '用法1',
        yl: '用量1',
        pc: '频次1'
      }, {
        xx: '选项2',
        fjmc: '方剂名称2',
        lx: '类型2',
        yznr: '医嘱内容2',
        yf: '用法2',
        yl: '用量2',
        pc: '频次2'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }, {
        xx: '选项3',
        fjmc: '方剂名称3',
        lx: '类型3',
        yznr: '医嘱内容3',
        yf: '用法3',
        yl: '用量3',
        pc: '频次3'
      }],
      diagnoseDatas: [
        {
          no: 'sd5544546',
          name: '名称1',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称2',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称3',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }, {
          no: 'sd5544546',
          name: '名称4',
          xsd: '47%'
        }
      ]
    }
  },
  props: {
    enterData: Object
  },
  methods: {
    showStatus () {
      this.$parent.changeStatus(true)
    }
  }
}
</script>

<style scoped lang="scss">
.xResult {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  &>div .title {
    font-size: 14px;
    font-weight: bold;
    color: #666;
    background-color: #f5f5f5;
    padding: 4px 20px;
  }
  .searchForm {
    width: 260px;
    height: 100%;
    flex-shrink: 0;
    padding-right: 6px;
    border-right: 1px solid #e5e5e5;
    .el-col {
      margin: 6px 0;
      line-height: 20px;
    }
    .el-col:nth-child(2n+1) {
      font-weight: bold;
      color: #888;
    }
    .el-col:nth-child(2n) {
      border: 1px solid #e5e5e5;
      background-color: #f5f5f5;
      min-height: 80px;
      padding: 6px 10px;
      border-radius: 10px;
    }
  }
  .partname {
    width: 400px;
    height: 800px;
    padding: 0 6px;
    border-right: 1px solid #e5e5e5;
  }
  .diagnose {
    height: 100%;
    padding-left: 6px;
    width: calc(100% - 260px - 402px);
    &>div {
      width: 100%;
      height: 50%;
    }
    .diagnose-table {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 6px;
    }
    .diagnose-detail {
      padding: 6px 0;
      .content {
        height: 100%;
        margin-top: 6px;
        overflow: auto;
        padding: 4px;
        line-height: 20px;
        border: 1px solid #ccc;
        text-align: justify;
      }
    }
  }
}
</style>