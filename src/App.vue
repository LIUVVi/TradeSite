<template>
  <router-view/>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}

window.onload = function() {
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault()
  })
}
</script>

<style>
@import "assets/css/base.css";
</style>
