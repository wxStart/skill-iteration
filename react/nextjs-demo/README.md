### 路由

有两种模式 app 或者 pages （对应两个文件件）

app 路由模式    

#### page.(ts[x]|js[x])
`/` 访问的是 `app/page.tsx`文件，
`/dashbard` 访问的是 `app/dashbard/page.tsx`文件，只有 page.tsx(ts,js,jsx) 文件才会被路由访问到
`/dashbard/settings` 访问的是 `app/dashbard/settings/page.tsx`文件

#### layout.(ts[x]|js[x])
某个目录的布局组件，`page.tsx`组件会加载在 `layout.tsx`的`children`中，有点类似嵌套路由那种
