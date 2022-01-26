import React, { Component } from 'react';
import store from './redux/store'
import Count from './containers/Count';

export default class App extends Component {
  render() {
    return <div>
      <Count store = {store}/*着这里引入store组件通过父组件App传参数给容器组件count store去连接*//>
    </div>;
  }
}
