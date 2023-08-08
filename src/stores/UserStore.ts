import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../model/models';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);
  return { user };
});
