const express = require('express');

const path = require('path');

const app = express();

// 设置模版
app.set('view engine', 'ejs');

// 设置视图文件的位置
app.set('views', path.resolve(__dirname, '09ejs'));


app.get('/',(req,res)=>{


    let title ='EJS';
    res.render('index',{ title }) // index 是ejs文件的名字
})

app.listen(9000, () => {});
