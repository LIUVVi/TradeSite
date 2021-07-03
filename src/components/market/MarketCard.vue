<template>
  <div class="card-container">
    <div class="content-wrap">
      <div>{{currency}}/{{amount}}M</div>
      <div>{{vol}}M</div>
    </div>
    <div class="content-wrap">
      <div>{{close}}</div>
      <div>{{rmb}}RMB</div>
    </div>
    <div :class="[ad >= 0 ? 'psrate' : 'ngrate']"><span v-show="ad > 0">+</span><span v-show="ad < 0"></span>{{ad}}%</div>
  </div>
</template>

<script>
export default {
  name: "MarketCard",
  props: {
    currency: String,
    amount: Number,
    vol: Number,
    close: Number,
    open: Number
  },
  computed: {
    ad() {
      return ((this.close - this.open) / this.open * 100).toFixed(2)
    },
    rmb() {
      return (this.close * 6.5).toFixed(2)
    }
  }
}
</script>

<style scoped>
.card-container {
  width: 100%;
  height: 50px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
}
.card-container>div {
  flex: 1;
  font-weight: 600;
}
.card-container>div:last-child {
  text-align: right;

}
.psrate {
  color: #4daa90;
}
.ngrate {
  color: #ff5050;
}
.content-wrap {
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.content-wrap>div {
  flex: 1;
  line-height: 25px;
}
.content-wrap>div:last-child {
  color: #8f9eab;
}
</style>
