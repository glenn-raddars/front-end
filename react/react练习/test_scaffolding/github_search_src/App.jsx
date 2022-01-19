import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
//import './App.css'

export default class App extends Component {

    state = {
        users:[],
        isLoading:false,
        isFirst:true,
        err:''
    };

    //重新设定state
    updateAppState = (stateObj)=>{
        this.setState(stateObj);
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState = {this.updateAppState}/>
                <List {...this.state/*批量传递 */} />
            </div>
        )
    }
}
