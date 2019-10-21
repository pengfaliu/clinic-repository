<template>
  <div class="baseInfo">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
      <el-col :span="12">
        <el-form-item label="药品名称" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="成分" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="形状" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="适应症" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="规格" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="用法用量" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="警示语" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="不良反应" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="禁忌（用药提醒）" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="注意事项" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="孕妇及哺乳期妇女用药" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="儿童用药" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="老年人用药" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="药物相互作用" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="药理毒理" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="包装" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="有效期" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="执行商标" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="贮藏" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="药品" prop="name">
          <el-input :size="size" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BaseInfo',
  data () {
    return {
      size: 'mini',
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入药品名称', trigger: 'blur' }
        ],

      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="scss">
.baseInfo {
  padding-right: 20px;
}
</style>