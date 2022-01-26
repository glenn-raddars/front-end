import React, { Component } from 'react';
//引入createAction创建action对象
import { createIncreamentAction , createDecreamentAction  } from '../../redux/Count_action';
import store from '../../redux/store';

export default class Count extends Component {

    toIncreament = ()=>{
        const {value} = this.selectEM;
        store.dispatch(createIncreamentAction(value));//用dispatch给store传入action
    }

    toDecreament = ()=>{
        const {value} = this.selectEM;
        store.dispatch(createDecreamentAction(value));
    }

    toIncreamentIfOdd = ()=>{
        const {value} = this.selectEM;
        const count = store.getState();
        if(count % 2 !== 0){
            //是奇数
            store.dispatch(createIncreamentAction(value));
        }
    }

    toAsyIncreament  = ()=>{
        const {value} = this.selectEM;
        setTimeout(() => {
            store.dispatch(createIncreamentAction(value));
        }, 500);//每隔500ms调用一次
    }

  render() {
    return (
        <div>
            <h1>当前求和为：{store.getState()}</h1>
            <select ref={(c)=>{this.selectEM = c;}} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick ={this.toIncreament} >+</button>&nbsp;
            <button onClick ={this.toDecreament} >_</button>&nbsp;
            <button onClick ={this.toIncreamentIfOdd} >当前数为奇数的时候加</button>&nbsp;
            <button onClick ={this.toAsyIncreament} >异步加</button>
        </div>
    )
  }
}
