<template>
  <div class="card-container">
    <div class="content-wrap">
      <div>DOGE/2550亿</div>
      <div>￥2000万</div>
    </div>
    <div class="content-wrap">
      <div>0.6253</div>
      <div>￥3.25</div>
    </div>
    <div>+25%</div>
  </div>
</template>

<script>
export default {
  name: "MarketCard"
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
  color: #4daa90;
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
