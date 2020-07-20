module.exports = {
  "componentName": "Page",
  "props": {
    "style": {}
  },
  "children": [{
    "componentName": "Block",
    "props": {},
    "fileName": "t1",
    "children": []
  }, {
    "componentName": "Row",
    "props": {
      "style": {}
    },
    "children": [{
      "componentName": "Col",
      "props": {},
      "children": [{
        "componentName": "Button",
        "props": {
          "type": "primary"
        },
        "children": "确定"
      }, {
        "componentName": "Text",
        "props": {
          "text": "第一列"
        }
      }]
    }, {
      "componentName": "Col",
      "props": {},
      "children": [{
        "componentName": "Icon",
        "props": {
          "type": "help",
          "size": "large",
          "style": {
            "color": "#9b9b9b"
          }
        }
      }, {
        "componentName": "Text",
        "props": {
          "text": "第二列"
        }
      }]
    }]
  }]
}
