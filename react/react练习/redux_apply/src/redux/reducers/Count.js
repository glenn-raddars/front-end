/*
    该文件用于建立处理count的reducer，本质是一个函数
    用来传入两个参数，一个是prestate，先前的state，一个是action，动作
 */

export default function countReducer(preState = 0,action){
    //从acton中获取对象
    const {type,data} = action;

    switch (type) {
        case 'increament':
            return preState + parseInt(data);
            
        case 'decreament':
            return preState - parseInt(data);
    
        default:
            return preState;
    }
}