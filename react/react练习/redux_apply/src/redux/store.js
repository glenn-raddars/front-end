//引入createStore，专门创建store组件
import {createStore} from 'redux'
//引入为count组件服务的reduce
import Count_reducer from './reducers/Count'
//引入为person组件服务的reduce
import personReducer from './reducers/Person';
//引入combineReducers合并两个reducer
import { combineReducers } from 'redux';
//合并reducers
const allReducers = combineReducers(
    {
        count:Count_reducer,
        person:personReducer
    }
)

export default createStore(allReducers);//store创建完毕