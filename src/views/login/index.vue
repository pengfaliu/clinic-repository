<!--
- 登陆系统
-->
<template>
  <div class="login">
    <div class="content">
      <div class="bg">
        <img :src="require('@/assets/images/login-bg1.png')" alt="">
        <div class="login-logo">
          <img :src="require('@/assets/images/YWHK1_w.png')" alt="">
        </div>
      </div>
      <div class="form">
        <el-form :model="loginInfo" :rules="loginRules" ref="loginInfo">
          <el-form-item prop="FName">
            <div class="form-item">
              <div class="form-input">
                <el-input v-model="loginInfo.FName" placeholder="请输入帐号">
                  <template slot="prepend"><i class="iconfont">&#xe621;</i></template>
                </el-input>
              </div>
            </div>
          </el-form-item>
          <el-form-item prop="FPassword">
            <div class="form-item">
              <div class="form-input">
                <el-input v-model="loginInfo.FPassword" type="password" placeholder="请输入密码">
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
import { mapGetters } from 'vuex'
import { login } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      loginBtn: false,
      size: 'small',
      loginInfo: {
        FName: 'admin',
        FPassword: '123456'
      },
      checked: false,
      loginRules: {
        FName: [
          { required: true, message: '请输入账户名', trigger: 'blur' }
        ],
        FPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['url'])
  },
  created () {
    var _this = this;
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if (key == 13) {
        _this.login('loginInfo')
      }
    };
  },
  methods: {
    login (loginInfo) {
      this.loginBtn = true
      this.$refs[loginInfo].validate((valid) => {
        if (valid) {
          login(this.loginInfo).then(res => {
            console.log(res)
            if (res.data.data.code === 200) {
              this.$message.success('登录成功')
              this.$store.dispatch('SetToken', {token: res.data.data.data.token, checked: this.checked})
              this.$router.push({path: this.url || '/'})
              this.loginBtn = false
            } else {
              this.$message.error("登陆失败")
            }
          })
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
        top: 26%;
        width: 230px;
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