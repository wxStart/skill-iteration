import px2rem from "postcss-pxtorem";
export default {

 /**基础配置 */
  hash:true,
  html:{
    "template": "./public/index.ejs"
  },

  
    
  extraBabelPlugins: [
    // antd 按需导入
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
  ],

  extraPostCSSPlugins: [
    px2rem({
      rootValue: 75,
      // rootValue 字体的大小除该数字的大小就转换为rem  // import 'lib-flexible' 已经除了10  350px 会变成html：fontsize:35px
      // 设计图是750就设置为75 （实际上font-size会有54px的默认上限）  设计图是375 就设置37.5
      propList: ["*"],
    }),
  ],

  // 开发跨域代理
  proxy: {
    "/api": {
      target: "http://127.0.0.1:9000",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },

  // 根据不同的环境进行配置
  //   env: {
  //     development: {
  //       browserslist: [
  //         "> 1%",
  //         "last 1 chrome version",
  //         "last 1 firefox version",
  //         "last 1 safari version",
  //       ],
  //       extraBabelPlugins: ["dva-hmr"],
  //     },
  //     production: {
  //       browserslist: [
  //         "> 0.2%",
  //         "last 1 chrome version",
  //         "last 1 firefox version",
  //         "last 1 safari version",
  //       ],
  //     },
  //   },
};
