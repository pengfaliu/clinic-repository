<template>
  <div class="diseaseControl">
    <el-form :inline="true" class="demo-form-inline" :size="size">
      <el-form-item>
        <el-button @click="addInfo('新增')" type="success">添加疾病用药</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type='danger'>删除选定内容</el-button>
      </el-form-item>
      <el-form-item>
        <el-cascader
          v-model="cascader"
          :options="diseaseTypeLists"
          :filterable="true"
          :props="{ value: 'fdiseaseTypeID', label: 'fname', children: 'childrens' }"
          @change="setType">
        </el-cascader>
      </el-form-item>
      <el-form-item>
        <el-input v-model="diseaseName" placeholder="根据疾病名称搜索" style="margin-top: 1px;" @keyup.enter.native="setName(diseaseName)">
          <el-button slot="append" icon="el-icon-search" @click="setName(diseaseName)"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <disease-list :lists="lists" :loading="loading"></disease-list>
    <add-disease ref="addref" :diseaseTypeLists="diseaseTypeLists" class="addDisease" :class="addFlag ? 'addDiseaseShow' : ''"></add-disease>
    <paging :pagination="pagination" @setCurrentPage="setCurrentPage" @setPageSize="setPageSize"></paging>
  </div>
</template>

<script>
import AddDisease from './components/AddDisease'
import DiseaseList from './components/DiseaseList'
import paging from '@/components/paging'
import { diseaseType } from '@/api/disease'
import { queryMedListByTypeAndName } from '@/api/medicine'
export default {
  name: 'diseaseControl',
  components: { AddDisease, DiseaseList, paging },
  data () {
    return {
      size: 'mini',
      diseaseName: "",
      lists: [],
      loading: false,
      cascader: [""],
      diseaseTypeLists: [{"fname": "全部", "fdiseaseTypeID": ""}],
      addFlag: false,
      req: {
        "currentPage": 1,
        "pageSize": 10,
        "DirectoryID": "",
        "FMedSpecName": ""
      },
      pagination: {}
    }
  },
  created () {
    this.getMedList(this.req)
    this.queryDiseaseType()
  },
  methods: {
    // 获取疾病类型
    queryDiseaseType () {
      this.loading = true
      diseaseType().then(res => {
        if (res && res.data.code === 200) {
          var data = res.data.data
          for (var da in data) {
            if (data[da].childrens.length === 0) {
              delete data[da].childrens
            } else {
              data[da].childrens.forEach(element => {
                delete element.childrens
              });
            }
          }
          this.diseaseTypeLists.push(...data)
        }
      })
    },
    // 根据疾病类型id获取疾病列表
    queryDiseaseById (req) {
      this.loading = true
      diseaseList(req).then(res => {
        if (res && res.data.data.code === 200) {
          this.lists = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        }
      })
    },
    addInfo (row) {
      this.$refs.addref.setRow(row)
      this.addFlag = true
    },
    closeAdd () {
      this.addFlag = false
    },
    // 设置类别
    setType (type) {
      this.req.currentPage = 1
      this.cascader = type
      if (type.length === 1) {
        this.req.DirectoryID = ""
      } else {
        this.req.DirectoryID = type[1]
      }
      this.getMedList(this.req)
    },
    // 设置名称
    setName (name) {
      this.req.currentPage = 1
      this.req.FMedSpecName = name
      this.getMedList(this.req)
    },
    // 设置当前页
    setCurrentPage (page) {
      this.req.currentPage = page
      this.getMedList(this.req)
    },
    // 设置每页显示条数
    setPageSize (pageSize) {
      this.req.pageSize = pageSize
      this.getMedList(this.req)
    },
    // 获取药品列表
    getMedList (req) {
      this.loading = true
      queryMedListByTypeAndName(req).then(res => {
        if (res && res.data.data.code === 200) {
          this.lists = res.data.data.data.list
          this.pagination = res.data.data.data.pagination
          this.loading = false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.diseaseControl {
  height: 100%;
  padding: 10px 0 10px 20px;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
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