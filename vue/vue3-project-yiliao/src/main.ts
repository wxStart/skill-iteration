import { createApp } from "vue";

import App from "@/App.vue";

//所有的操作都放在step里面 避免main.js过于臃肿
import init from "@/step";  

// 创建
const app = createApp(App);


// 初始化 
init(app)


// 挂载
app.mount("#app");
