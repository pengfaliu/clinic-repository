<template>
  <div class="assist">
    <div class="title">辅检结果数据</div>
    <div class="content">
      <el-checkbox-group 
        v-model="data">
        <el-checkbox v-for="da in datas1" :label="da" :key="da">{{da}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assist',
  data () {
    return {
      datas1: ['C-反应蛋白测定', '血常规', '尿常规11联', '尿沉渣镜检', '性病混合感染3项'],
      data: []
    }
  }
}
</script>

<style scoped lang="scss">
.assist {
  .title {
    font-size: 14px;
    color: #000;
    padding: 6px 20px;
    border: 1px dashed #ccc;
    border-bottom: 0 none;
    display: inline-block;
    background-color: #fff;
    margin-bottom: -1px;
  }
  .content {
    border-top: 1px dashed #ccc;
    padding: 10px;
  }
}
</style>