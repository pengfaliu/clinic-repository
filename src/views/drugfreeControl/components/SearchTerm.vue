<template>
  <div class="searchTerm">
    <el-form :inline="true" :size="size">
      <el-form-item>
        <el-button type="danger">删除选中选项</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success">新增药品</el-button>
      </el-form-item>
      <el-form-item>
        <el-cascader
          v-model="cascader"
          :options="medTypes"
          :filterable="true"
          :props="{ value: 'directoryID', label: 'fname', children: 'childrens' }"
          @change="typeChange">
        </el-cascader>
      </el-form-item>
      <el-form-item>
        <el-input v-model="medName" placeholder="根据药品名称搜索" style="margin-top: 1px;" @keyup.enter.native="searchByName(medName)">
          <el-button slot="append" icon="el-icon-search" @click="searchByName(medName)"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { medicineType } from "@/api/medicine"
export default {
  name: 'SearchTerm',
  data () {
    return {
      size: "mini",
      cascader: [""],
      medTypes: [{"directoryID": "", "fname": "全部"}],
      medName: ''
    }
  },
  created () {
    this.getMedType()
  },
  methods: {
    // 获取药品类型
    getMedType () {
      medicineType().then(res => {
        console.log(res)
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
          this.medTypes.push(...data)
        }
      })
    },
    // 药品类别改变
    typeChange (val) {
      console.log(val)
      var type = "";
      if (val.length === 1) {
        type = val[0]
      } else {
        type = val[1]
      }
      this.$parent.setType(type)
    },
    // 根据药品名称搜索
    searchByName (medName) {
      this.$parent.setName(medName)
    }
  }
}
</script>

<style scoped lang="scss">

</style>