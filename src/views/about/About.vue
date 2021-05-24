<template>
  <div class="login-container">
    <div class="title-bar-wrap">
      <img src="@/assets/img/common/back.svg" @click="goBack"/>
      <span>关于我们</span>
    </div>
    <div class="logo-wrap">
      <img class="logo" src="@/assets/img/common/logo.svg" alt="">
    </div>
    <div class="input-wrap">
      <div>
        <span>当前版本</span>
        <span>v1.0.beta</span>
      </div>
      <div>
        <span>联系方式</span>
        <span>tradesite@163.com</span>
      </div>
      <div>
        <span>开发团队</span>
        <span>第一组</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    goBack() {
      this.$router.go(-1)
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
  height: auto;
  margin-top: 20px;
}
.input-wrap>div {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #e8e8e8;
}
.input-wrap>div>span {
  flex: 1;
}
.input-wrap>div>span:last-child {
  text-align: right;
}
.title-bar-wrap>img {
  cursor: pointer;
}
</style>
