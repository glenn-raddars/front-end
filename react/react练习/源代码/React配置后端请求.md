# react ajax  
===========================
React本身只关注与页面，并不包含发送ajax请求的代码，所以一般都是集成第三方的一些库，或者自己进行封装。

## 推荐使用axios
-------

在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。

所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域 。

那么react通过代理解决跨域问题呢

### 方法一

在package.json中追加如下配置

>"proxy":"请求的地址"      "proxy":"http://localhost:5000"  

**说明**：

优点：配置简单，前端请求资源时可以不加任何前缀。
缺点：不能配置多个代理。
工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）
### 方法二

**第一步**：创建代理配置文件

在src下创建配置文件：src/setupProxy.js
#### 编写setupProxy.js配置具体代理规则：
```javascript
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}
```
说明：

优点：可以配置多个代理，可以灵活的控制请求是否走代理。
缺点：配置繁琐，前端请求资源时必须加前缀。