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
