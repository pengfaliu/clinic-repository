<template>
  <div class="addUser">
    <el-dialog
      :title="userTitle"
      :visible.sync="userDialog"
      width="30%"
      :before-close="handleClose">
      <el-form :model="userForm" label-width="60px">
        <el-form-item label="名称">
          <el-input v-model="userForm.fname"></el-input>
        </el-form-item>
        <el-form-item label="机构">
          <el-select v-model="userForm.mechanismID" placeholder="请选择" v-if="stitution">
            <el-option
              v-for="item in stitution"
              :key="item.fmeInstitutionID"
              :label="item.fname"
              :value="item.fmeInstitutionID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="科室">
          <el-select v-model="userForm.fgroupid" placeholder="请选择" v-if="group">
            <el-option
              v-for="item in group"
              :key="item.fgroupid"
              :label="item.fname"
              :value="item.fgroupid">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="编码">
          <el-input v-model="userForm.fnumber"></el-input>
        </el-form-item>
        <el-form-item label="职务">
          <el-input v-model="userForm.fjob"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="userForm.ftype"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="saveUser(userForm)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { saveUser } from '@/api/user'
export default {
  name: 'AddUser',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['userTitle', 'userDialog', 'userForm', 'stitution', 'group'])
  },
  created () {
    this.$store.dispatch("GetMechanism")
    this.$store.dispatch("GetGroup")
  },
  methods: {
    // 保存人员
    saveUser (userForm) {
      console.log(userForm)
      saveUser(userForm).then(res => {
        if (res && res.data.data.code === 200) {
          this.$store.dispatch('SetUserDialog', false)
          this.$store.dispatch('SetUserForm', {})
          this.$parent.getUser()
          if (userForm.fuserid) {
            this.$message.success("更新人员成功")
          } else {
            this.$message.success("新增人员成功")
          }
        } else {
          if (userForm.fuserid) {
            this.$message.error("更新人员成功")
          } else {
            this.$message.error("新增人员成功")
          }
        }
      })
    },
    // 关闭弹窗
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          // done();
          this.$store.dispatch('SetUserDialog', false)
        })
        .catch(_ => {});
    },
    // 关闭弹窗
    closeDialog () {
      this.$store.dispatch('SetUserDialog', false)
    }
  }
}
</script>

<style scoped lang="scss">
.addUser {

}
</style>