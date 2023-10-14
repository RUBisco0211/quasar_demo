<template>
  <q-expansion-item
    v-if="props.item!.children && props.item!.children.length > 0"
    class="q-py-none text-white"
    expand-icon-class="text-white"
    expand-icon="bi-caret-down"
  >
    <template v-slot:header>
      <q-item-section avatar>
        <q-icon :name="(props.item!.meta.icon as string)" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ props.item!.meta.label }}</q-item-label>
      </q-item-section>
    </template>
    <menu-list-item
      v-for="item in props.item!.children"
      :item="item"
      :key="item.name.toString"
    ></menu-list-item>
  </q-expansion-item>
  <q-item
    v-else
    v-ripple
    clickable
    :to="props.item!.path"
    class="q-py-none"
    active-class="active-item text-white"
  >
    <q-item-section avatar>
      <q-icon :name="(props.item!.meta.icon as string)" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ props.item!.meta.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script setup lang="ts">
const props = defineProps({
  item: Object,
});
</script>
