<template>
  <div class="result">
    <ul class="title">
      <li :class="curTit === '1' ? 'hov' : ''" @click="choseTit('1')">辅助信息</li>
      <li :class="curTit === '2' ? 'hov' : ''" @click="choseTit('2')">模板</li>
      <li :class="curTit === '3' ? 'hov' : ''" @click="choseTit('3')">医学知识</li>
      <li :class="curTit === '4' ? 'hov' : ''" @click="choseTit('4')">全部量表</li>
    </ul>
    <div class="content">
      <div class="content1" v-if="curTit === '1'">
        <div class="item">
          <div class="tit tit-pink">初步诊断</div>
          <div class="detail">
            <span>急性上呼吸道感染</span>
            <span>肺炎</span>
            <span>急性扁桃体炎</span>
            <span>泌尿道感染</span>
            <span>急性腺样体炎</span>
            <span>肺结节病</span>
            <span>胃肠炎</span>
            <span>软组织感染</span>
            <span>肺癌</span>
            <span>支气管炎</span>
          </div>
        </div>
        <div class="item">
          <div class="tit tit-blue">推荐检查检验</div>
          <div class="detail">无</div>
        </div>
        <div class="item">
          <div class="tit tit-blue">提示信息</div>
          <div class="detail">无</div>
        </div>
      </div>
      <div class="content2" v-if="curTit === '2'">
        模板列表
      </div>
      <div class="content3" v-if="curTit === '3'">
        医学知识列表
      </div>
      <div class="content4" v-if="curTit === '4'">
        全部量表
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PearlangxResult',
  data () {
    return {
      curTit: '1'
    }
  },
  methods: {
    choseTit (t) {
      this.curTit = t
    }
  }
}
</script>

<style scoped lang="scss">
.result {
  width: 24%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  .title {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    padding: 16px;
    color: #666;
    .hov {
      color: rgb(64, 158, 255);
    }
    li {
      cursor: pointer;
      padding: 0 10px;
      &:hover {
        color: rgb(64, 158, 255);
      }
    }
  }
  .content {
    padding: 10px;
    .content1 {
      .item {
        border: 1px solid #e5e5e5;
        margin-bottom: 10px;
        .tit {
          font-size: 12px;
          font-weight: bold;
          padding: 6px 10px;
        }
        .tit-pink {
          background-color: rgba(255, 192, 203, 0.5);
        }
        .tit-blue {
          background-color: rgba(64, 158, 255, 0.5);
        }
        .detail {
          font-size: 14px;
          padding: 10px 20px;
          display: flex;
          flex-wrap: wrap;
          span {
            padding: 4px 10px;
            transition: all 0.2s;
            &:hover {
              color: #58acd7;
              cursor: default;
            }
          }
        }
      }
    }
  }
}
</style>