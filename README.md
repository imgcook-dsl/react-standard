## 运行机制
我们会提供开发者一些数据和能力（lint等），开发者可以运用这些数据和能力在我们所提供的虚拟容器里执行自己的动态脚本代码，我们会拿到这段代码运行后返回的模板渲染所需的数据，最后渲染开发者编写的 [xtemplate](https://www.npmjs.com/package/xtemplate) 模板得到输出代码返回给开发者。<br />整个运行环境是在 Node 虚拟机里，我们使用 [vm2](https://github.com/patriksimek/vm2) 来实现这个环境，这里面没有内置的 node 模块和三方包可以调用，具体的开发文档见下面动态代码章节。

## 用户操作流程
<img width="500" src="https://img.alicdn.com/tfs/TB1_6eeSYvpK1RjSZPiXXbmwXXa-1000-800.png" alt="flow chart">

## 文件目录
```bash
imgcook-dsl-example
├── README.md
├── package.json
├── src
|  ├── index.js
|  └── template.xtpl
└── test
   └── index.js
```
## 动态代码
在动态代码运行的虚拟机里，没有内置的 node 模块和三方包可以调用。我们提供给开发者一个传参变量 `layoutData`，里面描述了imgcook还原后的模块结构组成和 UI 细节。我们规定动态代码是 `CommonJS` 规范，返回一个可执行的函数返回模板渲染数据，包括完整的渲染模板所需要的数据（一般由样式、类XML（JSX/HTML）、自定义部分等组成），其中 XML 和 Style 部分会在编辑器中进行预览。

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
}
```

<img width="500" src="https://img.alicdn.com/tfs/TB18kDyTcbpK1RjSZFyXXX_qFXa-1037-699.png" alt="">

## 传参变量
我们提供给开发者两个传参变量layoutData和options。

### `layoutData`

`layoutData` 是描述imgcook还原后的模块结构组成和 UI 细节的一个 JSON，默认我们会对每个 DOM 节点生成一个 JSON，最后根据布局结构将这些单独的 JSON 组装成一个大 JSON，即 `layoutData`。每个节点都有以下属性：

- id，String类型，节点 id
- componentType，String类型， 节点类型，有 view/text/picture 三种类型，对应容器、文本和图片
- children，Array类型， 节点下的子节点，一般为 view 类型的节点才具有这个属性
- attrs，Object类型， 节点属性，里面一般有imgcook转换后的类名 className 以及图片地址
- style，节点样式<br />对于文本类型和图片类型还有额外的字段来描述：
- text<br />文本类型会有一个 `innerText` 属性描述文本直接值，且会在 `style` 里有一个行数字段 `lines` 标注有几行。

```json
{
  "id": "id_3456",
  "componentType": "text",
  "style": {
    "fontSize": "28",
    "lines": 1,
    "fontWeight": "500",
    "width": 84,
    "height": 40
  },
  "attrs": {
    "className": "shopRedmanName"
  },
  "innerText": "韩凯特"
}
```

- picture<br />图片类型会在 attrs 属性里有一个 `src` 属性描述图片来源链接。

```json
{
  "id": "id_4567",
  "componentType": "picture",
  "style": {
    "width": 630,
    "height": 840
  },
  "attrs": {
    "src": "https://gw.alicdn.com/tfs/TB11j1dbmCWBuNjy0FhXXb6EVXa-630-840.png",
    "className": "bg"
  }
}
```

下面是包含三种类型的一个 `layoutData` 例子：

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
        "lines": 1,
        "fontWeight": "500",
        "width": 84,
        "height": 40
      },
      "attrs": {
        "className": "shopRedmanName"
      },
      "innerText": "韩凯特"
    },
    {
      "id": "id_4567",
      "componentType": "picture",
      "style": {
        "width": 630,
        "height": 840
      },
      "attrs": {
        "src": "https://gw.alicdn.com/tfs/TB11j1dbmCWBuNjy0FhXXb6EVXa-630-840.png",
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

除此外，各个节点如果有绑定过数据字段，会有个 `tpl` 字段，标记绑定的 Schema 值，比如：

```json
{
  "id": "id_3456",
  "componentType": "text",
  "style": {
    "fontSize": "28",
    "lines": 1,
    "fontWeight": "500",
    "width": 84,
    "height": 40
  },
  "attrs": {
    "className": "shopRedmanName"
  },
  "innerText": "韩凯特",
  "tpl": "item_title"
}
```

当然还存在字段嵌套在某一个字段中绑定的情况：

```json
{
  "id": "id_3456",
  "componentType": "text",
  "style": {
    "fontSize": "28",
    "lines": 1,
    "fontWeight": "500",
    "width": 84,
    "height": 40
  },
  "attrs": {
    "className": "shopRedmanName"
  },
  "innerText": "韩凯特",
  "tpl": "shop_items[0].item_title"
}
```

我们比较推荐的做法是能再生成代码阶段直接用这些字段以传值的形式替换掉原来的直接值：

```javascript
const mockData = {
    item_title: '韩凯特'
};
render(<Mod dataSource={mockData} />);
```

<a name="options"></a>
### options

为了开发者的方便，我们在 `options` 里包含了两个比较方便的库供开发者使用，一个是当下比较流行的 format 类库 prettier，支持比较多语言的代码格式化优化；另一个是通用比较多的 lodash 库。

- prettier
- _

## 模板文件

模板文件使用 [xtemplate](https://www.npmjs.com/package/xtemplate)

## Test

你可以在本地模拟imgcook提供的虚拟机环境调试生成的代码。<br />`npm run test`
