function casHandler(str, value) {
  var casArr = str.split('.');
  var casObj = {};

  if (casArr.length == 0) {
    casObj[str] = value;
  }

  casArr.reverse().forEach(function(cas) {
    if (cas.indexOf('[') == -1) {
      casObj[cas] = value;
    } else {
      var newCasObj = {};
      var key = cas.split('[')[0];
      newCasObj[key] = [casObj];
      casObj = newCasObj;
    }
  });
  return casObj;
}

module.exports = function(layoutData, options) {
  const renderData = {};
  const prettier = options.prettier;
  const _ = options._;
  const raxImport = {};
  const style = {};
  let mock = {};

  function json2jsx(json) {
    var result = '';

    if (!!json.length && typeof json != 'string') {
      json.forEach(function(node) {
        result += json2jsx(node);
      });
    } else if (typeof json == 'object') {
      var type = json.componentType;
      var className = json.attrs.className;

      switch (type) {
        case 'text':
          var lines = json.style.lines;
          var innerText;

          if (json.tpl) {
            innerText = `{dataSource.${json.tpl}}`;
            mock = _.merge(mock, casHandler(json.tpl, json.innerText));
          } else {
            innerText = json.innerText;
          }

          result += `<Text style={styles.${className}} numberOfLines={${lines}}>${innerText}</Text>`;

          if (!raxImport[type]) {
            raxImport[type] = `import Text from 'rax-text';`;
          }

          if (json.style.lines == 1) {
            delete json.style.width;
            delete json.style.height;
          }

          delete json.style.fontFamily;
          delete json.style.lines;
          break;
        case 'view':
          if (json.children && json.children.length > 0) {
            result += `<View style={styles.${className}}>${json2jsx(
              json.children
            )}</View>`;
          } else {
            result += `<View style={styles.${className}} />`;
          }
          if (!raxImport[type]) {
            raxImport[type] = `import View from 'rax-view';`;
          }
          break;
        case 'picture':
          var source;

          if (json.tpl) {
            source = `dataSource.${json.tpl}`;
            mock = _.merge(mock, casHandler(json.tpl, json.attrs.src));
          } else {
            source = `'${json.attrs.src}'`;
          }
          result += `<Picture resizeMod={'contain'} style={styles.${className}} source={{uri: ${source}}} />`;

          if (!raxImport[type]) {
            raxImport[type] = `import Picture from 'rax-picture';`;
          }
          break;
      }

      style[className] = json.style;
    } else {
      return json
        .toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    return result;
  }

  // transform json
  var jsx = `${json2jsx(layoutData)}`;
  var dataBinding =
    Object.keys(mock).length > 0
      ? 'var dataSource = this.props.dataSource;'
      : '';

  renderData.modClass = `
    class Mod extends Component {
      render() {
        ${dataBinding}
        return (
          ${jsx}
        );
      }
    }
  `;

  renderData.import = Object.keys(raxImport)
    .map(key => {
      return raxImport[key];
    })
    .join('\n');
  renderData.mockData = `var mock = ${JSON.stringify(mock)}`;
  renderData.style = `var styles = ${JSON.stringify(style)}`;
  renderData.export = `render(<Mod dataSource={mock} />);`;

  const prettierOpt = {
    printWidth: 120,
    singleQuote: true
  };

  return {
    renderData: renderData,
    xml: prettier.format(jsx, prettierOpt),
    style: prettier.format(renderData.style, prettierOpt),
    prettierOpt: prettierOpt
  };
};
