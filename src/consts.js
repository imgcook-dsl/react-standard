const prettierJsOpt = {
  parser: 'babel',
  printWidth: 120,
  singleQuote: true,
};
const prettierCssOpt = {
  parser: 'css',
};

const CSS_TYPE = {
  MODULE_CLASS: 'module',
  MODULE_STYLE: 'module_style',
  IMPORT_CLASS: 'import',
  INLINE_CSS: 'inline',

}

module.exports = {
  CSS_TYPE,
  prettierJsOpt,
  prettierCssOpt
}