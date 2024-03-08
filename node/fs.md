# fs 模块

函数有同步函数和异步函数

## 文件操作

### 文件写入

#### 写入文件

`fs.writeFile(file,data[,options],callback)` ，  
参数：  
file:文件名  
data: 写入的数据  
options： 选项设置（可选）  
callback：写入回调

返回值：undefined

#### 文件追加写入

1. `fs.appendFile(file,data[,options],callback)` ，
2. writeFile 函数也可以实现追加，第三个参数`{ flag: 'a' }`

#### 流式写入文件【写入频率比较高】

`fs.createWriteStream(file[,options])`创建一个写入流对象，调用`write`写入内容，结束后调用`end`或者`close`方法关闭写入流  
参数：  
file:写入的文件  
options：可选选项配置

#### 什么时候应该去用

需要持久化保存数据时候，应该想到文件写入

### 文件读取

#### 读取文件

`fs.readFile(path[,options],callback)`  
参数：  
path：文件路径  
options: 可选的选项配置  
callback: 回调函数,回调函数两个参数，第一个参数错误对象，第二个参数文件内容（buffer）

#### 流式读取

文件的一块一块的读取文件
`fs.createReadStream(path[,options])`

### 文件移动与重命名

`fs.rename(oldPath,newPath,callback)`  
参数：  
oldPath: 文件的当前路径  
newPath: 文件的新路径  
callback: 操作后的回调

### 文件删除

1. `fs.unlink(path,callback)`
   参数：
   path: 文件路径
   callback: 操作回调

2. `fs.rm(path[, options], callback)`, node14.14 才支持的 删除文件

## 文件夹操作

#### 创建文件夹

`fs.mkdir(dir[,options],callback)`

参数：  
dir: 要创建的目录  
options: 可选的配置参数 ` {recursive:true}`是递归创建目录  
callback: 操作后的回调

#### 读取文件夹

`fs.readdir(dir[,options],callback)`

参数：  
dir: 要读取的目录  
options: 可选的配置参数  
callback: 回调 (err,files)=>{}

#### 删除文件夹

1. `fs.rmdir(dir[,options],callback)`
   参数：  
   dir: 要操作的目录  
   options: 可选的配置参数`{recursive:true}`是递归删除目录  
   callback: 回调 (err)=>{}

2. `fs.rm()`进行删除 推荐使用

### 其他操作

#### 查看资源状态

`fs.stat(path,callback)`  
 参数：  
 path: 要操作的资源  
 callback: 回调 (err,data)=>{}  
回调中的 data 说明：
data.isFile() //查看是否是文件  
data 中包含着资源的信息 大小 修改时间等  
data.isDirectory() //查看是否是文件夹

#### 相对路径

bug: 相对路劲是相对命令行的工作路径

1. 相对路径不是参考 js 文件所在目录，是参照命令行的工作目录；
2. `__dirname`: 文件所在目录的绝对路径，也就是当前文件的绝对路径
