const { CSS_TYPE, prettierCssOpt } = require('./consts');

function exportGlobalCss(schema, option) {
  const {
    prettier,
    imgcookConfig,
    _,
  } = option;

  // 只有一个模块时，生成到当前模块
  if (schema.css && imgcookConfig.globalCss && imgcookConfig.inlineStyle !== CSS_TYPE.INLINE_CSS) {
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
module.exports = exportGlobalCss;
