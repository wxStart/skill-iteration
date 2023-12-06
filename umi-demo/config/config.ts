import { defineConfig } from 'umi';

export default defineConfig({
  /**路由相关 */
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs', layout: true },
  ],
  /**路由相关 */

  npmClient: 'pnpm',
  /**基础配置 */
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  hash: true,
  base: '/', // 路由前缀
  inlineLimit: 10000, // 小于这个大小10kb的图片 base64

  jsMinifier: 'terser', //js的压缩方式
  jsMinifierOptions: {
    // js压缩的配置项
  },

//   outputPath: 'app-wx', // 输出目录
  publicPath: process.env.NODE_ENV === 'development' ? './' : '/spa/app-wx/', //打包前缀 默认是“/”
  /**基础配置 */

  //   chainWebpack(memo, { env, webpack }) {
  //     // webpack的配置
  //     // memo ：webpack 现有的配置
  //   },
  //   cssMinifier: 'esbuild', // css的压缩方式
  define: {
    FOO: 'bar', //定义全局变量
  },

  /** 对html的额外处理 */
  //   externals:{
  //     react:'React', // 不打包进主js，通过 配合headScripts 使用
  //   },
  //   headScripts: ['https://unpkg.com/react@18.2.42/umd/react.production.min.js'],
  links: [],
  metas: [],
  title: '我的umi页面',
  /** 对html的额外处理 */

  // 额外的扩展项
  extraBabelPlugins: [],
  extraBabelPresets: [],
  extraPostCSSPlugins: [],
  //   polyfill:{
  //     imports:['core-js/stable']
  //   },

  //   targets: {
  //     // 需要兼容最低的浏览器版本
  //     ie: 11,
  //     chrome: 80,
  //   },

  ignoreMomentLocale: false,
});
