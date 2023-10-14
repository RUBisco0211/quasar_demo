<template>
  <div class="q-ma-sm">
    <q-card flat bordered>
      <q-card-section class="q-pa-none">
        <q-list separator>
          <div v-if="props.newsList!.length">
            <news-item
              v-for="news in props.newsList"
              :news="news"
              :key="news.id"
            ></news-item>
          </div>
          <div class="text-center q-ma-lg" v-else style="opacity: 0.5">
            <q-icon name="bi-archive" size="100px" color="primary"></q-icon>
            <div class="text-h6 text-primary text-center">暂无结果</div>
          </div>
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
