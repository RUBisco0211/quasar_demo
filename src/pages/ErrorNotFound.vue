<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.6">＞﹏＜ 这里没有内容哦...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        elevated
        push
        to="/"
        label="返回首页"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
