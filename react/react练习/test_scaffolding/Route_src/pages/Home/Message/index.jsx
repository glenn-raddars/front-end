import React, { Component } from 'react';
import { Link , Route } from 'react-router-dom';
import DetailMessage from './DetailMessage';

export default class Message extends Component {
    state = {
        messageArr:[
            {id:1,title:"消息1"},
            {id:2,title:"消息2"},
            {id:3,title:"消息3"}
        ]
    }
  render() {
      const {messageArr} = this.state
    return (
                <div>
                    <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return(
                                <li key={msgObj.id}>
                                    {/* 使用paras传递参数 */}
                                    <Link replace={true}/*当路透开启这个属性之后，在历史记录里面
                                    每次进入新的路由地址，都会将栈顶元素替换，而不是压栈，因此返回会直接丢失之前访问的页面 */ to={`/home/message/detailmessage/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <hr />
                    {/* 注册路由，并接受paras参数 */}
                    <Route path="/home/message/detailmessage/:id/:title" component={DetailMessage}></Route>
                </div>
               

    )
  }
}
