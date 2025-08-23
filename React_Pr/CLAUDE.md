# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此代码仓库中工作时提供指导。

## 项目概述

这是一个React练习应用程序(react_pr)，展示了一个日志/学习追踪器界面。该应用程序以卡片式布局显示学习日志，包含日期、描述和花费时间。

## 开发命令

- `npm start` - 启动开发服务器
- `npm run build` - 构建生产版本包
- `npm test` - 使用React Scripts运行测试
- `npm run eject` - 从Create React App中弹出（不可逆操作）

## 架构

### 组件结构

应用程序采用分层组件结构：

- **App** (`src/index.js`) - 渲染主要Logs组件的根组件
- **Logs** (`src/Logs/Logs.js`) - 管理日志数据并渲染日志项的主容器组件
- **LogItem** (`src/Logs/LogItems/logitem.js`) - 单个日志条目组件
- **Card** (`src/Logs/UI/card.js`) - 用于样式化的可重用包装组件
- **Content** (`src/Logs/LogItems/Content/content.js`) - 显示日志描述和时间
- **MyDate** (`src/Logs/LogItems/MyDate/myDate.js`) - 显示格式化日期（月/日）

### 数据流

1. **Logs.js** 包含硬编码的日志数据，包含Date对象、描述和时间值
2. 数据通过props向下传递到子组件（LogItem → Content + MyDate）
3. 每个日志项都有id、date、name（描述）和time属性
4. 组件使用解构props来更清晰地访问数据

### 关键模式

- **组件组合**: 使用可重用的Card包装器实现一致的样式
- **Props钻取**: 数据通过多层组件传递
- **函数组件**: 所有组件都编写为函数式React组件
- **CSS模块**: 每个组件都有对应的CSS文件实现样式作用域
- **数组映射**: 使用`map()`渲染日志项列表

### 文件组织

```
src/
├── index.js           # 应用入口点
├── index.css          # 全局样式
├── test.js            # 测试文件（精简版）
└── Logs/
    ├── Logs.js        # 主要日志容器
    ├── logs.css       # 日志样式
    ├── UI/
    │   ├── card.js    # 可重用卡片包装器
    │   └── card.css   # 卡片样式
    └── LogItems/
        ├── logitem.js # 单个日志项
        ├── logItem.css # 日志项样式
        ├── Content/   # 描述和时间显示
        └── MyDate/    # 日期格式化显示
```

### 依赖项

- **React 18.2.0** - 核心React库
- **React DOM 18.2.0** - React DOM渲染器
- **React Scripts 5.0.1** - Create React App工具集
- **ESLint** - 配置了React应用和Jest预设