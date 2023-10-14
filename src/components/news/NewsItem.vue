<template>
  <q-item clickable v-ripple class="q-py-md" @click="gotoNewsSource">
    <q-item-section side thumbnail>
      <img :src="props.news!.picUrl" class="q-pl-md" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ props.news!.title + '...' }}</q-item-label>
      <q-item-label caption>{{
        props.news!.description.slice(0, -6)
      }}</q-item-label>
    </q-item-section>
    <q-space></q-space>
    <q-item-section side>
        <q-btn round flat icon="bi-three-dots"></q-btn>
    </q-item-section>
  </q-item>
</template>
<script setup lang="ts">
const props = defineProps({
  news: Object,
});

function gotoNewsSource() {
  window.open(props.news!.url, '_blank');
}
</script>
