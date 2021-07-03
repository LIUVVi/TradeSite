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
      <div @click="toggleBox"><img src="@/assets/img/common/mine/share.svg" alt="" >分享应用</div>
      <div @click="togglemark"><img src="@/assets/img/common/mine/star.svg" alt="">赏个好评</div>
    </div>
    <div class="share-star-container">
      <div @click="togglefeed"><img src="@/assets/img/common/mine/feedback.svg" alt="">建议反馈</div>
      <div @click="goAbout"><img src="@/assets/img/common/mine/about.svg" alt="">关于我们</div>
    </div>
    <button class="login-out" @click="logout">退出登录</button>
  </div>
  <div class="share-box"></div>
  <my-nav-bar/>
  <div class="shart-container"  v-if="showbox">
    <div class="share-wrap">
      <div class="img-wrap">
        <img src="@/assets/img/code.png" alt="">
      </div>
      <div class="share-btn-wrap">
        <button @click="toggleBox">保存图片</button> |
        <button @click="toggleBox">复制链接</button>
      </div>
    </div>
  </div>
  <div class="shart-container" v-if="showmark">
    <div class="mark-warp">
      <div class="mark-bg">
        <img src="@/assets/img/star.svg" alt="">
      </div>
      <button @click="togglemark">发送好评</button>
    </div>
  </div>
  <div class="shart-container" v-if="showfeedback">
    <div class="mark-warp">
      <div class="mark-bg">
        <textarea class="feedbox"></textarea>
      </div>
      <button @click="togglefeed">发送反馈</button>
    </div>
  </div>
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
      },
      showbox: false,
      showmark: false,
      showfeedback: false
    }
  },
  methods: {
    goAbout() {
      this.$router.push('/about')
    },
    logout() {
      localStorage.removeItem("token")
      this.$router.push('/home/market')
    },
    toggleBox() {
      this.showbox = !this.showbox
    },
    togglemark() {
      this.showmark = !this.showmark
    },
    togglefeed() {
      this.showfeedback = !this.showfeedback
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
.feedbox {
  width: 290px;
  height: 80px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
}
.mark-bg {
  width: 350px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mark-warp>button {
  height: 40px;
  border: none;
  width: 350px;
  border-radius:  0px 0px 20px 20px;
  font-size: 16px;
  background-color: #f0f1f5;
  cursor: pointer;
}
.mark-warp {
  width: 350px;
  height: 180px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 15px #8f9eab;
  display: flex;
  flex-direction: column;
}
.shart-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 0.5s rainbow ease-in-out;
}
.share-wrap {
  width: 350px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 15px #8f9eab;
  z-index: 10000;
  display: flex;
  flex-direction: column;
}
.img-wrap {
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-wrap>img {
  width: 250px;
  height: 250px;
}
.share-btn-wrap {
  height: 50px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.share-btn-wrap>button {
  width: 160px;
  height: 40px;
  border-radius: 15px;
  background-color: #FFFFFF;
  cursor: pointer;
  border: none;
}
@keyframes rainbow {
  0% { top: 100vh }
  100% { top: 0 }
}
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
