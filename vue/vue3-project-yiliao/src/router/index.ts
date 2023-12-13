import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },

    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          path: "registration",
          component: () => import("@/pages/hospital/registration/index.vue"),
        },
        {
          path: "details",
          component: () => import("@/pages/hospital/details/index.vue"),
        },
      ],
    },

    {
      path: "/test1",
      component: () => import("@/pages/test/index1.vue"),
    },
    {
      path: "/test2",
      component: () => import("@/pages/test/index2.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
