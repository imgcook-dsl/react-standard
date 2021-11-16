const { expect, assert } = require('chai');
const { runCode } = require('./index');
const data = require('./data');
const _ = require('lodash');



describe('componentStyle 组件格式', () => {

  
  it('componentStyle = hooks 时，使用hooks出码方式', async () => {
    const result = runCode(data, { globalCss: true, componentStyle: 'hooks'});
    const jsFile = _.find(result, { panelName:'index.jsx'});
    expect(jsFile).to.not.be.equal(undefined);
    expect(jsFile.panelValue.includes('useState')).to.be.equal(true);
    expect(jsFile.panelValue.includes('memo')).to.be.equal(true);
    expect(jsFile.panelValue.includes('Component')).to.be.equal(false);
  });

  it('componentStyle = component 时，使用 component 出码方式', async () => {
    const result = runCode(data, { globalCss: true, componentStyle: 'component'});
    const jsFile = _.find(result, { panelName:'index.jsx'});
    expect(jsFile).to.not.be.equal(undefined);
    expect(jsFile.panelValue.includes('useState')).to.be.equal(false);
    expect(jsFile.panelValue.includes('memo')).to.be.equal(false);
    expect(jsFile.panelValue.includes('Component')).to.be.equal(true);
  });

});

describe('globalCss 全局样式', () => {
  it('globalCss = true 时，有 global.css 文件', async () => {
    const result = runCode(data, { globalCss: true, outputStyle: 'project'});
    expect(_.find(result, { panelName:'global.css'})).to.not.be.equal(undefined);
  });

  it('globalCss = false 时，无 global.css 文件', async () => {
    const result = runCode(data, { globalCss: false, outputStyle: 'project'});
    expect(_.find(result, { panelName:'global.css'})).to.be.equal(undefined);
  });
});


describe('outputStyle 风格参数', () => {
  it('outputStyle = project 时， 有 package.json文件', async () => {
    const result = runCode(data, { globalCss: true, jsx: 'javascript'});
    expect(_.find(result, { panelName:'package.json'})).to.not.be.equal(undefined);
    expect(_.find(result, { panelName:'index.html'})).to.not.be.equal(undefined);
    expect(_.find(result, { panelName:'index.jsx'})).to.not.be.equal(undefined);
    expect(_.find(result, { panelName:'index.css'})).to.not.be.equal(undefined);
  });

  it('outputStyle = component 时， 无 package.json文件', async () => {
    const result = runCode(data, { globalCss: true, outputStyle: 'component'});
    expect(_.find(result, { panelName:'package.json'})).to.be.equal(undefined);
  });
});

describe('jsx 支持TS', () => {
  it(`jsx = javascript 时`, async () => {
    const schema = _.cloneDeep(data);
    const result = runCode(schema, { inlineStyle: 'import', jsx: 'javascript'});
    const file = _.find(result, { panelType:'tsx'});
    expect(file).to.be.equal(undefined);
  });

  it(`jsx = typescript 时`, async () => {
    const schema = _.cloneDeep(data);
    const result = runCode(schema, { inlineStyle: 'import', jsx: 'typescript'});
    const file = _.find(result, { panelType:'jsx'});
    expect(file).to.be.equal(undefined);
  });
});
describe('cssStyle 样式名风格', () => {
  it(`cssStyle = kebabCase 时，中划线命名`, async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    schema.props.className = "class-name-01"
    const result = runCode(schema, { inlineStyle: 'import', cssStyle: 'kebabCase'});
    const file = _.find(result, { panelName:'index.css',    folder: 'components/BlockDemo'});
    expect(file.panelValue.includes(`.class-name-01`)).to.be.equal(true);
  });

  it(`cssStyle = snakeCase 时，下划线命名`, async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    schema.props.className = "class-name-01"
    const result = runCode(schema, { inlineStyle: 'import', cssStyle: 'snakeCase'});
    const file = _.find(result, { panelName:'index.css',    folder: 'components/BlockDemo'});

    expect(file.panelValue.includes(`.class_name_01`)).to.be.equal(true);
  });

  it(`cssStyle = camelCase 时，驼峰式命名`, async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    schema.props.className = "class-name-01"
    const result = runCode(schema, { inlineStyle: 'import', cssStyle: 'camelCase'});
    const file = _.find(result, { panelName:'index.css',    folder: 'components/BlockDemo'});
    expect(file.panelValue.includes(`.className01`)).to.be.equal(true);
  });


})

describe('inlineStyle 样式引入方式', () => {
  it(`inlineStyle = import 时，包含 import './index.css';`, async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    const result = runCode(schema, { inlineStyle: 'import',});
    const file = _.find(result, { panelName:'index.jsx',    folder: 'components/BlockDemo'});
    expect(file.panelValue.includes(`import './index.css';`)).to.be.equal(true);
  });

  it(`inlineStyle = module 时，包含 import styles from './index.module.css'`, async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    const result = runCode(schema, { inlineStyle: 'module',});
    const file = _.find(result, { panelName:'index.jsx',    folder: 'components/BlockDemo'});
    expect(file.panelValue.includes(`import styles from './index.module.css';`)).to.be.equal(true);
  });

  it(`inlineStyle = inline 时，不引入css文件`, async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    const result = runCode(schema, { inlineStyle: 'inline',});
    const file = _.find(result, { panelName:'index.jsx',    folder: 'components/BlockDemo'});
    expect(file.panelValue.includes(`'./index.css';`)).to.be.equal(false);
  });

});

describe('cssUnit 单位设置', () => {
  it('cssUnit = px', async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    const result = runCode(schema, { inlineStyle: 'import', cssUnit: 'px'});
    const cssFile = _.find(result, { panelName:'index.css',    folder: 'components/BlockDemo'});
    expect(cssFile.panelValue.includes('px')).to.be.equal(true);
    expect(cssFile.panelValue.includes('vw')).to.be.equal(false);
    expect(cssFile.panelValue.includes('rem')).to.be.equal(false);
  });

  it('cssUnit = vw', async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    const result = runCode(schema, { inlineStyle: 'import', cssUnit: 'vw'});
    const cssFile = _.find(result, { panelName:'index.css',    folder: 'components/BlockDemo'});
    expect(cssFile.panelValue.includes('px')).to.be.equal(false);
    expect(cssFile.panelValue.includes('vw')).to.be.equal(true);
    expect(cssFile.panelValue.includes('rem')).to.be.equal(false);
  });

  it('cssUnit = rem', async () => {
    const schema = _.cloneDeep(data);
    schema.componentName = 'Block';
    schema.fileName = 'BlockDemo';
    const result = runCode(schema, { inlineStyle: 'import', cssUnit: 'rem'});
    const cssFile = _.find(result, { panelName:'index.css',    folder: 'components/BlockDemo'});
    expect(cssFile.panelValue.includes('px')).to.be.equal(false);
    expect(cssFile.panelValue.includes('vw')).to.be.equal(false);
    expect(cssFile.panelValue.includes('rem')).to.be.equal(true);
  });


  

});


