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
      'Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。',
  },
  {
    src: 'https://img2.baidu.com/it/u=2269184482,1265023871&fm=253&fmt=auto&app=138&f=PNG?w=450&h=253',
    title: 'Quasar',
    content:
      'Quasar 的座右铭是：编写代码一次并同时将其部署为网站、移动应用和/或Electron应用。 是的，所有这些应用都用一个代码库，通过使用最先进的CLI并辅以精心编写的、性能导向的Quasar Web组件，帮助您以最短时间开发应用。',
  },
  {
    src: 'https://pic1.zhimg.com/v2-4cf638c1ef47371e8eb3a444e5a8df33_1440w.jpg?source=172ae18b',
    title: 'TypeScript',
    content:
      'TypeScript 通过在JavaScript的基础上添加静态类型定义构建而成。TypeScript通过TypeScript编译器或Babel转译为JavaScript代码，可运行在任何浏览器，任何操作系统。',
  },
];
</script>
