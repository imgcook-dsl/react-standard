const {
  toString,
  existImport,
  parseLoop,
  parseStyle,
  genStyleCode,
  getGlobalClassNames,
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
  getText,
  addAnimation
} = require('./utils');

function exportPage(schema, option) {
  const { prettier, scale, componentsMap, imgcookConfig = {} } = option;
  const isExportGlobalFile = imgcookConfig.globalCss;
  const { cssUnit } = imgcookConfig
  const fileName = schema.fileName || schema.id;
  // page use index
  const filePathName = 'index';
  const globalCss = schema.css || '';

  // imports
  let imports = [];

  // import mods
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

  // methods
  const methods = [];

  // life cycles
  let lifeCycles = [];

  // init
  const init = [];

  if (isExportGlobalFile) {
    importStyles.push(`import './global.css';`);
  }

  importStyles.push(`import styles from './${filePathName}.css';`);

  const collectImports = (componentName) => {
    let componentMap = componentsMap[componentName] || {};
    let packageName =
      componentMap.package || componentMap.packageName || componentName;
    if (
      packageName &&
      ['view', 'image', 'text', 'picture'].indexOf(packageName.toLowerCase()) >=
        0
    ) {
      packageName = `rax-${packageName.toLowerCase()}`;
    }
    const singleImport = `import ${componentName} from '${packageName}'`;
    if (!existImport(imports, singleImport)) {
      imports.push({
        _import: singleImport,
        package: packageName,
        version: componentMap.dependenceVersion || '*',
      });
    }
  };

  // generate render xml
  const generateRender = (schema) => {
    const componentName = schema.componentName;
    const type = schema.componentName.toLowerCase();
    let className = schema.props && schema.props.className;
    className = genStyleClass(className, imgcookConfig.cssStyle);
    let classString = '';
    // format className
    if (!imgcookConfig.inlineStyle) {
      // get global class names
      if (imgcookConfig.globalCss) {
        const cssResults = getGlobalClassNames(schema.props.style, globalCss);

        if ((cssResults.names || []).length > 0) {
          classString += ` className={\`${(cssResults.names || []).join(
            ' '
          )} \$\{${genStyleCode('styles', className)}\}\` }`;
        } else {
          classString += ` className={${genStyleCode('styles', className)} }`;
        }

        schema.props.style = cssResults.style;
      } else {
        if (className) {
          classString += ` className={${genStyleCode('styles', className)}}`;
        }
      }
    } else {
      // format styles
      if (className) {
        classString = ` style={${genStyleCode('styles', className)}}`;
      }
    }

    if (className) {
      style[className] = parseStyle(schema.props.style, {
        scale,
        cssUnit,
      });
    }

    let xml;
    let props = '';

    Object.keys(schema.props).forEach((key) => {
      if (['className', 'style', 'text', 'src', 'key'].indexOf(key) === -1) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

      // fix attr when type is not text
      if (type !== 'text' && ['text'].includes(key)) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }
    });

    switch (type) {
      case 'text':
        collectImports('Text');
        const innerText = parseProps(schema.props.text || schema.text, true);
        xml = `<Text${classString}${props}>${innerText || ''}</Text>`;
        break;
      case 'image':
        collectImports('Image');
        if (schema.props.source && schema.props.source.uri) {
          xml = `<Image${classString}${props} />`;
        } else {
          let source = parseProps(schema.props.src);
          source = (source && `source={{uri: ${source}}}`) || '';
          xml = `<Image${classString}${props} ${source} />`;
        }
        break;
      case 'div':
      case 'view':
      case 'page':
      case 'block':
      case 'component':
        collectImports('View');
        if (schema.children && schema.children.length) {
          xml = `<View${classString}${props}>${transform(
            schema.children
          )}</View>`;
        } else {
          xml = `<View${classString}${props} />`;
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
  const transform = (schema) => {
    let result = '';

    if (Array.isArray(schema)) {
      schema.forEach((layer) => {
        result += transform(layer);
      });
    } else {
      const type = schema.componentName.toLowerCase();

      if (['page'].indexOf(type) !== -1) {
        // 容器组件处理: state/method/dataSource/lifeCycle
        const states = [];
        if (schema.state) {
          states.push(`state = ${toString(schema.state)}`);
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
            methods.push(parseDataSourceData.value);
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
      } else if (['block'].indexOf(type) !== -1) {
        const blockName = schema.fileName || schema.id;
        let props = '';
        Object.keys(schema.props).forEach((key) => {
          if (
            ['className', 'style', 'text', 'src', 'key'].indexOf(key) === -1
          ) {
            props += ` ${key}={${parseProps(schema.props[key])}}`;
          }
        });
        result += `<${line2Hump(blockName)} ${props} />`;
        importMods.push({
          _import: `import ${line2Hump(blockName)} from './${blockName}';`,
        });
      } else {
        result += generateRender(schema);
      }
    }

    return result;
  };

  // option.utils
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // start parse schema
  transform(schema);

  // output
  const prettierJsOpt = {
    parser: 'babel',
    printWidth: 120,
    singleQuote: true,
  };
  const prettierCssOpt = {
    parser: 'css',
  };
  const hooksView = generateRender(schema);

  const contextValue = prettier.format(
    `import { createElement, createContext, useReducer } from 'react';

    const initState = {
      txt: 'click me' // Get data, trigger proactively useEffect
    };
    
    function UserReducer(state, action) {
      switch (action.type) {
        case 'changeTxt':
          return {
            ...state,
            txt: \`click me \${action.payload.val}\`
          };
        default:
          return state;
      }
    }
    
    const IndexContext = createContext();
    
    const IndexProvider = props => {
      const [state, dispatch] = useReducer(UserReducer, initState);
      return (
        <IndexContext.Provider value={{ state, dispatch }}>
          {props.children}
        </IndexContext.Provider>
      );
    };
    
    export { IndexContext, IndexProvider };
  `,
    prettierJsOpt
  );

  const hasDispatch = hooksView.match('dispatch');
  const indexValue = prettier.format(
    `
    'use strict';
    import { createElement, useState, useEffect } from 'react';
    ${imports.map((i) => i._import).join('\n')}
    ${importMods.map((i) => i._import).join('\n')}
    import { ${
      hasDispatch ? 'IndexContext, IndexProvider' : 'IndexProvider'
    } } from './context';
    ${importStyles.map((i) => i).join('\n')}

    ${utils.join('\n')}
    export default function Page() {
      ${useState.join('\n')}
      ${
        hasDispatch
          ? 'const { state: { txt }, dispatch} = useContext(IndexContext);'
          : ''
      }

      ${lifeCycles.join('\n')}
      
      ${methods.join('\n')}
      return (<IndexProvider>${hooksView}</IndexProvider>)
    };
  `,
    prettierJsOpt
  );
  const prefix = imgcookConfig.inlineStyle
    ? ''
    : schema.props && schema.props.className;


  const animationKeyframes = addAnimation(schema);

  const panelDisplay = [
    {
      panelName: `${filePathName}.jsx`,
      panelValue: indexValue,
      panelType: 'js',
      panelImports: imports.concat(importMods),
    },
    {
      panelName: `context.jsx`,
      panelValue: contextValue,
      panelType: 'js',
      panelImports: [],
    },
    {
      panelName: `${filePathName}.css`,
      panelValue: prettier.format(
        `${generateCSS(style, prefix)}${animationKeyframes}`,
        prettierCssOpt
      ),
      panelType: 'css',
    },
  ];

  // 只有一个模块时，生成到当前模块
  if (isExportGlobalFile) {
    panelDisplay.push({
      panelName: `global.css`,
      panelValue: prettier.format(globalCss, prettierCssOpt),
      panelType: 'css',
    });
  }
  return panelDisplay;
}

module.exports = exportPage;
