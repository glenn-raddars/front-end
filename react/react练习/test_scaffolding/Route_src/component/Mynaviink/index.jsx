import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Mynavilink extends Component {
    render() {
        //console.log(this.props);
        // 标签体重的内容也会被添加到props属性中，key是children，在标签中指定children的value就是在指定标签地中的内容
        return (
            <NavLink activeClassName='demo' className="list-group-item" {...this.props}/*直接用这种方法将类分解，所有属性赋值*//>
        )
    }
}
