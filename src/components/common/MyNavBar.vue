<template>
  <div class="nav-bar-container">
    <div class="nav-bar-item-wrap"  v-if="$route.path === '/home/market' || $route.path === '/home/trans'">
      <img  @click="goPage(1)" src="@/assets/img/common/bar/home-selected.svg" alt="">
      <img class="add" @click="goPage(2)" src="@/assets/img/common/bar/add.svg" alt="">
      <img @click="goPage(3)" src="@/assets/img/common/bar/my.svg" alt="">
    </div>
    <div class="nav-bar-item-wrap"  v-if="$route.path === '/addpolicy'">
      <img  @click="goPage(1)" src="@/assets/img/common/bar/home.svg" alt="">
      <img class="add" @click="goPage(2)" src="@/assets/img/common/bar/add.svg" alt="">
      <img @click="goPage(3)" src="@/assets/img/common/bar/my.svg" alt="">
    </div>
    <div class="nav-bar-item-wrap"  v-if="$route.path === '/mine'">
      <img  @click="goPage(1)" src="@/assets/img/common/bar/home.svg" alt="">
      <img class="add" @click="goPage(2)" src="@/assets/img/common/bar/add.svg" alt="">
      <img @click="goPage(3)" src="@/assets/img/common/bar/my-selected.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNavBar",
  methods: {
    goPage(num) {
      switch (num){
        case 1 : this.$router.push('/home/trans'); break;
        case 2 :
          if (localStorage.getItem("token") != null) {
            this.$router.push('/addpolicy')
          } else {
            this.$router.push('/login')
          }
        break;
        case 3 :
          console.log('---------'+localStorage.getItem("token"))
          if (localStorage.getItem("token") != null) {
            this.$router.push('/mine')
          } else {
            this.$router.push('/login')
          }
          break;
        default:
      }
    }
  }
}
</script>

<style scoped>
.nav-bar-container {
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: #FFFFFF;
  z-index: 999;
  bottom: 0;
  box-shadow: 0 -2px 2px #e8e8e8;
}

.nav-bar-item-wrap {
  width: 100%;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar-item-wrap>img {
  flex: 1;
  -webkit-user-drag: none;
  cursor: pointer;
}
.nav-bar-item-wrap>img:first-child {
  width: 30px;
  height: 30px;
}
.nav-bar-item-wrap>img:last-child {
  width: 30px;
  height: 30px;
}
.add {
  margin-top: -60px;
  width: 60px;
  height: 60px;
}
</style>
