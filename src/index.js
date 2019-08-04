module.exports = function(layoutData, opts) {
  let renderData = {};
  const _ = opts._;
  const helper = opts.helper;
  const _line = helper.utils.line;
  const _indentTab = helper.utils.indentTab;

  // 样式过滤
  if (helper.clearInheritedAttr) {
    layoutData = helper.clearInheritedAttr(layoutData, true);
  }
  // 无需处理的数据绑定过滤掉
  !layoutData.dataBindingStore && (layoutData.dataBindingStore = []);
  layoutData.dataBindingStore = layoutData.dataBindingStore.filter(_v => {
    if (
      _v.defaultValue &&
      _v.value.isStatic &&
      _v.value.staticType == 'STRING' &&
      _v.value.value == _v.defaultValue
    ) {
      return false;
    } else {
      return true;
    }
  });

  let modConfig = layoutData.modStyleConfig || {
    designWidth: 750,
    designHeight: 1334
  };
  let viewportWidth = modConfig.viewportWidth || 375;
  let designWidth = modConfig.designWidth;
  let htmlFontsize = viewportWidth ? viewportWidth / 10 : null;

  let scopeClass = layoutData.attrs.className;

  /**
   * dsl配置
   */
  const COMPONENT_NAME_MAP = {
    view: 'div',
    text: 'span',
    picture: 'img',
    link: 'a',
    video: 'video',
    expview: 'div',
    scroller: 'div'
  };
  const EVENT_MAP = {
    init: 'componentWillMount',
    destroy: 'componentWillUnmount'
  };
  const DATABINDING_STYLE_MAP = {
    'style.width': 'styleLevel',
    'style.height': 'styleLevel',
    'style.backgroundColor': 'styleLevel',
    'style.color': 'styleLevel',
    'style.borderRadius': 'styleLevel',
    'style.borderWidth': 'styleLevel',
    'style.borderStyle': 'styleLevel',
    'style.opacity': 'styleLevel'
  };
  const DATABINDING_MAP = {
    view: {
      show: 'domLevel',
      ...DATABINDING_STYLE_MAP
    },
    picture: {
      show: 'domLevel',
      resizeMode: 'propsLevel',
      lazyload: 'propsLevel',
      placeholder: 'propsLevel',
      ...DATABINDING_STYLE_MAP,
      source: 'specialLevel'
    },
    scroller: {
      show: 'domLevel',
      ...DATABINDING_STYLE_MAP
    },
    expview: {
      show: 'domLevel',
      ...DATABINDING_STYLE_MAP
    },
    text: {
      show: 'domLevel',
      ...DATABINDING_STYLE_MAP,
      'style.fontFamily': 'styleLevel',
      'style.fontSize': 'styleLevel',
      'style.fontWeight': 'styleLevel',
      innerText: 'specialLevel'
    },
    link: {
      show: 'domLevel',
      ...DATABINDING_STYLE_MAP,
      'style.fontFamily': 'styleLevel',
      'style.fontSize': 'styleLevel',
      'style.fontWeight': 'styleLevel',
      href: 'propsLevel',
      innerText: 'specialLevel'
    },
    video: {
      show: 'domLevel',
      ...DATABINDING_STYLE_MAP,
      src: 'propsLevel',
      poster: 'propsLevel',
      autoPlay: 'propsLevel',
      controls: 'propsLevel',
      muted: 'propsLevel'
    }
  };

  /**
   * @desc 生成所有文档生成相关的信息
   * @param originJson originJson
   * @return Object 所有文档相关的信息
   */
  function genertePartJson(originJson) {
    // 完整包含格式信息的json
    // 文件配置和一些必要的link信息
    let fileFlowOptions = {
      needImportPicture: false,
      needImportText: false,
      needImportLink: false,
      needImportVideo: false,
      // needImportOther: [ ], // 需要额外引入的包名 rax-picture / @ali/universal-emitter
      codeSelfFunction: {}, // 组件自身上的方法，init & onClick_1 && helper_1
      dataConfigHasUsed: {}, // 数据源配置
      dataConfigHasUsedInOpenCode: {}, // LIGHT DATA CONFIG
      mockDataOptions: {},
      schemaAttrs: {}, // LIGHT ATTRS SCHEMA
      schemaData: {} // LIGHT DATA SCHEMA
    };
    // 样式存储
    let cssStore = [];
    const getScriptStore = () => {
      return originJson.eventStore && originJson.scriptStore
        ? (originJson.eventStore || []).map(v => {
            const contentStore = (originJson.scriptStore || []).find(
              _v => _v.id === v.scriptId
            );
            return {
              belongId: v.belongId,
              content: contentStore.content,
              eventType: v.type,
              scriptName: contentStore.name
            };
          })
        : originJson.scriptStore || [];
    };

    // let scriptStore = originJson.scriptStore || [];
    let scriptsStore = getScriptStore();

    // 脚本记录scriptsStore
    // let scriptsStore = originJson.scriptStore || [];
    // 数据绑定list
    let dataBindingStore = originJson.dataBindingStore || [];
    // 数据源
    let dataConfig =
      (originJson.dataConfig && originJson.dataConfig.dynamicOrigin) || [];
    // 待mock对象
    let mockDataStore = {}; // {"data": {"moduleDataSource.item_url" : "helloworld"}}
    // FOR LIGHR SCHEMA
    let schemaAttrs = {
      type: 'object',
      description: 'attrsSchema',
      properties: {
        disableAutoRequest: {
          type: 'boolean',
          title: '是否禁用默认请求',
          default: 'false'
        },
        gSize: {
          type: 'number',
          title: '一行多少个',
          default: '1'
        }
      }
    };
    let schemaData = {
      title: 'dataSchema',
      type: 'object',
      properties: {
        optioninfo: {
          type: 'object',
          title: '选项配置',
          properties: {
            dynamic: {
              type: 'string',
              title: 'false代表禁止动态输出',
              default: 'true'
            },
            static: {
              type: 'string',
              title: 'false代表禁止静态输出',
              default: 'true'
            }
          }
        },
        moduleDataSource: {
          type: 'array',
          title: '这是字段描述',
          items: {
            type: 'object',
            description: '接口返回值',
            properties: {}
          }
        }
      }
    };
    let { xmlPartsJson, xmlPartsJsonUseClassName } = generateXML(originJson, {
      indent: 0,
      eventsOn: true // 处理event
    });
    // 生成样式
    // 同名样式去重
    let cssNameMap = {};
    cssStore = cssStore.filter(v => {
      if (cssNameMap[v.styleName]) {
        return false;
      } else {
        cssNameMap[v.styleName] = true;
        return true;
      }
    });
    let {
      stylePartsJson,
      styleCssPartsJson,
      styleRemCssPartsJson
    } = generateStyle(cssStore);

    let styleCssResponsivePartsJson = generateResponsiveStyle(cssStore);
    // mockData生成
    fileFlowOptions.mockDataOptions = generateMockData(mockDataStore);
    // LIGHT
    fileFlowOptions.schemaAttrs = schemaAttrs;
    if (
      Object.keys(schemaData.properties.moduleDataSource.items.properties)
        .length == 0
    ) {
      schemaData.properties.moduleDataSource.items.properties = {
        item_title: {
          type: 'string',
          title: '宝贝名称'
        }
      };
    }
    fileFlowOptions.schemaData = schemaData;

    let result = {
      fileFlowOptions: fileFlowOptions,
      xmlPartsJson: xmlPartsJson,
      xmlPartsJsonUseClassName: xmlPartsJsonUseClassName,
      stylePartsJson: stylePartsJson,
      styleCssPartsJson: styleCssPartsJson,
      styleRemCssPartsJson: styleRemCssPartsJson
    };

    if (styleCssResponsivePartsJson) {
      result.styleCssResponsivePartsJson = styleCssResponsivePartsJson;
    }

    return result;

    /**
     * @desc 递归的方式生成xml
     * @param json layoutJson
     * @param options 配置信息
     * @return result 所有xml遍历过程中的产出
     */
    function generateXML(json, options) {
      let indent = options.indent || 0;
      let eventsOn = options.eventsOn || false;
      let result = [];
      let resultClass = [];
      if (!!json.length && typeof json != 'string') {
        json.forEach((v, i) => {
          let _i = generateXML(v, {
            indent: indent,
            eventsOn: eventsOn
          });
          result = result.concat(_i.xmlPartsJson);
          resultClass = resultClass.concat(_i.xmlPartsJsonUseClassName);
        });
      } else if (typeof json == 'object') {
        let type = json.componentType;
        let changeType = json.changeType || json.componentType;
        let changeTypeName = _.get(COMPONENT_NAME_MAP, changeType, 'div');
        changeType === 'link' && (fileFlowOptions.needImportLink = true);
        changeType === 'video' && (fileFlowOptions.needImportVideo = true);

        let className = json.attrs && json.attrs.className;
        // 过滤出当前ROOT节点是否有事件
        let rootBaseEvent = scriptsStore.filter(v => {
          if (
            ['destroy', 'init'].indexOf(v.eventType) > -1 &&
            v.belongId == json.id
          ) {
            let eventRet = generateEvent(v);
            if (eventRet) {
              fileFlowOptions.codeSelfFunction[
                EVENT_MAP[v.eventType]
              ] = eventRet;
              return true;
            }
          }
        });
        // 过滤出当前节点是否有事件
        let domEvent = scriptsStore.filter(v => {
          if (
            ['destroy', 'init', 'helper'].indexOf(v.eventType) == -1 &&
            v.belongId == json.id
          ) {
            let eventRet = generateEvent(v);
            if (eventRet) {
              fileFlowOptions.codeSelfFunction[v.scriptName] = eventRet;
              return true;
            }
          }
        });
        // 过滤出当前节点的helper方法
        let helperFunc = scriptsStore.filter(v => {
          if (['helper'].indexOf(v.eventType) > -1 && v.belongId == json.id) {
            let eventRet = generateEvent(v);
            if (eventRet) {
              fileFlowOptions.codeSelfFunction[v.scriptName] = eventRet;
              return true;
            }
          }
        });
        // 过滤出当前节点的绑定关系
        let domDataBinding = dataBindingStore.filter(v => {
          if (v.belongId == json.id) {
            if (v.value.isStatic) {
              return true;
            } else {
              let source = v.value.source;
              let sourceValue = v.value.sourceValue;
              if (source && sourceValue) {
                mockDataStore[source] || (mockDataStore[source] = {});
                let mockSchemaPorps =
                  (v.value.schema &&
                    v.value.schema.schemaProps &&
                    v.value.schema.schemaProps.properties) ||
                  {};
                if (source == 'data') {
                  let _dataProps =
                    schemaData.properties.moduleDataSource.items.properties;
                  _dataProps = _.merge(_dataProps, mockSchemaPorps);
                } else if (source == 'attrs') {
                  let _attrsProps = schemaAttrs.properties;
                  _attrsProps = _.merge(_attrsProps, mockSchemaPorps);
                }
                if (Array.isArray(sourceValue)) {
                  let remainDefalult = '';
                  if (
                    v.target[0] == 'innerText' &&
                    json.componentType == 'text'
                  ) {
                    remainDefalult = json.innerText;
                    sourceValue.map((_v, _i) => {
                      if (_v.type !== 'DYNAMIC') {
                        remainDefalult = remainDefalult.replace(_v.value, '');
                      }
                    });
                  } else if (
                    v.target[0] == 'source' &&
                    json.componentType == 'picture'
                  ) {
                    remainDefalult = json.attrs.src;
                  }
                  sourceValue.map((_v, _i) => {
                    if (_v.type == 'DYNAMIC') {
                      let _path = _v.value;
                      _path = _path.slice(7, _path.length - 1);
                      mockDataStore[source][_path] = remainDefalult;
                    }
                  });
                } else {
                  mockDataStore[source][sourceValue] = (() => {
                    if (
                      v.target[0] == 'innerText' &&
                      json.componentType == 'text'
                    ) {
                      return json.innerText;
                    } else if (
                      v.target[0] == 'source' &&
                      json.componentType == 'picture'
                    ) {
                      return json.attrs.src; // TODO 7.19
                    } else {
                      return null;
                    }
                  })();
                }
                return true;
              } else {
                return false;
              }
            }
          }
        });

        // 对当前节点的事件进行partsJson生成
        let eventLine = null;
        if (domEvent.length > 0) {
          eventLine = domEvent.map(_v => {
            return _line(`${_v.eventType}={this.${_v.scriptName}}`, {
              indent: {
                tab: indent + 1
              }
            });
          });
        }
        // 对当前节点的绑定关系进行归类
        let dataBindingLineType = {
          domLevel: [],
          propsLevel: [],
          styleLevel: [],
          specialLevel: []
        };
        if (domDataBinding.length > 0) {
          let dataMapByType = DATABINDING_MAP[type];

          // dataMapByType = DATABINDING_MAP[ changeType ]; ///
          dataMapByType = _.get(
            DATABINDING_MAP,
            changeType,
            DATABINDING_MAP['view']
          );
          domDataBinding.map(_v => {
            let target = _v.target[0];
            let _level = dataMapByType[target];

            if (_level) {
              dataBindingLineType[_level].push(_v);
            } else {
              // 不存在基本属性里的绑定属性处理逻辑
              if (type == 'view' && changeType == 'link') {
                if (target == 'href') {
                  dataBindingLineType['propsLevel'].push(_v);
                } else {
                  dataBindingLineType['propsLevel'].push(_v);
                }
              } else if (type == 'text' && changeType == 'link') {
                if (target == 'href') {
                  dataBindingLineType['propsLevel'].push(_v);
                } else {
                  dataBindingLineType['propsLevel'].push(_v);
                }
              } else if (type == 'picture' && changeType == 'video') {
                if (
                  ['src', 'poster', 'autoPlay', 'controls'].indexOf(target) > -1
                ) {
                  dataBindingLineType['propsLevel'].push(_v);
                } else {
                  dataBindingLineType['propsLevel'].push(_v);
                }
              } else {
                // 不存在基本属性里 && 也不是类型转换后的特殊属性
                // 一律作为 domLevel 级别追加在元素之上
                dataBindingLineType['propsLevel'].push(_v);
              }
            }
          });
        }

        // 一级属性绑定 三种type共用
        let propsLevelParts = [];
        if (dataBindingLineType.propsLevel.length > 0) {
          debugger;
          dataBindingLineType.propsLevel.map((_v, _i) => {
            let _ret = generateDataBindValue(_v, indent + 1, 'equal');
            _ret && propsLevelParts.push(_ret);
          });
        }

        // 样式绑定 三种type共用
        let styleParts = [];
        let stylePartsUseClass = [];
        if (dataBindingLineType.styleLevel.length > 0) {
          let dataBindingLine = dataBindingLineType.styleLevel.map(_v => {
            let _r = generateDataBindValue(_v, indent + 2, 'colon');
            return _r;
          });
          styleParts.push(
            _line(`className="${className}" style={{`, {
              indent: { tab: indent + 1 }
            }),
            ...dataBindingLine,
            _line(`}]}`, { indent: { tab: indent + 1 } })
          );
          stylePartsUseClass.push(
            _line(`style={{`, { indent: { tab: indent + 1 } }),
            ...dataBindingLine,
            _line(`}}`, { indent: { tab: indent + 1 } })
          );
        } else {
          styleParts = [
            _line(`style={styles.${className}}`, {
              indent: { tab: indent + 1 }
            })
          ];
          stylePartsUseClass = [
            _line(`className="${className}"`, { indent: { tab: indent + 1 } })
          ];
        }

        // 样式处理
        if (type == 'view' && changeType == 'link') {
          json.style.display = 'flex';
        }

        if (json.style.lines == 1 || json.attrs.lines == 1) {
          delete json.style.width;
        }

        if (json.style.borderWidth) {
          json.style.boxSizing = 'border-box';
        }

        if (json.type && json.type.toLowerCase() === 'repeat') {
          json.style.display = 'flex';
          json.style.flexDirection = 'row';
          json.children.forEach(function(child) {
            delete child.style.marginTop;
          });
        }

        cssStore.push({
          styleName: className,
          styleValue: json.style
        });

        switch (type) {
          case 'text':
            let lines = json.attrs.lines || json.style.lines;
            let innerText;
            innerText = json.innerText;

            // text特殊属性绑定
            let specialTextProps = {};
            dataBindingLineType.specialLevel.map(_v => {
              specialTextProps[_v.target[0]] = _v;
            });

            // 如果只有单个样式的话单行解决
            if (
              styleParts.length == 1 &&
              propsLevelParts.length == 0 &&
              !eventLine
            ) {
              result = result.concat(
                _line(`<${changeTypeName} ${styleParts[0].parts[0]}>`, {
                  indent: { tab: indent }
                })
              );
              resultClass = resultClass.concat(
                _line(`<${changeTypeName} ${stylePartsUseClass[0].parts[0]}>`, {
                  indent: { tab: indent }
                })
              );
            } else {
              result = result.concat(
                _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                // _line(`style={styles.${className}}`, {indent: {tab: indent + 1,}}),
                styleParts,
                propsLevelParts
              );
              resultClass = resultClass.concat(
                _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                stylePartsUseClass,
                propsLevelParts
              );
              if (eventLine) {
                result = result.concat(eventLine);
                resultClass = resultClass.concat(eventLine);
              }
              result = result.concat(_line('>', { indent: { tab: indent } }));
              resultClass = resultClass.concat(
                _line('>', { indent: { tab: indent } })
              );
            }
            result = result.concat(
              _line(
                specialTextProps['innerText']
                  ? `{${createBindingValue(specialTextProps['innerText'])}}`
                  : `${innerText}`,
                { indent: { tab: indent + 1 } }
              ),
              _line(`</${changeTypeName}>`, { indent: { tab: indent } })
            );
            resultClass = resultClass.concat(
              _line(
                specialTextProps['innerText']
                  ? `{${createBindingValue(specialTextProps['innerText'])}}`
                  : `${innerText}`,
                { indent: { tab: indent + 1 } }
              ),
              _line(`</${changeTypeName}>`, { indent: { tab: indent } })
            );
            fileFlowOptions.needImportText = true;
            break;
          case 'view':
            if (json.children && json.children.length > 0) {
              let childResultObj = generateXML(json.children, {
                indent: indent + 1,
                eventsOn: eventsOn
              });
              let childResult = childResultObj.xmlPartsJson;
              let childResultClass = childResultObj.xmlPartsJsonUseClassName;
              if (
                styleParts.length == 1 &&
                propsLevelParts.length == 0 &&
                !eventLine
              ) {
                result = result.concat(
                  _line(`<${changeTypeName} ${styleParts[0].parts[0]}>`, {
                    indent: { tab: indent }
                  })
                );
                resultClass = resultClass.concat(
                  _line(
                    `<${changeTypeName} ${stylePartsUseClass[0].parts[0]}>`,
                    { indent: { tab: indent } }
                  )
                );
              } else {
                result = result.concat(
                  _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                  styleParts,
                  propsLevelParts
                );
                resultClass = resultClass.concat(
                  _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                  stylePartsUseClass,
                  propsLevelParts
                );
                if (eventLine) {
                  result = result.concat(eventLine);
                  resultClass = resultClass.concat(eventLine);
                }
                result = result.concat(_line('>', { indent: { tab: indent } }));
                resultClass = resultClass.concat(
                  _line('>', { indent: { tab: indent } })
                );
              }
              result = result.concat(
                childResult,
                _line(`</${changeTypeName}>`, { indent: { tab: indent } })
              );
              resultClass = resultClass.concat(
                childResultClass,
                _line(`</${changeTypeName}>`, { indent: { tab: indent } })
              );
            } else {
              if (
                styleParts.length == 1 &&
                propsLevelParts.length == 0 &&
                !eventLine
              ) {
                result = result.concat(
                  _line(`<${changeTypeName} ${styleParts[0].parts[0]} />`, {
                    indent: { tab: indent }
                  })
                );
                resultClass = resultClass.concat(
                  _line(
                    `<${changeTypeName} ${stylePartsUseClass[0].parts[0]} />`,
                    { indent: { tab: indent } }
                  )
                );
              } else {
                result = result.concat(
                  _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                  // _line(`style={styles.${className}}`, {indent: {tab: indent}})
                  styleParts,
                  propsLevelParts
                );
                resultClass = resultClass.concat(
                  _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                  stylePartsUseClass,
                  propsLevelParts
                );
                if (eventLine) {
                  result = result.concat(eventLine);
                  resultClass = resultClass.concat(eventLine);
                }
                result.push(
                  _line('/>', {
                    indent: {
                      tab: indent
                    }
                  })
                );
                resultClass.push(
                  _line('/>', {
                    indent: {
                      tab: indent
                    }
                  })
                );
              }
            }
            break;
          case 'picture':
            let source = `${json.attrs.src}`;

            // picture特殊属性绑定
            let specialPictureProps = {};
            dataBindingLineType.specialLevel.map(_v => {
              specialPictureProps[_v.target[0]] = _v;
            });
            if (changeType == 'video') {
              result.push(
                _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                ...styleParts,
                ...propsLevelParts
              );
              resultClass.push(
                _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                ...stylePartsUseClass,
                ...propsLevelParts
              );
            } else {
              result.push(
                _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                // _line('resizeMode={\'cover\'}', {indent: {tab: indent + 1}}),  // 交给编辑器端预设
                ...styleParts,
                ...propsLevelParts,
                _line(
                  `src={${
                    specialPictureProps['source']
                      ? createBindingValue(specialPictureProps['source'])
                      : `"${source}"`
                  }}`,
                  { indent: { tab: indent + 1 } }
                )
              );
              resultClass.push(
                _line(`<${changeTypeName}`, { indent: { tab: indent } }),
                ...stylePartsUseClass,
                ...propsLevelParts,
                _line(
                  `src={${
                    specialPictureProps['source']
                      ? createBindingValue(specialPictureProps['source'])
                      : `"${source}"`
                  }}`,
                  { indent: { tab: indent + 1 } }
                )
              );
            }
            if (eventLine) {
              result = result.concat(eventLine);
              resultClass = resultClass.concat(eventLine);
            }

            result.push(
              _line('/>', {
                indent: {
                  tab: indent
                }
              })
            );
            resultClass.push(
              _line('/>', {
                indent: {
                  tab: indent
                }
              })
            );
            fileFlowOptions.needImportPicture = true;
            break;
        }

        // 节点绑定 三种type共用
        if (dataBindingLineType.domLevel.length > 0) {
          let domLevelProps = {};
          dataBindingLineType.domLevel.map(_v => {
            domLevelProps[_v.target[0]] = _v;
          });
          if (domLevelProps['show']) {
            if (!json._jsonId) {
              // root节点
              result = [
                _line(`${createBindingValue(domLevelProps['show'])} &&`, {
                  indent: { tab: indent }
                }),
                ...result
              ];
              resultClass = [
                _line(`${createBindingValue(domLevelProps['show'])} &&`, {
                  indent: { tab: indent }
                }),
                ...resultClass
              ];
            } else {
              result = [
                _line(`{`, { indent: { tab: indent } }),
                _line(`${createBindingValue(domLevelProps['show'])} &&`, {
                  indent: { tab: indent + 1 }
                }),
                ..._indentTab(result, 1),
                _line(`}`, { indent: { tab: indent } })
              ];
              resultClass = [
                _line(`{`, { indent: { tab: indent } }),
                _line(`${createBindingValue(domLevelProps['show'])} &&`, {
                  indent: { tab: indent + 1 }
                }),
                ..._indentTab(resultClass, 1),
                _line(`}`, { indent: { tab: indent } })
              ];
            }
          } else if (domLevelProps['hide']) {
            if (!json._jsonId) {
              // root节点
              result = [
                _line(`${createBindingValue(domLevelProps['hide'])} ||`, {
                  indent: { tab: indent }
                }),
                ...result
              ];
              resultClass = [
                _line(`${createBindingValue(domLevelProps['hide'])} ||`, {
                  indent: { tab: indent }
                }),
                ...resultClass
              ];
            } else {
              result = [
                _line(`{`, { indent: { tab: indent } }),
                _line(`${createBindingValue(domLevelProps['hide'])} ||`, {
                  indent: { tab: indent + 1 }
                }),
                ..._indentTab(result, 1),
                _line(`}`, { indent: { tab: indent } })
              ];
              resultClass = [
                _line(`{`, { indent: { tab: indent } }),
                _line(`${createBindingValue(domLevelProps['hide'])} ||`, {
                  indent: { tab: indent + 1 }
                }),
                ..._indentTab(resultClass, 1),
                _line(`}`, { indent: { tab: indent } })
              ];
            }
          }
        }
      } else {
        // TODO
        return json
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }
      return {
        xmlPartsJson: result,
        xmlPartsJsonUseClassName: resultClass
      };
    }

    /**
     * @desc 根据绑定生成value，是generateDataBindValue的右值
     * @param dataBinding 绑定关系
     * @return string 返回值
     */
    function createBindingValue(dataBinding) {
      let string = '';
      let helperScriptName = dataBinding.value.helperScriptName;
      let source = dataBinding.value.source;
      let sourceValue = dataBinding.value.sourceValue;
      if (dataBinding.value.isStatic) {
        string = `${JSON.stringify(dataBinding.value.value)}`;
      } else {
        if (source == 'data' && Array.isArray(sourceValue)) {
          // 共售出${item_num}件 这样的语法解析
          string = generateTemplate(dataBinding);
          storeUserDataOrigin(source);
        } else {
          if (source && sourceValue) {
            if (helperScriptName) {
              string = `this.${helperScriptName}(${source}.${sourceValue})`;
            } else {
              string = `${source}.${sourceValue}`;
            }
            // 记录用到的数据绑定源
            storeUserDataOrigin(source);
          } else {
            return false;
          }
        }
      }
      return string;
    }

    /**
     * @desc 生成形如 key={data.module} key={{"a":1,"b":3}} 这样的绑定关系代码
     * @param dataBinding 绑定关系
     * @return
     */
    function generateDataBindValue(dataBinding, indent, operator) {
      let target = dataBinding.target[0];
      let lastProps = target.split('.').pop(); //
      let dataParts = null;
      let helperScriptName = dataBinding.value.helperScriptName;
      let source = dataBinding.value.source;
      let sourceValue = dataBinding.value.sourceValue;
      operator = operator || 'equal'; // colon 冒号 ， equal 等号赋值
      if (dataBinding.value.isStatic) {
        dataParts = _line(
          `${lastProps}${operator == 'equal' ? '={' : ': '}${JSON.stringify(
            dataBinding.value.value
          )}${operator == 'equal' ? '}' : ','}`,
          { indent: { tab: indent } }
        );
      } else {
        if (source && sourceValue) {
          if (source == 'data' && Array.isArray(sourceValue)) {
            // 共售出${item_num}件 这样的语法解析
            dataParts = _line(
              `${lastProps}${
                operator == 'equal' ? '={' : ': '
              }${generateTemplate(dataBinding)}${
                operator == 'equal' ? '}' : ','
              }`,
              { indent: { tab: indent } }
            );
          } else {
            if (helperScriptName !== null) {
              dataParts = _line(
                `${lastProps}${
                  operator == 'equal' ? '={' : ': '
                }this.${helperScriptName}(${source}.${sourceValue})${
                  operator == 'equal' ? '}' : ','
                }`,
                { indent: { tab: indent } }
              );
            } else {
              dataParts = _line(
                `${lastProps}${
                  operator == 'equal' ? '={' : ': '
                }${source}.${sourceValue}${operator == 'equal' ? '}' : ','}`,
                { indent: { tab: indent } }
              );
            }
          }
          // 记录用到的数据绑定源
          storeUserDataOrigin(source);
        } else {
          return false;
        }
      }
      return dataParts;
    }
    /**
     * @desc 生成模板语法文本
     * @param {binding} 数据绑定
     * @retun string
     */
    function generateTemplate(binding) {
      binding = binding.value;
      if (binding.source == 'data' && Array.isArray(binding.sourceValue)) {
        if (
          binding.sourceValue.length == 1 &&
          binding.sourceValue[0].type == 'DYNAMIC'
        ) {
          return binding.sourceValue[0].value.slice(
            2,
            binding.sourceValue[0].value.length - 1
          );
        } else {
          let r = '';
          binding.sourceValue.map(_v => {
            r += _v.value;
          });
          return '`' + r + '`';
        }
      } else {
        return '';
      }
    }
    /**
     * @desc 存储用过的数据源
     * @param {source} 数据源名称
     * @return undefined
     */
    function storeUserDataOrigin(source) {
      if (!fileFlowOptions.dataConfigHasUsed[source]) {
        fileFlowOptions.dataConfigHasUsed[source] = _line(
          `const ${source} = this.props && this.props.${source};`
        );
        if (source == 'data') {
          fileFlowOptions.dataConfigHasUsedInOpenCode[source] = _line(
            `const data = this.props.data && this.props.data.moduleDataSource[0];`
          );
        } else if (source == 'attrs') {
          fileFlowOptions.dataConfigHasUsedInOpenCode[source] = _line(
            `const attrs = this.props.attrs;`
          );
        } else if (source == 'pageInfo') {
          fileFlowOptions.dataConfigHasUsedInOpenCode[source] = _line(
            `const pageInfo = this.props.pageInfo;`
          );
        }
      }
    }
    /**
     * @desc 根据cssStore生成rax的style
     * @param cssStore 存储css的数组
     * @return result css的partsJson
     */
    function generateStyle(cssStore) {
      let result = [];
      let cssResult = [];
      let remResult = [
        _line(
          `/* 视觉稿宽度为 ${designWidth}, 请设置html的font-size为 ${htmlFontsize}px, 以便在布局视口宽度为 ${viewportWidth} 的页面中自适应 */`
        )
      ];
      cssStore.map((v, i) => {
        let styleLine = [];
        let styleKeyLength = Object.keys(v.styleValue);
        let styleCssLine = [];
        let styleRemCssLine = [];

        let isSingleText = v.styleValue.lines == 1; // 行数为一的文本

        if (
          typeof v.styleValue.display === 'undefined' &&
          (v.styleValue.flexDirection ||
            v.styleValue.justifyContent ||
            v.styleValue.alignItems)
        ) {
          v.styleValue.display = 'flex';
        }

        for (let _o in v.styleValue) {
          v.styleValue[_o] = valueTranslate(_o, v.styleValue[_o]);
          if (isSingleText && ['width', 'height'].indexOf(_o) > -1) {
            // 兼容性fix1: 单行文字的width和height属性需要忽略
          } else if (
            [
              'marginLeft',
              'marginTop',
              'borderRadius',
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomRightRadius',
              'borderBottomLeftRadius'
            ].indexOf(_o) > -1 &&
            v.styleValue[_o] == 0
          ) {
            // 兼容性fix2: 上述属性在参数为0时不显示
          } else {
            // style形式
            let lineString = `${_o}: ${cssValueString(_o, v.styleValue[_o])},`;
            // 如果有不同，适配写在这吧！
            // css形式
            let _oCss = cam2line(_o);
            let cssLineString = `${_oCss}: ${cssValue(_o, v.styleValue[_o])};`;
            styleKeyLength--;
            styleKeyLength == 0 && (lineString = lineString.slice(0, -1));
            styleLine.push(
              _line(lineString, {
                indent: {
                  tab: 1
                }
              })
            );
            styleCssLine.push(
              _line(cssLineString, {
                indent: {
                  tab: 1
                }
              })
            );
            if (htmlFontsize) {
              let cssLineRemString = `${_oCss}: ${cssValue(
                _o,
                v.styleValue[_o],
                htmlFontsize
              )};`;
              styleRemCssLine.push(
                _line(cssLineRemString, { indent: { tab: 1 } })
              );
            }
          }
        }
        result = result.concat(
          _line(`${v.styleName}: {`),
          styleLine,
          i !== cssStore.length - 1 ? _line('},') : _line('}')
        );

        let firstLine = `.${v.styleName} {`;

        if (scopeClass !== v.styleName) {
          firstLine = `.${scopeClass} ${firstLine}`;
        }

        cssResult = cssResult.concat(
          _line(firstLine),
          styleCssLine,
          _line('}')
        );

        if (styleRemCssLine.length > 0) {
          remResult = remResult.concat(
            _line(`.${v.styleName} {`),
            styleRemCssLine,
            _line('}')
          );
        }
      });
      result = [].concat(
        // _line('{'),
        _indentTab(result, 0)
        // _line('}'),
      );
      return {
        stylePartsJson: result,
        styleCssPartsJson: cssResult,
        styleRemCssPartsJson: remResult
      };
      function valueTranslate(classKey, classValue) {
        if ( !(typeof cssValue === 'string' && ['auto', 'inherit', 'initial', 'unset' ].includes(cssValue)) ) {
          switch (classKey) {
            case 'fontSize':
            case 'marginLeft':
            case 'marginTop':
            case 'marginRight':
            case 'marginBottom':
            case 'paddingLeft':
            case 'paddingTop':
            case 'paddingRight':
            case 'paddingBottom':
            case 'width':
            case 'height':
            case 'borderRadius':
            case 'top':
            case 'left':
            case 'right':
            case 'bottom':
            case 'lineHeight':
            case 'max-width':
            case 'border-width':
            case 'border-top-width':
            case 'border-right-width':
            case 'border-bottom-width':
            case 'border-left-width':
            case 'borderBottomRightRadius':
            case 'borderBottomLeftRadius':
            case 'borderTopRightRadius':
            case 'borderTopLeftRadius':
              if (typeof classValue == 'number') {
                classValue = classValue + 'px';
              } else if (typeof classValue == 'string') {
                classValue = classValue.replace(/(px)|(rem)/, '');
                classValue = classValue + 'px'; 
              }
              break;
            default:
              break;
          }
        }
        return classValue;
      }
      function cssValue(key, value, htmlFontsize) {
        if (!value) return value;
        if (['fontWeight', 'lines'].indexOf(key) > -1) {
          return value;
        } else {
          let valueNum =
            typeof value == 'string' ? value.replace(/(px)|(rem)/, '') : value;
          if (valueNum == 1 || ['fontSize'].indexOf(key) > -1) {
            return valueNum + 'px';
          }
          if (
            typeof value == 'number' ||
            value - 0 == value ||
            value.match(/px$/)
          ) {
            value = parseFloat(value);
            return htmlFontsize
              ? parseFloat(
                  (
                    (value * (viewportWidth / designWidth)) /
                    htmlFontsize
                  ).toFixed(2)
                ) + 'rem'
              : value + 'px';
          } else {
            return value;
          }
        }
      }
      function cssValueString(key, value) {
        if (typeof value == 'number') {
          return value;
        } else {
          if (value - 0 == value) {
            return value;
          } else {
            return `'${value}'`;
          }
        }
      }
      function cam2line(value) {
        return value.replace(/([A-Z])/g, '-$1').toLowerCase();
      }
    }

    /**
     * @desc 根据cssStore生成rax的style
     * @param cssStore 存储css的数组
     * @return result css的partsJson
     */
    function generateResponsiveStyle(cssStore) {
      let result = [];
      let cssResult = [];
      cssStore.map((v, i) => {
        let styleLine = [];
        let styleKeyLength = Object.keys(v.styleValue);
        let styleCssLine = [];

        let isSingleText = v.styleValue.lines == 1; // 行数为一的文本

        if (
          typeof v.styleValue.display === 'undefined' &&
          (v.styleValue.flexDirection ||
            v.styleValue.justifyContent ||
            v.styleValue.alignItems)
        ) {
          v.styleValue.display = 'flex';
        }

        for (let _o in v.styleValue) {
          v.styleValue[_o] = valueTranslate(_o, v.styleValue[_o]);
          if (isSingleText && ['width', 'height'].indexOf(_o) > -1) {
            // 兼容性fix1: 单行文字的width和height属性需要忽略
          } else if (
            [
              'marginLeft',
              'marginTop',
              'borderRadius',
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomRightRadius',
              'borderBottomLeftRadius'
            ].indexOf(_o) > -1 &&
            v.styleValue[_o] == 0
          ) {
            // 兼容性fix2: 上述属性在参数为0时不显示
          } else {
            // style形式
            let lineString = `${_o}: ${cssValueString(_o, v.styleValue[_o])},`;
            // 如果有不同，适配写在这吧！
            // css形式
            let _oCss = cam2line(_o);
            let cssLineString = `${_oCss}: ${cssValue(_o, v.styleValue[_o])};`;
            styleKeyLength--;
            styleKeyLength == 0 && (lineString = lineString.slice(0, -1));
            styleLine.push(
              _line(lineString, {
                indent: {
                  tab: 1
                }
              })
            );
            styleCssLine.push(
              _line(cssLineString, {
                indent: {
                  tab: 1
                }
              })
            );
          }
        }
        result = result.concat(
          _line(`${v.styleName}: {`),
          styleLine,
          i !== cssStore.length - 1 ? _line('},') : _line('}')
        );

        let firstLine = `.${v.styleName} {`;

        if (scopeClass !== v.styleName) {
          firstLine = `.${scopeClass} ${firstLine}`;
        }

        cssResult = cssResult.concat(
          _line(firstLine),
          styleCssLine,
          _line('}')
        );
      });
      result = [].concat(
        // _line('{'),
        _indentTab(result, 0)
        // _line('}'),
      );
      return cssResult;

      function valueTranslate(classKey, classValue) {
        let _w = modConfig.designWidth / 100;
        let _h = modConfig.designHeight / 100;

        if ( !(typeof cssValue === 'string' && ['auto', 'inherit', 'initial', 'unset' ].includes(cssValue)) ) {
          if (typeof classValue === 'string') {
            classValue = classValue.replace(/(px)|(rem)/, '');
          }
          switch (classKey) {
            case 'marginTop':
            case 'marginBottom':
            case 'paddingTop':
            case 'paddingBottom':
            case 'height':
            case 'top':
            case 'bottom':
            // classValue = Number((classValue / _h).toFixed(2)) + 'vh';
            case 'borderWidth':
            case 'borderTopWidth':
            case 'borderRightWidth':
            case 'borderBottomWidth':
            case 'borderLeftWidth':
            case 'borderBottomRightRadius':
            case 'borderBottomLeftRadius':
            case 'borderTopRightRadius':
            case 'borderTopLeftRadius':
            case 'borderRadius':
            case 'fontSize':
              if (typeof classValue == 'number') {
                classValue = classValue + 'px';
              } else if (typeof classValue == 'string') {
                classValue = classValue.replace(/(px)|(rem)/, '');
                classValue = classValue + 'px';
              }
              break;
            case 'width':
            case 'maxWidth':
            case 'left':
            case 'right':
            case 'paddingRight':
            case 'paddingLeft':
            case 'marginLeft':
            case 'marginRight':
              classValue = Number((classValue / _w).toFixed(2)) + 'vw';
              break;
            case 'lineHeight':
              if (typeof classValue === 'string') {
                classValue = classValue.replace(/(px)|(rem)/, '');
              }
              // classValue = Number((classValue / _h).toFixed(2)) + 'vh';
              break;
            default:
              break;
          }
        }
        return classValue;
      }
      function cssValue(key, value) {
        if (['fontWeight', 'lines'].indexOf(key) > -1) {
          return value;
        } else {
          if (typeof value == 'number') {
            return value + 'px';
          } else {
            if (value - 0 == value) {
              return value + 'px';
            } else {
              return value;
            }
          }
        }
      }
      function cssValueString(key, value) {
        if (typeof value == 'number') {
          return value;
        } else {
          if (value - 0 == value) {
            return value;
          } else {
            return `'${value}'`;
          }
        }
      }
      function cam2line(value) {
        return value.replace(/([A-Z])/g, '-$1').toLowerCase();
      }
    }

    /**
     * @desc 根据单个脚本内容，解析格式，重新生成partsJson
     * @param scriptJson 事件内部编写的内容
     * @param indent
     * @return eventParts 描述事件的partsJson
     */
    function generateEvent(scriptJson, indent) {
      let funcInner = parseFunction(scriptJson);
      if (!funcInner.content) {
        return null;
      } else {
        let eventContentParts = helper.parser(funcInner.content);
        let eventParts = [].concat(
          _line(
            `${EVENT_MAP[scriptJson.eventType] ||
              scriptJson.scriptName} = (${funcInner.args.join(', ')}) => {`
          ),
          eventContentParts,
          _line('}')
        );
        // console.log('eventParts', eventParts);
        return eventParts;
      }

      function parseFunction(scriptJson) {
        let args = [];
        let content = '';
        const REG_ARGS1 = /[\s\S]*export\sdefault\sfunction\s{0,1}\(([\s\S]*)\)\s{0,1}{\n([\s\S]*)\n\}/;
        const REG_ARGS2 = /[\s\S]*export\sdefault\s\(([\s\S]*)\)\s{0,1}=>\s{0,1}\{\n([\s\S]*)\n\}/;
        try {
          let scriptContent = scriptJson.content;
          let regResult =
            scriptContent.match(REG_ARGS1) || scriptContent.match(REG_ARGS2);

          if (regResult) {
            let argsArr = regResult[1].split(',');
            argsArr.map(_v => {
              if (_.trim(_v) !== '') {
                args.push(_.trim(_v));
              }
            });
            content = _.trim(regResult[2]) == '' ? '' : regResult[2];
          }
        } catch (e) {
          args = [];
          content = '';
        }

        return {
          args: args,
          content: content
        };
      }
    }

    /**
     * @desc 根据绑定过的数据生成
     */
    function generateMockData(mockDataStore) {
      let targetMockObject = {};
      for (let _o in mockDataStore) {
        targetMockObject[_o] = _deepMock({}, mockDataStore[_o]);
      }
      return targetMockObject;

      function _deepMock(targetObj, sourceObj) {
        let targetObjStore = targetObj;
        for (let _o in sourceObj) {
          let _oArr = _utilsStringToArr(_o);
          let _len = _oArr.length;
          _oArr.forEach((_v, _i) => {
            if (_i == _len - 1) {
              targetObj[_v] = sourceObj[_o];
            } else {
              targetObj[_v] = {};
              targetObj = targetObj[_v];
            }
          });
          targetObj = targetObjStore; // 回退到顶点
        }
        return targetObjStore;
      }
      function _utilsStringToArr(string) {
        let arr = [];
        string = string.replace(/\]/g, '');
        string = string.replace(/\[/g, '.');
        arr = string.split('.');
        return arr;
      }
    }
  }

  // 代码生成
  let dslMessage = genertePartJson(layoutData);

  // OPEN CODE // 作为API部分对外开发
  let openCode = {
    codeSelf: [], // OK
    import: [], // OK
    renderFunction: [], //
    styleJs: [], // OK
    schemaAttrs: [], //
    schemaData: [], //

    info: {
      needImportPicture: false,
      needImportLink: false,
      needImportVideo: false
    }
  };

  // USE STRICT
  let _rStrict = [_line("'use strict';", { indent: { tab: 0 } })];
  // IMPORT
  let _rImport = [
    _line("import React, { Component } from 'react';", { indent: { tab: 0 } })
  ];
  if (dslMessage.fileFlowOptions.needImportPicture) {
    openCode.info.needImportPicture = true; // FOR OPEN API
  }
  if (dslMessage.fileFlowOptions.needImportLink) {
    openCode.info.needImportLink = true; // FOR OPEN API
  }
  if (dslMessage.fileFlowOptions.needImportVideo) {
    openCode.info.needImportVideo = true; // FOR OPEN API
  }
  openCode.import = _rImport; // FOR OPEN API
  // STYLE
  let _rStyle = [].concat(
    _line('const styles = {', { indent: { tab: 0 } }),
    _indentTab(dslMessage.stylePartsJson, 1),
    _line('};', { indent: { tab: 0 } })
  );
  openCode.styleJs = [].concat(
    _line('export default {', { indent: { tab: 0 } }),
    dslMessage.stylePartsJson,
    _line('};', { indent: { tab: 0 } })
  ); // FOR OPEN API
  openCode.styleCss = [].concat(dslMessage.styleCssPartsJson);
  openCode.styleResponsiveCss = [].concat(
    dslMessage.styleCssResponsivePartsJson
  );
  openCode.styleRemCss = [].concat(dslMessage.styleRemCssPartsJson);
  // MOD CLASS
  let _rModClass = [].concat(
    _line('class DvcComponent extends React.Component {', {
      indent: { tab: 0 }
    })
  );
  let _rModClassClass = [].concat(
    _line('class DvcComponent extends React.Component {', {
      indent: { tab: 0 }
    })
  );
  let _codeSelfFunc = dslMessage.fileFlowOptions.codeSelfFunction;
  for (let _o in _codeSelfFunc) {
    let _codeS = _indentTab(_codeSelfFunc[_o], 1);
    _rModClass = _rModClass.concat(_codeS);
    _rModClassClass = _rModClassClass.concat(_codeS);
    openCode.codeSelf = openCode.codeSelf.concat(_codeS); // FOR OPEN API
  }
  // data config
  let dataConfigPartsJson = [];
  for (let _o in dslMessage.fileFlowOptions.dataConfigHasUsed) {
    dataConfigPartsJson.push(dslMessage.fileFlowOptions.dataConfigHasUsed[_o]);
  }
  // console.log(dslMessage.xmlPartsJsonUseClassName);
  let dataConfigPartsJsonClass = JSON.parse(
    JSON.stringify(dataConfigPartsJson)
  );

  let xmlPartsJsonWithIndent = _indentTab(
    JSON.parse(JSON.stringify(dslMessage.xmlPartsJson)),
    3
  );
  let xmlPartsJsonWithIndentClass = _indentTab(
    JSON.parse(JSON.stringify(dslMessage.xmlPartsJsonUseClassName)),
    3
  );
  let renderFunc = [].concat(
    _line('render() {', { indent: { tab: 1 } }),
    _indentTab(dataConfigPartsJson, 2),
    _line('return (', { indent: { tab: 2 } }),
    xmlPartsJsonWithIndent,
    _line(');', { indent: { tab: 2 } }),
    _line('}', { indent: { tab: 1 } })
  );
  let renderFuncClass = [].concat(
    _line('render() {', { indent: { tab: 1 } }),
    _indentTab(dataConfigPartsJsonClass, 2),
    _line('return (', { indent: { tab: 2 } }),
    xmlPartsJsonWithIndentClass,
    _line(');', { indent: { tab: 2 } }),
    _line('}', { indent: { tab: 1 } })
  );
  // OPEN CODE
  let dataConfigPartsJsonOpen = [];
  for (let _o in dslMessage.fileFlowOptions.dataConfigHasUsedInOpenCode) {
    dataConfigPartsJsonOpen.push(
      dslMessage.fileFlowOptions.dataConfigHasUsedInOpenCode[_o]
    );
  }
  let renderFuncOpen = [].concat(
    _line('render() {', { indent: { tab: 1 } }),
    _indentTab(dataConfigPartsJsonOpen, 2),
    _line('return (', { indent: { tab: 2 } }),
    xmlPartsJsonWithIndent,
    _line(');', { indent: { tab: 2 } }),
    _line('}', { indent: { tab: 1 } })
  );

  _rModClass = _rModClass.concat(
    renderFunc,
    _line('}', { indent: { tab: 0 } })
  );
  _rModClassClass = _rModClassClass.concat(
    renderFuncClass,
    _line('}', { indent: { tab: 0 } })
  );
  openCode.renderFunction = renderFuncOpen; // FOR OPEN API
  openCode.schemaAttrs = helper.parser(
    JSON.stringify(dslMessage.fileFlowOptions.schemaAttrs, null, 2)
  ); // FOR OPEN API
  openCode.schemaData = helper.parser(
    JSON.stringify(dslMessage.fileFlowOptions.schemaData, null, 2)
  ); // FOR OPEN API
  // MOCK DATA
  let mockDataOptions = dslMessage.fileFlowOptions.mockDataOptions;
  let mockProps = Object.keys(mockDataOptions); // ['data','attrs']
  let _rMockData =
    mockProps.length > 0
      ? helper.parser(
          `const mockData = ${JSON.stringify(mockDataOptions, null, 2)};`
        )
      : [];
  // EXPORT
  let _rExport =
    mockProps.length > 0
      ? [].concat(
          _line(`ReactDOM.render(<DvcComponent`, { indent: { tab: 0 } }),
          ...mockProps.map(v => {
            return _line(`${v}={mockData.${v}}`, { indent: { tab: 1 } });
          }),
          _line(`/>, document.getElementById('container'));`, {
            indent: { tab: 0 }
          })
        )
      : [].concat(
          _line(
            "ReactDOM.render(<DvcComponent />, document.getElementById('container'));",
            { indent: { tab: 1 } }
          )
        );

  renderData = {
    useStrict: helper.printer(_rStrict),
    import: helper.printer(_rImport),
    style: helper.printer(_rStyle),
    modClass: helper.printer(_rModClass),
    modClassClass: helper.printer(_rModClassClass),
    mockData: helper.printer(_rMockData),
    export: helper.printer(_rExport)
  };

  // FOR OPEN API
  // 嵌入模板中时需要首行取消缩进
  // 初次插入时带上注释标记，取消首行缩进
  function _firstCancelIndent(arr) {
    // arr[0] && (arr[0] = _setIndentTab([arr[0]], 0)[0]);
    return arr;
  }

  openCode.codeSelf = helper.printer(_firstCancelIndent(openCode.codeSelf));
  openCode.import = helper.printer(_firstCancelIndent(openCode.import));
  openCode.renderFunction = helper.printer(
    _firstCancelIndent(openCode.renderFunction)
  );
  openCode.styleJs = helper.printer(_firstCancelIndent(openCode.styleJs));
  openCode.schemaAttrs = helper.printer(
    _firstCancelIndent(openCode.schemaAttrs)
  );
  openCode.schemaData = helper.printer(_firstCancelIndent(openCode.schemaData));
  // css style
  openCode.styleCss = helper.printer(_firstCancelIndent(openCode.styleCss));
  openCode.styleResponsiveCss = helper.printer(
    _firstCancelIndent(openCode.styleResponsiveCss)
  );
  openCode.styleRemCss = helper.printer(
    _firstCancelIndent(openCode.styleRemCss)
  );

  // renderData.css = openCode.styleCss;
  // renderData.style = openCode.styleJs;
  let indexJs = helper.printer([
    ..._rModClassClass,
    ..._rMockData,
    ..._rExport
  ]);
  renderData.indexJs = indexJs;
  renderData.indexStyleCss = openCode.styleCss;
  renderData.indexStyleJs = openCode.styleJs;

  let result = {
    renderData: renderData,
    xml: helper.printer(dslMessage.xmlPartsJson),
    style: helper.printer(dslMessage.stylePartsJson),
    // prettierOpt: prettierOpt
    openCode: openCode, // 对外接口暴露的dsl相关代码
    panelDisplay: [
      {
        panelName: 'index.js',
        panelValue: indexJs,
        panelType: 'BuilderRaxIndex'
      },
      {
        panelName: 'style.css',
        panelValue: openCode.styleCss,
        panelType: 'BuilderRaxStyle'
      },
      {
        panelName: 'style.response.css',
        panelValue: openCode.styleResponsiveCss,
        panelType: 'BuilderRaxStyle'
      },
      {
        panelName: 'style.rem.css',
        panelValue: openCode.styleRemCss,
        panelType: 'BuilderRaxStyle'
      }
    ], // 给达芬奇展示用的panel相关的接口
    playground: {
      info: '前往react playground',
      link: 'https://jsplayground.taobao.org/reactplayground'
    },
    noTemplate: true
  };

  return result;
};
