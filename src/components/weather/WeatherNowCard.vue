<template>
  <div class="q-ma-sm">
    <q-card flat bordered>
      <q-list>
        <q-item>气温: {{ props.weatherNow!.temp }} °C</q-item>
        <q-item>体感温度: {{ props.weatherNow!.feelsLike }} °C</q-item>
        <q-item>天气: {{ props.weatherNow!.text }}</q-item>
        <q-item>风向角: {{ props.weatherNow!.wind360 }}</q-item>
        <q-item>风向: {{ props.weatherNow!.windDir }}</q-item>
        <q-item>风力等级: {{ props.weatherNow!.windScale }}</q-item>
        <q-item>风速: {{ props.weatherNow!.windSpeed }} km/h</q-item>
        <q-item>湿度: {{ props.weatherNow!.humidity }} %</q-item>
        <q-item>气压: {{ props.weatherNow!.pressure }} Hp</q-item>
        <q-item>能见度: {{ props.weatherNow!.vis }} km</q-item>
      </q-list>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  weatherNow: Object,
});
</script>
