<template>
  <footer class="footer1">
    <div class="first">
      <img src="../assets/spotify-logo.svg" alt="" srcset="" />
    </div>
    <div class="second">
      <ul class="footer__list">
        <li>COMPANY</li>
        <li>
          <a> <router-link to=""> About </router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> Jobs </router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> For the records</router-link> </a>
        </li>
      </ul>
    </div>
    <div class="third">
      <ul class="footer__list">
        <li>COMMUNITIES</li>
        <li>
          <a> <router-link to=""> For Artists</router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> Developers</router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> Advertising</router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> Investors</router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> Vendors</router-link> </a>
        </li>
      </ul>
    </div>
    <div class="fourth">
      <ul class="footer__list">
        <li>USEFUL LINKS</li>
        <li>
          <a> <router-link to=""> Support</router-link> </a>
        </li>
        <li>
          <a> <router-link to="/webplayer"> Web Player</router-link> </a>
        </li>
        <li>
          <a> <router-link to=""> Free Mobile App</router-link> </a>
        </li>
      </ul>
    </div>
    <div class="fifth">
      <img src="../assets/ig-logo.svg" alt="instagram" class="icons" />
      <img src="../assets/twitter-logo.svg" alt="twitter" class="icons" />
      <img src="../assets/fb-logo.svg" alt="facebook" class="icons" />
    </div>
    <div class="misc">
      <span>Legal</span>
      <span>Privacy Center</span>
      <span>Privacy Policy</span>
      <span>Cookies</span>
      <span>About Ads</span>
      <span class="misc-right">© 2021 Spotify AB</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer1 {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: $color-body;
  padding: 1.6rem 2.4rem;
  color: $color-off-white;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 18% 18% 18% 18% 28%;
  grid-template-rows: 90% 10%;
  align-self: center;
  ul {
    list-style: none;

    li {
      position: relative;
      padding: 0.3rem;
    }
    li:hover {
      opacity: 90%;
      transition: ease-in;
    }
    a {
      text-decoration: none;
      color: $color-white;
      display: inline-block;
      padding: 0.2em;
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
  span {
    margin-right: 20px;
  }
  span:hover {
    cursor: pointer;
    color: $color-secondary;
  }
  img {
    height: 3rem;
  }
}

.footer__list {
  list-style: none;
}
.misc {
  padding-top: 1.6em;
  grid-column: 1 / -1;

  .misc-right {
    padding-left: 72em;
    align-self: right;
  }
}
.fifth {
  margin: 0 30px 0 250px;
}
</style>
