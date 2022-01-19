// 配置服务器跨域请求(代理),见React配置后端请求
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy.createProxyMiddleware('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,
            pathRewrite: {'^/api1':''}
        })
    )
}