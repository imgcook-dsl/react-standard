
export interface IPanelDisplay {
  panelName: string;
  panelValue: string;
  panelType: string;
  folder?: string;
  panelImports?: IImport[]
}

export interface IImport {
  _import: string;
  package: string;
  version: string;
}

export interface IDslConfig {
  responseWidth: number;
  scale: number;
  globalCss: boolean;
  componentStyle: 'components' | 'hooks';
  cssUnit: 'px' | 'vw' | 'rpx' | 'rem';
  inlineStyle: 'import' | 'module' | 'inline' | 'module_style';
  outputStyle: 'project' | 'component';
  cssStyle: 'kebabCase' | 'camelCase' | 'snakeCase',
  htmlFontSize: number
}