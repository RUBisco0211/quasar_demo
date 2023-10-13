<template>
  <div class="q-ma-sm">
    <q-list>
      <q-card flat bordered>
        <q-card-actions>
          <q-btn
            flat
            round
            color="primary"
            icon="bi-arrow-repeat"
            @click="getNews"
          ></q-btn>
        </q-card-actions>
        <q-separator></q-separator>
        <q-card-section>
          <news-card
            v-for="news in newsList"
            :news="news"
            :key="news.id"
          ></news-card>
        </q-card-section>
      </q-card>
    </q-list>
  </div>
</template>
<script setup lang="ts">
import NewsCard from './NewsCard.vue';
import { newsService } from 'src/api/index';
import { ref, onMounted } from 'vue';
import { NewsDto } from 'src/model/service/newsModels';

const newsList = ref<NewsDto[]>([]);

onMounted(() => {
  getNews();
});

function getNews() {
  newsService
    .getNews({
      num: 30,
      rand: Math.floor(Math.random() * 30),
    })
    .then((response) => {
      console.log(response.data);
      newsList.value = response.data.newslist;
    });
}
</script>
