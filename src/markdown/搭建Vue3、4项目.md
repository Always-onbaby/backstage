### 基础工具安装

全局安装过旧版本的`vue-cli`需要先卸载。
```
npm uninstall vue-cli -g
```

Vue cli3需要nodeJs ≥ 8.9,查看版本,低于8.9则升级
```
node -v
v8.11.2
```
全局安装`@vue/cli`
```
npm install -g @vue/cli
```

查看是否安装成功
```
vue -V
@vue/cli 4.1.2
```

### 创建项目
进入你要搭建项目的目录，使用命令
```
vue create <projectname> //不支持驼峰、不支持大写
```