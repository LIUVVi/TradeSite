<template>
  <div class="detail-container">
    <div class="title-bar-wrap">
      <img src="@/assets/img/common/back.svg" @click="goBack">
      <span>{{policyDetails.symbol}}</span>
    </div>
    <div class="income">
      <div>
        <div>收益[USDT]</div>
        <div>收益率</div>
      </div>
      <div>
        <div>{{policyDetails.totalprofit}}</div>
        <div>0%</div>
      </div>
    </div>
    <div class="price">
      <div>
        <div>最低价[USDT]</div>
        <div>最高价[USDT]</div>
        <div>最新价[USDT]</div>
      </div>
      <div>
        <div>{{policyDetails.grid_range[0]}}</div>
        <div>{{policyDetails.grid_range[1]}}</div>
        <div>--/--</div>
      </div>
    </div>
    <div class="price">
      <div>
        <div>手续费[USDT]</div>
        <div>单次买入金额[USDT]</div>
        <div>网格数[格]</div>
      </div>
      <div>
        <div>{{(policyDetails.money * 0.00005).toFixed(6)}}</div>
        <div>{{policyDetails.money}}</div>
        <div>{{policyDetails.grid_size}}</div>
      </div>
    </div>
<!--    <div id="map" class="map"/>-->
    <div class="btn-wrap">
      <button class="btn-change" @click="delPolicy">删除策略</button>
<!--      <button class="btn-trans" style="display: none" hidden>停止交易</button>-->
    </div>
    <div class="tradings" v-for="item in policyDetails.tradings">
      <div class="price">
        <div style="color: #c7ced4;margin-bottom: 10px">
          <div>创建时间</div>
          <div>{{item.create_time}}</div>
        </div>
      </div>
      <div class="price">
        <div>
          <div>买入价[USDT]</div>
          <div>买入个数</div>
          <div>卖出价[USDT]</div>
        </div>
        <div>
          <div>{{item.buy_price}}</div>
          <div>{{item.buy_amount.toFixed(3)}}</div>
          <div>{{item.sell_price.toFixed(3)}}</div>
        </div>
      </div>
      <div class="price">
        <div>
          <div>卖出个数</div>
          <div>利润</div>
          <div>交易状态</div>
        </div>
        <div>
          <div>{{item.sell_amount.toFixed(3)}}</div>
          <div>{{item.profit}}</div>
          <div v-if="item.is_deal" style="color: #4daa90">已成交</div>
          <div v-else style="color: #ff5050">未成交</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {getPolicyDetails, delPolicy} from "@/network/policy";

export default {
  name: "Details",
  data() {
    return {
      /* 策略详情 */
      policyDetails: {
        id: 0,
        symbol: '',
        money: '',
        grid_range:[],
        grid_size: '',
        grid_profit: '',
        trading_charge:'',
        tradings: []
      },
      /* 折线图配置
      /*charts: '',
      opinionData: ["3", "2", "4", "4", "5"],
      echartsOptions: {
        grid: {
          bottom: 40
        },
        title: {
          text: '收益'
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        legend: {
          data:['收益']
        },
        xAxis: {
          data: ['5/7', '5/8', '5/9', '5/10', '5/11', '5/12']
        },
        yAxis: {},
        series: [
          {
            lineStyle: {
              color: '#4daa90'
            },
            itemStyle: {
              color: '#4daa90'
            },
            smooth: true,
            type: 'line',
            data: [5, 20, 36, 10, 10, 80]
          }
        ]
      }*/
    }
  },
  created() {
    let id = this.$route.params.id
    getPolicyDetails(id).then(res => {
      console.log(res)
      this.policyDetails = res
    })

  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption(this.echartsOptions)
    },
    delPolicy() {
      delPolicy(this.policyDetails.id).then(res => {
        alert("删除成功")
        this.$router.go(-1)
      })
    }
  },
  /*mounted() {
    this.$nextTick(function() {
      this.drawLine('map')
    })
  }*/
}
</script>

<style scoped>
.detail-container {
  width: calc(100% - 20px);
  height: 500px;
  padding: 10px;
  font-size: 22px;
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
.title-bar-wrap {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
.title-bar-wrap>img {
  height: 30px;
}

.income {
  margin-top: 20px;
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
  color: #4daa90;
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
.price:last-child {
  margin-top: 10px;
}
/*.map {
  width: 100%;
  height: 270px;
  margin-top: 20px;
}*/
.btn-wrap {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.btn-wrap>button {
  border: none;
  width: 100%;
  color: #FFFFFF;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}
.btn-change {
  background-color: #4e71ff;
}
.btn-trans {
  background-color: #ff5050;
}
.title-bar-wrap>img {
  cursor: pointer;
}
.tradings {
  margin-top: 20px;
}
</style>
