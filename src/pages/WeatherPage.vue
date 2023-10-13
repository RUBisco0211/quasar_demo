<template>
  <div class="text-h5 q-ma-md text-weight-light">天气</div>
  <div class="row q-pa-sm">
    <div class="col-12 col-md-4">
      <city-list @show-weather="showWeather"></city-list>
    </div>
    <div class="col-12 col-md-4">
      <weather-now-card :weather-now="weatherNow"></weather-now-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import CityList from 'src/components/CityList.vue';
import WeatherNowCard from 'src/components/WeatherNowCard.vue';
import { weatherService } from 'src/api';
import { ref } from 'vue';

const weatherNow = ref({});
function showWeather(cityId: string) {
  weatherService
    .getWeatherNow({
      key: weatherService.defaultParams.key,
      location: cityId,
    })
    .then((response) => {
      console.log(response);
      weatherNow.value = response.data.now;
    });
}
</script>
