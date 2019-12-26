<template>
  <div class="baseInfo">
    <el-form :model="medForm" :size="size" :rules="rules" ref="medForm" label-width="180px" class="demo-ruleForm">
      <el-col :span="12">
        <el-form-item label="药品名称" prop="fmedSpecName">
          <el-input v-model="medForm.fmedSpecName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="别名" prop="falias">
          <el-input v-model="medForm.falias"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="分类" prop="directoryID">
          <!-- <el-input :size="size" v-model="medForm.directoryID"></el-input> -->
          <el-cascader
            v-if="diseaseTypeLists.length > 0"
            v-model="medForm.directoryID"
            :options="diseaseTypeLists"
            :filterable="true"
            :props="{ value: 'fdiseaseTypeID', label: 'fname', children: 'childrens' }"
            @change="diseaseTypeChange">
          </el-cascader>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="序号" prop="forder">
          <el-input v-model.number="medForm.forder"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="药品编码" prop="fnumber">
          <el-input v-model="medForm.fnumber"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="规格" prop="fspec">
          <el-input v-model="medForm.fspec"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="单位" prop="funit">
          <el-input v-model="medForm.funit"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="剂型" prop="fmedDosage">
          <el-input v-model="medForm.fmedDosage"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="形态" prop="fshape">
          <el-input v-model="medForm.fshape"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性状" prop="fcharacter">
          <el-input v-model="medForm.fcharacter"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="成分" prop="fcomposition">
          <el-input v-model="medForm.fcomposition"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="药理作用" prop="fpharmacologicalEffects">
          <el-input v-model="medForm.fpharmacologicalEffects"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="炮制" prop="fprocessingDrugs">
          <el-input v-model="medForm.fprocessingDrugs"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性味" prop="fflavor">
          <el-input v-model="medForm.fflavor"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="归经" prop="fchannelTropism">
          <el-input v-model="medForm.fchannelTropism"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="功能" prop="ffunction">
          <el-input v-model="medForm.ffunction"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="主治" prop="findications">
          <el-input v-model="medForm.findications"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="类型" prop="fclassTypeID">
          <el-input v-model="medForm.fclassTypeID"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="注意事项" prop="fnote">
          <el-input v-model="medForm.fnote"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="临床应用" prop="fclinicalPractice">
          <el-input v-model="medForm.fclinicalPractice"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="用法用量" prop="fdosage">
          <el-input v-model="medForm.fdosage"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="处方举例" prop="fprescribingExamples">
          <el-input v-model="medForm.fprescribingExamples"></el-input>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
import { updateMed } from '@/api/medicine'
export default {
  name: 'BaseInfo',
  data () {
    return {
      size: 'medium',
      cascader: [""],
      rules: {
        fmedSpecName: [{ required: true, message: '请输入药品名称', trigger: 'blur' }],
        falias: [{ required: true, message: '请输入别名', trigger: 'blur' }],
        directoryID: [{ required: true, message: '请输入分类', trigger: 'blur' }],
        forder: [{ required: true, message: '请输入序号', trigger: 'blur' },
        { type: 'number', message: '序号必须为数字', trigger: 'blur' }],
        fnumber: [{ required: true, message: '请输入药品编码', trigger: 'blur' }],
        fspec: [{ required: true, message: '请输入规格', trigger: 'blur' }],
        funit: [{ required: true, message: '请输入单位', trigger: 'blur' }],
        fmedDosage: [{ required: true, message: '请输入剂型', trigger: 'blur' }],
        fshape: [{ required: true, message: '请输入形态', trigger: 'blur' }],
        fcharacter: [{ required: true, message: '请输入性状', trigger: 'blur' }],
        fcomposition: [{ required: true, message: '请输入成分', trigger: 'blur' }],
        fpharmacologicalEffects: [{ required: true, message: '请输入药理管理', trigger: 'blur' }],
        fprocessingDrugs: [{ required: true, message: '请输入炮制', trigger: 'blur' }],
        fflavor: [{ required: true, message: '请输入性味', trigger: 'blur' }],
        fchannelTropism: [{ required: true, message: '请输入归经', trigger: 'blur' }],
        ffunction: [{ required: true, message: '请输入功能', trigger: 'blur' }],
        findications: [{ required: true, message: '请输入主治', trigger: 'blur' }],
        fclassTypeID: [{ required: true, message: '请输入类型', trigger: 'blur' }],
        fnote: [{ required: true, message: '请输入注意事项', trigger: 'blur' }],
        fdosage: [{ required: true, message: '请输入临床应用', trigger: 'blur' }],
        fclinicalPractice: [{ required: true, message: '请输入用法用量', trigger: 'blur' }],
        fprescribingExamples: [{ required: true, message: '请输入处方举例', trigger: 'blur' }]
      },
      medForm: {}
    }
  },
  props: {
    diseaseTypeLists: Array
  },
  methods: {
    setRow (row) {
      console.log(row)
      this.medForm = row
    },
    diseaseTypeChange (type) {
      this.medForm.directoryID = this.medForm.directoryID[this.medForm.directoryID.length - 1]
    },
    submitForm() {
      this.$refs['medForm'].validate((valid) => {
        if (valid) {
          console.log(this.medForm)
          updateMed(this.medForm).then(res => {
            if (res && res.data.data.code === 200) {
              if (this.medForm.fmedSpecID) {
                this.$message.success('修改药品成功')
              } else {
                this.$message.success('新增药品成功')
              }
              this.$refs['medForm'].resetFields()
              this.$emit("changeInfo")
            } else {
              if (this.medForm.fmedSpecID) {
                this.$message.error('修改药品失败')
              } else {
                this.$message.error('新增药品失败')
              }
            }
          })
        } else {
          this.$message.warning('请输入完整信息')
          return false;
        }
      })
    },
    resetForm() {
      this.$refs['medForm'].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.baseInfo {
  padding-right: 40px;
  padding-top: 20px;
}
</style>