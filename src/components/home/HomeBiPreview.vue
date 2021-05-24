<template>
  <div class="preview-container">
    <div class="title">
      <div>{{type}}/USDT</div>
      <div>详情</div>
    </div>
    <div class="income">
      <div>
        <div>收益[USDT]</div>
        <div>收益率</div>
      </div>
      <div>
        <div>{{income}}</div>
        <div :class="[incomeRate >= 0 ? 'psrate' : 'ngrate']">{{incomeRate}}%</div>
      </div>
    </div>
    <div class="price">
      <div>
        <div>最低价[USDT]</div>
        <div>最高价[USDT]</div>
        <div>最新价[USDT]</div>
      </div>
      <div>
        <div>{{minPrice}}</div>
        <div>{{maxPrice}}</div>
        <div>{{nowPrice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBiPreview",
  props: {
    type: String,
    income: String,
    incomeRate: Number,
    minPrice: Number,
    maxPrice: Number,
    nowPrice: Number,
  }
}
</script>

<style scoped>
.preview-container {
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #e8ebee;
  margin-top: 10px;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: self-end;
  justify-items: center;
}
.title>div {
  flex: 1;
  font-weight: 700;
  height: 40px;
}
.title>div:last-child {
  text-align: right;
  color: #4e71ff;
}
.income>div:first-child {
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 30px;
  color: #c7ced4;
}
.income>div:first-child>div {
  flex: 1;
  height: 30px;
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
}
.income>div:last-child>div:last-child {
  text-align: right;
}
.price>div {
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  color: #c7ced4;
}
.price>div:last-child {
  color: #000;
}
.price>div>div {
  flex: 1;
}
.price>div>div:last-child {
  text-align: right;
}
.psrate {
  color: #4daa90;
}
.ngrate {
  color: #ff5050;
}
</style>
