<template>
  <q-form>
    <q-input
      v-model="username"
      type="text"
      stack-label
      label-slot
      class="q-my-md"
      clear-icon="bi-x"
      clearable
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
      v-model="password"
      type="password"
      stack-label
      label-slot
      class="q-my-md"
      clear-icon="bi-x"
      clearable
      hint="请输入您的密码"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '请输入您的密码']"
    >
      <template v-slot:label>
        <q-icon name="bi-key-fill" size="20px" class="q-mr-xs"></q-icon>密码 *
      </template>
    </q-input>
    <q-input
      v-model="passwordAgain"
      type="password"
      stack-label
      label-slot
      class="q-my-md"
      clear-icon="bi-x"
      clearable
      hint="请重新输入密码"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || '请重新输入密码']"
    >
      <template v-slot:label>
        <q-icon name="bi-key-fill" size="20px" class="q-mr-xs"></q-icon>密码 *
      </template>
    </q-input>
    <div style="display: flex; justify-content: center" class="q-my-md">
      <q-btn unelevated
        color="primary"
        label="注册"
        size="md"
        class="q-py-sm"
        style="width: 100%"
        icon="bi-person-add">
      </q-btn>
    </div>
  </q-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const username = ref('admin');
const password = ref('123456');
const passwordAgain = ref('123456');
</script>
