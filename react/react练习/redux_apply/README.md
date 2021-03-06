## 1.求和案例
    (1).去除Count组件自身的状态
    
    (2).src下建立：
        -src
            -redux
                -store.js
                -count_render.js
                -count_action.js

    (3).store.js:
        1).引入redux中的createStore函数，创建一个store
        2).createStore调用时要传入一个为其服务的reducer
        3).记得暴露store对象

    (4).count_reducer.js:
        1).reducer的本质是一个函数，接受：preState，action，返回加工后的状态
        2).reducer有两个作用：初始化状态，加工状态
        3).reducer被第一次调用时，是store自动触发的，传递的preState是undefinde

    (5).在index.js中检测store中的状态的改变，一旦发生改变重新渲染<App/>
        备注：redux只负责管理状态，至于状态的改变驱动页面的显示，要靠我们自己写。

    (6).count_action.js
        专门用创建action对象

## 2.求和方案 redux异步action
    (1).明确：延迟的动作不想交给组件自身，想交给action

    (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步调用返回。

    (3).具体编码：
        1).npm add redux-thunk，并配置在store
        中
        2).创建action的函数不再返回一般对象，而是一个函数，在该函数中写异步任务
        3).异步任务有结果后，分发一个同步的action去真正操作数据。

    (4).备注
        异步action不是必须要使用的，完全可以自己等待异步调用的结果到了在去分发同步action

## 3.求和案例_react-redux基本使用
    (1).明确两个概念：
        1).UI组件：不使用任何redux的API，只负责页面的呈现、交互等。
        2).容器组件：负责和redux通信，将结果交给UI组件。

    (2).如何创建一个容器组件————靠react-redux的connect函数
        connect(mapStateToProps,mapDispatchToProps)(UI组件)
            -mapStateToProps:映射状态，返回值是一个对象
            -mapDispatchToProps：映射操作状态的方法，返回值是一个对象
    (3).备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
    (4).备注2：mapDispatchToProps也可以是一个对象

## 4.求和案例——react-redux优化
    (1).容器组件和UI组件整合一个文件
    (2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可
    (3).使用lereact-redux后也不用再自己检索redux中的状态变化，容器组件可以自动完成这个工作。
    (4).mapDispatchToProps也可以简单写成一个对象
    (5).一个组件要和redux"打交道"要经过哪几步？
        (1).定义好UI组件---不暴露
        (2).引入connect生成一个容器组件，并暴露，写法如下:
```javascript
        connect(
            state => ({key:value}),//映射状态
            {key:xxxxxxAction}//映射操作状态的方法
        )(UI组件)
```
        (3).在UI组件中通过this.props.xxxxx读取和操作状态

## 5.求和案例——react_redux数据共享版
    (1).定义一个Person组件，和Count组件通过redux共享数据。
    (2).为PErson组件编写：reducer、action，配置constant常量。
    (3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的总状态是一个对象！！！
    (4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”