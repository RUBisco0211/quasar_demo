<template>
  <div class="q-ma-sm">
    <q-input
      v-model="key"
      type="text"
      square
      outlined
      label-slot
      clearable
      clear-icon="bi-x"
      @keyup.enter="pass"
    >
      <template v-slot:label>
        <q-icon name="bi-newspaper" size="20px" class="q-mr-xs"></q-icon
        >输入新闻关键词
      </template>
      <template v-slot:append>
        <q-btn
          flat
          round
          icon="bi-search"
          color="primary"
          @click="pass"
        ></q-btn>
        <q-btn
          flat
          round
          color="primary"
          icon="bi-arrow-repeat"
          @click="randomNews"
        ></q-btn>
      </template>
    </q-input>
    <q-card flat bordered class="q-my-md text-grey-7">
      <q-card-section>关键词</q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-chip
          v-for="keyword in keywordList"
          :key="keyword"
          text-color="white"
          clickable
          color="primary"
          @click="autocomplete(keyword)"
          >{{ keyword }}</q-chip
        >
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const key = ref('');
const keywordList = ref([
  '原神',
  '华为',
  '小米',
  '特斯拉',
  '比亚迪',
  '腾讯',
  '米哈游',
  '阿里',
]);

const emit = defineEmits(['passKey', 'random']);
function autocomplete(keyword: string) {
  key.value = keyword;
  emit('passKey', key.value);
}
function pass() {
  emit('passKey', key.value);
}
function randomNews() {
  emit('random');
}
</script>
