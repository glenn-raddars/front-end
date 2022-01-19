//这是React的入口文件
// 引入React核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入路由组件
import { BrowserRouter } from 'react-router-dom';
//引入APP组件
import App from './App'/*对于每一个后缀为js或者jsx的文件，引入模块时后缀都可以省略*/

//渲染App到页面
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('test')
);