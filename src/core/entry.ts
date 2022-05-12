import { IPanelDisplay, IDslConfig } from './interface';
import {
  line2Hump,
  transComponentsMap,
  initSchema,
  traverse,
  genStyleClass,
  getGlobalClassNames,
  genStyleCode,
  simpleStyle,
  commonStyle
} from './utils';
import { CSS_TYPE, COMPONENT_TYPE, OUTPUT_TYPE, initConfig, defaultGlobalCss } from './consts';



import exportBlock from './exportBlock';
// const exportPage from './exportPage';
import exportCreateApp from './exportCreateApp';
import exportGlobalCss from './exportGlobalCss';

module.exports = function (schema, option) {
  // get blocks json
  const blocks: any[] = [];
  const pages: any[] = []

  // 参数设置
  option.scale = 750 / ((option.responsive && option.responsive.width) || 750);
  option.componentsMap = transComponentsMap(option.componentsMap);
  option.blockInPage = schema.componentName === 'Page';
  option.pageGlobalCss = schema.css || '';

  const dslConfig = Object.assign(
    {
      scale: option.scale,
      globalCss: true,
      cssUnit: 'px',
      inlineStyle: CSS_TYPE.MODULE_CLASS,
      componentStyle: COMPONENT_TYPE.HOOKS,
      htmlFontSize: 16
    },
    option._.get(schema, 'imgcook.dslConfig')
  );

  dslConfig.useHooks = dslConfig.componentStyle === COMPONENT_TYPE.HOOKS;
  dslConfig.useTypescript = dslConfig.jsx === 'typescript'
  option.dslConfig = dslConfig;

  schema.css = schema.css || defaultGlobalCss;

  // 初始化全局参数
  initConfig(dslConfig);

  // 可选 className name  style
  // inlineStyle = inlineStyle !== 'className';


  const { inlineStyle } = dslConfig
  // clear schema
  initSchema(schema);

  const isProject = dslConfig.outputStyle == OUTPUT_TYPE.PROJECT;
  if(isProject){
    // 导出完整项目时，使根节点为Page
    schema.componentName = 'Page';
  }
  // 记录所有blocks
  traverse(schema, (json) => {
    switch (json.componentName.toLowerCase()) {
      case 'block':
        blocks.push(json);
        break;
      case 'page':
        pages.push(json);
        break;
    }
  });


  // 提取全局样式
  if([CSS_TYPE.IMPORT_CLASS].includes(inlineStyle)){
    traverse(schema, (json) => {
      let classnames: string[] = json.classnames || [];
      let style = json.props.style;
      const enableGlobalCss = dslConfig.globalCss && schema.css

      // 计算全局样式类名
      if (enableGlobalCss) {
        const cssResults = getGlobalClassNames(style, schema.css);
        if (cssResults.names.length > 0) {
          classnames = [...classnames, ...cssResults.names]
        }
        json.props.style = cssResults.style;
        json.classnames = classnames || []
      }
    });
  }


  // 提取公用样式
  if([CSS_TYPE.IMPORT_CLASS, CSS_TYPE.MODULE_CLASS].includes(inlineStyle)){
    blocks.forEach((block) => {
      commonStyle(block);
    });

  }

  // 精简默认样式
  simpleStyle(schema)

  
  // 提取全局样式，类名数组存于 json.classString , 剩余样式覆盖 style
  traverse(schema, (json) => {
    let classnames: string[] = json.classnames || [];
    const className = json.props && json.props.className || '';

    let classString = '';
    const style = json.props.style;

    // inline 内联 (不需要提取同名)
    if (inlineStyle === CSS_TYPE.INLINE_CSS) {
      className && (classString = `className="${className}"`);
      json.props.codeStyle = style; // 内联样式
    } else if (inlineStyle === CSS_TYPE.MODULE_STYLE) {
      className && (classString = ` style={${genStyleCode('styles', className)}}`);
    } else if(inlineStyle == CSS_TYPE.MODULE_CLASS) {
        classnames.push(className);
        classnames = classnames.filter(name=>name!=='');
        classnames = classnames.map(name=>genStyleCode('styles', name));
        
        if (classnames.length > 1) {
          classString = ` className={\`${classnames.map(name=>`\$\{${name}\}`).join(' ').trim()}\`}`;
        } else if(classnames.length == 1) {
          classString = ` className={${classnames[0].trim()}}`;
        }
    }else if(inlineStyle == CSS_TYPE.IMPORT_CLASS){
        classnames.push(className);
        classnames = classnames.filter(name=>name!=='');
        if (classnames.length >= 1) {
          classString = ` className="${classnames.join(' ')}"`;
        }
    }

    json.props.style = style;
    json.classString = classString;
  });




  option.blocksCount = blocks.length;
  option.pagesCount = pages.length;

  // export module code
  let panelDisplay: IPanelDisplay[] = [];


  blocks.length > 0 &&
    blocks.forEach((block) => {
      const result = exportBlock(block, option);
      panelDisplay = panelDisplay.concat(result);
    });
  // export Page code
  if (schema.componentName === 'Page') {
    const result = exportBlock(schema, option);
    panelDisplay = panelDisplay.concat(result);
  }



  if (isProject) {
    // 依赖 package.json
    const dependencies = {};
    for (let item of panelDisplay) {
      if (item.panelDependencies && item.panelDependencies.length > 0) {
        for (let pack of item.panelDependencies) {
          dependencies[pack.package] = pack.version || '*'
        }
      }
    }

    // 项目模式生成文件放到src中
    panelDisplay = panelDisplay.map(item => {
      item.folder = 'src/' + item.folder
      return item;
    });

    // 项目文件
    panelDisplay = panelDisplay.concat(exportCreateApp(schema, { ...option, dependencies }));
  }


  // 全局样式
  panelDisplay = panelDisplay.concat(exportGlobalCss(schema, { ...option, folder: isProject ? 'src' : '' }));


  return {
    panelDisplay,
    noTemplate: true,
  };
};
