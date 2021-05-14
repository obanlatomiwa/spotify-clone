<template lang="html">
  <header>
    <div class="header-logo">
      <img src="../assets/spotify-logo.svg" alt="" srcset="" />
    </div>
    <div class="header-menu">
      <ul>
        <li><a href="#">Premium</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Download</a></li>
        <li>
          <a> <router-link to="/webplayer"> Web Player </router-link> </a>
        </li>
        <li class="seperator">|</li>
        <li>
          <a> <router-link to="/signup"> Sign up </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/signup"> Log in </router-link> </a>
        </li>
      </ul>
    </div>
    <div class="lottie">
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_ugylqlzx.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        autoplay
      >
      </lottie-player>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

//
<style lang="scss" scoped>
.lottie {
  display: none;
}
header {
  height: 8rem;
  background-color: $color-body;
  padding: 0 2.4rem;

  display: flex;
  justify-content: space-between;

  .header-logo {
    align-self: center;
    img {
      height: 3rem;
    }
  }

  .header-menu {
    align-self: center;
    ul {
      padding: 0;
      list-style: none;
      display: table;

      li {
        display: table-cell;
        position: relative;
        padding: 1.6rem;
      }
      li:hover {
        opacity: 90%;
        transition: ease-in;
      }
      a {
        text-decoration: none;
        color: $color-white;
        text-transform: uppercase;

        display: inline-block;
        padding: 0.8em;
        position: relative;
      }
      a:hover {
        text-decoration: none;
        color: $color-secondary;
      }
      a:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 1rem;
        content: "";
        display: block;
        height: 0.2rem;
        left: 50%;
        position: absolute;
        transition: width 0.4s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      a:hover:after {
        width: 50%;
        left: 23%;
      }
    }
  }
}

.seperator {
  text-decoration: none;
  color: $color-white;
  text-transform: uppercase;
  display: inline-block;
  padding: 0.8em;
  position: relative;
}
</style>
