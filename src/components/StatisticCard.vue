<template>
  <q-card class="q-ma-sm text-dark" flat bordered>
    <q-item>
      <q-item-section class="q-my-md">
        <q-item-label class="text-h4 text-weight-light">
          {{ props.number }}
        </q-item-label>
        <q-item-label class="text-subtitle1">
          {{ props.title }}
          <q-chip
            text-color="white"
            dense
            :color="props.change! > 0 ? 'positive' : 'negative'"
            :icon="props.change! > 0 ?'bi-arrow-up-short':'bi-arrow-down-short'"
            :label="Math.abs(props.change!) + '%'"
          ></q-chip>
        </q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-avatar :class="props.color" size="64px">
          <q-icon :name="props.icon" color="white"></q-icon>
        </q-avatar>
      </q-item-section>
    </q-item>
    <q-separator></q-separator>
    <q-card-actions align="right" :class="props.color"> </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  change: Number,
  content: String,
  number: Number,
  color: String,
});
</script>
