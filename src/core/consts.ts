import { IPanelDisplay, IDslConfig } from './interface';
export const prettierJsOpt = {
  parser: 'babel',
  printWidth: 120,
  singleQuote: true,
};
export const prettierCssOpt = {
  parser: 'css',
};

export const prettierJsonOpt = {
  parser: 'json',
};

export const prettierScssOpt = {
  parser: 'scss',
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true
};

export const prettierLessOpt = {
  parser: 'less',
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true
};

export const prettierHtmlOpt = {
  parser: 'html',
  printWidth: 120,
  singleQuote: true
};


export const CSS_TYPE = {
  MODULE_CLASS: 'module',
  MODULE_STYLE: 'module_style',
  IMPORT_CLASS: 'import',
  INLINE_CSS: 'inline',
}

export const COMPONENT_TYPE = {
  HOOKS: 'hooks',
  COMPONENT: 'component',
}

export const OUTPUT_TYPE = {
  PROJECT: 'project',
  COMPONENT: 'component',
}


// 记录全局参数配置，初始化时直接修改
export let DSL_CONFIG: IDslConfig = {
  responseWidth: 750,
  scale: 1,
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




export const defaultGlobalCss = `/**
 * 全局样式 global.css
 */
.flex-row {
	display: flex;
	flex-direction: row;
}

.flex-col {
	display: flex;
	flex-direction: column;
}

.justify-start {
	display: flex;
	justify-content: flex-start;
}

.justify-center {
	display: flex;
	justify-content: center;
}

.justify-end {
	display: flex;
	justify-content: flex-end;
}

.justify-between {
	display: flex;
	justify-content: space-between;
}

.items-start {
	display: flex;
	align-items: flex-start;
}

.items-center {
	display: flex;
	align-items: center;
}

.items-end {
	display: flex;
	align-items: flex-end;
}

`