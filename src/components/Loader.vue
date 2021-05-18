<template>
  <div>
    <lottie-player
      class="lottie"
      src="https://assets7.lottiefiles.com/packages/lf20_ugylqlzx.json"
      background="transparent"
      speed="1"
      style="width: 400px; height: 400px;"
      autoplay
      loop
    >
    </lottie-player>
  </div>
</template>

<script>
import "@lottiefiles/lottie-player";

export default {};
</script>

<style lang="scss" scoped>
div {
  background: black;
  height: 100vh;
}

.lottie {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 250px 0px;
}
</style>
