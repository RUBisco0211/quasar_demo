<template>
  <q-card>{{ props.news }}</q-card>
</template>
<script setup lang="ts">
const props = defineProps({
  news: Object,
});
</script>
