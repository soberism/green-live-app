# GoodLive

## 技术栈

React + ReactHook + ReactRouter + Redux + Axios + Less + 第三方

## 计划完成功能

1. 首页展示
2. 城市管理
3. 搜索功能
4. 上拉加载
5. 详情页
6. 收藏功能
7. 订单评价

## 初始环境构建

1. npx create-react-app good-live-app
2. 支持 less
   (1) npm run eject
   (2) npm install --save-dev less less-loader
   (3) webpack.config.js
   const lessRegex = /\.less$/;
        const lessModuleRegex = /\.module\.less$/;
   ...
3. 集成网络请求 Axios
   (1)npm install --save axiox

## 配置初始化样式

1. 引入 css 文件
2. 引入字体图标库

## 实现首页展示

1. 创建页面：Home/Shop/LifeService/User
2. 创建路由 -安装依赖：npm install --save react-router-dom -配置 AppRouter 文件
3. 底部导航
4. 顶部导航
   - rem 配置 ->public/index.html 加入 rem 的计算方案
5. 焦点轮播图

- 参考文档：https://react-swipeable-views.com/
  - 安装依赖：
    ```js
    npm install --save react-swipeable-views
    npm install --save react-swipeable-views-utils
    ```
  - 指示器需要独立实现

6. 搭建服务器环境

- 安装依赖
  --save express
  --save cors

7. 首页列表数据展示 -组件分类 -智能组件（HomeHotList）：处理数据，过滤数据，获取数据 -木偶组件(HomeHotView)：渲染视图

## 实现城市管理

1. 创建管理页面实现路由跳转：City
2. 实现路由嵌套，将共享底部导航的页面做成二级路由：Layout 布局
3. 城市页面组件效果实现 PubHeader、currentCity、cityList
4. 集成 redux：通过它存储城市，通过城市的不同 UI 渲染不同的页面 - Store,Reducers,Actions -安装依赖
   npm install --save redux
   npm install --save react-redux
   npm install --save-dev redux-devtools-extension -创建 redux 流程
5. 关联 redux，存储城市数据
6. 页面数据需要根据城市进行切换
7. 将城市列表变得正规 -安装依赖
   npm i react-city-select

## 实现搜索功能

1. 创建搜索页面，配置路由跳转
   抽离搜索的 input 组件
   抽离 input 组件
   keyCode===13 跳转页面
   路由跳转传递参数
2. 实现网络请求接口
   每次搜索实际上返回的都是相同的内容
3. 前台访问接口获取数据
   -Notice 我们以前渲染视图都是获取数据直接渲染，现在开始改用 Item 去渲染每一个视图
4. 搜索头部
5. 上拉加载组件
   - 上拉加载封装组件
   - 实现流程： -监听滚动事件->滚动高度+视口高度>=文档/列表高度
   - getBoundingClientRect
     动态获取元素 距离 边界的距离<视口距离=加载数据
6. 加载更多数据
7. 搜索框历史记录
8. Mock.js
   - 模拟数据，完全随机化
   http://mockjs.com/
9. 详情页
   - 创建页面，配置路由
   - 内存泄漏
      - 在React中，事件、定时器、网络请求
10. 收藏
   - 收藏功能是否允许收藏取决于用户是否登录，登陆了允许收藏，未登录则跳转到登录页面
   - 判断用户是否登录

## 登录功能
   - 登录功能实现
   - 验证
      - npm install classnames
      - npm install lodash
      - npm install validator
