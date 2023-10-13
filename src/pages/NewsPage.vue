<template>
  <div class="text-h5 q-ma-md text-weight-light">新闻</div>
  <div class="row q-pa-sm">
    <div class="col-12 col-md-4">
      <news-search></news-search>
    </div>
    <div class="col-12 col-md-4">
        <random-news-list></random-news-list>
    </div>
  </div>
</template>
<script setup lang="ts">
import NewsSearch from '../components/NewsSearch.vue';
import RandomNewsList from '../components/RandomNewsList.vue';

</script>
