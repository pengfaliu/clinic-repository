<template>
  <div class="tableInfo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbList" :key="index">{{ breadcrumb }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tableSearch">
      <div class="search">
        <input type="text" size="24" placeholder="请输入搜索内容">
        <i class="iconfont">&#xe614;</i>
      </div>
      <div class="search-span">
        <span v-for="word in searchWord" :key="word" :class="word === wordCur ? 'spanHover' : ''" @click="spanClick(word)">{{ word }}</span>
      </div>
    </div>
    <div class="container">
      <el-table
        v-loading="loading"
        :data="tableData"
        stripe
        :highlight-current-row="highlightCurrentRow"
        :header-cell-style="{background:'#f5f5f5'}"
        height="100%">
        <el-table-column
          type="index"
          label="#"
          width="50px">
        </el-table-column>
        <el-table-column
          prop="forder"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="fnumber"
          label="药品编码">
        </el-table-column>
        <el-table-column
          prop="fspec"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="funit"
          label="单位">
        </el-table-column>
        <el-table-column
          label="药品名称">
          <template slot-scope="{ row }">
            <span @click="viewDetail(row)" title="查看详情">{{ row.fmedSpecName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="falias"
          label="别名">
        </el-table-column>
        <el-table-column
          prop="fmedDosage"
          label="剂型">
        </el-table-column>
        <el-table-column
          prop="fshape"
          label="形态">
        </el-table-column>
        <el-table-column
          prop="fcharacter"
          label="性状">
        </el-table-column>
        <el-table-column
          prop="fcomposition"
          label="成分">
        </el-table-column>
        <el-table-column
          prop="fpharmacologicalEffects"
          label="药理作用">
        </el-table-column>
        <el-table-column
          prop="fprocessingDrugs"
          label="炮制">
        </el-table-column>
        <el-table-column
          prop="fflavor"
          label="性味">
        </el-table-column>
        <el-table-column
          prop="fchannelTropism"
          label="归经">
        </el-table-column>
        <el-table-column
          prop="ffunction"
          label="功能">
        </el-table-column>
        <el-table-column
          prop="findications"
          label="主治">
        </el-table-column>
        <el-table-column
          prop="fclassTypeID"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="fnote"
          label="注意事项">
        </el-table-column>
        <el-table-column
          prop="fdosage"
          label="临床应用">
        </el-table-column>
        <el-table-column
          prop="fclinicalPractice"
          label="用法用量">
        </el-table-column>
        <el-table-column
          prop="fprescribingExamples"
          label="处方举例">
        </el-table-column>
        <el-table-column
          width="300px">
          <template>
            <el-badge :value="120000" :max="999" class="item">
              <el-button size="mini" type="primary">评论</el-button>
            </el-badge>
            <el-badge :value="3" :max="999" class="item">
              <el-button size="mini" type="warning">收藏</el-button>
            </el-badge>
            <el-badge :value="3" :max="999" class="item">
              <el-button size="mini" type="success">浏览</el-button>
            </el-badge>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <paging :pagination="pagination" @setCurrentPage="setCurrentPage" @setPageSize="setPageSize"></paging>
    <item-detail :dialogVisible="dialogVisible" :tableRow="tableRow"></item-detail>
  </div>
</template>

<script>
import ItemDetail from '@/components/ItemDetail'
import paging from '@/components/paging'
export default {
  name: 'TableInfo',
  components: { ItemDetail, paging },
  data () {
    return {
      size: 'mini',
      highlightCurrentRow: true,
      dialogVisible: false,
      wordCur: '',
      searchWord: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      tableRow: {}
    }
  },
  props: {
    breadcrumbList: Array,
    tableData: Array,
    loading: Boolean,
    pagination: Object
  },
  methods: {
    viewDetail (row) {
      console.log(row)
      // this.dialogVisible = true
      // this.tableRow = row
    },
    spanClick (word) {
      this.wordCur = word
    },
    closeDialog () {
      this.dialogVisible = false
    },
    // 设置当前显示页码
    setCurrentPage (currentPage) {
      this.$parent.setCurrentPage(currentPage)
    },
    // 设置每页显示条数
    setPageSize (pageSize) {
      this.$parent.setPageSize(pageSize)
    }
  }
}
</script>

<style scoped lang="scss">
.tableInfo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  .tableSearch {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-left: 10px;
    flex-wrap: wrap;
    .search {
      margin-top: 5px;
      border: 1px solid #f1f1f1;
      border-radius: 10px;
      padding: 2px 10px;
      color: #333;
      input {
        border: 0 none;
        outline: none;
        font-size: 12px;
        margin-right: 10px;
      }
      i {
        font-size: 14px;
        cursor: pointer;
      }
    }
    .search-span {
      margin-top: 5px;
      // width: 100%;
      display: flex;
      flex-wrap: wrap;
      span {
        width: 18px;
        border-radius: 2px;
        text-align: center;
        margin: 0 5px;
        cursor: pointer;
        color: #888;
        padding: 1px 0;
        transition: all 0.3s;
        &:hover {
          color: #fff;
          background-color: #409eff;
        }
      }
      .spanHover {
        color: #fff;
        background-color: #409eff;
      }
    }
  }
  .container {
    height: 100%;
    width: 100%;
    margin-top: 10px;
    position: relative;
    .el-table {
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid #EBEEF5;
      width: 100%;
      .item {
        margin-top: 8px;
        margin-right: 30px;
      }
    }
    span {
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>