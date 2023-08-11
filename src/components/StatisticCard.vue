<template>
  <q-card class="q-ma-sm text-grey-8" flat bordered>
    <q-item>
      <q-item-section class="">
        <q-item-label class="text-h3 text-weight-light">
          {{ props.number }}
        </q-item-label>
        <q-item-label class="text-h6">
          {{ props.title }}
        </q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-icon :name="props.icon" size="36px"></q-icon>
      </q-item-section>
    </q-item>
    <q-card-section> </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  content: String,
  number: Number,
  color: String,
});
</script>
