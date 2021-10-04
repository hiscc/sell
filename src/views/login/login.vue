<template>
  <div class="login-container">
    <el-form
      v-if="!isRegister"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="form-title">欢迎登录</div>

      <el-form-item prop="account">
        <el-input
          v-model="loginForm.account"
          type="text"
          style="width: 310px"
          placeholder="账号"
        >
          <svg-icon
            slot="prefix"
            icon-class="user"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          style="width: 310px"
          auto-complete="off"
          placeholder="密码"
          show-password
        >
          <svg-icon
            slot="prefix"
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>
      <el-form-item style="width: 100%">
        <!-- <a class="kuaishou" :href="kuaishouUrl">
          <svg-icon slot="prefix" icon-class="kuaishou" class="icon" />
          <span>快手登录</span>
        </a> -->
        <!-- <div @click="btnRegister" style="float: right; color: #999; cursor: pointer">暂无账号，去注册</div> -->
      </el-form-item>
    </el-form>

    <el-form
      v-if="isRegister"
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
      class="login-form"
    >
      <div class="form-title">注册</div>
      <el-form-item prop="account">
        <el-input
          v-model="registerForm.account"
          type="text"
          style="width: 310px"
          placeholder="账号"
        >
          <svg-icon
            slot="prefix"
            icon-class="user"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          minlength="6"
          style="width: 310px"
          auto-complete="off"
          placeholder="密码"
          show-password
        >
          <svg-icon
            slot="prefix"
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click="handleRegister"
        >
          注册
        </el-button>
      </el-form-item>
      <el-form-item style="width: 100%">
        <div
          @click="goLogin"
          style="float: right; color: #999; cursor: pointer"
        >
          已有账号，去登陆
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/utils/auth"
export default {
  components: {},
  name: "Login",
  data() {
    return {
      loginRules: {},
      loginForm: {},

      registerForm: {
        Code: "",
        mobile: "",
        verifyCode: "",
        account: "",
        password: "",
        type: 1,
        bindOauthCode: ""
      },
      codeImg: "",
      uuid: "",

      loading: false,
      redirect: "",

      isRegister: false,
      show: true, // 初始启用按钮
      count: "", // 初始化次数
      timer: null,

      // kuaishou
      code: null,
      kuaishouUrl: ""
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {},
  methods: {
    handleLogin() {
      this.request({
        url: "/login",
        method: "POST",
        data: this.loginForm
      }).then((res) => {
        console.log(res)
        const { msg, code } = res
        if (code == 200) {
          setToken(msg)
          window.location.assign("/")
        }
      })
    },
    btnRegister() {
      this.isRegister = true
    },
    goLogin() {
      this.isRegister = false
      this.registerForm = {
        account: "",
        password: ""
      }
    },

    handleRegister() {
      this.request({
        url: "/register",
        method: "POST",
        data: this.registerForm
      }).then((res) => {
        if (res.code != 3000) return
        window.location.reload("/#/")
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/variables.scss";

.login-container {
  height: 100vh;
  background-image: url("~@/assets/login-bg.jpg");
  background-size: cover;
}

.login-form {
  position: absolute;
  right: 15%;
  top: 20%;
  border-radius: 6px;
  background: $whitePrimary;
  width: 350px;
  padding: 20px;
  box-shadow: 0px 0px 6px 0px rgba(10, 63, 128, 0.3);

  .el-form-item {
    margin-bottom: 12px;
  }

  .form-title {
    font-size: 22px;
    color: $blackPrimary;
    margin-bottom: 20px;
  }

  .el-input {
    height: 38px;
  }

  .input-icon {
    height: 32px;
    width: 14px;
    margin-left: 2px;
    color: $blackSecond;
  }

  .account {
    width: 17px;
    height: 21px;
    margin-left: 2px;
    object-fit: center;
  }
}

.kuaishou {
  display: inline-flex;
  align-items: center;
  .icon {
    color: #ff4906 !important;
  }
  span {
    margin-left: 5px;
  }
}
</style>
