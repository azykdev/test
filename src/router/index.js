import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/document/:id",
      name: "document",
      component: () => import("@/views/DocDetailView.vue"),
    },
  ],
});

export default router;
