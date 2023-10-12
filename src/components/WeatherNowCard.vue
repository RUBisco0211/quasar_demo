<template>
  <div class="q-ma-sm">
    <q-card flat bordered>{{ props.weatherNow }}</q-card>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  weatherNow: Object,
});
</script>
