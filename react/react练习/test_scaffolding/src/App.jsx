import React, { Component } from 'react'
import { NavLink , Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Mynavilink from './component/Mynaviink';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 使用react-router组件实现组件跳转，而不刷新页面。 */}
                            {/* <BrowserRouter> */}
                                {/* Link组件必须包含在 BrowserRouter标签里面，也可以用HashRouter包裹，但是那会在路径里加一个#，类似锚点写法
                                (但是几乎所有的组件都需要BrowserRouter的包裹，所以直接去index.js里面把App这个大标签给包裹了，就一劳永逸了)*/}
                                {/* /*react-router-dom这个库中不识别大小写 */ }
                                {/* <NavLink activeClassName='demo' className="list-group-item" to="/about">About</NavLink> */}
                                {/* NavLink可以在被选中的时候给标签加一个属性activeClassName */}
                                {/* <NavLink activeClassName='demo' className="list-group-item" to="/home">Home</NavLink> */}
                            {/* </BrowserRouter> */}
                            <Mynavilink to="./about">About</Mynavilink>
                            <Mynavilink to="./home">Home</Mynavilink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Route path='/about' component={About}></Route>
                            <Route path='/home' component={Home}></Route>
                        </div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}
