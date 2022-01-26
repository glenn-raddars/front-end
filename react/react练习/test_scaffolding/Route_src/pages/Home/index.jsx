import React, { Component } from 'react'
import { Redirect , Switch , Route } from 'react-router-dom'
import Mynavilink from '../../component/Mynaviink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <Mynavilink to="/home/news"/*使用二级路由 */>News</Mynavilink>
                  </li>
                  <li>
                    <Mynavilink to="/home/message">Message</Mynavilink>
                  </li>
                </ul>
                    {/* 注册路由（二级路由） */}
                    {/*  先用switch包裹，使其匹配到正确路由后直接停止 */}
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to="/home/news"></Redirect>
                    </Switch>
              </div>
            </div>
        )
    }
}
