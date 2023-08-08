<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab icon="add" direction="up" color="primary">
      <q-fab-action
        color="primary"
        icon="fingerprint"
        @click="router.push('/auth')"
      />
    </q-fab>
  </q-page-sticky>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
