import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

    search = ()=>{
        //拿到用户的输入值(连续解构赋值 )
        const {keyWordElement:{value}} = this;
        //console.log(value);
        const {updateAppState} = this.props;
        updateAppState({
            isFirst:false,
            isLoading:true
        })
        //发送网络请求,get
        axios.get(`/api1/search/users?q=${value}`).then(/*接受两个参数，一个是成功的回调函数，一个是失败的 */
            response => {
                updateAppState(
                    {
                        isFirst:false,
                        isLoading:false,
                        users:response.data.items
                    }
                );//将接收到的信息传回App
            },// 成功返回数据
            error => {
                updateAppState(
                    {
                        isFirst:false,
                        isLoading:false,
                        err:error.message
                    }
                );//将接收到的信息传回App
            }
        )
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(e) =>{this.keyWordElement = e}} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
                </section>
            </div>
        )
    }
}
