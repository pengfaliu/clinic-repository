<template>
  <div class="doctorinfo">
    <!-- 就诊号，初复诊，病人姓名，性别，年龄，科室，历次就诊信息， -->
    <!-- 就诊号  病人姓名，性别，年龄，科室 就诊时间 -->
    <el-table
      :data="tables"
      style="width: 100%"
      stripe
      border
      size="mini">
      <el-table-column
        prop="no"
        label="就诊号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="zhen"
        label="初复诊"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="病人姓名">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="keshi"
        label="科室">
      </el-table-column>
      <el-table-column
        prop="time"
        label="就诊时间">
      </el-table-column>
      <el-table-column
        label="历史就诊">
        <template>
          <el-link type="primary" :underline="false">历史就诊信息</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DoctorInfo',
  data () {
    return {
      tables: [
        {
          no: '1234',
          zhen: '复诊',
          name: '张三',
          sex: '男',
          age: '25',
          keshi: '内科',
          time: '2019-11-12'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.doctorinfo {
  padding: 10px 0px 10px 20px;
}
</style>