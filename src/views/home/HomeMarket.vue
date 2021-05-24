<template>
  <div class="market-container">
    <div class="market-header">
      <span>名称/[24h/USDT]</span>
      <span>最新价/[USDT]</span>
      <span>涨跌幅</span>
    </div>
    <div class="card-wrap">
      <market-card v-for="i in 100"/>
    </div>
  </div>
</template>

<script>
import MarketCard from "@/components/market/MarketCard";

export default {
  name: "HomeMarket",
  components: {
    MarketCard
  }
}
</script>

<style scoped>
.market-container {
  overflow: hidden;
  width: 100%;
  animation: enter 0.5s forwards ease;
}
@keyframes enter
{
  from {
    opacity: 0;
    margin-left: 30%;
  } to {
    opacity: 1;
    margin-left: 0;
  }
}
.market-header {
  width:  calc(100% - 20px);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #8f9eab;
  border-bottom: 1px solid #e8ebee;
  position: fixed;
  z-index: 999;
  background-color: #FFFFFF;
}
.market-header>span {
  flex: 1;
}
.market-header>span:last-child {
  text-align: right;
}
.card-wrap {
  margin-top: 30px;
}
</style>
