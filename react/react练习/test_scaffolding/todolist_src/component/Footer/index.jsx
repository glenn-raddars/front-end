import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    //处理全选事件
    handleCheckout = (event)=>{
        const {checkAlltodo} = this.props;
        checkAlltodo(event.target.checked);//直接变全选或者全不选
    }

    //清除全部以完成事件
    clearAlldone = ()=>{
        const {clearAlldone} = this.props
        clearAlldone();
    }

    render() {
        //拿到todo数组
        const {todo} = this.props;
        //拿到总数
        const total = todo.length;
        //拿到已经做完了的事件
        const doneCount = todo.reduce((pre,todoObj)=>{
            return pre + (todoObj.done? 1 : 0);//reduce函数专门做数组统计的，它会每次对pre做操作，并用返回值更新pre，todoObj是正在便遍历的数组中的元素
        },0)
        return (
            <div className="todo-footer">
                <label>
                    {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
                    <input type="checkbox" checked = {total === doneCount && total !== 0/*防止删完了他还亮着*/ ? true : false } 
                    onChange={this.handleCheckout}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.clearAlldone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
