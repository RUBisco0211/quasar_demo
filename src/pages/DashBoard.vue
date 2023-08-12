<template>
  <div class="text-h5 q-ma-md text-weight-light">主页</div>
  <div class="row q-pa-sm">
    <div class="col-6 col-md-3" v-for="card in cards" :key="card.title">
      <statistic-card
        :icon="card.icon"
        :title="card.title"
        :change="card.change"
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
    change: 20,
    content: '',
    number: 114,
    color: 'bg-info',
  },
  {
    icon: 'bi-layout-wtf',
    title: '组件',
    change: 5,
    content: '',
    number: 32,
    color: 'bg-primary',
  },
  {
    icon: 'bi-eye',
    title: '访问量',
    change: -10,
    content: '',
    number: 1145,
    color: 'bg-warning',
  },
  {
    icon: 'bi-database',
    title: '数据量',
    change: 5,
    content: '',
    number: 1024,
    color: 'bg-accent',
  },
];
</script>
