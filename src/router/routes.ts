import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin',
    children: [
      {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/home',
        meta: {
          icon: 'bi-inboxes-fill',
          label: '管理系统',
        },
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: 'home',
            name: 'home',
            meta: {
              icon: 'bi-speedometer2',
              label: '主页',
              depth: 0,
            },
            component: () => import('pages/DashBoard.vue'),
          },
          {
            path: 'todo',
            name: 'todo',
            meta: {
              icon: 'bi-list-check',
              label: '待办事项',
              depth: 0,
            },
            component: () => import('pages/TodoPage.vue'),
          },
          {
            path: 'weather',
            name: 'weather',
            meta: {
              icon: 'bi-cloud-sun',
              label: '天气',
              depth: 0,
            },
            component: () => import('pages/WeatherPage.vue'),
          },
          {
            path: 'chart',
            name: 'chart',
            meta: {
              icon: 'bi-pie-chart',
              label: '图表',
              depth: 0,
            },
            component: () => import('pages/ChartPage.vue'),
          },
          {
            path: 'userManage',
            name: 'userManage',
            meta: {
              icon: 'bi-people',
              label: '用户管理',
              depth: 0,
            },
            component: () => import('pages/UserManagement.vue'),
          },
          {
            path: 'document',
            name: 'document',
            meta: {
              icon: 'bi-journal-code',
              label: '文档',
              depth: 0,
            },
            component: () => import('pages/DocumentPage.vue'),
          },
          {
            path: 'info',
            name: 'info',
            meta: {
              icon: 'bi-info-circle',
              label: '关于',
              depth: 0,
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
