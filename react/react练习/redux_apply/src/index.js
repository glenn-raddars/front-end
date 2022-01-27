import react from "react";
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDom.render(
  <Provider store={store}/*着这里引入store组件通过父组件App传参数给容器组件count store去连接*/>
    {/*provider可以给每个容器组件都自动传入store */}
    <App />
  </Provider>
  ,document.getElementById('root')
  );

//一旦检测到store更新，就直接重新挂载DOM,subscribe函数可以检测store里的状态是否发生改变
//使用了react-redux之后已经不用duitore进行监测