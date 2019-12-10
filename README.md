## DSL 开发

### 运行机制

我们会提供开发者一些数据和能力（ lint format 等），开发者可以运用这些数据和能力在我们所提供的虚拟容器里执行自己的 Function 代码，我们会拿到这段代码运行后根据返回的数据结果来将代码返回给开发者。

整个运行环境是在 Node 虚拟机里，我们使用 [vm2](https://github.com/patriksimek/vm2) 来实现这个环境，这里面没有内置的 node 模块和三方包可以调用，具体的开发文档见下面 Function 代码章节。

### 用户操作流程

![](https://img.alicdn.com/tfs/TB199nDo1L2gK0jSZPhXXahvXXa-1084-856.png)

### 文件目录

```
imgcook-dsl-example
    |----package.json         // 测试所需要的包安装描述
    |----README.md        
    |----src                             
    |      |----index.js      // Node 虚拟机里运行的 function 代码                      
    |      |----template.xtpl // 内置模板渲染文件，可选
    |
    |----test
    |      |----index.js      // 可以直接在仓库执行 node 命令进行 DSL 输出测试
```

### 函数代码

#### 函数参数

我们规定 DSL 的函数代码是 `CommonJS` 规范，返回一个可执行的函数。在这个函数代码运行的虚拟机里，没有内置的 node 模块和三方包可以调用。该函数有以下两个参数：

- **schema：**里面描述了 imgcook 还原后的**节点树结构、节点 UI 以及节点逻辑，**详情见 [D2C Schema](https://imgcook.com/docs?slug=d2c-json-info) 描述，你也可以在**编辑器页面点击左下角的『Schema 源码』查看特定模块完整的数据描述**。
- **option**：提供一些辅助的函数方法、响应式配置、团队公共函数和三方库
  - 【响应式】responsive
    - viewportWidth：窗口视窗，默认 375
    - width：设计稿尺寸，默认 750
  - 【三方库】prettier：[prettier](https://prettier.io/) 实例，可直接格式化输出优美的代码字符串
  - 【三方库】_：[lodash](https://lodash.com) 实例，可直接使用 lodash 强大的能力
  - 【辅助函数】helper：自定义格式化代码输出 [imgcook/dsl-helper](https://www.npmjs.com/package/@imgcook/dsl-helper)
  - 【公共函数】utils：[全局公共函数](https://imgcook.com/docs?slug=editor-info#QRBBA)配置

```javascript
module.exports = function(schema, option) {

}
```

#### 函数返回

在函数的返回数据中，我们支持两种返回格式。

##### 1. 单文件模板返回

如果使用脚手架里的 `template.xtpl` 模板能力，代码展示默认只有 `index.js` 单文件，函数返回数据如下：

- **renderData**：模板渲染所需的数据，跟 `template.xtpl` 里定义的字符串模板相关

```javascript
module.exports = function(schema, option) {
  const renderData = {};

  return {
    renderData: renderData,
    prettierOpt: {}          // 非必须，用于执行模板渲染后代码格式化配置
  };
}
```

最终在 imgcook 上点击代码查看的效果如下：

![image.png](https://img.alicdn.com/tfs/TB1JStfpbY1gK0jSZTEXXXDQVXa-1500-792.png)

##### 2. 自定义模板返回（推荐）

你也可以自定义返回的代码展示，该场景下不使用默认的单文件模板能力，可在返回里添加一个 `panelDisplay` 字段和 `noTemplate` 字段标记使用自定义的返回结构：

- panelDisplay：描述代码生成面板展示
  - panelName：文件名称
  - panelValue：文件内容（代码字符串填充）
  - panelType：文件类型（一般用作后续代码高亮）
- noTemplate：标记不使用默认的单文件模板能力

```javascript
module.exports = function(schema, option) {
  const renderData = {};
  return {
    panelDisplay: [
        {
            panelName: 'component.wxml',
            panelValue: renderData.wxml,
            panelType: 'xml'
        },
        {
            panelName: 'component.wxss',
            panelValue: renderData.wxss,
            panelType: 'style'
        },
        {
            panelName: 'component.js',
            panelValue: renderData.js,
            panelType: 'js'
        },
        {
            panelName: 'component.json',
            panelValue: renderData.json,
            panelType: 'json'
        }
    ],
    noTemplate: true,
    prettierOpt: {}                       // 非必须，用于执行模板渲染后代码格式化配置
  };
}
```

最终在 imgcook 上点击代码查看的效果如下：

![image.png](https://img.alicdn.com/tfs/TB1HStfpbY1gK0jSZTEXXXDQVXa-1500-788.png)

#### 响应式

vm/rpx/rem 适配：默认我们使用的设计稿尺寸规范是 750，如果出现设计稿是 375，可在『编辑器左小角 - 应用设置』做规范适配后（更改设计稿宽度），在 DSL 侧针对需要进行响应的样式做处理（通过 `option.responsive.wdith` 进行缩放处理）。

### 本地开发测试

你可以在本地模拟 imgcook 提供的虚拟机环境调试生成的代码。

`npm run test`

## DSL 提审、更新和发布

DSL 提审、更新和发布流程如下：

![](https://img.alicdn.com/tfs/TB1B.6Fo7Y2gK0jSZFgXXc5OFXa-1332-360.png)

### DSL 审核

只有外部 DSL （Github 仓库）需要审核。

**提交审核**

点击如下图按钮提交审核，会进入待审核状态，审核完成结果有审核通过和审核不通过，如果不通过要按照审核要求修改 DSL 代码重新提交审核。

![](https://img.alicdn.com/tfs/TB1uDzIo7T2gK0jSZFkXXcIQFXa-1162-684.png)


**待审核状态**

![](https://img.alicdn.com/tfs/TB1wkjDo7L0gK0jSZFtXXXQCXXa-584-472.png)

**审核通过状态**

![](https://img.alicdn.com/tfs/TB1SxnCoVY7gK0jSZKzXXaikpXa-572-450.png)

审核不通过状态，审核不通过理由会写 Github commit comment 备注

![](https://img.alicdn.com/tfs/TB15SnDo1L2gK0jSZPhXXahvXXa-594-472.png)

### DSL 更新

提交审核通过后，执行更新 DSL。

![](https://img.alicdn.com/tfs/TB1rHYIo.Y1gK0jSZFCXXcwqXXa-580-474.png)

### DSL 发布

刷新 DSL，执行发布

![](https://img.alicdn.com/tfs/TB13yYEoVP7gK0jSZFjXXc5aXXa-568-458.png)

## 官方 DSL 示例

### H5 标准开发规范

DSL 代码仓库：[https://github.com/imgcook-dsl/h5-standard](https://github.com/imgcook-dsl/h5-standard)

预览效果：

![](https://img.alicdn.com/tfs/TB1P2HGo5_1gK0jSZFqXXcpaXXa-1500-879.png)

### 微信小程序开发规范

DSL 代码仓库：[https://github.com/imgcook-dsl/wx-miniapp-template](https://github.com/imgcook-dsl/wx-miniapp-template)

预览效果：

![](https://img.alicdn.com/tfs/TB1ZEy5oV67gK0jSZPfXXahhFXa-1500-876.png)
