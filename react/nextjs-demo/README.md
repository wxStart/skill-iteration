### 路由

有两种模式 app 或者 pages （对应两个文件件）

app 路由模式

#### page.(ts[x]|js[x])

`/` 访问的是 `app/page.tsx`文件，
`/dashbard` 访问的是 `app/dashbard/page.tsx`文件，只有 page.tsx(ts,js,jsx) 文件才会被路由访问到
`/dashbard/settings` 访问的是 `app/dashbard/settings/page.tsx`文件

#### layout.(ts[x]|js[x])

某个目录的布局组件，`page.tsx`组件会加载在 `layout.tsx`的`children`中，有点类似嵌套路由那种

#### template.(ts[x]|js[x])

`layout` 中会加 `template` 然后 `template` 中加在 `page`

路由切换时候，子组件都会重新渲染，让子代同级路由切换时候，可以下方的的公共`layout`

```
    layout1-template1-layout2-page3-1
    layout1-template1-layout2-page3-2
    <!-- 路由3-1 切换到3-2时候 公共的layout2可以重新渲染  -->
```
