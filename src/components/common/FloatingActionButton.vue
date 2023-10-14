<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab icon="bi-plus-lg" text-color="dark" direction="up" color="warning">
      <q-fab-action
        color="primary"
        icon="bi-fingerprint"
        @click="router.push('/auth')"
      />
    </q-fab>
  </q-page-sticky>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
