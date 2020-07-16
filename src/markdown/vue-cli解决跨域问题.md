## 写在前面的话
前后端分离的项目在开发的时候一般都会遇到跨域的问题,在vue-cli的脚手架中利用<code>http-proxy-middleware</code>很好的解决了这个问题
```javascript
  proxyTable: {
    '/list': {
      target: 'http://api.xxxxxxxx.com',
      pathRewrite: {
        '^/list': '/list'
      }
    }
  }
```
> 这样设置之后,只用写成<code>'/list/1'</code>就可以代表<code>'api.xxxxxxxx.com/list/1'</code>
```javascript
proxyTable: {
  '/list': {
    target: 'http://api.xxxxxxxx.com',
    changeOrigin: true,
    pathRewrite: {
      '^/list': '/list'
    }
  }
}
```
>设置参数<code>changeOrigin</code>为<code>true</code>时,本地会虚拟一个服务端接收请求并代为发送
