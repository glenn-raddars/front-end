import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
    // 给App加上state属性，让他能把值转给子组件
    state = {todo:[
        {id:'001',name:"吃饭",done:true},
        {id:'002',name:"睡觉",done:true},
        {id:'003',name:"打代码",done:false}
    ]};

    //县一个函数，用于子组件给父组件传递信息
    addTodo = (todoObj)=>{
        const {todo} = this.state;
        var newTodo = [todoObj,...todo];
        this.setState({todo:newTodo});
    }

    //用于修改todo的done属性的函数
    changeDone = (id,done)=>{
        const {todo} = this.state;
        var newTodo = todo.map((todoObj)=>{
            if(todoObj.id === id){
               return {...todoObj,done:done}/*类的特殊用法，可以用此方法修改类中的属性值，此处为修改done为done*/;
            }else{
                return todoObj;
            }
        });

        this.setState({todo:newTodo});
    }

    //用于删除Todo
    deleteTodo = (id)=>{
        const {todo} = this.state;
        var newTodo = todo.filter((todoObj)=>{
            return todoObj.id !== id;//使用数组方法fliter，过滤掉id相等的类
        })

        this.setState({todo:newTodo});
    }

    //用于将Todo里的done全选
    checkAlltodo = (done)=>{
        const {todo} = this.state
        const newTodo = todo.map((todoObj)=>{
            return {...todoObj,done:done};
        })

        this.setState({todo:newTodo});
    }

    //用于清除所有done为true的元素
    clearAlldone = ()=>{
        const {todo} = this.state;
        const newTodo = todo.filter((todoObj)=>{
            return !todoObj.done;
        })
        this.setState({todo:newTodo});
    }

    render() {
        const {todo} = this.state;//直接先拿到手
        return (
            <div>
                <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo = {this.addTodo} />
                    {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
                    <List  todo = {todo} changeDone = {this.changeDone} deleteTodo = {this.deleteTodo}/>
                    <Footer todo = {todo} checkAlltodo = {this.checkAlltodo} clearAlldone = {this.clearAlldone}/>
                </div> 
            </div>
            </div>
        )
    }
}

