<template>
  <div class="addGroup">
    <el-dialog
      :title="groupTitle"
      :visible.sync="groupDialog"
      width="30%"
      :before-close="handleClose">
      <el-form :model="groupForm" label-width="60px">
        <el-form-item label="名称：">
          <el-input v-model="groupForm.fname"></el-input>
        </el-form-item>
        <el-form-item label="机构：">
          <el-select v-model="groupForm.mechanismID" placeholder="请选择">
            <el-option
              v-for="item in stituLists"
              :key="item.fmeInstitutionID"
              :label="item.fname"
              :value="item.fmeInstitutionID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="序号：">
          <el-input v-model.number="groupForm.forderNumber"></el-input>
        </el-form-item>
        <el-form-item label="编码：">
          <el-input v-model="groupForm.fnumber"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="saveGroup(groupForm)">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { allInstitu } from '@/api/stitution'
import { updateGruop } from '@/api/group'
export default {
  name: 'AddGroup',
  data () {
    return {
      stituLists: []
    }
  },
  computed: {
    ...mapGetters(['groupDialog', 'groupForm', 'groupTitle'])
  },
  created () {
    this.getAllStituLists()
  },
  methods: {
    // 获取所有机构
    getAllStituLists () {
      allInstitu().then(res => {
        if (res && res.data.code === 200) {
          this.stituLists = res.data.data
        }
      })
    },
    // 保存科室
    saveGroup (groupForm) {
      console.log(groupForm)
      updateGruop(groupForm).then(res => {
        console.log(res)
        if (res && res.data.data.code === 200) {
          this.$store.dispatch('SetGroupDialog', false)
          if (groupForm.fgroupid) {
            this.$message.success("修改科室成功")
          } else {
            this.$message.success("新增科室成功")
          }
          this.$parent.getGroup()
        }
      })
    },
    // 关闭弹窗
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          // done();
          this.$store.dispatch('SetGroupDialog', false)
        })
        .catch(_ => {});
    },
    closeDialog () {
      this.$store.dispatch('SetGroupDialog', false)
    }
  }
}
</script>

<style scoped lang="scss">
.addGroup {

}
</style>