## vscode插件 推荐
- ESLint 
- i18n Ally 
- Prettier -Code formatter
- Taillwind CSS IntelliSense
- Vue(Official)

## 环境依赖版本
- pnpm 10.14.0 
- node 22.19.0


## 概念

### 大仓
```
大仓指的是整个项目的仓库，包含了所有的代码、包、应用、规范、文档、配置等，也就是一整个 Monorepo 目录的所有内容。
```

### 应用
```
应用指的是一个完整的项目，一个项目可以包含多个应用，这些项目可以复用大仓内的代码、包、规范等。应用都被放置在 apps 目录下。每个应用都是独立的，可以单独运行、构建、测试、部署，可以引入不同的组件库等等。
```

### 包
```
包指的是一个独立的模块，可以是一个组件、一个工具、一个库等。包可以被多个应用引用，也可以被其他包引用。包都被放置在 packages 目录下。

对于这些包，你可以把它看作是一个独立的 npm 包，使用方式与 npm 包一样。
```

### 别名
```
在项目中，你可以看到一些 # 开头的路径，例如： #/api、#/views, 这些路径都是别名，用于快速定位到某个目录。它不是通过 vite 的 alias 实现的，而是通过 Node.js 本身的 subpath imports 原理。只需要在 package.json 中配置 imports 字段即可。
```


## 规范

### 命名规范

- 目录名字一律以中划线-命名例如 project-demo
- 类名大驼峰 例如 class ProjectDemo
- 枚举一律大些开头 尽量标注是枚举 例如 enum ProjectDemoEnum
- 工具类尽量带上后缀例如 class ProjectDemoUtils


### 目录说明
```javascript

├── .turbo
│   ├── cache
│   ├── cookies
│   └── daemon
├── .vscode. //通用格式化规范
├── apps  //子应用目录
│   ├── backend-mock
│   ├── demo
│   └── vue-bw-web-ly-pc
├── internal  //通用配置项
│   ├── lint-configs
│   ├── node-utils
│   ├── tailwind-config
│   ├── tsconfig
│   └── vite-config
├── packages  //包
│   ├── @core //核心集合 底层配置
│   ├── api-sdk  // 通用apisdk
│   ├── constants //通用常量 枚举
│   ├── hooks   //通用hooks
│   ├── locales //通用多语言
│   ├── preferences //通用个性化配置
│   ├── request  //axios底层封装
│   ├── router   //路由创建
│   ├── stores   //通用pinia
│   ├── styles   //通用样式
│   ├── types
│   ├── ui-common  //公共组件如login封装
│   └── utils    //通用工具类
└── scripts
    ├── deploy
    ├── turbo-run
    └── vsh
```
