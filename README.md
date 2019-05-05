## 运行机制

我们会提供开发者一些数据和能力（lint 等），开发者可以运用这些数据和能力在我们所提供的虚拟容器里执行自己的动态脚本代码，我们会拿到这段代码运行后返回的模板渲染所需的数据，最后渲染开发者编写的  [xtemplate](https://www.npmjs.com/package/xtemplate)  模板得到输出代码返回给开发者。<br />整个运行环境是在 Node 虚拟机里，我们使用  [vm2](https://github.com/patriksimek/vm2)  来实现这个环境，这里面没有内置的 node 模块和三方包可以调用，具体的开发文档见下面动态代码章节。

## 用户操作流程

<img width="500" src="https://img.alicdn.com/tfs/TB1_6eeSYvpK1RjSZPiXXbmwXXa-1000-800.png" alt="flow chart">

## 文件目录

```bash
imgcook-dsl-example
├── README.md
├── package.json // 测试所需要的包安装描述
├── src
|  ├── index.js // Node 虚拟机里运行的动态代码，需要返回模板渲染数据
|  └── template.xtpl // 模板渲染文件
└── test
   └── index.js // 可以直接在仓库执行 node 命令进行代码模板输出测试
```

### 动态代码介绍

在动态代码运行的虚拟机里，没有内置的 node 模块和三方包可以调用。我们提供给开发者一个传参变量 `layoutData`，里面描述了 imgcook 还原后的模块结构组成和 UI 细节。我们规定动态代码是 `CommonJS` 规范，返回一个可执行的函数，在函数的返回数据中，代码展示默认是完整代码 `renderData` 、类 XML 代码 `xml` 、样式代码 `style` 三块部分做展示如下图：

```javascript
// 动态代码
module.exports = function(layoutData, options) {
  console.log(layoutData); // UI 模块结构组成和样式描述等

  const renderData = {};
  return {
    renderData: renderData,
    xml: '',
    style: '',
    prettierOpt: {} // 非必须，用于执行模板渲染后代码格式化配置
  };
};
```

![|746x503](https://img.alicdn.com/tfs/TB1KibWTCzqK1RjSZFHXXb3CpXa-1037-699.png)

当然我们也支持自定义的代码展示，可在返回里添加一个 `panelDisplay` 字段和 `noTemplate` 字段标记使用自定义的代码模板，如下图。

```javascript
// 动态代码
module.exports = function(layoutData, options) {
  console.log(layoutData); // UI 模块结构组成和样式描述等

  const renderData = {};
  return {
    renderData: renderData,
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
      }
    ],
    prettierOpt: {} // 非必须，用于执行模板渲染后代码格式化配置
  };
};
```

<img width="747" src="https://img.alicdn.com/tfs/TB1MgL9TsfpK1RjSZFOXXa6nFXa-1066-689.png" />

### 传参变量介绍

我们会提供给开发者两个传参变量。<br />一个是 layoutData，是平台产出的 json 格式。<br />一个是可选使用的 options，里面包含了一些适用的三方库和辅助工具模块。

### `layoutData`

`layoutData` 是描述 imgcook 还原后的模块结构组成和 UI 细节的一个 JSON，默认我们会对每个 DOM 节点生成一个 JSON，最后根据布局结构将这些单独的 JSON 组装成一个大 JSON，即 `layoutData`。节点相关的字段可参考此[文档](./BASEJSON.md)。每个节点都有以下属性：

- id，String 类型，节点 id
- type, String 类型，节点原始类型
- componentType，String 类型， 节点实例类型，有 view/text/picture 三种类型，对应容器、文本和图片
- children，Array 类型， 节点下的子节点，一般为 view 类型的节点才具有这个属性
- attrs，Object 类型， 节点属性，里面一般有 imgcook 转换后的类名 className 以及图片地址、文本内容
- style，Object 类型，节点样式

对于文本类型和图片类型，attrs 属性中的字段可描述一些源数据：

- text

文本类型会有一个 `text` 属性描述文本直接值，且会在标记一个行数字段 `lines` 标注有几行。

```json
{
  "id": "id_3456",
  "componentType": "text",
  "style": {
    "fontSize": "28",
    "fontWeight": "500",
    "width": 84,
    "height": 40
  },
  "attrs": {
    "className": "shopRedmanName",
    "text": "汗凯特",
    "lines": 1
  }
}
```

- picture

图片类型会在 attrs 属性里有一个 `source` 属性描述图片来源链接。

```json
{
  "id": "id_4567",
  "componentType": "picture",
  "style": {
    "width": 630,
    "height": 840
  },
  "attrs": {
    "source": "https://gw.alicdn.com/tfs/TB11j1dbmCWBuNjy0FhXXb6EVXa-630-840.png",
    "className": "bg"
  }
}
```

下面是包含三种类型的一个 `layoutData` 例子：

```json
{
  "id": "id_1234",
  "componentType": "view",
  "children": [
    {
      "id": "id_3456",
      "componentType": "text",
      "style": {
        "fontSize": "28",
        "fontWeight": "500",
        "width": 84,
        "height": 40
      },
      "attrs": {
        "className": "shopRedmanName",
        "text": "韩凯特",
        "lines: 1"
      }
    },
    {
      "id": "id_4567",
      "componentType": "picture",
      "style": {
        "width": 630,
        "height": 840
      },
      "attrs": {
        "source": "https://gw.alicdn.com/tfs/TB11j1dbmCWBuNjy0FhXXb6EVXa-630-840.png",
        "className": "bg"
      }
    }
  ],
  "attrs": {
    "className": "viewGroup"
  },
  "style": {
    "width": 750,
    "height": 1334
  }
}
```

### options

为了开发者的方便，我们在 `options` 里包含了两个比较方便的库供开发者使用，一个是当下比较流行的 format 类库 prettier，支持比较多语言的代码格式化优化；另一个是通用比较多的 lodash 库。

- prettier
- \_

#### 使用 helper 来自定义缩进

如果 prettier 不能满足你的需求，或是你希望自己自己控制代码的缩进规则，我们还提供了一个手动计算缩进的工具库。[ @imgcook/dsl-helper](https://www.npmjs.com/package/@imgcook/dsl-helper)<br />具体使用参考以下 dsl 代码[https://github.com/imgcook-dsl/h5-standard/blob/master/src/index.js](https://github.com/imgcook-dsl/h5-standard/blob/master/src/index.js)

- helper

  - helper.printer   代码生成。参数：line 数组
  - helper.parse     由代码生成格式化 ine 数组。参数：代码字符串
  - helper.utils.line     设置单行格式。参数：string,   缩进设置。
  - helper.utils.string   设置字符格式。参数：string, 缩进设置。在单行内有格式要求时使用。
  - helper.utils.indentTab 设置单行相对缩进。参数：line 数组，相对缩进值。
  - helper.utils.setIndentTab 设置单行绝对缩进。参数：line 数组，绝对缩进值。
  - helper.utils.countIndent 计算单行文本缩进值

以下是此 helper 功能示例：

```javascript
const _line = helper.utils.line;

// 生成line数组
const lines = [
  _line('<Text>', { indent: { tab: 0 } }),
  _line('hello world', { indent: { tab: 1 } }),
  _line('</Text>', { indent: { tab: 0 } })
];

// 使用printer生成代码
console.log(helper.printer(lines));

// result
<Text>hello world</Text>;
```

#### 使用 helper 来过滤冗余样式

dsl-helper 同时内置了样式过滤方案，当某样式的 key 值非法或其对应的 value 是可忽略的默认值的时候，我们提供了将这些样式过滤掉的方案：

- web 下基于 mdn-data 的 css 文档：[https://github.com/mdn/data/tree/master/css](https://github.com/mdn/data/tree/master/css)
- weex 下基于 weex-style 的样式文件： [https://www.npmjs.com/package/weex-styler](https://www.npmjs.com/package/weex-styler)
- helper
  - `helper.weexProcessor.filter`   将 styles 中 weex 环境下可过滤元素去除，只留下可用样式
  - `helper.webProcessor.filter`   将 styles 中 web 环境下可过滤元素去除，只留下可用样式

以下是 helper 中过滤样式能力的示例：

```javascript
// 过滤wee下冗余样式
let styles = helper.weexProcessor.filter({
  width: '100px',
  left: '0px',
  lines: 0,
  'margin-bottom': '0px', // 可忽略默认值
  hehehee: 'hehehe' // 非法属性
});
console.log(styles);

// RESULT

// { width: '100px', left: '0px', lines: 0 }

// 过滤web下冗余样式
let styles = helper.weexProcessor.filter({
  width: '100px',
  left: '0px',
  lines: 0, // web下的非法属性，weex下并非非法属性
  'margin-bottom': '0px', // 可忽略默认值
  hehehee: 'hehehe' // 非法属性
});
console.log(styles);

// RESULT

// { width: '100px', left: '0px' }
```

### 模板文件介绍

模板文件使用 [xtemplate](http://web.npm.alibaba-inc.com/package/xtemplate)

## 插件测试

你可以在本地模拟 imgcook 提供的虚拟机环境调试生成的代码。

`npm run test`
