<template>
  <q-card class="q-ma-sm" flat bordered :id="uuid">
    <div class="text-h6 text-grey-8 q-pa-md">{{ props.title }}</div>
    <q-separator></q-separator>
    <div
      :id="props.id"
      class="q-pa-md"
      style="height: 300px; width: 100%"
    ></div>
  </q-card>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  title: String,
  id: String,
  option: Object,
});
const uuid = new Date().getDate().toString();
let chart: any = null;
onMounted(() => {
  const watchChart = new ResizeObserver(() => {
    chart.resize({
      duration: 300,
    });
  });
  watchChart.observe(document.getElementById(uuid)!);
  initChart();
  window.addEventListener('resize', () => {
    chart.resize({
      duration: 300,
    });
  });
});

function initChart() {
  chart = echarts.init(document.getElementById(props.id!));
  chart.setOption(props.option!);
}
</script>
