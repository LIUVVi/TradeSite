<template>
  <div class="market-container">
    <div class="market-header">
      <span>名称/[24h/成交额]</span>
      <span>最新价/[USDT]</span>
      <span>涨跌幅</span>
    </div>
    <div class="card-wrap">
      <market-card v-for="(item,index) in getSymbolKeys()" :key="index"
                   :currency="item"
                   :amount="symbolObject[item].tick.amount.toFixed(2)"
                   :vol="symbolObject[item].tick.vol"
                   :close="symbolObject[item].tick.close"
                   :open="symbolObject[item].tick.open"/>
    </div>
  </div>
</template>

<script>
import MarketCard from "@/components/market/MarketCard";
import * as pako from "pako";

export default {
  name: "HomeMarket",
  components: {
    MarketCard
  },
  data() {
    return {
      symbolInfoList: [
          {
            ch: '',
            tick: {
              amount: 0,
              vol: 0,
              close: 0,
              low: 0,
              high: 0
            }
          }
      ],
      symbolObject: {
      },
      symbolList: ['btcusdt', 'ethusdt', 'htusdt', 'dotusdt', 'xrpusdt', 'linkusdt', 'ltcusdt', 'dogeusdt']
    }
  },
  created() {

    this.getMarketInfo()

    setInterval(() => {
      // console.log(JSON.stringify(this.symbolInfoList))
      // console.log(this.symbolObject)
      console.log(this.getSymbolKeys())
    },600)
  },
  methods: {

    getSymbolKeys() {
      let symbolKeys = this.symbolObject
      let symbolKeysArray = []

      for(let key in symbolKeys) {
        symbolKeysArray.push(key)
      }
      return symbolKeysArray
    },

    getMarketInfo() {
      let ws = new WebSocket("wss://api.huobi.pro/feed")

      const THAT = this

      if ("WebSocket" in window) {
        ws.onopen = function () {
          for (let i = 0; i < THAT.symbolList.length; i++) {
            ws.send(JSON.stringify({
              "sub": "market."+THAT.symbolList[i]+".kline.1day",
              "id": "id1"
            }))
          }
        };

        ws.onmessage = function (evt) {
          let received_msg = evt.data;

          let reader = new FileReader();
          let that = this

          reader.readAsArrayBuffer(received_msg, "utf-8");
          reader.onload = function () {

            // console.log("blob转ArrayBuffer数据类型", reader.result);
            // 对数据进行解压
            let msg = JSON.parse(pako.ungzip(reader.result, {
              to: "string"
            }));


            if(msg.ch && msg.ch !== undefined) {
              msg.tick.amount = msg.tick.amount/1000000
              msg.tick.vol = (msg.tick.vol/1000000).toFixed(2)
              msg.tick.close = msg.tick.close
              THAT.symbolObject[msg.ch.split(".")[1]] = msg
              // console.log(THAT.symbolObject)
              // console.log("onmessage")
            }



            if (msg.ping != null && msg.ping != undefined) {
              // console.log("SEND PING")
              // ws.send(JSON.stringify({"ping": getCurrentTime()}))
              ws.send(JSON.stringify({"ping": (new Date).getTime()}));
            }
          }
        };

        ws.onclose = function () {
          alert("连接已关闭...");
        };
      }
    }
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
