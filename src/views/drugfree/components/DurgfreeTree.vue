<template>
  <div class="treeInfo">
    <el-scrollbar>
      <el-collapse @change="changeCollapse" accordion v-if="treeData">
        <template v-for="(data, index) in treeData">
          <el-collapse-item :key="index"  v-if="data.childrens && data.childrens.length > 0" :title="data.fname" :name="data.directoryID">
            <el-row>
              <el-col :md="24" :lg="12" :xl="8" v-for="item in data.childrens" :key="item.directoryID"><div :class="treeFlag === item.directoryID ? 'treeHover' : ''" @click="treeClick(data.fname, item.fname, item.directoryID)">{{ item.fname }}</div></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item :key="index" v-else :title="data.fname" :name="data.fname + '-' + data.directoryID" class="noChild">
          </el-collapse-item>
        </template>
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
    treeClick (title, item, id) {
      this.$parent.setBreadcrumbList([title, item])
      this.$parent.setDirectoryID(id)
      this.treeFlag = id
    },
    changeCollapse (val) {
      if (typeof(val) !== 'number') {
        this.$parent.setDirectoryID(parseInt(val.split("-")[1]))
        this.$parent.setBreadcrumbList([val.split("-")[0]])
      }
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
        margin: 5px 2px;
        padding: 0 4px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
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
.el-collapse-item .el-collapse-item__header {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.treeInfo .noChild i {
  display: none!important;
}
.treeInfo .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>