<template>
  <q-form>
    <q-input
      v-model="user.username"
      type="text"
      stack-label
      label-slot
      class="q-my-md"
      clearable
      clear-icon="bi-x"
      hint="请输入您的账号"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '请输入您的账号']"
    >
      <template v-slot:label>
        <q-icon name="bi-person-fill" size="20px" class="q-mr-xs"></q-icon>账号
        *
      </template>
    </q-input>
    <q-input
      v-model="user.password"
      type="password"
      stack-label
      label-slot
      class="q-my-md"
      clearable
      clear-icon="bi-x"
      hint="请输入您的密码"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '请输入您的密码']"
    >
      <template v-slot:label>
        <q-icon name="bi-lock-fill" size="20px" class="q-mr-xs"></q-icon>密码 *
      </template>
    </q-input>
    <q-checkbox
      dense
      v-model="remember"
      label="记住密码"
      checked-icon="bi-check-circle-fill"
      unchecked-icon="bi-circle"
    ></q-checkbox>
    <div style="display: flex; justify-content: center" class="q-my-md">
      <q-btn
        push
        round
        color="primary"
        size="lg"
        class="glossy"
        icon="bi-fingerprint"
        @click="login"
      >
        <q-tooltip anchor="top middle" self="bottom middle"> 登录 </q-tooltip>
      </q-btn>
    </div>
  </q-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { User } from '../model/models';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref<User>({
  username: 'admin',
  password: '123456',
});
const remember = ref(false);
function login() {
  router.push('/');
}
</script>
