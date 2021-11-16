import { IPanelDisplay, IDslConfig } from './interface';
export const prettierJsOpt = {
  parser: 'babel',
  printWidth: 120,
  singleQuote: true,
};
export const prettierCssOpt = {
  parser: 'css',
};

export const CSS_TYPE = {
  MODULE_CLASS: 'module',
  MODULE_STYLE: 'module_style',
  IMPORT_CLASS: 'import',
  INLINE_CSS: 'inline',
}


// 记录全局参数配置，初始化时直接修改
export let DSL_CONFIG: IDslConfig = {
  globalCss: true,
  cssUnit: 'px',
  componentStyle: 'hooks',
  inlineStyle: 'module',
  outputStyle: 'component',
  cssStyle: 'camelCase',
  htmlFontSize: 16
};


export const initConfig = (cfg)=>{
  DSL_CONFIG = Object.assign(DSL_CONFIG, cfg)
}

