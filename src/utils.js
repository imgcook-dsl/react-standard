const find = require('lodash/find');
const unset = require('lodash/unset');
const camelCase = require('lodash/camelCase');
const kebabCase = require('lodash/kebabCase');
const snakeCase = require('lodash/snakeCase');
const cssParser = require('css/lib/parse');


// 从 css 解析样式规则饿
const getCssRules = (text) => {
  if (!cssParser) {
    return [];
  }
  const globalCssResult = cssParser(text, { source: 'global.css' });

  let rules = globalCssResult.stylesheet.rules;
  rules = rules.filter((item) => item.type === 'rule');
  rules = rules.map((item) => {
    let style = {};
    for (let dec of item.declarations) {
      const property = camelCase(dec.property);
      style[property] = dec.value;
    }

    return {
      selectors: item.selectors[0],
      style: style,
    };
  });

  return rules;
};

//  提取全局样式
const getGlobalClassNames = (cssObject, globalCssString) => {
  let names = [];
  if (!(globalCssString && cssParser)) {
    // 没有全局样式名
    return {
      names,
      style: cssObject,
    };
  }

  // 解析全局 css 规则
  const rules = getCssRules(globalCssString);

  for (let rule of rules) {
    // 按顺序提取样式
    // 仅提取 . 选择符
    const isMatch = find([cssObject], rule.style) && rule.selectors.startsWith('.');
    if (isMatch) {
      for (let key in rule.style) {
        unset(cssObject, key);
      }
      names.push(rule.selectors.replace('.', ''));
    }
  }

  return {
    names,
    style: cssObject,
  };
};

const isExpression = (value) => {
  return /^\{\{.*\}\}$/.test(value);
};

// eg: hello_world => HelloWorld
const line2Hump = (str) => {
  str = str.replace(/[_|-](\w)/g, (all, letter) => {
    return letter.toUpperCase();
  });
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};

const isEmptyObj = (o) => {
  if (o !== null && Object.prototype.toString.call(o) === '[object Object]') {
    return !Object.keys(o).length;
  }
  return false;
};

const transComponentsMap = (compsMap = {}) => {
  if (!compsMap || !Array.isArray(compsMap.list)) {
    return [];
  }
  const list = compsMap.list;
  return list.reduce((obj, comp) => {
    const componentName = comp.name;
    if (!obj[componentName]) {
      try {
        let dependence = JSON.parse(comp.dependence);
        if (dependence) {
          comp.packageName = dependence.package;
        }
        if (!comp.dependenceVersion) {
          comp.dependenceVersion = '*';
        }
        if (/^\d/.test(comp.dependenceVersion)) {
          comp.dependenceVersion = '^' + comp.dependenceVersion;
        }
      } catch (e) {}
      obj[componentName] = comp;
    }
    return obj;
  }, {});
};

const toString = (value) => {
  if ({}.toString.call(value) === '[object Function]') {
    return value.toString();
  }
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value, (key, value) => {
      if (typeof value === 'function') {
        return value.toString();
      } else {
        return value;
      }
    });
  }

  return String(value);
};

const toUpperCaseStart = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// 处理schema一些常见问题
const initSchema = (json) => {
  // 清理 class 空格
  traverse(json, (node)=>{
    if (node && node.props && node.props.className) {
      node.props.className = node.props.className.trim();
    }
  });
};

// 遍历节点
const traverse = (json, callback) => {
  if (Array.isArray(json)) {
    json.forEach((node) => {
      traverse(node, callback)
    });
    return
  }

  // 去除 class 空格
  if (json && callback) {
    callback(json)
  }

  if (
    json.children &&
    json.children.length > 0 &&
    Array.isArray(json.children)
  ) {
    json.children.forEach((child) => {
      traverse(child, callback);
    });
  }
};

const genStyleClass = (string, type)=>{
  switch(type){
    case 'camelCase': return camelCase(string);
    case 'kebabCase': return kebabCase(string);
    case 'snakeCase': return snakeCase(string);
    default:
      return camelCase(string);
  }
}

const genStyleCode = (styles, key) => {
  return !/-/.test(key) && key.trim()
    ? `${styles}.${key}`
    : `${styles}['${key}']`;
};

const parseNumberValue = (value, cssUnit) => {
  value = String(value).replace(/\b[\d\.]+(r?px)?\b/, (v) => {
    v = parseFloat(v, 10);
    if (!isNaN(v) && v !== 0) {
      return v;
    } else {
      return 0;
    }
  });
  if (/^\-?[\d\.]+$/.test(value)) {
    value = parseFloat(value, 10);
    if (cssUnit == 'rpx') {
      value += 'rpx';
    }else {
      value += 'px';
    }
  }
  return value;
};

// convert to responsive unit, such as vw
const parseStyle = (style, params) => {
  const { scale, cssUnit} = params
  for (let key in style) {
    switch (key) {
      case 'fontSize':
      case 'marginTop':
      case 'marginBottom':
      case 'paddingTop':
      case 'paddingBottom':
      case 'height':
      case 'top':
      case 'bottom':
      case 'width':
      case 'maxWidth':
      case 'left':
      case 'right':
      case 'paddingRight':
      case 'paddingLeft':
      case 'marginLeft':
      case 'marginRight':
      case 'lineHeight':
      case 'borderBottomRightRadius':
      case 'borderBottomLeftRadius':
      case 'borderTopRightRadius':
      case 'borderTopLeftRadius':
      case 'borderRadius':
        style[key] = parseInt(style[key]) * scale;
        if (style[key]) {
          style[key] = parseNumberValue(style[key], cssUnit);
        }
        break;
      default:
        if (style[key] && /^[\d\.]+px$/.test(style[key])) {
          style[key] = parseNumberValue(style[key], cssUnit);
        }
    }
  }

  return style;
};

// parse function, return params and content
const parseFunction = (func) => {
  const funcString = func.toString();
  const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);
  const content = funcString.slice(
    funcString.indexOf('{') + 1,
    funcString.lastIndexOf('}')
  );
  return {
    params,
    content,
  };
};

// parse layer props(static values or expression)
const parseProps = (value, isReactNode) => {
  if (typeof value === 'string') {
    if (isExpression(value)) {
      if (isReactNode) {
        return value.slice(1, -1);
      } else {
        return value.slice(2, -2);
      }
    }

    if (isReactNode) {
      return value;
    } else {
      return `'${value}'`;
    }
  } else if (typeof value === 'function') {
    const { params, content } = parseFunction(value);
    return `(${params}) => {${content}}`;
  } else if (typeof value === 'object') {
    return `${JSON.stringify(value)}`;
  } else {
    return value;
  }
};

// parse condition: whether render the layer
const parseCondition = (condition, render) => {
  if (typeof condition === 'boolean') {
    return `${condition} && ${render}`;
  } else if (typeof condition === 'string') {
    condition = condition.replace(/this\./, '');
    return `${condition.slice(2, -2)} && ${render}`;
  }
};

// flexDirection -> flex-direction
const parseCamelToLine = (string) => {
  return string
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
};

// style obj -> css
const generateCSS = (style, prefix) => {
  let css = '';

  for (let layer in style) {
    css += `${prefix && prefix !== layer ? '.' + prefix + ' ' : ''}.${layer} {`;
    for (let key in style[layer]) {
      css += `${parseCamelToLine(key)}: ${style[layer][key]};\n`;
    }
    css += '}';
  }

  return css;
};

// parse loop render
const parseLoop = (loop, loopArg, render, states) => {
  let data;
  let loopArgItem = (loopArg && loopArg[0]) || 'item';
  let loopArgIndex = (loopArg && loopArg[1]) || 'index';

  if (Array.isArray(loop)) {
    data = toString(loop);
  } else if (isExpression(loop)) {
    data = loop.slice(2, -2);
  }

  // add loop key
  const tagEnd = render.match(/^<.+?\s/)[0].length;
  render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(
    tagEnd
  )}`;

  // remove `this`
  const re = new RegExp(`this.${loopArgItem}`, 'g');
  render = render.replace(re, loopArgItem);
  let stateValue = data;
  if (data.match(/this\.state\./)) {
    stateValue = `state.${data.split('.').pop()}`;
  }

  return {
    hookState: [],
    value: `${stateValue}.map((${loopArgItem}, ${loopArgIndex}) => {
      return (${render});
    })`,
  };
};

// parse state
const parseState = (states) => {
  let stateName = 'state';
  // hooks state
  return `const [${stateName}, set${toUpperCaseStart(
    stateName
  )}] = useState(${toString(JSON.parse(states)) || null});`;
};

// replace state
const replaceState = (render) => {
  // remove `this`
  let stateName = 'state';
  const re = new RegExp(`this.state`, 'g');
  return render.replace(re, stateName);
};

// replace state
const parseLifeCycles = (schema, init) => {
  let lifeCycles = [];
  if (!schema.lifeCycles['_constructor'] && init) {
    schema.lifeCycles['_constructor'] = `function _constructor() {}`;
  }

  Object.keys(schema.lifeCycles).forEach((name) => {
    let { params, content } = parseFunction(schema.lifeCycles[name]);
    content = replaceState(content);
    switch (name) {
      case '_constructor': {
        init.push(content);
        lifeCycles.unshift(`
          // constructor
          useState(()=>{
            ${init.join('\n')}
          })
        `);
        break;
      }
      case 'componentDidMount': {
        lifeCycles.push(`
          // componentDidMount
          useEffect(()=>{
            ${content}
          }, [])
        `);
        break;
      }
      case 'componentDidUpdate': {
        lifeCycles.push(`
          // componentDidUpdate
          useEffect(()=>{
            ${content}
          })
        `);
        break;
      }
      case 'componentWillUnMount': {
        lifeCycles.push(`
          // componentWillUnMount
          useEffect(()=>{
            return ()=>{
              ${content}
            }
          }, [])
        `);
        break;
      }
    }
  });
  return lifeCycles;
};

const existImport = (imports, singleImport) => {
  let exist = false;
  imports.forEach((item) => {
    if (item._import === singleImport) {
      exist = true;
    }
  });
  return exist;
};

// parse async dataSource
const parseDataSource = (data, imports = []) => {
  const name = data.id;
  const { uri, method, params } = data.options;
  const action = data.type;
  let payload = {};
  let singleImport;

  switch (action) {
    case 'fetch':
      singleImport = `import {fetch} from 'whatwg-fetch';`;
      if (!existImport(imports, singleImport)) {
        imports.push({
          _import: singleImport,
          package: 'whatwg-fetch',
          version: '^3.0.0',
        });
      }
      payload = {
        method: method,
      };

      break;
    case 'jsonp':
      // singleImport = `import {fetchJsonp} from 'fetch-jsonp';`;
      // if (!existImport(imports, singleImport)) {
      //   imports.push({
      //     _import: singleImport,
      //     package: 'fetch-jsonp',
      //     version: '^1.1.3',
      //   });
      // }
      break;
  }

  Object.keys(data.options).forEach((key) => {
    if (['uri', 'method', 'params'].indexOf(key) === -1) {
      payload[key] = toString(data.options[key]);
    }
  });

  let comma = isEmptyObj(payload) ? '' : ',';
  // params parse should in string template
  if (params) {
    payload = `${toString(payload).slice(0, -1)} ${comma} body: ${
      isExpression(params) ? parseProps(params) : toString(params)
    }}`;
  } else {
    payload = toString(payload);
  }

  let result = `{
  return ${action}(${parseProps(uri)}, ${toString(payload)})
    .then((response) => response.json())
`;

  if (data.dataHandler) {
    const { params, content } = parseFunction(data.dataHandler);
    result += `.then((${params}) => {${content}})
    .catch((e) => {
      console.log('error', e);
    })
  `;
  }

  result += '}';

  return {
    value: `${name}() ${result}`,
    functionName: name,
    functionBody: result,
    imports,
  };
};

// get children text
const getText = (schema) => {
  let text = '';

  const getChildrenText = (schema) => {
    const type = schema.componentName.toLowerCase();
    if (type === 'text') {
      text += parseProps(schema.props.text || schema.text, true).replace(
        /\{/g,
        '${'
      );
    }

    schema.children &&
      Array.isArray(schema.children) &&
      schema.children.map((item) => {
        getChildrenText(item);
      });
  };

  getChildrenText(schema);

  return text;
};


const transAnimation = function(animation) {
  let keyFrames = ``;
  for (let i of animation.keyframes) {
    keyFrames += `${((i.offset * 10000) / 100.0).toFixed(0) + '%'} {
  ${i.opacity ? 'opacity: '.concat(i.opacity) + ';' : ''}
  ${i.transform ? 'transform: '.concat(i.transform) + ';' : ''}
}
`;
  }
  let keyframes = `
@keyframes ${animation.name} {
${keyFrames}
}
`;
  return keyframes;
};

const addAnimation = function(schema) {
  let animationRes = ``;
  traverse(schema, (json)=>{
    if(json.animation){
      animationRes += transAnimation(json.animation);
    }
  })
  return animationRes;
};

module.exports = {
  isExpression,
  toString,
  transComponentsMap,
  line2Hump,
  existImport,
  toUpperCaseStart,
  initSchema,
  traverse,
  genStyleCode,
  getGlobalClassNames,
  parseStyle,
  parseDataSource,
  parseFunction,
  parseLoop,
  parseCondition,
  parseProps,
  parseState,
  parseLifeCycles,
  replaceState,
  generateCSS,
  getText,
  addAnimation,
  genStyleClass
};
