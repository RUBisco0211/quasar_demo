<template>
  <div class="q-ma-sm">
    <q-card flat bordered>
      <q-card-section class="q-pa-none">
        <q-list separator>
          <news-item
            v-for="news in props.newsList"
            :news="news"
            :key="news.id"
          ></news-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { NewsDto } from 'src/model/service/newsModels';
import NewsItem from './NewsItem.vue';

const props = defineProps({
  newsList: Array<NewsDto>,
});
</script>
