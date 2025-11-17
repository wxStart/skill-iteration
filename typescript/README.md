## TypeScript 相关知识点

### 环境搭建
1. `pnpm init`

2. 安装基本依赖
 `pnpm i   typescript  rollup  rollup-plugin-typescript2 @rollup/plugin-node-resolve  rollup-plugin-serve -D`

3.  配置文件 `rollup.config.js`
```js
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url); // 当前文件的路径
console.log("__filename: ", __filename);
const __dirname = dirname(__filename); // 当前文件的目录
console.log("__dirname: ", __dirname);

export default {
  input: resolve(__dirname, "src/index.ts"),
  output: {
    file: resolve(__dirname, "dist/index.js"),
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    typescript({
        tsconfig: resolve(__dirname, "tsconfig.json"),
    }),
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 5300,
    }),
  ],
};
    
```

4.  配置脚本 `dev`
```json
  "scripts": {
    "dev": "rollup -c rollup.config.js --w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
5. 配置是使用es6 模块 
```json
  "type": "module",
```

6. `tsconfig.json` 配置文件
`npm i -g  typescript `

生成 `tsconfig.json` 文件
```bash
tsc --init
```
