//引入createStore，专门创建store组件
import {createStore} from 'redux'
//引入为count组件服务的reduce
import Count_reducer from './Count_reducer'

export default createStore(Count_reducer);//store创建完毕