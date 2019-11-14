<template>
  <div class="login">
    <div class="content">
      <div class="bg">
        <img :src="require('@/assets/images/login-bg1.png')" alt="">
        <div class="login-logo">
          <img :src="require('@/assets/images/loginLogo.png')" alt="">
        </div>
      </div>
      <div class="form">
        <el-form :model="loginInfo" :rules="loginRules" ref="loginInfo">
          <el-form-item prop="username">
            <div class="form-item">
              <div class="form-input">
                <el-input v-model="loginInfo.username" placeholder="请输入帐号">
                  <template slot="prepend"><i class="iconfont">&#xe621;</i></template>
                </el-input>
              </div>
            </div>
          </el-form-item>
          <el-form-item prop="userpassword">
            <div class="form-item">
              <div class="form-input">
                <el-input v-model="loginInfo.userpassword" type="password" placeholder="请输入密码">
                  <template slot="prepend"><i class="iconfont">&#xe641;</i></template>
                </el-input>
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div class="form-item rememb">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <div>
            <el-link :underline="false">忘记密码</el-link>
            <el-link :underline="false" type="info">|</el-link>
            <el-link :underline="false" @click="register">去注册</el-link>
          </div>
        </div>
        <div class="loginBtn">
          <el-button type="success" @click="reset('loginInfo')">重 置</el-button>
          <el-button type="primary" :loading="loginBtn" @click="login('loginInfo')">登 录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginBtn: false,
      size: 'small',
      loginInfo: {
        username: 'admin',
        userpassword: '123456'
      },
      checked: true,
      loginRules: {
        username: [
          { required: true, message: '请输入账户名', trigger: 'blur' }
        ], 
        userpassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (loginInfo) {
      this.loginBtn = true
      this.$refs[loginInfo].validate((valid) => {
        if (valid) {
          if (this.loginInfo.username === 'admin' && this.loginInfo.userpassword === '123456') {
            this.$message.success('登录成功')
            this.$store.dispatch('SetToken', {token: 'token123', checked: this.checked})
            const _this = this
            setTimeout(function () {
              _this.$router.push({path: '/'})
              this.loginBtn = false
            }, 200)
          } else {
            this.$message.warning('帐号或密码错误')
          }
        } else {
          return false;
        }
      })
    },
    register () {
      this.$router.push({path: '/registers'})
    },
    reset (loginInfo) {
      this.loginInfo = {
        username: '',
        userpassword: ''
      }
      this.$refs[loginInfo].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url(../../assets/images/login-bg.jpg) center center no-repeat;
  background-size: cover;
  .content {
    position: absolute;
    left: 50%;
    top: 26%;
    margin-left: -250px;
    width: 500px;
    border-radius: 20px;
    background-color: #fff;
    .bg {
      width: 100%;
      position: relative;
      img {
        width: 100%;
      }
      .login-logo {
        position: absolute;
        left: 30%;
        top: 20%;
        width: 200px;
      }
    }
    .form {
      width: 100%;
      padding: 40px 100px;
      .form-item {
        display: flex;
        height: 40px;
        align-items: center;
        .form-icon {
          flex-shrink: 0;
          width: 40px;
          text-align: center;
        }
        .form-input {
          width: 100%;
          .el-input {
            border: 0 none;
          }
        }
      }
      .rememb {
        justify-content: space-between;
        .el-link {
          font-size: 12px;
        }
      }
      .loginBtn {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-around;
        .el-button {
          width: 45%;
          height: 100%;
          font-size: 14px;
        }
      }
    }
  }
}
</style>