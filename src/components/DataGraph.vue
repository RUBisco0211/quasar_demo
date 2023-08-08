<template>
  <q-card class="q-ma-sm q-pa-md" :id="uuid">
    <div class="text-h6 text-grey-8">{{ props.title }}</div>
    <div :id="props.id" style="height: 300px; width: 100%"></div>
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
