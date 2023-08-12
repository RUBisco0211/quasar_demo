<template>
  <div class="q-ma-sm">
    <q-card flat bordered>
      <q-form class="q-pa-md">
        <div class="text-h6 q-mb-md text-grey-8">用户表单</div>
        <q-input
          v-model="form.username"
          type="text"
          label-slot
          class="q-my-xs"
          clearable
          clear-icon="bi-x"
        >
          <template v-slot:label>
            <q-icon name="bi-person" size="20px" class="q-mr-xs"></q-icon>用户名
          </template>
        </q-input>
        <q-input
          v-model="form.nickname"
          type="text"
          label-slot
          class="q-my-xs"
          clearable
          clear-icon="bi-x"
        >
          <template v-slot:label>
            <q-icon name="bi-sunglasses" size="20px" class="q-mr-xs"></q-icon
            >昵称
          </template>
        </q-input>
        <q-input
          v-model="form.email"
          type="email"
          label-slot
          class="q-my-xs"
          clearable
          clear-icon="bi-x"
        >
          <template v-slot:label>
            <q-icon name="bi-at" size="20px" class="q-mr-xs"></q-icon>邮箱地址
          </template>
          <template v-slot:append>
            <q-select
              v-model="mailSuffix"
              :options="mailOptions"
              options-dense
              label="邮箱域名"
            ></q-select>
          </template>
        </q-input>
        <q-input
          v-model="form.phone"
          type="email"
          label-slot
          class="q-my-xs"
          clearable
          clear-icon="bi-x"
        >
          <template v-slot:label>
            <q-icon name="bi-telephone" size="20px" class="q-mr-xs"></q-icon
            >电话号码
          </template>
        </q-input>
        <q-select
          v-model="form.location"
          :options="locationOptions.map((location) => location.value)"
          type="text"
          options-dense
          label-slot
          class="q-my-xs"
          clearable
          clear-icon="bi-x"
        >
          <template v-slot:label>
            <q-icon name="bi-geo-alt" size="20px" class="q-mr-xs"></q-icon>地区
          </template>
        </q-select>
        <q-option-group
          :options="locationOptions"
          type="radio"
          v-model="form.location"
          inline
        />
        <q-uploader
          label="上传文件"
          multiple
          flat
          bordered
          class="full-width"
        />
        <q-input
          v-model="date"
          clearable
          clear-icon="clear"
          label="时间"
          class="q-my-xs"
          label-slot
        >
          <template v-slot:before>
            <q-btn flat round icon="bi-calendar-date" color="primary">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm" flat>
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="确定"
                      color="primary"
                      flat
                    /></div
                ></q-date>
              </q-popup-proxy>
            </q-btn>
            <q-btn flat round icon="bi-clock" color="primary">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date" mask="YYYY-MM-DD HH:mm" flat format24h>
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="确定"
                      color="primary"
                      flat
                    /></div
                ></q-time>
              </q-popup-proxy>
            </q-btn>
          </template>
        </q-input>
        <div class="row">
          <q-input v-model="dateRange.from" label="开始日期" class="col-5">
            <template v-slot:before>
              <q-btn flat icon="bi-calendar-range" color="primary" round>
                <q-tooltip>选择日期范围</q-tooltip>
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date range v-model="dateRange" mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="确定" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-btn>
            </template>
          </q-input>
          <q-input
            class="col-1"
            borderless
            v-model="separator"
            readonly
          ></q-input>
          <q-input
            class="col-4"
            v-model="dateRange.to"
            label="结束日期"
          ></q-input>
        </div>
        <q-editor v-model="editor" min-height="15rem" class="q-my-md" />
      </q-form>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const form = ref({
  username: '',
  nickname: '',
  email: '',
  phone: '',
  location: '',
});
const mailSuffix = ref('@gmail.com');
const locationOptions = [
  {
    label: '北京',
    value: '北京',
  },
  {
    label: '上海',
    value: '上海',
  },
  {
    label: '深圳',
    value: '深圳',
  },
];
const mailOptions = ['@gmail.com', '@qq.com', '@outlook.com', '@163.com'];
const file = ref(null);
const date = ref('2019-02-11 12:25');
const dateRange = ref({
  from: '2013-02-12',
  to: '2013-02-23',
});
const separator = '至';
const editor = ref('');
</script>
