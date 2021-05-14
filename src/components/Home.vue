<template>
  <div class="pages">
    <Header></Header>
    <div class="container">
      <div><h1>Listening is everything</h1></div>
      <p>
        Millions of songs and podcasts. No credit card needed.
      </p>
      <router-link to="/signup"
        ><button class="btn-pill-pry-ld">GET SPOTIFY FREE</button></router-link
      >
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@lottiefiles/lottie-player";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    // Icons,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(41, 65, 171);
  background: url(https://www-growth.scdn.co/static/home/bursts.svg) no-repeat;
  background-size: 170%;
  background-position: 44% 7%;
  height: 100vh;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 846px;
  background-color: rgb(41, 65, 171);
  background-position: center top 30%;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;

  div {
    padding: 0px 0px 40px;
    h1 {
      color: #1ed760;
    }
  }
  p {
    padding: 0px 0px 40px;
    color: #1ed760;
  }
  button {
    // padding: 40px;
    text: rgb(41, 65, 171);
  }
}
</style>
