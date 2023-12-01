import { defineConfig } from 'umi';

export default defineConfig({
  sass: {},
  nodeModulesTransform: {
    type: 'none',
  },

  // routes: [
  //   {
  //     exact: true,
  //     path: '/',
  //     redirect: '/internship',
  //   },
  //   {
  //     exact: true,
  //     path: '/index',
  //     redirect: '/internship',
  //   },
  //   {
  //     exact: true,
  //     path: '/account',
  //     component: '@/pages/account',
  //   },
  //   {
  //     path: '/',
  //     component: '@/layouts/home/index',
  //     routes : [
  //       {
  //         path: '/internship',
  //         component: '@/pages/internship',
  //         title: '实习',
  //       },
  //       {
  //         path: '/campus',
  //         component: '@/pages/campus',
  //         title: '校招',
  //       },
  //       {
  //         path: "/job",
  //           component: '@/pages/job',
  //           title: '社招',
  //       },
  //       {
  //         path: "/tv",
  //           component: '@/pages/tv',
  //           title: '空宣',
  //       },
  //       // {
  //       //   path:"/course",
  //       //     component: '@/pages/course',
  //       //     title: '课程',
  //       // },
  //       {
  //         path: "/knowledge",
  //         component: '@/pages/knowledge',
  //           title: '干货',
  //       }
  //
  //     ]
  //   },
  // ],

  fastRefresh: {},

  proxy: {
    '/api': {
      target: 'http://172.16.2.235:8085', // 测试
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
