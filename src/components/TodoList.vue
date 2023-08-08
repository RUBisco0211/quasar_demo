<template>
  <q-list class="bg-white" style="border-radius: 10px" bordered>
    <q-item-label header>{{ props.title }}</q-item-label>
    <q-separator inset></q-separator>
    <q-expansion-item
      clickable
      expand-separator
      v-for="(item, index) in props.list"
      :key="item.id"
      class="bg-white q-ma-none"
      :class="{ 'done bg-blue-1': item.done }"
    >
      <template v-slot:header>
        <q-item-section avatar @click.stop="item.done = !item.done">
          <q-checkbox
            v-model="item.done"
            color="primary"
            class="no-pointer-events"
            checked-icon="task_alt"
            unchecked-icon="radio_button_unchecked"
          ></q-checkbox>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
        <q-item-section side class="q-mx-none">
          <q-btn
            icon="delete_outline"
            flat
            dense
            round
            v-show="item.done"
            @click.stop="deleteItem(index)"
          ></q-btn>
        </q-item-section>
      </template>
      <q-card>
        <q-card-section class="text-body1">
          {{ item.content }}
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<script setup lang="ts">
import { Task } from '../model/models';

const props = defineProps({
  list: Array<Task>,
  title: String,
});
const emit = defineEmits(['delete']);
function deleteItem(index: number) {
  emit('delete', index);
}
</script>
<style scoped lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
../model/models
