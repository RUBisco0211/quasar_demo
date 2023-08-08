<template>
  <q-list class="q-ma-none">
    <menu-list-item
      v-for="route in routeList"
      :item="route"
      :key="route.name!.toString"
    ></menu-list-item>
  </q-list>
</template>
<script lang="ts" setup>
import MenuListItem from './MenuListItem.vue';
import routes from 'src/router/routes';

const routeList = routes[0].children![0].children;
</script>
