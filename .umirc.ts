import { defineConfig } from 'umi';

export default defineConfig({

  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    { path: '/', component: '@/pages/index' },
  ],

  fastRefresh: {},

  proxy: {
    '/api': {
      target: 'http://172.16.2.235:8085', // 测试
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    }
  }

});
