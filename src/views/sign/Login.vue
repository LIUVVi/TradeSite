<template>
  <div class="login-container">
    <div class="title-bar-wrap">
      <img src="@/assets/img/common/back.svg" @click="goBack"/>
      <span>登录</span>
    </div>
    <div class="logo-wrap">
      <img class="logo" src="@/assets/img/common/logo.svg" alt="">
    </div>
    <div class="input-wrap">
      <input type="text" v-model="loginForm.username" placeholder="用户名/邮箱"><br/>
      <input type="password" v-model="loginForm.password" placeholder="密码"><br/>
      <button class="btn-login" @click="login">登录</button>
    </div>

  </div>
</template>

<script>
import {checkLogin} from "@/network/login";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    login() {
      checkLogin(this.loginForm).then(res => {
        localStorage.setItem("token", 'JWT ' + res.token)
        this.$router.push('/mine')
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  width: calc(100% - 20px);
  height: 500px;
  padding: 10px;
  font-size: 20px;
}

.title-bar-wrap {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}

.title-bar-wrap > img {
  height: 30px;
}
.logo-wrap {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.logo {
  width: 72px;
  height: 72px;
}
.input-wrap {
  width: 100%;
  height: 50px;
  margin-top: 20px;
}
.input-wrap input {
  width: calc(100% - 22px);
  height: 20px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #8f9eab;
  border-radius: 3px;
}
.btn-login {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 3px;
  border: none;
  background-color: #4e71ff;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
}
.title-bar-wrap>img {
  cursor: pointer;
}
</style>
