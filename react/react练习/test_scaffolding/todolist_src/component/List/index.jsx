import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'


export default class List extends Component {
    
     //对传入的props进行限制
    static propTypes = {
        todo:PropTypes.array.isRequired,
        changeDone:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    render() {
        //console.log(this.props.todo)
        const {todo,changeDone,deleteTodo} = this.props;
    
        return (
            <ul className="todo-main">
                {
                    todo.map((todo/*拿到数组里面的元素*/)=>{
                        return <Item key={todo.id}  {...todo}/*使用...可以展开一个类*/ changeDone = {changeDone} deleteTodo = {deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
