import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/games/:id",
      name: "games",
      component: () => import("../views/GamesView.vue"),
    },
  ],
});

export default router;
