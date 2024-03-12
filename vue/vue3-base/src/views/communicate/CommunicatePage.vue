<template>
  <ul class="ul">
    <li v-for="route in routes" :key="route.path">
      <RouterLink :to="route.path">{{ route.name }}</RouterLink>
    </li>
  </ul>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
interface RouteItem {
  path: string
  name: string
}
const basepath = '/communicate'
const routes: [RouteItem] = [
  {
    path: 'props',
    name: 'props'
  },
  {
    path: 'emits',
    name: 'emits'
  },
  {
    path: 'event_bug',
    name: 'event_bug'
  },
  {
    path: 'v_model',
    name: 'v_model'
  },
  {
    path: 'ref-parent',
    name: 'ref-parent'
  },
  {
    path: 'provide-inject',
    name: 'provide-inject'
  },
  {
    path: 'pinia',
    name: 'pinia'
  },
  {
    path: 'slot',
    name: 'slot'
  }
].map((el) => ({
  ...el,
  path: `${basepath}/${el.path}`
})) as [RouteItem]
</script>

<style scoped>
.ul {
  display: flex;
  > li {
    margin: 6px 12px;
  }
}
</style>
