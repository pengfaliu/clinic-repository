<template>
  <div class="diseaseControl">
    <el-button @click="addInfo" type="success" :size="size">添加疾病用药</el-button>
    <el-button type='danger' :size="size">删除选定内容</el-button>
    <disease-list :lists="lists"></disease-list>
    <add-disease class="addDisease" :class="addFlag ? 'addDiseaseShow' : ''"></add-disease>
    <paging></paging>
  </div>
</template>

<script>
import AddDisease from './components/AddDisease'
import DiseaseList from './components/DiseaseList'
import paging from '@/components/paging'
export default {
  name: 'diseaseControl',
  components: { AddDisease, DiseaseList, paging },
  data () {
    return {
      size: 'mini',
      lists: [],
      addFlag: false
    }
  },
  created () {
    for (var i = 0; i < 5; i++) {
      this.lists.push({
        id: i + '',
        name: '药品' + i,
        data1: '数据' + i,
        data2: '数据' + i,
        data3: '数据' + i,
        data4: '数据' + i
      })
    }
  },
  methods: {
    addInfo () {
      this.addFlag = true
    },
    closeAdd () {
      this.addFlag = false
    }
  }
}
</script>

<style scoped lang="scss">
.diseaseControl {
  height: 100%;
  padding: 10px 20px;
  position: relative;
  .addDisease {
    transition: all ease 0.2s;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    transform: translateX(100%);
    opacity: 0;
  }
  .addDiseaseShow {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>