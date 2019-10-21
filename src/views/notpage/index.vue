<template>
  <div class="notpage">
    <div class="page">
      <img :src="require('@/assets/images/404.png')" alt="">
      <div class="c1">Sorry...您访问的页面不存在</div>
      <div class="c2">
        <el-link icon="el-icon-refresh-right" :underline="false" @click="toMain">返回首页</el-link>
        <el-link icon="el-icon-back" :underline="false" @click.native="toPer">返回上一页</el-link>
      </div>
      <div class="c3">您可能输入了错误的网址，或者该网页已删除或移动</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notpage',
  methods: {
    toMain () {
      this.$router.push({path: '/'})
    },
    toPer () {
      this.$router.back()
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.notpage {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #dad8d9;
  .page {
    width: 500px;
    margin: 0 auto;
    background: url(../../assets/images/404bg.jpg) center top no-repeat;
    background-size: 90%;
    text-align: center;
    line-height: 20px;
    img {
      width: 170px;
      margin-top: 170px;
    }
    .c1 {
      margin-top: 20px;
      font-size: 18px;
      color: #555;
      height: 35px;
    }
    .c2 {
      margin-bottom: 4px;
      .el-link {
        margin: 0 6px;
      }
    }
    .c3 {
      font-size: 12px;
      color: #999;
      height: 180px;
    }
  }
}
</style>