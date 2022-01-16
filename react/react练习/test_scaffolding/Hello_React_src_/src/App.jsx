//创建外壳组件App，这里面包含了所有的组件
import React,{Component} from 'react'// {Component}这种引入方式是导入分别暴露和统一暴露的模块，不是解构赋值！！！
import Hello from './component/Hello/Hello'
import Welcome from './component/Welcome/Welcome'

export default class App extends Component{
 render(){
     return(
         <div>
            <Hello />
            <Welcome />
         </div>
     )
 }
}