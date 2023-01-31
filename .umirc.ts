import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'react', //配置微应用的唯一名称
          entry: 'http://localhost:8002/a.html', //配置微应用的的入口地址
        },
        {
          name: 'micro-01', //配置微应用的唯一名称
          entry: 'http://localhost:8002/b.html', //配置微应用的的入口地址
        },
        {
          name: 'micro-02', //配置微应用的唯一名称
          entry: 'http://localhost:8001', //配置微应用的的入口地址
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
