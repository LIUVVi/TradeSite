<template>
  <div class="trans-container">
    <home-bi-preview v-for="(item, index) in transInfo" :key="index"
                     :type='item.symbol'
                     :totalprofit="item.totalprofit"
                     :income-rate="item.totalprofit"
                     :min-price="item.grid_range[0]"
                     :max-price="item.grid_range[1]"
                     :is_started="item.is_started"
                     @click="goDetails(item.id)"/>
  </div>
</template>

<script>
import HomeBiPreview from "@/components/home/HomeBiPreview";
import { getPolicy } from "@/network/policy";
import * as pako from "pako";

export default {
  name: "HomeTransactions",
  components: {
    HomeBiPreview
  },
  data() {
    return {
      transInfo: [
        {
          grid_range:[],
        }
      ]
    }
  },
  created() {
    getPolicy().then(res => {
      this.transInfo = res
      console.log("=============:"+res)
    })
  },
  methods: {
    goDetails(id) {
      this.$router.push('/details/' + id)
    },
  }

}
</script>

<style scoped>
.trans-container {
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
</style>
