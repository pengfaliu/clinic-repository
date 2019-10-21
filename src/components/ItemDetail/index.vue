<template>
  <div class="itemDetail">
    <el-dialog
      title="详细信息"
      :visible.sync="dialogVisible"
      top="8vh"
      width="70%"
      :show-close="showClose"
      :before-close="handleClose">
      <!-- <el-tabs type="card" v-model="editableTabsValue" @tab-remove="removeTab">
        <el-tab-pane v-for="row in rowsList" :key="row.id" :label="row.name" :name="row.index" :closable="true">
          <div class="container" v-html="row.detailInfo"></div>
        </el-tab-pane>
      </el-tabs> -->
      <div class="container" v-html="tableRow.detailInfo"></div>
      <span slot="footer" class="dialog-footer">
        <el-button :size="size" type="primary" @click="closeDialog">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',
  data () {
    return {
      size: "small",
      showClose: false,
      editableTabsValue: '',
      rowsList: []
    }
  },
  props: {
    dialogVisible: Boolean,
    tableRow: Object
  },
  watch: {
    'tableRow': {
      handler (now) {
        var curList = this.rowsList.find(val => val.id === now.id)
        if (!curList) {
          now.index = this.rowsList.length + ''
          this.rowsList.push(now)
          this.editableTabsValue = now.index
        } else {
          this.editableTabsValue = curList.index
        }
      }
    }
  },
  methods: {
    removeTab (targetName) {
      let tabs = this.rowsList;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.index === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.index;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.rowsList = tabs.filter(tab => tab.index !== targetName);
      if (this.rowsList.length === 0) {
        this.closeDialog ()
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.closeDialog ()
        })
        .catch(_ => {});
    },
    closeDialog () {
      this.$parent.closeDialog()
    }
  }
}
</script>

<style scoped lang="scss">
.itemDetail {
  .container {
    max-height: 650px;
    overflow: auto;
    font-size: 16px;
    &>>>strong {
      margin-left: 30px;
      line-height: 30px;
      font-weight: bold
    }
    &>>>p {
      line-height: 1.5em;
      text-indent: 2em;
    }
  }
}
</style>