<template>
  <div class="text-h5 q-ma-md text-weight-light">图表</div>
  <div class="row q-pa-sm">
    <div class="col-12 col-md-4" v-for="data in chartData" :key="data.id">
      <chart-card
        :title="data.title"
        :id="data.id"
        :option="data.option"
      ></chart-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ChartCard from 'src/components/ChartCard.vue';
import { barChartData } from 'assets/data/chart/barChartData';
import { ringChartData } from 'assets/data/chart/ringChartData';
import { stackLineChartData } from 'assets/data/chart/stackLineChartData';
const chartData = [barChartData, ringChartData, stackLineChartData];
</script>
