<template>
  <div class="container">
    <home-tab-bar/>
    <div class="home-container">
        <router-view/>
    </div>
    <my-nav-bar/>
  </div>
</template>

<script>
import HomeBiPreview from "@/components/home/HomeBiPreview";
import MyNavBar from "@/components/common/MyNavBar";
import HomeTabBar from "@/components/home/HomeTabBar";
export default {
  name: 'Home',
  components: {
    HomeTabBar,
    HomeBiPreview,
    MyNavBar
  }
}
</script>

<style scoped>
.container {
  overflow: hidden;
}
.home-container{
  width: calc(100% - 20px);
  height: auto;
  padding: 10px;
  margin-bottom: 104px;
  margin-top: 40px;

}

</style>
