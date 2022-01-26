import React, { Component } from 'react';



export default class Count extends Component {

    toIncreament = ()=>{
        const {value} = this.selectEM;
        this.props.jia(value);
    }

    toDecreament = ()=>{
        const {value} = this.selectEM;
        this.props.jian(value);
        
    }

    toIncreamentIfOdd = ()=>{
        const {value} = this.selectEM;
        if(this.props.count % 2 !== 0){
            this.props.jia(value);
        }
    }

    toAsyIncreament  = ()=>{
        const {value} = this.selectEM;
        setTimeout(() => {
            this.props.jia(value);
        }, 500);//每隔500ms调用一次
    }

  render() {
    return (
        <div>
            <h1>当前求和为：{this.props.count}</h1>
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
