<template>
  <div class="text-h5 q-ma-md text-weight-light">新闻</div>
  <div class="row q-pa-sm">
    <div class="col-12 col-md-3">
      <news-search @pass-key="search" @random="getRandom"></news-search>
    </div>
    <div class="col-12 col-md-6">
      <news-list :news-list="newsList"></news-list>
    </div>
  </div>
</template>
<script setup lang="ts">
import NewsSearch from '../components/news/NewsSearch.vue';
import NewsList from '../components/news/NewsList.vue';
import { NewsDto } from 'src/model/service/newsModels';
import { newsService } from 'src/api/index';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const newsList = ref<NewsDto[]>([]);

onMounted(() => {
  getRandom();
});

function search(key: string) {
  if (key === '') {
    $q.notify({
      message: '请输入关键词',
      color: 'warning',
      timeout: 1000,
    });
    return;
  }
  newsList.value = [];
  newsService
    .getNews({
      num: 30,
      word: key,
    })
    .then((response) => {
      newsList.value = response.data.data.newslist;
    });
}

function getRandom() {
  newsList.value = [];
  newsService
    .getNews({
      num: 30,
      rand: Math.floor(Math.random() * 30),
    })
    .then((response) => {
      newsList.value = response.data.data.newslist;
    });
}
</script>
