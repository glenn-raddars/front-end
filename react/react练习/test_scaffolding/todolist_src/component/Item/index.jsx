import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    //状态在哪里，操作状态的方法就在那里
    state = {mouse:false};

    //处理鼠标移入移出事件 
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag});
        }
    };

   //处理状态切换
   handleCheck = (id)=>{
    return (event)=>{
        const {changeDone} = this.props
        changeDone(id,event.target.checked);
    }
   }

   handleDelete = (id)=>{
    const {deleteTodo} = this.props;
    if(window.confirm('确定要删除吗'))
        deleteTodo(id);
   }

    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (
            <li onMouseLeave={this.handleMouse(false)/*鼠标移开的时候就让选项框状态为false*/} 
            onMouseEnter={this.handleMouse(true)/*鼠标移入的时候就让选项框状态为true*/} 
            style={{backgroundColor:mouse ? '#bbb' : 'white'}}>
                <label>
                    <input type="checkbox" checked = {done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button  onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
