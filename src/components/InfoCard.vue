<template>
  <q-card class="q-ma-sm">
    <q-img :src="props.src"></q-img>
    <q-card-section>
      <div class="text-h6">{{ props.title }}</div>
      <div class="text-subtitle1">{{ props.content }}</div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
const props = defineProps({
  src: String,
  title: String,
  content: String,
});
</script>
