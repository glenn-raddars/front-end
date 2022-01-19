import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {users,isLoading,isFirst,err} = this.props
        return (
            <div>
                 <div className="row">
                    {
                        isFirst? <h1>欢迎使用搜索系统，请输入您所需要先搜索的名字</h1>:
                        isLoading? <h1>正在加载，请稍后</h1> :
                        err? <h1>出错啦，{err}</h1> : /*什么都没问题了，正义执行 */
                        users.map((usersobj)=>{
                            return(
                                <div key={usersobj.id} className="card">
                                    <a href={usersobj.html_url/*个人网页地址 */} target="_blank">
                                    <img alt='portrait' src={usersobj.avatar_url/*头像地址 */} style={{width:'100px'}}/>
                                    </a>
                                    <p className="card-text">{usersobj.login/*用户名 */}</p>
                                 </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
