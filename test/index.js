const co = require('co');
const xtpl = require('xtpl');
const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const prettier = require('prettier');
const { NodeVM } = require('vm2');
const _ = require('lodash');
const data = require('./data');
var originData = require('./origindata');

const vm = new NodeVM({
  console: 'inherit',
  sandbox: {}
});

co(function*() {
  const xtplRender = thunkify(xtpl.render);
  const code = fs.readFileSync(
    path.resolve(__dirname, '../src/index.js'),
    'utf8'
  );
  const renderInfo = vm.run(code)(data, {
    prettier: prettier,
    _: _,
    originData: originData
  });
  const renderData = renderInfo.renderData;
  const ret = yield xtplRender(
    path.resolve(__dirname, '../src/template.xtpl'),
    renderData,
    {}
  );

  console.log(
    prettier.format(ret, {
      printWidth: 120
    })
  );
});
