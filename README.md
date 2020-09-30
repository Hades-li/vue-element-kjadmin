# info doc

## 安装
yarn install

## dev环境运行
yarn run dev

## 打包
yarn run build

## 目录介绍

- src/assets: 各种静态资源，如图片等
- src/components: 自定义组件
- src/icons: svg格式的自定义图标
- src/layout: 页面整体结构排版
- src/router: 路由
- src/store: 用保存菜单，基础设置项，tag标签的全局状态管理
- src/utils: 工具类的组件，通常为非vue框架的组件,如axios,echart等
- src/views: 页面组件
- public：非编译文件夹
- tests：单元测试

## 特殊模块
build/md-loader
这是一个自定义的webpack的loader插件。用于将markdown文件编译成html的代码段。

本项目主要用于用markdown写api
文档并编译在页面中展示。

可参考components/upload页面组件。即上传组件页
