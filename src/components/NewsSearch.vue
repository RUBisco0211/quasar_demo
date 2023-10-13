<template>
  <div class="q-ma-sm">
    <q-input
      v-model="keyword"
      type="text"
      square
      outlined
      label-slot
      clearable
      clear-icon="bi-x"
    >
      <template v-slot:label>
        <q-icon name="bi-newspaper" size="20px" class="q-mr-xs"></q-icon
        >输入新闻关键词
      </template>
      <template v-slot:append>
        <q-btn flat round icon="bi-search" color="primary"></q-btn>
      </template>
    </q-input>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const keyword = ref('');
</script>
