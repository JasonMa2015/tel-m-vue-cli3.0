# 项目介绍

​	该项目是基于vue cli3.0的移动端模板，已配置axios、iview、vue-router、vuex、vux、eslint、less

## 安装依赖

```
npm install
```

### 启动项目

```
npm run serve
```

### 打包项目

```
npm run build
```

## 目录结构

``` bash
.
├── doc                               项目相关文档
├── public                            public中的静态资源会被复制到输出目录（dist）中
│    ├── config                       全局配置文件（打包后可修改）
│    │   ├── config.js                全局baseURL
│    ├── html                         入口页面
├── src                               源码目录
│    ├── api                          后端接口api
│    ├── assets                       存放项目中需要用到的资源文件，css、js、images等
│    ├── components                   vue公共组件
│    ├── config                       基础路径配置
│    ├── libs                         工具函数
│    ├── router                       路由配置
│    ├── store                        vuex的状态管理
│    ├── themes                       自定义主题（iview、vux等第三方库自定义主题）
│    ├── views                        项目所有页面
│    ├── App.vue                      页面入口文件
│    ├── main.js                      程序入口文件，加载各种公共组件
├── ui                                设计图
├── .babel.config.js                  ES6语法编译配置
├── .editorconfig                     定义代码格式
├── .eslintrc.js                      代码规范配置文件
├── .gitignore                        git上传需要忽略的文件格式
├── README.md                         项目说明
├── package.json                      项目基本信息
├── vue.config.js                     项目构建配置文件
.

```
