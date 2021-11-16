const co = require('co');
const xtpl = require('xtpl');
const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const prettier = require('prettier');
const { NodeVM } = require('vm2');
const _ = require('lodash');
const data = require('./data');
const componentsMap = require('./components-map');
const helper = require('@imgcook/dsl-helper');

// const entry = require('../src/entry');

const vm = new NodeVM({
  console: 'inherit',
  sandbox: {},
});


const runCode = (data, dslConfig)=>{
  data = _.cloneDeep(data);
  const config = _.get(data, 'imgcook.dslConfig', {});
  _.set(data, 'imgcook.dslConfig', Object.assign(config, dslConfig));


  const code = fs.readFileSync(
    path.resolve(__dirname, '../src/index.js'),
    'utf8'
  );
  const files = vm.run(code)(data, {
    prettier: prettier,
    _: _,
    responsive: {
      width: 750,
      viewportWidth: 375,
    },
    helper,
    componentsMap,
  });


  // const files = entry(data, {
  //   prettier: {
  //     format: (str, opt) => {
  //       return prettier.format(str, opt)
  //     }
  //   },
  //   _: _,
  //   responsive: {
  //     width: 750,
  //     viewportWidth: 375,
  //   },
  //   helper,
  //   componentsMap,
  // });
  return files.panelDisplay;
}


co(function*() {
  const panelDisplay = runCode(data, { outputStyle: 'project', inlineStyle: 'module', globalCss: true})
  // const renderInfo = vm.run(code)(data, {
  //   prettier: prettier,
  //   _: _,
  //   responsive: {
  //     width: 750,
  //     viewportWidth: 375,
  //   },
  //   helper,
  //   componentsMap,
  // });

  // const renderInfo = entry(data, {
  //   prettier: {
  //     format: (str, opt) => {
  //       return prettier.format(str, opt)
  //     }
  //   },
  //   _: _,
  //   responsive: {
  //     width: 750,
  //     viewportWidth: 375,
  //   },
  //   helper,
  //   componentsMap,
  // })

  const baseDir = '../demo/src/dist';

  if (fs.existsSync(  path.join(__dirname, baseDir))) {
    fs.rmdirSync( path.join(__dirname, baseDir), { recursive: true });
  }
  mkDirsSync(  path.join(__dirname, baseDir));


  // const baseDir = '../code';
  // 生成到目标目录运行




    panelDisplay.forEach((file) => {
      if (file.folder) {
        let fileFolder = path.join(__dirname, `${baseDir}/${file.folder}`);
        if (!fs.existsSync(fileFolder)) {
          mkDirsSync(fileFolder);
        }
        fs.writeFileSync(
          path.join(__dirname, `${baseDir}/${file.folder}/${file.panelName}`),
          file.panelValue
        );
      } else {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir}/${file.panelName}`),
          file.panelValue
        );
      }
    });
 
});

function mkDirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkDirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

module.exports = {
  runCode
}