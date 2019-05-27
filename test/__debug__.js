const xtpl = require('xtpl');
const fs = require('fs-extra');
const thunkify = require('thunkify');
const path = require('path');
const prettier = require('prettier');
const { NodeVM } = require('vm2');
const _ = require('lodash');
const co = require('co');
const dslHelper = require('@imgcook/dsl-helper');

const data = require('./data.js');

// const vm = new NodeVM({
//   console: 'inherit',
//   sandbox: {}
// });

// var assert = require('assert');
// describe('Generate', function() {
//   describe('#generateCode()', function() {
//     it('should generate code to write to file', function() {
      co(function*() {
        const xtplRender = thunkify(xtpl.render);
        // const code = fs.readFileSync(
        //   path.resolve(__dirname, '../src/index.js'),
        //   'utf8'
        // );
        const renderInfo = require('../src/index.js')(data, {
          prettier,
          helper: dslHelper,
          _,
        });
        // const renderInfo = vm.run(code)(data, {
        //   prettier: prettier,
        //   helper: dslHelper,
        //   _: _
        // });
        const renderData = renderInfo.renderData;
        const ret = yield xtplRender(
          path.resolve(__dirname, '../src/template.xtpl'),
          renderData,
          {}
        );
        const codeExamplePath = './codeExample';
        fs.ensureDirSync(path.resolve(__dirname, codeExamplePath));
        fs.writeFileSync(path.join(__dirname, `${codeExamplePath}/template.result.js`), ret);
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
//     });
//   });
// });
