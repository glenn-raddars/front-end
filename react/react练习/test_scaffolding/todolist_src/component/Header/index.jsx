import React, { Component } from 'react'
import {nanoid} from 'nanoid'//用于生成唯一ID
import propTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

    handlerKeyUp = (event)=>{
        const {key,target} = event;
        //如果输入不是回车，直接return
        if(key != 'Enter'){
           return;
        }else if(target.value.trim()/*用这个函数去空格*/ === ''){
            alert("输入不能为空");
            return;
        }else{
            var todoObj = {id:nanoid(),name:target.value,done:false};
            //console.log(todoObj);
        }
        this.props.addTodo(todoObj);
        //清空输入框
        target.value = '';
    }

    //对传入的props进行限制
    static propTypes = {
        addTodo:propTypes.func.isRequired
    }

    render() {
        return (
            <div className ="todo-header" onKeyUp={this.handlerKeyUp}/*用户抬起键盘时发生 */>
                <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
