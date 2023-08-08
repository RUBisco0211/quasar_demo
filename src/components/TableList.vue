<template>
  <div class="q-ma-sm">
    <q-table
      title="用户管理"
      class="text-dark"
      :rows="users"
      :columns="columns!"
      row-key="id"
      selection="multiple"
      :selected-rows-label="selectedLabel"
      v-model:selected="selected"
      separator="vertical"
    >
      <template v-slot:header-selection="scope">
        <q-checkbox
          dense
          v-model="scope.selected"
          checked-icon="task_alt"
          unchecked-icon="radio_button_unchecked"
          indeterminate-icon="remove_circle_outline"
        ></q-checkbox>
      </template>
      <template v-slot:body-selection="scope">
        <q-checkbox
          dense
          v-model="scope.selected"
          checked-icon="task_alt"
          unchecked-icon="radio_button_unchecked"
          indeterminate-icon="remove_circle_outline"
        ></q-checkbox>
      </template>
      <template v-slot:top-right>
        <q-btn-group flat>
          <q-btn
            flat
            stack
            color="primary"
            icon="add"
            label="新增"
            @click="add"
          />
          <q-btn flat stack color="primary" icon="search" label="搜索" />
          <q-btn flat stack color="primary" icon="archive" label="导出" />
        </q-btn-group>
      </template>
    </q-table>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const users = ref([
  {
    id: 1,
    username: 'rubisco0211',
    nickname: 'RUBisco',
    email: '1205456072@qq.com',
    phone: '18759125150',
    createTime: '2023-08-03 09:30:32',
    status: 'normal',
  },
  {
    id: 2,
    username: 'rubisco0211',
    nickname: 'RUBisco',
    email: '1205456072@qq.com',
    phone: '18759125150',
    createTime: '2023-08-03 09:30:32',
    status: 'normal',
  },
  {
    id: 3,
    username: 'rubisco0211',
    nickname: 'RUBisco',
    email: '1205456072@qq.com',
    phone: '18759125150',
    createTime: '2023-08-03 09:30:32',
    status: 'normal',
  },
  {
    id: 4,
    username: 'rubisco0211',
    nickname: 'RUBisco',
    email: '1205456072@qq.com',
    phone: '18759125150',
    createTime: '2023-08-03 09:30:32',
    status: 'normal',
  },
]);
const keys = Object.keys(users.value[0]);
const columns = keys.forEach((key) => {
  return {
    name: key,
    label: key,
    field: key,
  };
});
const selected = ref([]);
function selectedLabel() {
  return selected.value.length === 0
    ? ''
    : `${selected.value.length}` + '行被选中';
}
function add() {
  const user = { ...users.value[0] };
  user.id = users.value.length + 1;
  users.value.push(user);
}
</script>
