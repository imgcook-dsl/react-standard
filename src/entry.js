const {
  line2Hump,
  transComponentsMap,
  initSchema,
  traverse,
  genStyleClass,
  getGlobalClassNames,
  parseStyle,
  genStyleCode,
} = require('./utils');
const { CSS_TYPE } = require('./consts');



const exportBlock = require('./exportBlock');
const exportPage = require('./exportPage');
const exportCreateApp = require('./exportCreateApp');
const exportGlobalCss = require('./exportGlobalCss');


module.exports = function(schema, option) {
  // get blocks json
  const blocks = [];
  const scale = 750 / ((option.responsive && option.responsive.width) || 750);
  const componentsMap = transComponentsMap(option.componentsMap);
  // console.log('componentsMap', componentsMap);
  // 参数设置
  option.scale = scale;
  option.componentsMap = componentsMap;
  option.blockInPage = schema.componentName === 'Page';
  option.pageGlobalCss = schema.css || '';

  const imgcookConfig = Object.assign(
    {
      globalCss: true,
      cssUnit: 'rpx',
      inlineStyle: CSS_TYPE.IMPORT_NAME,
    },
    option._.get(schema, 'imgcook.dslConfig')
  );

  // 可选 className name  style
  // inlineStyle = inlineStyle !== 'className';
  imgcookConfig.useHooks = imgcookConfig.componentStyle === 'hooks';

  option.imgcookConfig = imgcookConfig;
  const { cssUnit, inlineStyle } = imgcookConfig

  console.log('[imgcookConfig]', imgcookConfig)
  // clear schema
  initSchema(schema);

  // 计数器
  let counter = {};
  const getCounter = (key)=>{
    counter[key] =  (counter[key] || 0) + 1
    return  counter[key];
  }

  traverse(schema, (json) => {
    switch (json.componentName.toLowerCase()) {
      case 'page':
        json.fileName = line2Hump(json.fileName || `page_${getCounter('page')}`);
        break;
      case 'block':
        // parse fileName
        json.fileName = line2Hump(json.fileName || `block_${getCounter('block')}`);
        
        blocks.push(json);
        break;
      default:
        break;
    }
  });

  // 样式名处理：指定命名风格
  traverse(schema, (json) => {
    if (json.props && json.props.className) {
      json.props.className = genStyleClass(
        json.props.className,
        imgcookConfig.cssStyle
      );
    }
  });

  // 提取全局样式，类名数组存于 json.classString , 剩余样式覆盖 style
  traverse(schema, (json) => {
    let className = json.props && json.props.className;
    let classString = '';
    let style = json.props.style;
   
    // inline 
    if(inlineStyle === CSS_TYPE.INLINE_CSS){
      classString = `className="${className}"`;
      json.props.codeStyle = style;
    }else if(inlineStyle === CSS_TYPE.MODULE_STYLE){
      classString = ` style={${genStyleCode('styles', className)}}`;
    }else{
      let classnames = []
      let enableGlobalCss = imgcookConfig.globalCss && schema.css
   
      // 计算全局样式类名
      if (enableGlobalCss) {
        const cssResults = getGlobalClassNames(style, schema.css);
        if (cssResults.names.length > 0) {
          classnames = cssResults.names
        } 
        style = cssResults.style;
      } 
      
      if(inlineStyle == CSS_TYPE.MODULE_CLASS){
        // classnames.push(genStyleCode('styles', className));
     
        if(classnames.length){
          const nameStr =`${classnames.join(' ')} \$\{ ${ genStyleCode('styles', className) }\}`;
          classString = ` className={\`${nameStr.trim()}\`}`;
        }else{
          classString = ` className={${ genStyleCode('styles', className).trim()}}`;
        }

      }else{
        classnames.push(className);
        classString = ` className="${classnames.join(' ')}"`;
      }
    }
    
    json.props.style = style;
    json.classString = classString;
  });

  option.blocksCount = blocks.length;

  // export module code
  let panelDisplay = [];

  const panelImports = []

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


  if(imgcookConfig.outputStyle !== 'component'){
    // 依赖 package.json
    const dependencies = {};
    for(let item of panelDisplay){
      if(item.panelImports && item.panelImports.length > 0){
        for( let pack of item.panelImports){
          dependencies[pack.package] = pack.version || '*'
        }
      }
    }

    // 项目文件
    panelDisplay = panelDisplay.concat(exportCreateApp(schema, {...option, dependencies}));
  }


    
  // 全局样式
  panelDisplay = panelDisplay.concat(exportGlobalCss(schema, option));


  return {
    panelDisplay,
    noTemplate: true,
  };
};
