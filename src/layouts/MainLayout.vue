<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" bordered>
      <q-toolbar class="q-my-xs text-grey-7">
        <q-btn
          flat
          dense
          round
          icon="bi-list"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <bread-crumbs></bread-crumbs>
        <q-space />
        <div class="gt-xs">
          <q-btn round flat icon="bi-bell">
            <q-tooltip>通知</q-tooltip>
          </q-btn>
          <q-btn round flat icon="bi-chat-square-quote">
            <q-badge
              v-if="messages.length"
              color="negative"
              rounded
              floating
              :label="messages.length"
            ></q-badge>
            <q-tooltip>消息</q-tooltip>
            <q-menu>
              <q-list>
                <q-item v-for="message in messages" :key="message.id" clickable>
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">{{
                      message.sender.charAt(0)
                    }}</q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ message.sender }}</q-item-label>
                    <q-item-label caption>{{ message.content }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item dense clickable>
                  <q-item-section avatar></q-item-section>
                  <q-item-section>
                    <q-item-label caption>更多...</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn-dropdown flat no-caps>
            <template v-slot:label>
              <q-item-section avatar>
                <q-avatar>
                  <q-img src="../assets/avatar/avatar.jpg"></q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>RUBisco</q-item-label>
                <q-item-label caption>@rubisco0211</q-item-label>
              </q-item-section>
            </template>
            <q-list class="text-grey-8">
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="bi-person"></q-icon>
                </q-item-section>
                <q-item-section>个人中心</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="bi-x"></q-icon>
                </q-item-section>
                <q-item-section>退出登录</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="xs">
          <q-btn flat round class="xs">
            <q-avatar>
              <q-img src="../assets/avatar/avatar.jpg"></q-img>
            </q-avatar>
            <q-menu>
              <q-list class="text-grey-8">
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="bi-bell"></q-icon>
                  </q-item-section>
                  <q-item-section>通知</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="bi-chat-square-quote"></q-icon>
                  </q-item-section>
                  <q-item-section>消息</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="bi-person"></q-icon>
                  </q-item-section>
                  <q-item-section>个人中心</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="bi-x"></q-icon>
                  </q-item-section>
                  <q-item-section>退出登录</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      elevated
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      show-if-above
      :width="250"
      :breakpoint="800"
      class="bg-primary text-white"
    >
      <q-scroll-area style="height: 100%">
        <q-item to="/" style="height: 58.81px" class="text-weight-bolder">
          <q-item-section avatar>
            <q-avatar size="lg">
              <q-img src="../assets/icons/favicon-32x32.png"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div
              class="text-h6 text-white"
              style="
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                  'Trebuchet MS', sans-serif;
              "
            >
              Quasar Demo
            </div>
          </q-item-section>
        </q-item>
        <menu-list></menu-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <q-page class="bg-grey-2">
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
        >
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </transition>
      </q-page>
      <floating-action-button></floating-action-button>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import MenuList from 'src/components/MenuList.vue';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import FloatingActionButton from 'src/components/FloatingActionButton.vue';
import { ref } from 'vue';

const miniState = ref(false);
const leftDrawerOpen = ref(false);
const messages = ref([
  {
    id: 1,
    sender: 'Somebody',
    content: 'hello!',
  },
  {
    id: 2,
    sender: 'Somebody',
    content: 'hello!',
  },
  {
    id: 3,
    sender: 'Somebody',
    content: 'hello!',
  },
]);
</script>
<style lang="scss">
.active-item {
  background-color: $secondary;
}
</style>
