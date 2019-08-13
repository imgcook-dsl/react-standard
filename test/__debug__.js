const xtpl = require('xtpl');
const fs = require('fs-extra');
const thunkify = require('thunkify');
const path = require('path');
ttier = require('prettier');
const _ = require('lodash');
const co = require('co');
const dslHelper = require('@imgcook/dsl-helper');

const data = require('./data.js');

co(function*() {
  const xtplRender = thunkify(xtpl.render);
  const renderInfo = require('../src/index.js')(data, {
    prettier,
    helper: dslHelper,
    _
  });
  const renderData = renderInfo.renderData;
  const ret = yield xtplRender(
    path.resolve(__dirname, '../src/template.xtpl'),
    renderData,
    {}
  );
  const codeExamplePath = './codeExample';
  fs.ensureDirSync(path.resolve(__dirname, codeExamplePath));
  fs.writeFileSync(
    path.join(__dirname, `${codeExamplePath}/template.result.js`),
    ret
  );
  fs.writeFileSync(
    path.join(__dirname, `${codeExamplePath}/template.result.json`),
    JSON.stringify(renderInfo, null, 2)
  );
  fs.writeFileSync(
    path.join(__dirname, `${codeExamplePath}/template.result.openCode.js`),
    (() => {
      let _r = '';
      for (var _o in renderInfo.openCode) {
        _r += `//代码块：${_o}\r\n${renderInfo.openCode[_o]}\r\n\r\n`;
      }
      return _r;
    })()
  );
});
