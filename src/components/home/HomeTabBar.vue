<template>
  <div class="tab-container">
    <span :class="{'tab-selected': $route.path === '/home/trans'}"
          class="tab-normal"
          @click="goPage(1)">交易情况</span>
    <span :class="{'tab-selected': $route.path === '/home/market'}"
          class="tab-normal"
          @click="goPage(2)">行情</span>
  </div>
</template>

<script>
export default {
  name: "HomeTabBar",
  data() {
    return {
    }
  },
  methods: {
    goPage(page) {
      if (page === 1) {
        if(localStorage.getItem("token") == null) {
          this.$router.push('/login')
        } else {
          this.$router.push('/home/trans')
        }

      } else {
        this.$router.push('/home/market')
      }
    }
  },
  created() {

  }
}
</script>

<style scoped>
.tab-container {
  width: calc(100% - 20px);
  padding: 10px;
  height: 30px;
  position: fixed;
  z-index: 999;
  background-color: #FFFFFF;
}
.tab-container>span {
  cursor: pointer;
}
.tab-container>span:last-child {
  margin-left: 10px;
}
.tab-normal {
  color: #8f9eab;
}
.tab-selected {
  color: #000000;
  font-size: 22px;
}

</style>
