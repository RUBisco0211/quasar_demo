<template>
  <div class="fullscreen bg-grey-3">
    <div class="absolute-center" id="box">
      <q-card flat style="border-radius: 10px">
        <q-item class="text-weight-bolder text-white q-mx-sm">
          <q-item-section avatar>
            <q-avatar size="xl">
              <q-img src="../assets/icons/favicon-128x128.png"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div
              class="text-h6 text-primary"
              style="
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                  'Trebuchet MS', sans-serif;
              "
            >
              Quasar Demo
            </div>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-tabs
          class="text-grey-8 q-pt-sm q-px-sm"
          dense
          inline-label
          active-color="primary"
          narrow-indicator
          align="left"
          :breakpoint="0"
        >
          <q-route-tab
            name="login"
            label="登录"
            icon="fingerprint"
            to="/auth/login"
          ></q-route-tab>
          <q-route-tab
            name="signup"
            label="注册"
            icon="person_add"
            to="/auth/signup"
          ></q-route-tab>
        </q-tabs>

        <div class="q-ma-lg q-pb-lg">
          <router-view v-slot="{ Component }">
            <keep-alive include="LogInForm, SignUpForm">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
#box {
  height: 500px;
  width: 400px;
}
@media screen and (min-width: 650px) {
  #box {
    width: 400px;
  }
}
@media screen and (max-width: 650px) {
  #box {
    width: 80%;
  }
}
</style>
