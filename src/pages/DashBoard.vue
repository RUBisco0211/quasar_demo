<template>
  <div class="text-h5 q-ma-md text-weight-light">主页</div>
  <div class="row q-pa-sm">
    <div class="col-6 col-md-2" v-for="card in cards" :key="card.title">
      <statistic-card
        :icon="card.icon"
        :title="card.title"
        :content="card.content"
        :number="card.number"
        :color="card.color"
      ></statistic-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import StatisticCard from 'src/components/StatisticCard.vue';
const cards = [
  {
    icon: 'bi-people',
    title: '新用户',
    content: '',
    number: 114,
    color: 'bg-primary',
  },
  {
    icon: 'bi-layout-wtf',
    title: '组件',
    content: '',
    number: 32,
    color: 'bg-warning',
  },
];
</script>
