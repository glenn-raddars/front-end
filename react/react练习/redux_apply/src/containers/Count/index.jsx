//引入UI组件库
import CountUI from '../../component/Count'
// 引入connect用于连接UI组件库与store
import {connect} from 'react-redux'
//使用connect()()创建并连接一个Count的容器组件，右边链接UI组件。
import {createIncreamentAction , createDecreamentAction} from '../../redux/actions/Count'


/*
1.mapStateToProps函数返回的是一个对象：
2.返回对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组建的value
3.mapStateToProps用于传递状态
 */

function mapStateToProps(state){
    return {count:state.count,personNum:state.person.length}
}

/*
1.mapDispatchToProps函数返回的是一个对象
2.返回对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组建的value
3.mapDispatchToProps用于传递操作状态的方法
 */

function mapDispatchToProps(dispatch){
    return{
        jia:(number) => {dispatch(createIncreamentAction(number))},
        jian:(number) => {dispatch(createDecreamentAction(number))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
