import { IPanelDisplay } from './interface';
const { CSS_TYPE, prettierCssOpt } = require('./consts');

export default function exportGlobalCss(schema, option): IPanelDisplay[]  {
  const {
    prettier,
    dslConfig,
    _,
  } = option;

  // 只有一个模块时，生成到当前模块
  if (dslConfig.globalCss && dslConfig.inlineStyle !== CSS_TYPE.INLINE_CSS) {
    return [
      {
        panelName: `global.css`,
        panelValue: prettier.format(schema.css || '', prettierCssOpt),
        panelType: 'css',
        // folder: './',
      },
    ];
  } else {
    return [];
  }
}
