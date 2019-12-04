<template>
  <div class="diseaseDetail">
    <!-- <el-tabs type="card" v-model="historyTabs.activeName" :tab-position="tabPosition" v-if="historyTabs.historyList.length > 0" @tab-remove="removeTab">
      <el-tab-pane :lazy="true" v-for="row in historyTabs.historyList" :key="row.id" :label="row.name" :name="row.index" :closable="true">
        <div class="container" v-html="row.detailInfo"></div>
      </el-tab-pane>
    </el-tabs> -->
    <div class="queryLine">
      <div class="item" @click="goScroll('.item1')" :class="curItem === 'item1' ? 'itemClick' : ''">基本信息</div>
      <div class="item" @click="goScroll('.item2')" :class="curItem === 'item2' ? 'itemClick' : ''">生产厂家</div>
      <div class="item" @click="goScroll('.item3')" :class="curItem === 'item3' ? 'itemClick' : ''">评论</div>
    </div>
    <el-scrollbar>
      <div class="container">
        <div class="item1">
          <h2 style="font-size: 20px; font-weight: bold;line-height: 3em;">基本信息</h2>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息1</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息2</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息3</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息4</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息5</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息6</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">基本信息7</div>
        </div>
        <div class="item2">
          <h2 style="font-size: 20px; font-weight: bold;line-height: 3em;">{{ historyList.name }}</h2>
          <div v-html="historyList.detailInfo"></div>
        </div>
        <div class="item3">
          <h2 style="font-size: 20px; font-weight: bold;line-height: 3em;">评论</h2>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论1</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论2</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论3</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论4</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论5</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论6</div>
          <div style="font-size: 20px; line-height: 40px; padding-left: 30px;">评论7</div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { scrollClick } from '@/utils/scroll'
export default {
  name: 'DiseaseDetail',
  data () {
    return {
      tabPosition: 'left',
      curItem: 'item1'
    }
  },
  computed: {
    ...mapGetters(['historyList'])
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      var el = document.querySelector('.diseaseDetail .el-scrollbar .el-scrollbar__wrap')
      el.addEventListener('scroll', function () {
        // console.log(document.querySelector('.diseaseDetail .el-scrollbar .el-scrollbar__wrap').scrollTop)
      }, false)
    })
  },
  methods: {
    removeTab (targetName) {
      let activeName = this.historyTabs.activeName;
      let tabs = this.historyTabs.historyList;
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
      this.$store.dispatch('EditHistory', activeName)
    },
    goScroll (item) {
      this.curItem = item.split('.')[1]
      this.$nextTick(() => {
        var el = document.querySelector('.diseaseDetail .el-scrollbar .el-scrollbar__wrap')
        var top = document.querySelector('.diseaseDetail ' + item).offsetTop
        // document.querySelector('.diseaseDetail .el-scrollbar .el-scrollbar__wrap').scrollTop = 500
        // console.log(document.querySelector('.diseaseDetail .el-scrollbar .el-scrollbar__view'))
        scrollClick(el, top)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.diseaseDetail {
  position: relative;
  padding: 20px;
  height: 100%;
  .queryLine {
    width: 80px;
    position: absolute;
    right: 150px;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #409eff;
    border-bottom: 0 none;
    .item {
      height: 30px;
      line-height: 30px;
      text-align: center;
      cursor: default;
      font-size: 12px;
      transition: all 0.2s;
      border-bottom: 1px solid #409eff;
      &:hover {
        background-color: #409eff;;
        color: #fff;
      }
    }
    .itemClick {
      background-color: #409eff;;
      color: #fff;
    }
  }
  .el-tabs {
    height: 100%;
    .el-tab-pane {
      height: 100%;
    }
  }
  .el-scrollbar {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .container {
    font-size: 16px;
    padding-right: 10px;
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
<style>
.diseaseDetail .el-scrollbar__wrap {
  overflow-x: hidden!important;
}
</style>