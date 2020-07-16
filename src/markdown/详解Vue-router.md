##安装命令行
>安装<code>cnpm</code>
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
>安装<code>vue-cli</code>
```javascript
 $ npm i -g vue-cli
```
>查看<code>vue-cli</code>版本
```
$ vue -V
```
##使用脚手架初始化项目
>在新页面打开
* 使用router-link标签
    ```javascript
    <router-link to='/new' target="_blank">toNew</router-link>
    ```    
* 使用window.open
    ```javascript
    window.open(`/new?id=${this.id}`)
    ```