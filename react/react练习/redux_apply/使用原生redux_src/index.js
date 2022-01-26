import react from "react";
import ReactDom from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDom.render(<App />,document.getElementById('root'));

//一旦检测到store更新，就直接重新挂载DOM,subscribe函数可以检测store里的状态是否发生改变
store.subscribe(()=>{
  ReactDom.render(<App />,document.getElementById('root'));
})