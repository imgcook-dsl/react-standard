const {
  toString,
  existImport,
  traverse,
  parseLoop,
  parseStyle,
  parseFunction,
  parseProps,
  parseState,
  parseLifeCycles,
  replaceState,
  parseCondition,
  generateCSS,
  genStyleClass,
  parseDataSource,
  line2Hump,
  addAnimation,
} = require('./utils');

const { CSS_TYPE, prettierJsOpt, prettierCssOpt } = require('./consts');


function exportMod(schema, option) {
  const {
    prettier,
    scale,
    componentsMap,
    folder,
    blocksCount,
    blockInPage,
    imgcookConfig = {},
    pageGlobalCss,
    _,
  } = option;

  const isExportGlobalFile = imgcookConfig.globalCss && blocksCount == 1 && !blockInPage;
  const fileName = schema.fileName;
  const { cssUnit } = imgcookConfig;
  const rootSchema = schema;

  let folderName;
  let filePathName = 'index';
  if(schema.componentName == 'Page'){
    // schema.fileName = 'App';
    folderName =  ('pages/' + schema.fileName);
    // filePathName = schema.fileName
  }else{
    folderName = blocksCount == 1 ? '' : ('components/' + schema.fileName);
  }
  schema.folderName = folderName;

  const globalCss = pageGlobalCss + '\n' + (schema.css || '');

  // imports
  let imports = [];

  // imports mods
  let importMods = [];

  // import css
  let importStyles = [];

  // inline style
  const style = {};

  // Global Public Functions
  const utils = [];

  // states
  let statesData = null;

  // useState
  let useState = [];

  // calsses
  let classes = [];

  // methods
  const methods = [];

  // life cycles
  let lifeCycles = [];

  // init
  const init = [];

  const cssFileName = `${filePathName}${imgcookConfig.inlineStyle == CSS_TYPE.MODULE_CLASS ? '.module':''}.css`


  if (imgcookConfig.inlineStyle !== CSS_TYPE.INLINE_CSS) {
    if (isExportGlobalFile) {
      importStyles.push(`import './global.css';`);
    }
    if (imgcookConfig.inlineStyle == CSS_TYPE.IMPORT_CLASS) {
      importStyles.push(`import './${cssFileName}';`);
    } else {
      importStyles.push(`import styles from './${cssFileName}';`);
    }
  }

  const collectImports = (componentName) => {
    let componentMap = componentsMap[componentName] || {};
    let packageName =
      componentMap.package || componentMap.packageName || componentName;
    // if (
    //   packageName &&
    //   ['view', 'image', 'text', 'picture'].indexOf(packageName.toLowerCase()) >=
    //     0
    // ) {
    //   packageName = `rax-${packageName.toLowerCase()}`;
    // }
    const singleImport = `import ${componentName} from '${packageName}'`;
    if (!existImport(imports, singleImport)) {
      imports.push({
        _import: singleImport,
        package: packageName,
        version: componentMap.dependenceVersion || '*',
      });
    }
  };

  // let indexBody = generateComponent(schema, option);

  // traverse(schema, ()=>{

  // })

  // generate render xml
  /**
   *
   * @param {*} schema
   * @param {*} isReplace 是否提取 block
   * @returns
   */
  const generateRender = (schema, isReplace) => {
    const componentName = schema.componentName;
    const type = schema.componentName.toLowerCase();
    let className = schema.props && schema.props.className;
    className = genStyleClass(className, imgcookConfig.cssStyle);
    let classString = schema.classString;

    if (className) {
      style[className] = parseStyle(schema.props.style, {
        scale,
        cssUnit,
      });
    }

    let xml;
    let props = '';

    Object.keys(schema.props).forEach((key) => {
      if (key === 'codeStyle') {
        if (schema.props[key] && JSON.stringify(schema.props[key]) !== '{}') {
          props += ` style={${parseProps(schema.props[key])}}`;
        }
      }

      if (
        ['className', 'style', 'text', 'src', 'key', 'codeStyle'].indexOf(
          key
        ) === -1
      ) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

      // fix attr when type is not text
      if (type !== 'text' && ['text'].includes(key)) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

      if (key === 'codeStyle') {
        if (schema.props[key] && JSON.stringify(schema.props[key]) !== '{}') {
          props += ` style={${parseProps(schema.props[key])}}`;
        }
      }
    });

    switch (type) {
      case 'text':
        let innerText =
          parseProps(schema.props.text || schema.text, true) || '';
        if (innerText.match(/this\.props/)) {
          innerText = innerText.replace(/this\./, '');
        }
        xml = `<span ${classString} ${props}>${innerText || ''}</span>`;
        break;
      case 'image':
        let source = parseProps(schema.props.src);
        source = (source && `src=${source}`) || '';
        xml = `<img ${classString} ${props} ${source} />`;
        break;

      case 'page':
      case 'block':
      case 'component':
        if (isReplace) {
          const compName = schema.fileName;
          xml = `<${compName}${props} />`;
          // 当前是 Page 模块
          const  compPath = rootSchema.componentName == 'Page' ? '../../components': '..';
          importMods.push({
            _import: `import ${compName} from '${compPath}/${compName}';`,
          });
        } else if (schema.children && schema.children.length) {
          xml = `<div ${classString} ${props}>${schema.children
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
        if (schema.children && schema.children.length) {
          xml = `<div ${classString} ${props}>${schema.children
            .map((node) => {
              return generateRender(node, true);
            })
            .join('')}</div>`;
        } else {
          xml = `<div ${classString} ${props} />`;
        }
        break;
      default:
        collectImports(schema.componentName);
        if (
          schema.children &&
          schema.children.length &&
          Array.isArray(schema.children)
        ) {
          xml = `<${componentName}${classString}${props}>${transform(
            schema.children
          )}</${componentName}>`;
        } else if (typeof schema.children === 'string') {
          xml = `<${componentName}${classString}${props} >${schema.children}</${componentName}>`;
        } else {
          xml = `<${componentName}${classString}${props} />`;
        }
    }

    if (schema.loop) {
      const parseLoopData = parseLoop(
        schema.loop,
        schema.loopArgs,
        xml,
        statesData
      );
      xml = parseLoopData.value;
      
      useState = useState.concat(parseLoopData.hookState);
      console.log('useState', useState)
    }

    xml = replaceState(xml);

    if (schema.condition) {
      xml = parseCondition(schema.condition, xml);
    }
    if (schema.loop || schema.condition) {
      xml = `{${xml}}`;
    }
    return xml;
  };

  // parse schema
  const transformHooks = (schema) => {
    let result = '';
    const blockName = schema.fileName || schema.id;
    const type = schema.componentName.toLowerCase();

     // 容器组件处理: state/method/dataSource/lifeCycle
     const states = [];

     if (schema.state) {
       states.push(`state = ${toString(schema.state)};`);
       statesData = toString(schema.state);
     }

     if (schema.methods) {
       Object.keys(schema.methods).forEach((name) => {
         const { params, content } = parseFunction(schema.methods[name]);
         methods.push(`function ${name}(${params}) {${content}}`);
       });
     }

     if (schema.dataSource && Array.isArray(schema.dataSource.list)) {
       schema.dataSource.list.forEach((item) => {
         if (typeof item.isInit === 'boolean' && item.isInit) {
           init.push(`${item.id}();`);
         } else if (typeof item.isInit === 'string') {
           init.push(`if (${parseProps(item.isInit)}) { ${item.id}(); }`);
         }
         const parseDataSourceData = parseDataSource(item, imports);
         methods.push(
           `const ${parseDataSourceData.functionName} = ()=> ${parseDataSourceData.functionBody}`
         );
         imports = parseDataSourceData.imports;
       });

       if (schema.dataSource.dataHandler) {
         const { params, content } = parseFunction(
           schema.dataSource.dataHandler
         );
         methods.push(`const dataHandler = (${params}) => {${content}}`);
         init.push(`dataHandler()`);
       }
     }

     if (schema.lifeCycles) {
       lifeCycles = parseLifeCycles(schema, init);
     }

     if (statesData) {
       useState.push(parseState(statesData));
     }

     const hooksView = generateRender(schema, false);
     const hasDispatch = hooksView.match('dispatch');

     classData = `
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

  const transformComponent = (schema) => {
    let result = '';
    const type = schema.componentName.toLowerCase();

    if (['page', 'block', 'component'].includes(type)) {
      // 容器组件处理: state/method/dataSource/lifeCycle/render
      const states = [];
      const lifeCycles = [];
      const methods = [];
      const init = [];

      let render = '';
      let classData = '';

      if (schema.state) {
        states.push(`this.state = ${toString(schema.state)};`);
      }

      if (schema.methods) {
        Object.keys(schema.methods).forEach((name) => {
          const { params, content } = parseFunction(schema.methods[name]);
          console.log('hello', content)
          methods.push(`${name}(${params}) {${content}}`);
        });
      }

      if (schema.dataSource && Array.isArray(schema.dataSource.list)) {
        schema.dataSource.list.forEach((item) => {
          if (typeof item.isInit === 'boolean' && item.isInit) {
            init.push(`this.${item.id}();`);
          } else if (typeof item.isInit === 'string') {
            init.push(`if (${parseProps(item.isInit)}) { this.${item.id}(); }`);
          }
          const parseDataSourceData = parseDataSource(item, imports);
          methods.push(
            `${parseDataSourceData.functionName}()${parseDataSourceData.functionBody}`
          );
          imports = parseDataSourceData.imports;
        });

        if (schema.dataSource.dataHandler) {
          const { params, content } = parseFunction(
            schema.dataSource.dataHandler
          );
          methods.push(`dataHandler(${params}) {${content}}`);
          init.push(`this.dataHandler()`);
        }
      }


      if (!schema.lifeCycles) {
        schema.lifeCycles = {};
      }

      if (!schema.lifeCycles['_constructor']) {
        lifeCycles.push(
          `constructor(props, context) { super(); ${states.join('\n')} ${init.join('\n')}}`
        );
      }

      Object.keys(schema.lifeCycles).forEach((name) => {
        const { params, content } = parseFunction(schema.lifeCycles[name]);

        if (name === '_constructor') {
          lifeCycles.push(
            `constructor(${params}) { super(); ${content}   ${states.join('\n')}  ${init.join('\n')}}`
          );
        } else {
          lifeCycles.push(`${name}(${params}) {${content}}`);
        }
      });

      render = generateRender(schema, false);

      classData = `
      export default class ${schema.fileName} extends Component {
        ${lifeCycles.join('\n')}
        ${methods.join('\n')}
        render(){ 
          const state = this.state;
          return (${render});}
      
      }
      `;

      classes.push(classData);
    } else {
      result += generateRender(schema);
    }

    return result;
  };

  // if( imgcookConfig.useHooks){
  //   transformHooks(schema)
  // }else{
  //   transformComponent(schema)
  // }
  const transform = imgcookConfig.useHooks
    ? transformHooks
    : transformComponent;

  // option.utils
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // parse schema

  // start parse schema
  transform(schema);
  let indexValue = '';
  if (imgcookConfig.useHooks) {
    // const hooksView = generateRender(schema);
    // const hasDispatch = hooksView.match('dispatch');
    indexValue = `
      'use strict';
      import React, { createElement, useState, useEffect, memo } from 'react';
      ${imports.map((i) => i._import).join('\n')}
      ${importMods.map((i) => i._import).join('\n')}
  
      ${importStyles.map((i) => i).join('\n')}
      ${utils.join('\n')}

      ${classes.join('\n')}

    `;
  } else {
    indexValue = `
    'use strict';

    import React, { createElement, Component} from 'react';
    ${imports.map((i) => i._import).join('\n')}
    ${importMods.map((i) => i._import).join('\n')}
    ${importStyles.map((i) => i).join('\n')}

    ${utils.join('\n')}
    ${classes.join('\n')}
  `;
  }

  const prefix = imgcookConfig.inlineStyle
    ? ''
    : schema.props && schema.props.className;

  // 获取当前 节点 所有 动画参数
  const animationKeyframes = addAnimation(schema);

  const panelDisplay = [
    {
      panelName: `${filePathName}.jsx`,
      panelValue: prettier.format(indexValue, prettierJsOpt),
      panelType: 'js',
      folder: folderName,
      panelImports: imports,
    },
  ];

  // 非内联模式 才引入 index.module.css
  if (imgcookConfig.inlineStyle !== CSS_TYPE.INLINE_CSS) {
    panelDisplay.push({
      panelName: cssFileName,
      panelValue: prettier.format(
        `${generateCSS(style, prefix)} ${animationKeyframes}`,
        prettierCssOpt
      ),
      panelType: 'css',
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

module.exports = exportMod;
