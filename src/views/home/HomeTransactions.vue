<template>
  <div class="trans-container">
    <home-bi-preview v-for="item in transInfo"
                     :type='item.symbol'
                     :income="item.income"
                     :income-rate="item.totalprofit"
                     :min-price="item.grid_range[0]"
                     :max-price="item.grid_range[1]"
                     :now-price="item.nowPrice" @click="goDetails(item.id)"/>
  </div>
</template>

<script>
import HomeBiPreview from "@/components/home/HomeBiPreview";
import { getPolicy } from "@/network/policy";

export default {
  name: "HomeTransactions",
  components: {
    HomeBiPreview
  },
  data() {
    return {
      transInfo: [
        {
          id: '1',
          symbol: '',
          income: '+200',
          totalprofit: +123,
          grid_range:[],
          nowPrice: 0.6315,
        }
      ]
    }
  },
  methods: {
    goDetails(id) {
      this.$router.push('/details/' + id)
    }
  },
  created() {
    getPolicy().then(res => {
      this.transInfo = res
      console.log(res)
    })
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
