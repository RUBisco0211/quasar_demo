import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin',
    children: [
      {
        path: '/admin',
        name: '',
        redirect: '/admin/home',
        meta: {
          icon: 'all_inbox',
          label: '管理系统',
        },
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: 'home',
            name: 'home',
            meta: {
              icon: 'home_work',
              label: '主页',
            },
            component: () => import('pages/DashBoard.vue'),
          },
          {
            path: 'todo',
            name: 'todo',
            meta: {
              icon: 'done_all',
              label: '待办事项',
            },
            component: () => import('pages/TodoPage.vue'),
          },
          {
            path: 'chart',
            name: 'chart',
            meta: {
              icon: 'insert_chart',
              label: '图表',
            },
            component: () => import('pages/ChartPage.vue'),
          },
          {
            path: 'userManage',
            name: 'userManage',
            meta: {
              icon: 'group',
              label: '用户管理',
            },
            component: () => import('pages/UserManagement.vue'),
          },
          {
            path: 'document',
            name: 'document',
            meta: {
              icon: 'book',
              label: '文档',
            },
            component: () => import('pages/DocumentPage.vue'),
          },
          {
            path: 'info',
            name: 'info',
            meta: {
              icon: 'info',
              label: '关于',
            },
            component: () => import('pages/InfoPage.vue'),
          },
        ],
      },
      {
        path: 'auth',
        name: 'auth',
        redirect: '/auth/login',
        component: () => import('layouts/AuthenticationLayout.vue'),
        children: [
          {
            path: 'login',
            name: 'login',
            component: () => import('pages/LogInForm.vue'),
          },
          {
            path: 'signup',
            name: 'signup',
            component: () => import('pages/SignUpForm.vue'),
          },
        ],
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
