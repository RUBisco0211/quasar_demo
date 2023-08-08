<template>
  <q-breadcrumbs class="q-ml-sm">
    <q-breadcrumbs-el
      v-for="item in breadCrumbs.slice(1)"
      :key="item.path"
      :label="(item.meta.label! as string)"
      :icon="(item.meta.icon! as string)"
      :to="item.path"
    ></q-breadcrumbs-el>
  </q-breadcrumbs>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const breadCrumbs = computed(() => {
  return router.currentRoute.value.matched;
});
</script>
