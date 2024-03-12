import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/communicate',
      name: 'communicate',
      component: () => import('../views/communicate/CommunicatePage.vue'),
      children: [
        {
          path: 'props',
          name: 'CommunicateProps',
          component: () => import('../views/communicate/props/IndexCom.vue')
        },
        {
          path: 'emits',
          name: 'CommunicateEmits',
          component: () => import('../views/communicate/emits/IndexCom.vue')
        },
        {
          path: 'event_bug',
          name: 'event_bug',
          component: () => import('../views/communicate/bus/IndexCom.vue')
        },
        {
          path: 'v_model',
          name: 'v_model',
          component: () => import('../views/communicate/v-model/IndexCom.vue')
        },
        {
          path: 'ref-parent',
          name: 'ref-parent',
          component: () => import('../views/communicate/ref-parent/IndexCom.vue')
        },
        {
          path: 'provide-inject',
          name: 'provide-inject',
          component: () => import('../views/communicate/provide-inject/IndexCom.vue')
        },
        {
          path: 'pinia',
          name: 'pinia',
          component: () => import('../views/communicate/pinia/IndexCom.vue')
        },
        {
          path: 'slot',
          name: 'slot',
          component: () => import('../views/communicate/slot/IndexCom.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    }
  ]
})

export default router
