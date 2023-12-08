import { defineConfig } from 'umi';

/**
 * 默认是约定是路由：page下文件的名字就是路由的名字
 *  
 */

/**
 * 下方的是配置式路由
 */
const routes = defineConfig({
  routes: [
    {
      path: '/',
      component: 'index', // 自动会去pages目录下找，也可以自己写路径
      title: '首页',
    },
    {
      path: '/test', // 如果是约定式路由 则是/demo
      component: '@/pages/demo.tsx',
      title: '测试页',
    },
    {
      path: '/test/:id',
      component: '@/pages/demo.tsx',
      title: '测试页',
    },
    {
      path: '/user',
      component: 'user',
      title: '用户中心',
      routes: [
        {
          path: '/user',
          redirect: '/user/xm',
        },
        {
          path: '/user/xm',
          component: 'user/Xm',
          title: '小明',
        },
        {
          path: '/user/xy',
          component: 'user/Xy',
          title: '小杨',
        },
      ],
    },
    {
      path: '*',
      component: '404',
      title: '未知页面',
    },
  ],
}).routes;

export default routes;
