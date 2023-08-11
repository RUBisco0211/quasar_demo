<template>
  <div class="text-h5 q-ma-md text-weight-light">关于</div>
  <div class="row q-pa-sm">
    <div class="col-md-4 col-12" v-for="info in infos" :key="info.title">
      <info-card
        :src="info.src"
        :title="info.title"
        :content="info.content"
      ></info-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import InfoCard from 'src/components/InfoCard.vue';
const infos = [
  {
    src: 'https://pic3.zhimg.com/v2-d73df22d306f557a0d3d313d78f50f84_1440w.jpg?source=172ae18b',
    title: 'Vue3',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat harum odio totam qui, cupiditate aliquid molestias voluptates tenetur est saepe nam quas fuga, consequuntur dolores autem minima obcaecati. Nulla, natus?',
  },
  {
    src: 'https://picb.zhimg.com/80/v2-44fdf9faa96809c7222eb00f62719455_720w.jpg',
    title: 'Quasar',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat harum odio totam qui, cupiditate aliquid molestias voluptates tenetur est saepe nam quas fuga, consequuntur dolores autem minima obcaecati. Nulla, natus?',
  },
];
</script>
