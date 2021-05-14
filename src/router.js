import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue'
import WebPlayer from './components/WebPlayer.vue'



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
  ];
  
  
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;