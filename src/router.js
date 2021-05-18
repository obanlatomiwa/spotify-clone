import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue'
import WebPlayer from './components/WebPlayer.vue'
import Loader from './components/Loader.vue'




const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/webplayer",
      name: "WebPlayer",
      component: WebPlayer,
    },
    {
      path: "/loader",
      name: "loader",
      component: Loader,
    },
  ];
  
  
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;