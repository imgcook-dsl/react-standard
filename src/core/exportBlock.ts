import { IPanelDisplay, IImport, IDependence } from './interface';
import {
  toString,
  existImport,
  importString,
  parseLoop,
  parseStyle,
  parseFunction,
  parseProps,
  parseState,
  parseLifeCycles,
  replaceState,
  parseCondition,
  generateCSS,
  generateScss,
  parseDataSource,
  line2Hump,
  addAnimation,
  traverse,
  isObject,
  isJSSlot,
} from './utils';

import { CSS_TYPE, OUTPUT_TYPE, prettierJsOpt, prettierCssOpt, prettierLessOpt, prettierScssOpt, DSL_CONFIG } from './consts';


export default function exportMod(schema, option):IPanelDisplay[] {
  const {
    prettier,
    scale,
    componentsMap,
    folder,
    blocksCount,
    pagesCount,
    blockInPage,
    dslConfig = {},
    pageGlobalCss,
    _,
  } = option;

  const isExportGlobalFile = dslConfig.globalCss && blocksCount == 1 && !blockInPage;
  const fileName = schema.fileName;
  const { cssUnit } = dslConfig;
  const rootSchema = schema;

  let folderName;
  let filePathName = 'index';
  if(schema.componentName == 'Page'){
    // 单页面
    // if(pagesCount == 1){
    //   folderName = '';
    // }else{
    //   folderName = 'pages/' + schema.fileName;
    // }
    // folderName = 'pages/' + schema.fileName;
    folderName = '';
    if(dslConfig.outputStyle ==  OUTPUT_TYPE.PROJECT){
      filePathName = 'App';
    }
    
    // filePathName = schema.fileName
  }else{
    folderName = pagesCount == 0 && blocksCount == 1 && dslConfig.outputStyle !== OUTPUT_TYPE.PROJECT? '' : ('components/' + schema.fileName);
  }
  schema.folderName = folderName;

  const globalCss = pageGlobalCss + '\n' + (schema.css || '');

  // imports
  const dependenceList: IDependence[]  = []

  // imports mods
  const importMods: string[] = [];

  // import css
  const importStyles: string[] = [];

  const importsMap = new Map();

  // inline style
  const style = {};

  // Global Public Functions
  const utils: string[] = [];

  // states
  let statesData = null;

  // useState
  let useState: string[] = [];

  // calsses
  let classes: string[] = [];

  // methods
  const methods: string[] = [];

  // life cycles
  let lifeCycles: string[] = [];

  // init
  const init: string[] = [];

  const cssFileName = `${filePathName}${dslConfig.inlineStyle == CSS_TYPE.MODULE_CLASS ? '.module' : ''}.${dslConfig.cssType || 'css'}`


  if (dslConfig.inlineStyle !== CSS_TYPE.INLINE_CSS) {
    if (isExportGlobalFile) {
      importStyles.push(`import './global.css';`);
    }
    if (dslConfig.inlineStyle == CSS_TYPE.IMPORT_CLASS) {
      importStyles.push(`import './${cssFileName}';`);
    } else {
      importStyles.push(`import styles from './${cssFileName}';`);
    }
  }

  const collectImports = (componentName) => {
    // ignore the empty string
    if (!componentName) {
      return;
    }

    const component = componentsMap[componentName];
    if(!component){
      return
    }
    const objSets = importsMap.get(component.packageName);

    if (!objSets) {
      const set = new Set();
      set.add(component);
      importsMap.set(component.packageName, set);
    } else {
      objSets.add(component);
    }
        
    if(!dependenceList.find(i=>i.package == component.packageName)){
      dependenceList.push({
        package: component.packageName,
        version: component.dependenceVersion || '*',
      });
    }

  };


  // generate render xml
  /**
   *
   * @param {*} json
   * @param {*} isReplace 是否提取 block
   * @returns
   */
  const generateRender = (json, isReplace = false): string => {
    if(typeof json == 'string'){
      return json
    }
    if(Array.isArray(json)){
      return (json.map(item=>{
        return generateRender(item, isReplace)
      })).join('')
    }
    const componentName = json.componentName;
    const type = json.componentName.toLowerCase();
    let className = json.props && json.props.className;
    let classString = json.classString || '';

    if (className) {
      style[className] = parseStyle(json.props.style);
    }

    let xml;
    let props = '';

    Object.keys(json.props).forEach((key) => {
      if (key === 'codeStyle') {
        if (json.props[key] && JSON.stringify(json.props[key]) !== '{}') {
          props += ` style={${parseProps(json.props[key])}}`;
        }
      }

      if (
        ['className', 'style', 'text', 'src', 'key', 'codeStyle'].indexOf(
          key
        ) === -1
      ) {
        props += ` ${key}={${parseProps(json.props[key])}}`;
      }

      // fix attr when type is not text
      if (type !== 'text' && ['text'].includes(key)) {
        props += ` ${key}={${parseProps(json.props[key])}}`;
      }

    });

    switch (type) {
      case 'text':
        let innerText =
          parseProps(json.props.text || json.text, true) || '';
        if (innerText.match(/this\.props/)) {
          innerText = innerText.replace(/this\./, '');
        }
        xml = `<span ${classString} ${props}>${innerText || ''}</span>`;
        break;
      case 'image':
        let source = parseProps(json.props.src);
        source = (source && `src={${source}}`) || '';
        xml = `<img ${classString} ${props} ${source} />`;
        break;

      case 'page':
      case 'block':
      case 'component':
        if (isReplace) {
          const compName = json.fileName;
          xml = `<${compName} />`;
          // 当前是 Page 模块
          const compPath = rootSchema.componentName == 'Page' ? './components' : '..';
          if(compName){
            importMods.push(`import ${compName} from '${compPath}/${compName}';`);
          }
          delete style[className]
        } else if (json.children && json.children.length) {
          xml = `<div ${classString} ${props}>${json.children
            .map((node) => {
              return generateRender(node, true);
            })
            .join('')}</div>`;
        } else {
          xml = `<div ${classString} ${props} />`;
        }
        break;
      case 'div':
      case 'view':
        if (json.children && json.children.length) {
          xml = `<div ${classString} ${props}>${json.children
            .map((node) => {
              return generateRender(node, true);
            })
            .join('')}</div>`;
        } else {
          xml = `<div ${classString} ${props} />`;
        }
        break;
      default:
        if(componentName){
          collectImports(componentName);
          if (
            json.children &&
            json.children.length &&
            Array.isArray(json.children)
          ) {
  
            xml = `<${componentName} ${classString} ${props}>${json.children
              .map((node) => {
                return generateRender(node, true);
              })
              .join('')}</${componentName}>`;
  
          } else if (typeof json.children === 'string') {
            xml = `<${componentName} ${classString} ${props} >${json.children}</${componentName}>`;
          } else {
            xml = `<${componentName} ${classString} ${props} />`;
          }
        }else{
          xml = ''
        }
    }

    if (json.loop) {
      const parseLoopData = parseLoop(
        json.loop,
        json.loopArgs,
        xml,
        {}
      );
      xml = parseLoopData.value;
      
      useState = useState.concat(parseLoopData.hookState);
    }

    xml = replaceState(xml);

    if (json.condition) {
      xml = parseCondition(json.condition, xml);
    }
    if (json.loop || json.condition) {
      xml = `{${xml}}`;
    }
    return xml;
  };


  // parse schema
  const transformHooks = (json) => {
    if(typeof json == 'string'){
      return json
    }
    let result = '';
    const blockName = json.fileName || json.id;
    const type = json.componentName.toLowerCase();

     // 容器组件处理: state/method/dataSource/lifeCycle
     const states: string[] = [];

     if (json.state) {
       states.push(`state = ${toString(json.state)};`);
       statesData = toString(json.state);
     }

     if (json.methods) {
       Object.keys(json.methods).forEach((name) => {
         const { params, content } = parseFunction(json.methods[name]);
         methods.push(`function ${name}(${params}) {${content}}`);
       });
     }

     if (json.dataSource && Array.isArray(json.dataSource.list)) {
       json.dataSource.list.forEach((item) => {
         if (typeof item.isInit === 'boolean' && item.isInit) {
           init.push(`${item.id}();`);
         } else if (typeof item.isInit === 'string') {
           init.push(`if (${parseProps(item.isInit)}) { ${item.id}(); }`);
         }
         const parseDataSourceData = parseDataSource(item);
         methods.push(
           `const ${parseDataSourceData.functionName} = ()=> ${parseDataSourceData.functionBody}`
         );
       });

       if (json.dataSource.dataHandler) {
         const { params, content } = parseFunction(
           json.dataSource.dataHandler
         );
         methods.push(`const dataHandler = (${params}) => {${content}}`);
         init.push(`dataHandler()`);
       }
     }

     if (json.lifeCycles) {
       lifeCycles = parseLifeCycles(json, init);
     }

     if (statesData) {
       useState.push(parseState(statesData));
     }

     const hooksView = generateRender(json, false);
     const hasDispatch = hooksView.match('dispatch');

     const classData = `
     export default memo((props) => {
       ${useState.join('\n')}
       ${
         hasDispatch
           ? 'const { state: { txt }, dispatch} = useContext(IndexContext);'
           : ''
       }
 
       ${methods.join('\n')}
       ${lifeCycles.join('\n')}
       ${
         hooksView.match(/^\{true\ \&\& /)
           ? `return (<View>${hooksView}</View>)`
           : `return (${hooksView})`
       }
       });
       `;
       classes.push(classData);
       
       

    return result;
  };

  const transformComponent = (json) => {
    if(typeof json == 'string'){
      return json
    }
    let result: string = '';
    const type = json.componentName.toLowerCase();

    if (['page', 'block', 'component'].includes(type)) {
      // 容器组件处理: state/method/dataSource/lifeCycle/render
      const states: string[] = [];
      const lifeCycles: string[] = [];
      const methods: string[] = [];
      const init: string[] = [];

      let render = '';
      let classData: string = '';

      if (json.state) {
        states.push(`this.state = ${toString(json.state)};`);
      }

      if (json.methods) {
        Object.keys(json.methods).forEach((name) => {
          const { params, content } = parseFunction(json.methods[name]);
          methods.push(`${name}(${params}) {${content}}`);
        });
      }

      if (json.dataSource && Array.isArray(json.dataSource.list)) {
        json.dataSource.list.forEach((item) => {
          if (typeof item.isInit === 'boolean' && item.isInit) {
            init.push(`this.${item.id}();`);
          } else if (typeof item.isInit === 'string') {
            init.push(`if (${parseProps(item.isInit)}) { this.${item.id}(); }`);
          }
          const parseDataSourceData = parseDataSource(item);
          methods.push(
            `${parseDataSourceData.functionName}()${parseDataSourceData.functionBody}`
          );
        });

        if (json.dataSource.dataHandler) {
          const { params, content } = parseFunction(
            json.dataSource.dataHandler
          );
          methods.push(`dataHandler(${params}) {${content}}`);
          init.push(`this.dataHandler()`);
        }
      }


      if (!json.lifeCycles) {
        json.lifeCycles = {};
      }

      if (!json.lifeCycles['_constructor']) {
        lifeCycles.push(
          `constructor(props, context) { super(); ${states.join('\n')} ${init.join('\n')}}`
        );
      }

      Object.keys(json.lifeCycles).forEach((name) => {
        const { params, content } = parseFunction(json.lifeCycles[name]);

        if (name === '_constructor') {
          lifeCycles.push(
            `constructor(${params}) { super(); ${content}   ${states.join('\n')}  ${init.join('\n')}}`
          );
        } else {
          lifeCycles.push(`${name}(${params}) {${content}}`);
        }
      });

      render = generateRender(json, false);

      classData = `
      export default class ${json.fileName} extends Component {
        ${lifeCycles.join('\n')}
        ${methods.join('\n')}
        render(){ 
          const state = this.state;
          return (${render});}
      
      }
      `;

      classes.push(classData);
    } else {
      result += generateRender(json);
    }

    return result;
  };


  const transform = dslConfig.useHooks
    ? transformHooks
    : transformComponent;

  // option.utils
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // parse schema


  traverse(schema, (node) => {
    const traverseProps = (value: any) => {
      console.log('traverseProps', value)
      if (value === null) {
        return null
      }
      if (Array.isArray(value)) {
        return value.map(item => traverseProps(item))
      }
      if (!isObject(value)) return value
      if (isJSSlot(value)) {
         value.jsx = generateRender(value.value as unknown)
      } else {
        Object.keys(value).forEach(key => {
          value[key] = traverseProps(value[key])
        })
      }
      return value
    }

    traverseProps(node)
  });

  // start parse schema
  transform(schema);
  let indexValue = '';

  const imports: string[] = importString(importsMap);

  if (dslConfig.useHooks) {
    // const hooksView = generateRender(schema);
    // const hasDispatch = hooksView.match('dispatch');
    indexValue = `
      'use strict';
      import React, { useState, useEffect, memo } from 'react';

      ${imports.join('\n')}
      ${importMods.join('\n')}

      ${importStyles.map((i) => i).join('\n')}
      ${utils.join('\n')}

      ${classes.join('\n')}

    `;
  } else {
    indexValue = `
    'use strict';
    import React, { Component} from 'react';

    ${imports.join('\n')}
    ${importMods.join('\n')}
    ${importStyles.map((i) => i).join('\n')}

    ${utils.join('\n')}
    ${classes.join('\n')}
  `;
  }

  const prefix = dslConfig.inlineStyle
    ? ''
    : schema.props && schema.props.className;

  // 获取当前 节点 所有 动画参数
  const animationKeyframes = addAnimation(schema);

  const panelDisplay: IPanelDisplay[] = [
    {
      panelName: `${filePathName}.${dslConfig.useTypescript?'tsx': 'jsx'}`,
      panelValue: prettier.format(indexValue, prettierJsOpt),
      panelType: dslConfig.useTypescript?'tsx': 'jsx',
      folder: folderName,
      panelDependencies: dependenceList,
    },
  ];

  // 非内联模式 才引入 index.module.css
  if (dslConfig.inlineStyle !== CSS_TYPE.INLINE_CSS) {

    let cssPanelValue = generateCSS(schema.commonStyles, '')
    switch (dslConfig.cssType) {
      case 'less':
        cssPanelValue = prettier.format(
          `${cssPanelValue}${generateScss(schema)} ${animationKeyframes}`,
          prettierLessOpt
        );
        break;
      case 'scss':
        cssPanelValue = prettier.format(
          `${cssPanelValue}${generateScss(schema)} ${animationKeyframes}`,
          prettierScssOpt
        );
        break;
      default:
        cssPanelValue = prettier.format(
          `${cssPanelValue}${generateCSS(style, prefix)} ${animationKeyframes}`,
          prettierCssOpt
        )
    }
    panelDisplay.push({
      panelName: cssFileName,
      panelValue: cssPanelValue,
      panelType: dslConfig.cssType || 'css',
      folder: folderName,
    });
    
  }

  // 只有一个模块时，生成到当前模块
  if (isExportGlobalFile && schema.css) {
    panelDisplay.push({
      panelName: `global.css`,
      panelValue: prettier.format(schema.css || '', prettierCssOpt),
      panelType: 'css',
      folder: folderName,
    });
  }

  return panelDisplay;
}

