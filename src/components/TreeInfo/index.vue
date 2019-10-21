<template>
  <div class="treeInfo">
    <el-scrollbar>
      <el-collapse @change="changeCollapse">
        <el-collapse-item v-for="data in treeData" :key="data.name" :title="data.title" :name="data.name">
          <el-row>
            <el-col :md="24" :lg="12" :xl="8" v-for="item in treeItemData" :key="item"><div :class="treeFlag === item ? 'treeHover' : ''" @click="treeClick(data.title, item)">{{ item }}</div></el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'TreeInfo',
  data () {
    return {
      treeFlag: ''
    }
  },
  props: {
    treeData: Array,
    treeItemData: Array
  },
  methods: {
    handleNodeClick (data) {
      
    },
    treeClick (title, item) {
      this.$parent.setBreadcrumbList([title, item])
      this.treeFlag = item
    },
    changeCollapse (val) {

    }
  }
}
</script>

<style scoped lang="scss">
.treeInfo {
  height: 100%;
  padding: 20px;
  width: 15%;
  min-width: 200px;
  .el-scrollbar {
    height: 100%;
  }
  .el-row {
    // background-color: #f0f3f8;
    .el-col {
      div {
        height: 30px;
        line-height: 28px;
        text-align: center;
        border: 1px solid #409eff;
        color: #409eff;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: #409eff;
          color: #fff;
        }
      }
      .treeHover {
        color: #fff;
        background-color: #409eff;
      }
    }
  }
}
</style>
<style>
.el-collapse-item__header {
  /* background-color: #f0f3f8!important; */
  font-size: 14px;
  padding-left: 20px;
  padding-right: 10px;
}
.el-collapse-item__content {
  padding-bottom: 0!important;
}
</style>