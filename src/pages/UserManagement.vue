<template>
    <div class="text-h5 q-ma-md text-weight-light">用户管理</div>
    <div class="row q-pa-sm">
      <div class="col-12 col-md-4">
        <user-form></user-form>
      </div>
      <div class="col-12 col-md-8">
        <table-list></table-list>
      </div>
    </div>
</template>
<script lang="ts" setup>
import TableList from 'src/components/TableList.vue';
import UserForm from 'src/components/UserForm.vue';
</script>
