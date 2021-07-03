<template>
  <div class="home-container">
    <div class="tab-container">
      <span class="tab-selected">创建策略</span>
    </div>
    <div class="input-container">
<!--      <select class="input-select" v-model="policyForm.symbol">
        <option value='0' disabled selected style='display:none;color: #c7ced4'>请选择币种</option>
        <option value ="DOGE">DOGE</option>
        <option value ="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
        <option value="HT">HT</option>
        <option value="DOT">DOT</option>
        <option value="LINK">LINK</option>
        <option value="XRP">XRP</option>
      </select>-->
      <input type="text"  v-model="policyForm.symbol" placeholder="请输入交易币对">
      <input type="number"
             placeholder="最低区间[USDT]"
             v-model.number="block.low"/><br/>
      <input type="number"
             placeholder="最高区间[USDT]"
             v-model.number="block.high"/><br/>
      <input type="number"
             placeholder="每格利润[USDT]"
             v-model.number="policyForm.grid_profit"/><br/>
      <input type="number"
             placeholder="网格数量[2-99:格]"
             v-model.number="policyForm.grid_size"/><br/>
      <input type="number"
             placeholder="单次投入金额[USDT]"
             v-model.number="policyForm.money"/>
    </div>
    <button class="add-policy" @click="addPolicy">立即创建</button>
  </div>
  <my-nav-bar/>
</template>

<script>
import MyNavBar from "@/components/common/MyNavBar";
import {addPolicy} from "@/network/policy";

export default {
  name: 'AddPolicy',
  data() {
    return {
      block: {
        low: '',
        high: '',
      },
      policyForm: {
        symbol: '',
        money: '',
        grid_range: '',
        grid_profit: '',
        grid_size: ''
      }
    }
  },
  components: {
    MyNavBar
  },
  methods: {
    addPolicy() {
      this.policyForm.grid_range = [this.block.low, this.block.high]
      addPolicy(this.policyForm).then(res => {
        alert('添加成功');
        this.$router.push('/home/trans')
      })
    }
  }
}
</script>

<style scoped>
.home-container{
  width: calc(100% - 20px);
  height: auto;
  padding: 10px;
  margin-bottom: 104px;
}
.tab-container {
  width: 100%;
}
.tab-selected {
  font-size: 22px;
}

.input-container {
  width: 100%;
}
.input-select {
  -webkit-appearance: none;
  width: calc(100% - 2px);
  height: 40px;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border: 1px solid #c7ced4;
  border-radius: 2px;
}
.input-container>input {
  width: calc(100% - 24px);
  height: 20px;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border: 1px solid #c7ced4;
  border-radius: 2px;
}
.add-policy {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #4e71ff;
}
</style>
