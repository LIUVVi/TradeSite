<template>
  <div class="home-container">
    <div class="header-content">
      <div class="mine-header">
        <div class="header-left">
          <img class="avatar" src="@/assets/img/common/mine/avatar.svg" alt="">
          <div class="user-info">
            <p>{{userinfo.username}}</p>
            <p>{{userinfo.email}}</p>
          </div>
        </div>
        <div class="header-right">
          <img src="@/assets/img/common/mine/setting.svg" alt="">
        </div>
      </div>
      <div class="asset-container">
        <p class="asset-title">我的资产</p>
        <div class="income">
          <div>
            <div>收益[USDT]</div>
            <div>收益率</div>
          </div>
          <div>
            <div>0</div>
            <div>0%</div>
          </div>
        </div>
        <div class="money-wrap">
          <div class="item-left">
            <span>账户余额[USDT]</span>
            <span>{{userinfo.wallet}}</span>
          </div>
          <div class="item-right">
            <button class="draw">提币</button>
            <button class="invest">充币</button>
          </div>
        </div>
      </div>
    </div>
    <div class="share-star-container">
      <div><img src="@/assets/img/common/mine/share.svg" alt="">分享应用</div>
      <div><img src="@/assets/img/common/mine/star.svg" alt="">赏个好评</div>
    </div>
    <div class="share-star-container">
      <div><img src="@/assets/img/common/mine/feedback.svg" alt="">建议反馈</div>
      <div @click="goAbout"><img src="@/assets/img/common/mine/about.svg" alt="">关于我们</div>
    </div>
    <button class="login-out" @click="logout">退出登录</button>
  </div>
  <my-nav-bar/>
</template>

<script>
import MyNavBar from "@/components/common/MyNavBar";
import { getUserInfo } from "@/network/userinfo";

export default {
  name: 'Mine',
  components: {
    MyNavBar
  },
  data() {
    return {
      userinfo: {
        username: '',
        email: '',
        wallet: ''
      }
    }
  },
  methods: {
    goAbout() {
      this.$router.push('/about')
    },
    logout() {
      localStorage.removeItem("token")
      this.$router.push('/home/market')
    }
  },
  created() {
    getUserInfo().then(res => {
      this.userinfo = res
    })
  }
}

</script>

<style scoped>
.home-container{
  width: 100%;
  height: 100vh;
  background-color: #e8ebee;
}
.header-content {
  width: calc(100% - 20px);
  height: 280px;
  padding: 10px;
  background-color: #FFFFFF;
}
.mine-header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mine-header>div {
  height: 70px;
  flex: 1;
}

.header-left {
  display: flex;
  align-items: center;
}
.user-info {
  margin-left: 5px;
  font-weight: 600;
}
.user-info>p:last-child {
  color: #9b9b9b;
}
.avatar {
  margin-top: 5px;
  width: 60px;
  height: 60px;
}
.header-right {
  text-align: right;
}
.header-right>img {
  width: 30px;
  height: 30px;
  margin-top: 20px;
}
.asset-container {
  width: calc(100% - 20px);
  height: 150px;
  margin-top: 20px;
  padding: 10px;
  background-color: #4e71ff;
  border-radius: 10px;
}
.asset-title {
  color: white;
  font-weight: 600;
}
.income {
  margin-top: 5px;
}
.income>div:first-child {
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  color: #91a6fd;
}
.income>div:first-child>div {
  flex: 1;
  height: 20px;
}
.income>div:first-child>div:last-child {
  text-align: right;
}

.income>div:last-child {
  display: flex;
  font-size: 22px;
  font-weight: 600;
  height: 45px;
}
.income>div:last-child>div {
  flex: 1;
  height: 15px;
  color: #FFFFFF;
  font-size: 28px;
}
.income>div:last-child>div:last-child {
  text-align: right;
}
.share-star-container {
  margin-top: 15px;
  width: 100%;
  height: 80px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
}
.share-star-container>div {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}
.share-star-container img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.money-wrap {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
}
.money-wrap>div {
  flex: 1;
}
.item-left {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
}
.item-left>span {
  flex: 1;
}
.item-left>span:first-child {
  font-size: 12px;
  font-weight: 600;
  color: #91a6fd;
}
.item-left>span:last-child {
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 600;
}
.item-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.item-right>button {
  width: 60px;
  height: 30px;
  float: right;
  cursor: pointer;
  border-radius: 2px;
}
.draw {
  margin-right: 10px;
  border: 1px solid #91a6fd;
  background-color: #4e71ff;
  color: #FFFFFF;
}
.invest {
  border: none;
  background-color: #FFFFFF;
  color: #4e71ff;
}
.login-out {
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border: none;
  color: #ff5050;
  background-color: #FFFFFF;
  cursor: pointer;
}
</style>
