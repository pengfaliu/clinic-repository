<template>
  <div class="addIn1stitu">
    <el-dialog
      :title="instituTitle"
      :visible.sync="instituDialog"
      width="30%"
      :before-close="handleClose">
      <el-form :model="instituForm" label-width="60px">
        <el-form-item label="名称：">
          <el-input v-model="instituForm.fname"></el-input>
        </el-form-item>
        <el-form-item label="序号：">
          <el-input v-model="instituForm.fnumber"></el-input>
        </el-form-item>
        <el-form-item label="编码：">
          <el-input v-model.number="instituForm.forderNumber"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="saveStitu(instituForm)">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { updateInstitu } from '@/api/stitution'
export default {
  name: 'AddInstitu',
  data () {
    return {
      size: 'mini'
    }
  },
  computed: {
    ...mapGetters(['instituTitle', 'instituDialog', 'instituForm'])
  },
  methods: {
    // 保存机构
    saveStitu (stituData) {
      updateInstitu(stituData).then(res => {
        if (res && res.data.data.code === 200) {
          if (stituData.fmeInstitutionID) {
            this.$message.success('机构修改成功')
          } else {
            this.$message.success('机构保存成功')
          }
          this.$store.dispatch('SetInstituDialog', false)
          this.$store.dispatch('SetInstituForm', {})
          this.$parent.getStitu()
        }
      })
    },
    // 关闭弹窗
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          // done();
          this.$store.dispatch('SetInstituDialog', false)
        })
        .catch(_ => {});
    },
    // 关闭弹窗
    closeDialog () {
      this.$store.dispatch('SetInstituDialog', false)
    }
  }
}
</script>

<style scoped lang="scss">
.addInstitu {

}
</style>