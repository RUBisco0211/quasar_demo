<template>
  <div class="q-ma-sm">
    <q-input
      v-model="cityName"
      type="text"
      square
      outlined
      @keyup.enter="search"
      label-slot
      clearable
      clear-icon="bi-x"
    >
      <template v-slot:label>
        <q-icon name="bi-buildings" size="20px" class="q-mr-xs"></q-icon
        >搜索城市
      </template>
      <template v-slot:append>
        <q-btn
          flat
          round
          icon="bi-search"
          color="primary"
          @click="search"
        ></q-btn>
      </template>
    </q-input>
    <q-card class="q-my-md text-grey-7" flat bordered>
      <q-list separator>
        <q-card-section>搜索结果 {{ cities.length }} 条</q-card-section>
        <q-separator></q-separator>
        <div v-if="cities.length">
          <q-expansion-item
            expand-icon-toggle
            v-for="city in cities"
            :key="city.id"
            ><template v-slot:header>
              <q-item-section>
                <q-item-label>{{ city.name }}</q-item-label>
                <q-item-label caption>{{ city.adm1 }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  round
                  size="md"
                  color="primary"
                  icon="bi-eye"
                  @click="showWeather(city.id)"
                ></q-btn>
              </q-item-section>
            </template>
            <q-card>
              <q-card-section>
                {{ JSON.stringify(city, null, 2) }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
        <div class="text-center q-ma-lg" v-else style="opacity: 0.5">
          <q-icon name="bi-archive" size="100px" color="primary"></q-icon>
          <div class="text-h6 text-primary text-center">暂无结果</div>
        </div>
        <q-inner-loading :showing="loading">
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
      </q-list>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { cityService } from 'src/api/index';
import { ref } from 'vue';
import { CityDto } from 'src/model/service/weatherModels';

const cityName = ref('');
const cities = ref<CityDto[]>([]);
const loading = ref(false);

function search() {
  cities.value = [];
  loading.value = true;
  cityService
    .getCities({
      location: cityName.value,
      key: cityService.defaultParams.key,
    })
    .then((response) => {
      loading.value = false;
      cities.value = response.data.location;
    })
    .catch(() => {
      loading.value = false;
    });
}

const emit = defineEmits(['showWeather']);
function showWeather(cityId: string) {
  emit('showWeather', cityId);
}
</script>
