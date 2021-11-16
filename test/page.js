module.exports = {
  "componentName": "Page",
  "id": "a8b8fae0-8e38-11eb-a465-65aeb5535337",
  "props": {
    "style": {
      "display": "flex",
      "position": "relative",
      "alignItems": "flex-start",
      "flexDirection": "column",
      "backgroundColor": "#F2F2F2",
      "width": "750px",
      "overflow": "hidden"
    },
    "dealGradient": [{
      "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
    }],
    "className": "page"
  },
  "taskId": "4984D5DA-C947-4524-A72A-B47E7B5FCF1C",
  "artboardImg": "https://img.alicdn.com/imgextra/i2/O1CN01PsJNVr2992hT1spNI_!!6000000008024-2-tps-750-1976.png",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 750,
    "height": 1976
  },
  "pluginVersion": "4.0.2",
  "smart": {
    "layerProtocol": {
      "custom-layout": {
        "type": "skip"
      },
      "module": {
        "type": "smartModule",
        "param": {
          "labels": ["module_label_A", "module_label_B"]
        }
      }
    },
    "nodeIdentification": {
      "bizModule": ["smartModule"]
    },
    "nodeCustom": {
      "bizModule": {
        "isConfident": true,
        "label": "smartModule",
        "score": 0.9999872446060181,
        "type": "bizModule",
        "meta": {
          "threshold": 0.9,
          "props": {
            "labels": ["module_label_A", "module_label_B"]
          }
        },
        "rect": {
          "x": 0,
          "y": 0,
          "width": 750,
          "height": 1976
        },
        "selfId": null
      }
    }
  },
  "layerProtocols": ["module"],
  "name": "每日好店-推荐首页",
  "reference": "sketch",
  "restore_id": "a8d84dcd-d2e1-4d33-80af-e5b48c19e57c",
  "children": [{
    "componentName": "Block",
    "id": "7627e903-8345-48dc-89f7-21df4c91e073",
    "props": {
      "style": {
        "display": "flex",
        "position": "absolute",
        "top": "0px",
        "alignItems": "center",
        "alignSelf": "center",
        "flexDirection": "row",
        "justifyContent": "center"
      },
      "className": "block"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 750,
      "height": 460
    },
    "children": [{
      "componentName": "Picture",
      "id": "a8ba0c52-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "width": "750px",
          "height": "460px"
        },
        "className": "banner",
        "source": {
          "uri": "https://img.alicdn.com/imgextra/i1/O1CN010KWzEW1agT3VsEEFm_!!6000000003359-2-tps-1500-920.png"
        },
        "autoScaling": false,
        "autoWebp": false
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 750,
        "height": 460
      },
      "selfId": "2A2EA73F-8622-4A79-B2BF-E082927837D9"
    }],
    "smart": {
      "nodeIdentification": {
        "baseComponent": ["sliderbar_low_confident", "sliderbar_low_confident"]
      },
      "nodeCustom": {
        "baseComponent": {
          "isConfident": true,
          "label": "sliderbar_low_confident",
          "score": 0.9999995231628418,
          "type": "baseComponent",
          "meta": {
            "threshold": 0.9
          },
          "rect": {
            "x": 0,
            "y": 0,
            "width": 750,
            "height": 460
          },
          "selfId": null
        }
      },
      "layerProtocol": {
        "component": {
          "type": "sliderbar_low_confident"
        },
        "module": {
          "type": "smartModule"
        }
      }
    },
    "fileName": "mod1"
  }, {
    "componentName": "Block",
    "id": "51994722-2e93-47e0-bd64-49a8a8a19fa9",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "backgroundSize": "contain",
        "backgroundImage": "url(https://img.alicdn.com/imgextra/i4/O1CN017Th4x91CNBbD9ej7N_!!6000000000068-2-tps-1500-352.png)",
        "width": "750px",
        "height": "176px"
      },
      "dealGradient": [{
        "backgroundImage": "linear-gradient(to right, rgba(25,156,255,1.00) 0%, rgba(0,122,230,1.00) 100%)"
      }],
      "src": "https://img.alicdn.com/imgextra/i4/O1CN017Th4x91CNBbD9ej7N_!!6000000000068-2-tps-1500-352.png",
      "className": "hd"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 750,
      "height": 176
    },
    "selfId": "6CE8DC86-07DB-42B4-974C-4CD53FEB4798",
    "children": [{
      "componentName": "View",
      "id": "c7070543-fce8-41e2-80dc-9546ad928f87",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "center",
          "flexDirection": "row",
          "justifyContent": "space-between",
          "marginTop": "26px",
          "marginLeft": "50px",
          "width": "672px",
          "height": "40px"
        },
        "className": "normal_div"
      },
      "rect": {
        "x": 50,
        "y": 26,
        "width": 672,
        "height": 40
      },
      "children": [{
        "componentName": "Text",
        "id": "a8b9e54c-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "lineHeight": "28px",
            "whiteSpace": "nowrap",
            "color": "#ffffff",
            "fontSize": "28px",
            "fontWeight": 500
          },
          "text": "2:41",
          "lines": 1,
          "className": "txt"
        },
        "rect": {
          "x": 50,
          "y": 26,
          "width": 53,
          "height": 40
        },
        "selfId": "F7434F0B-696B-4914-8847-B58EA60C1E2A0",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemDesc"],
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemDesc",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9994344115257263,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 50,
                "y": 26,
                "width": 53,
                "height": 40
              },
              "selfId": "F7434F0B-696B-4914-8847-B58EA60C1E2A0"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemDesc"
            },
            "layout": {
              "type": "layout",
              "position": "left"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }, {
        "componentName": "View",
        "id": "6d66bb79-8455-437e-afcd-aed1a6bcb6ea",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "justifyContent": "center",
            "marginTop": "-1px"
          },
          "className": "normal_div_1"
        },
        "rect": {
          "x": 588,
          "y": 34,
          "width": 134,
          "height": 23
        },
        "children": [{
          "componentName": "Picture",
          "id": "a8b9e54d-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "1px",
              "marginRight": "10px",
              "width": "35px",
              "height": "22px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "mark",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i3/O1CN01iI2BOk1sjp2SUKHqD_!!6000000005803-2-tps-70-44.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 588,
            "y": 35,
            "width": 35,
            "height": 22
          },
          "selfId": "4E73DEA0-1BCA-424D-AA98-B6E29F251639",
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 1,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 588,
                  "y": 35,
                  "width": 35,
                  "height": 22
                },
                "selfId": "4E73DEA0-1BCA-424D-AA98-B6E29F251639"
              }
            },
            "layerProtocol": {
              "component": {
                "type": "sliderbar_low_confident"
              }
            }
          }
        }, {
          "componentName": "Picture",
          "id": "a8b9e54e-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginRight": "9px",
              "width": "31px",
              "height": "23px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "icon-wifi",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i4/O1CN017ZG4591Dzwjhnh2FZ_!!6000000000288-2-tps-62-46.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 633,
            "y": 34,
            "width": 31,
            "height": 23
          },
          "selfId": "119F51B4-6EFD-4B8C-AEFD-4B226BE02E2F",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["wifi"],
              "baseComponent": ["wifi"]
            },
            "nodeCustom": {
              "fieldBind": {
                "confidential": 0.9425855278968811,
                "isConfident": true,
                "label": "wifi",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "wifi",
                "score": 0.9909003973007202,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 633,
                  "y": 34,
                  "width": 31,
                  "height": 23
                },
                "selfId": "119F51B4-6EFD-4B8C-AEFD-4B226BE02E2F"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "wifi"
              },
              "component": {
                "type": "wifi"
              }
            }
          }
        }, {
          "componentName": "View",
          "id": "56dc98a9-b2e0-4dc8-b4f4-a40464b0e07d",
          "props": {
            "style": {
              "display": "flex",
              "alignItems": "center",
              "flexDirection": "row",
              "justifyContent": "center",
              "marginTop": "1px",
              "marginRight": "2px",
              "borderWidth": "2px",
              "borderStyle": "solid",
              "borderRadius": "5.333333492279052px",
              "borderColor": "rgba(255,255,255,0.35)",
              "width": "44px",
              "height": "22px"
            },
            "dealGradient": [],
            "className": "block_1"
          },
          "rect": {
            "x": 673,
            "y": 35,
            "width": 44,
            "height": 22
          },
          "selfId": "C00221D5-B10D-47CF-AAB5-89AFBBAD1356",
          "children": [{
            "componentName": "View",
            "id": "a8b9e54f-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "borderRadius": "2.666666746139526px",
                "backgroundColor": "#FFFFFF",
                "width": "36px",
                "height": "14px"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
              }],
              "className": "color"
            },
            "rect": {
              "x": 677,
              "y": 39,
              "width": 36,
              "height": 14
            },
            "selfId": "4BC67D5D-9571-47EA-90D0-02C46588390F"
          }],
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9978907704353333,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 673,
                  "y": 35,
                  "width": 44,
                  "height": 22
                },
                "selfId": "C00221D5-B10D-47CF-AAB5-89AFBBAD1356"
              }
            },
            "layerProtocol": {
              "component": {
                "type": "sliderbar_low_confident"
              }
            }
          }
        }, {
          "componentName": "Picture",
          "id": "a8b9e550-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "1px",
              "width": "3px",
              "height": "8px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "dot",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i2/O1CN01OlU1Vw1rY5GzRkvbR_!!6000000005642-2-tps-6-16.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 719,
            "y": 42,
            "width": 3,
            "height": 8
          },
          "selfId": "AAC603D2-9702-432A-972D-C3B53269A541",
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9999133348464966,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 719,
                  "y": 42,
                  "width": 3,
                  "height": 8
                },
                "selfId": "AAC603D2-9702-432A-972D-C3B53269A541"
              }
            },
            "layerProtocol": {
              "component": {
                "type": "sliderbar_low_confident"
              }
            }
          }
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "right"
            },
            "component": {
              "type": "segmentedControl"
            }
          },
          "nodeIdentification": {
            "baseComponent": ["segmentedControl", "sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 1,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 588,
                "y": 34,
                "width": 134,
                "height": 23
              },
              "selfId": null
            }
          }
        }
      }],
      "smart": {
        "layerProtocol": {
          "layout": {
            "type": "layout",
            "position": "top"
          },
          "component": {
            "type": "statusbar"
          }
        },
        "nodeIdentification": {
          "baseComponent": ["statusbar", "statusbar"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "statusbar",
            "score": 1,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 50,
              "y": 26,
              "width": 672,
              "height": 40
            },
            "selfId": null
          }
        }
      }
    }, {
      "componentName": "View",
      "id": "673ea04e-51ec-488d-830d-a1c3394c34bd",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "center",
          "alignSelf": "center",
          "flexDirection": "row",
          "justifyContent": "center",
          "marginTop": "42px"
        },
        "className": "normal_div_2"
      },
      "rect": {
        "x": 24,
        "y": 108,
        "width": 702,
        "height": 48
      },
      "children": [{
        "componentName": "View",
        "id": "187d4141-76df-4610-9478-f984a648f4c2",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "justifyContent": "center",
            "marginRight": "231px",
            "backgroundSize": "contain",
            "backgroundImage": "url(https://img.alicdn.com/imgextra/i2/O1CN01CGA1Mx1lQOw3D6mni_!!6000000004813-2-tps-96-96.png)",
            "width": "48px",
            "height": "48px"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "src": "https://img.alicdn.com/imgextra/i2/O1CN01CGA1Mx1lQOw3D6mni_!!6000000004813-2-tps-96-96.png",
          "className": "normal_div_3"
        },
        "rect": {
          "x": 24,
          "y": 108,
          "width": 48,
          "height": 48
        },
        "selfId": "0636A861-2AFC-42CE-B456-655FF77E4108",
        "children": [{
          "componentName": "Picture",
          "id": "a8b9e54a-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "width": "20px",
              "height": "36px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "icon",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i4/O1CN01pU1fVf1RbaI4QfQ9E_!!6000000002130-2-tps-40-72.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 38,
            "y": 114,
            "width": 20,
            "height": 36
          },
          "selfId": "38A4AC05-C0E8-4B62-9A74-07A1DC37D0A7",
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["videoicon"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "videoicon",
                "score": 0.9801842570304871,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 38,
                  "y": 114,
                  "width": 20,
                  "height": 36
                },
                "selfId": "38A4AC05-C0E8-4B62-9A74-07A1DC37D0A7"
              }
            },
            "layerProtocol": {
              "component": {
                "type": "videoicon"
              }
            }
          }
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "left"
            }
          }
        }
      }, {
        "componentName": "Picture",
        "id": "a8b9e549-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "-2px",
            "marginRight": "231px",
            "width": "144px",
            "height": "42px"
          },
          "className": "logo",
          "source": {
            "uri": "https://img.alicdn.com/imgextra/i3/O1CN01oRkMzQ1niNiGNq2Up_!!6000000005123-2-tps-288-84.png"
          },
          "autoScaling": false,
          "autoWebp": false
        },
        "rect": {
          "x": 303,
          "y": 110,
          "width": 144,
          "height": 42
        },
        "selfId": "79BD7587-FE36-4465-BEB4-4E0C9A22D2FA",
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "middle"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          },
          "nodeIdentification": {
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 1,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 303,
                "y": 110,
                "width": 144,
                "height": 42
              },
              "selfId": "79BD7587-FE36-4465-BEB4-4E0C9A22D2FA"
            }
          }
        }
      }, {
        "componentName": "View",
        "id": "8d33c5d6-e13f-4f9a-903e-3dd5578f864b",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "justifyContent": "center",
            "backgroundSize": "contain",
            "backgroundImage": "url(https://img.alicdn.com/imgextra/i3/O1CN01FMFaE71jENInBF32M_!!6000000004516-2-tps-96-96.png)",
            "width": "48px",
            "height": "48px"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "src": "https://img.alicdn.com/imgextra/i3/O1CN01FMFaE71jENInBF32M_!!6000000004516-2-tps-96-96.png",
          "className": "normal_div_4"
        },
        "rect": {
          "x": 678,
          "y": 108,
          "width": 48,
          "height": 48
        },
        "selfId": "5F881DFD-4025-41D0-AA25-29C9E36EA885",
        "children": [{
          "componentName": "Picture",
          "id": "a8b9e547-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "1px",
              "marginRight": "6px",
              "width": "7px",
              "height": "7px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "icon_1",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i2/O1CN01Ct89861qkcUz18wRa_!!6000000005534-2-tps-14-14.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 686,
            "y": 129,
            "width": 7,
            "height": 7
          },
          "selfId": "1F35B431-C47B-4BBA-A9A8-EE42594B8D8F",
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "left"
              },
              "component": {
                "type": "sliderbar_low_confident"
              }
            },
            "nodeIdentification": {
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9997835755348206,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 686,
                  "y": 129,
                  "width": 7,
                  "height": 7
                },
                "selfId": "1F35B431-C47B-4BBA-A9A8-EE42594B8D8F"
              }
            }
          }
        }, {
          "componentName": "Picture",
          "id": "a8b9e546-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "1px",
              "marginRight": "6px",
              "width": "7px",
              "height": "7px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "icon_2",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i4/O1CN01KF5ppr27wqXTbdqIB_!!6000000007862-2-tps-14-14.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 699,
            "y": 129,
            "width": 7,
            "height": 7
          },
          "selfId": "A53AA72D-C8B6-4BA4-9EEA-660725FB4871",
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "middle"
              },
              "component": {
                "type": "sliderbar_low_confident"
              }
            },
            "nodeIdentification": {
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9998158812522888,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 699,
                  "y": 129,
                  "width": 7,
                  "height": 7
                },
                "selfId": "A53AA72D-C8B6-4BA4-9EEA-660725FB4871"
              }
            }
          }
        }, {
          "componentName": "Picture",
          "id": "a8b9e545-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "1px",
              "width": "7px",
              "height": "7px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "icon_3",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i2/O1CN01gdWjLU1RuovMQtQ7U_!!6000000002172-2-tps-14-14.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 712,
            "y": 129,
            "width": 7,
            "height": 7
          },
          "selfId": "19B8AF03-E5A8-4C93-84F9-3B9892DD0555",
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "right"
              },
              "component": {
                "type": "sliderbar_low_confident"
              }
            },
            "nodeIdentification": {
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9997879862785339,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 712,
                  "y": 129,
                  "width": 7,
                  "height": 7
                },
                "selfId": "19B8AF03-E5A8-4C93-84F9-3B9892DD0555"
              }
            }
          }
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "right"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          },
          "nodeIdentification": {
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 1,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 678,
                "y": 108,
                "width": 48,
                "height": 48
              },
              "selfId": "5F881DFD-4025-41D0-AA25-29C9E36EA885"
            }
          }
        }
      }],
      "smart": {
        "layerProtocol": {
          "layout": {
            "type": "layout",
            "position": "bottom"
          },
          "component": {
            "type": "navbar"
          }
        },
        "nodeIdentification": {
          "baseComponent": ["navbar", "video"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "video",
            "score": 1,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 24,
              "y": 108,
              "width": 702,
              "height": 48
            },
            "selfId": null
          }
        }
      }
    }],
    "smart": {
      "nodeIdentification": {
        "baseComponent": ["sliderbar_low_confident"]
      },
      "nodeCustom": {
        "baseComponent": {
          "isConfident": true,
          "label": "sliderbar_low_confident",
          "score": 1,
          "type": "baseComponent",
          "meta": {
            "threshold": 0.9
          },
          "rect": {
            "x": 0,
            "y": 0,
            "width": 750,
            "height": 176
          },
          "selfId": "6CE8DC86-07DB-42B4-974C-4CD53FEB4798"
        }
      },
      "layerProtocol": {
        "component": {
          "type": "sliderbar_low_confident"
        },
        "module": {
          "type": "smartModule"
        }
      }
    },
    "fileName": "mod2"
  }, {
    "componentName": "Block",
    "id": "4f09d106-df54-4c60-89ec-ebb9fcbbd613",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "backgroundColor": "rgba(0,0,0,0.00)",
        "width": "750px",
        "height": "88px",
        "overflow": "hidden"
      },
      "dealGradient": [{
        "backgroundImage": "linear-gradient(to right, rgba(24,141,242,1.00) 0%, rgba(0,122,230,1.00) 100%)"
      }],
      "className": "bd"
    },
    "rect": {
      "x": 0,
      "y": 176,
      "width": 750,
      "height": 88
    },
    "selfId": "60489D88-4E42-402D-92CB-4AFB2CB10261",
    "fileName": "mod_1",
    "children": [{
      "componentName": "View",
      "id": "19a8335a-92a6-4367-8dc2-1a0db42dd27f",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "center",
          "flexDirection": "row",
          "marginTop": "24px",
          "marginLeft": "24px",
          "height": "40px"
        },
        "className": "normal_div_5"
      },
      "rect": {
        "x": 24,
        "y": 200,
        "width": 536,
        "height": 40
      },
      "children": [{
        "componentName": "Text",
        "id": "a8b9e543-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginRight": "48px",
            "lineHeight": "36px",
            "whiteSpace": "nowrap",
            "color": "#ffffff",
            "fontSize": "36px",
            "fontWeight": 500
          },
          "text": "推荐",
          "lines": 1,
          "className": "word"
        },
        "rect": {
          "x": 24,
          "y": 200,
          "width": 72,
          "height": 40
        },
        "selfId": "8FD76513-8CFA-4714-9773-886318C2B5AB0",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemTitle"],
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemTitle",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 1,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 24,
                "y": 200,
                "width": 72,
                "height": 40
              },
              "selfId": "8FD76513-8CFA-4714-9773-886318C2B5AB0"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemTitle"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b9e541-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginRight": "48px",
            "lineHeight": "32px",
            "whiteSpace": "nowrap",
            "color": "rgba(255,255,255,0.80)",
            "fontSize": "32px",
            "fontWeight": 400
          },
          "text": "有趣的店",
          "lines": 1,
          "className": "text"
        },
        "rect": {
          "x": 144,
          "y": 202,
          "width": 128,
          "height": 36
        },
        "selfId": "01C338DC-6A9B-42AD-A470-E3A55FA10F060",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemDesc"],
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemDesc",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9999626874923706,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 144,
                "y": 202,
                "width": 128,
                "height": 36
              },
              "selfId": "01C338DC-6A9B-42AD-A470-E3A55FA10F060"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemDesc"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b9e540-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginRight": "48px",
            "lineHeight": "32px",
            "whiteSpace": "nowrap",
            "color": "rgba(255,255,255,0.80)",
            "fontSize": "32px",
            "fontWeight": 400
          },
          "text": "小众品牌",
          "lines": 1,
          "className": "txt_1"
        },
        "rect": {
          "x": 320,
          "y": 202,
          "width": 128,
          "height": 36
        },
        "selfId": "4C4C7742-FD49-4475-8C75-AA929BD2397F0",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["shopName"],
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "shopName",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9999994039535522,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 320,
                "y": 202,
                "width": 128,
                "height": 36
              },
              "selfId": "4C4C7742-FD49-4475-8C75-AA929BD2397F0"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "shopName"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b9be40-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "lineHeight": "32px",
            "whiteSpace": "nowrap",
            "color": "rgba(255,255,255,0.80)",
            "fontSize": "32px",
            "fontWeight": 400
          },
          "text": "发现",
          "lines": 1,
          "className": "word_1"
        },
        "rect": {
          "x": 496,
          "y": 202,
          "width": 64,
          "height": 36
        },
        "selfId": "7F2C3C4B-4486-4286-AC2A-905255F7ADDA0",
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9999721050262451,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 496,
                "y": 202,
                "width": 64,
                "height": 36
              },
              "selfId": "7F2C3C4B-4486-4286-AC2A-905255F7ADDA0"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }],
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["tabbar", "sliderbar_low_confident"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "sliderbar_low_confident",
            "score": 1,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 24,
              "y": 200,
              "width": 536,
              "height": 40
            },
            "selfId": null
          }
        },
        "layerProtocol": {
          "component": {
            "type": "tabbar"
          }
        }
      }
    }, {
      "componentName": "View",
      "id": "a8b9e542-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "relative",
          "marginTop": "10px",
          "marginLeft": "42px",
          "borderRadius": "3px",
          "backgroundColor": "#FEE900",
          "width": "36px",
          "height": "6px"
        },
        "dealGradient": [{
          "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
        }],
        "className": "colorDiv"
      },
      "rect": {
        "x": 42,
        "y": 250,
        "width": 36,
        "height": 6
      },
      "selfId": "D630BE40-82AE-4C6D-A34D-548F26D6969C",
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["sliderbar"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "sliderbar",
            "score": 0.9998083710670471,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 42,
              "y": 250,
              "width": 36,
              "height": 6
            },
            "selfId": "D630BE40-82AE-4C6D-A34D-548F26D6969C"
          }
        },
        "layerProtocol": {
          "component": {
            "type": "sliderbar"
          }
        }
      }
    }],
    "smart": {
      "nodeIdentification": {
        "bizModule": ["smartModule"]
      },
      "nodeCustom": {
        "bizModule": {
          "isConfident": true,
          "label": "smartModule",
          "score": 0.9999924898147583,
          "type": "bizModule",
          "meta": {
            "threshold": 0.9,
            "props": {
              "labels": ["module_label_A", "module_label_B"]
            }
          },
          "rect": {
            "x": 0,
            "y": 176,
            "width": 750,
            "height": 88
          },
          "selfId": "60489D88-4E42-402D-92CB-4AFB2CB10261"
        }
      },
      "layerProtocol": {
        "module": {
          "type": "smartModule",
          "param": {
            "labels": ["module_label_A", "module_label_B"]
          }
        }
      }
    }
  }, {
    "componentName": "Block",
    "id": "cea4cb1b-edd3-46b9-9100-fecf22cbb6dd",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "alignSelf": "center",
        "flexDirection": "column",
        "marginTop": "20px",
        "borderRadius": "24px",
        "backgroundColor": "#FFFFFF",
        "width": "702px",
        "height": "650px",
        "overflow": "hidden"
      },
      "dealGradient": [{
        "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
      }],
      "className": "main"
    },
    "rect": {
      "x": 24,
      "y": 284,
      "width": 702,
      "height": 650
    },
    "selfId": "D25B53A8-13D1-4674-94DB-34B78B89A4D0",
    "fileName": "mod_2",
    "children": [{
      "componentName": "View",
      "id": "a8b9490b-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "206px",
          "left": "24px",
          "borderRadius": "12px",
          "backgroundColor": "#F5F5F5",
          "width": "319px",
          "height": "319px",
          "overflow": "hidden"
        },
        "dealGradient": [{
          "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
        }],
        "className": "color_1"
      },
      "rect": {
        "x": 48,
        "y": 490,
        "width": 319,
        "height": 319
      },
      "selfId": "138B6DA6-F849-4693-800A-D65CF1BD0F96",
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["video"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "video",
            "score": 0.9999998807907104,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 48,
              "y": 490,
              "width": 319,
              "height": 319
            },
            "selfId": "138B6DA6-F849-4693-800A-D65CF1BD0F96"
          }
        },
        "layerProtocol": {
          "component": {
            "type": "video"
          }
        }
      }
    }, {
      "componentName": "Picture",
      "id": "a8b921f7-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "82px",
          "left": "124px",
          "width": "25px",
          "height": "21px",
          "overflow": "hidden"
        },
        "dealGradient": [{
          "backgroundImage": "linear-gradient(130deg, rgba(254,217,0,1.00) 9%, rgba(241,185,0,1.00) 76%)"
        }],
        "className": "icon_4",
        "source": {
          "uri": "https://img.alicdn.com/imgextra/i2/O1CN01DrsjTT21jD3AopcTN_!!6000000007020-2-tps-50-42.png"
        },
        "autoScaling": false,
        "autoWebp": false
      },
      "rect": {
        "x": 148,
        "y": 366,
        "width": 25,
        "height": 21
      },
      "selfId": "68783D75-2C71-4FB0-9FE8-4478E0C52B40",
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["sliderbar_low_confident"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "sliderbar_low_confident",
            "score": 0.9987502098083496,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 148,
              "y": 366,
              "width": 25,
              "height": 21
            },
            "selfId": "68783D75-2C71-4FB0-9FE8-4478E0C52B40"
          }
        },
        "layerProtocol": {
          "component": {
            "type": "sliderbar_low_confident"
          }
        }
      }
    }, {
      "componentName": "View",
      "id": "15cfa925-e09b-4950-a9ac-874eed0332ab",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "alignSelf": "center",
          "flexDirection": "row",
          "marginTop": "30px"
        },
        "className": "normal_div_6"
      },
      "rect": {
        "x": 48,
        "y": 314,
        "width": 654,
        "height": 93
      },
      "children": [{
        "componentName": "View",
        "id": "61d64a57-ff4c-43c1-b411-44c7dd345b15",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "flex-start",
            "flexDirection": "row",
            "justifyContent": "center",
            "marginRight": "16px",
            "borderRadius": "40px",
            "backgroundColor": "rgba(51,51,51,0.03)",
            "width": "80px",
            "height": "80px",
            "overflow": "hidden"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "normal_div_7"
        },
        "rect": {
          "x": 48,
          "y": 314,
          "width": 80,
          "height": 80
        },
        "selfId": "9C7506B3-3B8E-4DC2-BB60-D95AE108A498",
        "children": [{
          "componentName": "Picture",
          "id": "a8b8faed-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "17px",
              "width": "68px",
              "height": "55px"
            },
            "className": "largeIcon",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i1/O1CN01UUEtxR1K3xuEYojNm_!!6000000001109-2-tps-136-110.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 55,
            "y": 331,
            "width": 68,
            "height": 55
          },
          "selfId": "46346669-4CA7-4FE7-8268-38FC34C09B6E",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["brandLogo"],
              "baseComponent": ["video"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "brandLogo",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "video",
                "score": 0.9998677968978882,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 55,
                  "y": 331,
                  "width": 68,
                  "height": 55
                },
                "selfId": "46346669-4CA7-4FE7-8268-38FC34C09B6E"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "brandLogo"
              },
              "component": {
                "type": "video"
              }
            }
          }
        }],
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["video"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "video",
              "score": 0.9999822378158569,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 48,
                "y": 314,
                "width": 80,
                "height": 80
              },
              "selfId": "9C7506B3-3B8E-4DC2-BB60-D95AE108A498"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "video"
            }
          }
        }
      }, {
        "componentName": "View",
        "id": "c8f53ab6-c5d4-4c5c-9902-d95ea4d55256",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "flex-start",
            "flexDirection": "column",
            "marginTop": "4px",
            "marginRight": "10px",
            "width": "214px"
          },
          "className": "normal_div_8"
        },
        "rect": {
          "x": 144,
          "y": 318,
          "width": 214,
          "height": 89
        },
        "children": [{
          "componentName": "Text",
          "id": "a8b921f3-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "position": "relative",
              "alignSelf": "center",
              "maxWidth": "214px",
              "height": "34px",
              "overflow": "hidden",
              "textOverflow": "ellipsis",
              "lineHeight": "34px",
              "whiteSpace": "nowrap",
              "color": "#333333",
              "fontSize": "30px",
              "fontWeight": 500
            },
            "text": "快乐原创设计店",
            "lines": 1,
            "className": "shopTitle"
          },
          "rect": {
            "x": 148,
            "y": 318,
            "width": 210,
            "height": 34
          },
          "selfId": "DB2C9791-7B01-4D59-8BBF-72B8CDF5B4E40",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["shopName"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "shopName",
                "type": "fieldBind"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "shopName"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              }
            }
          }
        }, {
          "componentName": "View",
          "id": "550939ae-56aa-44f6-ba1f-e6db223ff5f5",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "marginTop": "5px"
            },
            "className": "block_2"
          },
          "rect": {
            "x": 144,
            "y": 357,
            "width": 202,
            "height": 50
          },
          "children": [{
            "componentName": "Text",
            "id": "a8b94900-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "absolute",
                "top": "6px",
                "left": "38px",
                "lineHeight": "28px",
                "whiteSpace": "nowrap",
                "color": "#f2aa00",
                "fontSize": "24px",
                "fontWeight": 600
              },
              "text": "9.2",
              "lines": 1,
              "className": "count"
            },
            "rect": {
              "x": 182,
              "y": 363,
              "width": 36,
              "height": 28
            },
            "selfId": "0E499CC4-D3ED-4239-8129-AF604768D8750",
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.9881189465522766,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 182,
                    "y": 363,
                    "width": 36,
                    "height": 28
                  },
                  "selfId": "0E499CC4-D3ED-4239-8129-AF604768D8750"
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "sliderbar_low_confident"
                }
              }
            }
          }, {
            "componentName": "View",
            "id": "ea58cf45-200e-40fe-81db-19cef7582e6f",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "marginRight": "36px",
                "backgroundSize": "contain",
                "backgroundImage": "url(https://img.alicdn.com/imgextra/i4/O1CN016kEOsf1sXujwF668T_!!6000000005777-2-tps-100-100.png)",
                "width": "50px",
                "height": "50px"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
              }],
              "src": "https://img.alicdn.com/imgextra/i4/O1CN016kEOsf1sXujwF668T_!!6000000005777-2-tps-100-100.png",
              "className": "group"
            },
            "rect": {
              "x": 144,
              "y": 357,
              "width": 50,
              "height": 50
            },
            "selfId": "2F8178E7-7840-4E5F-84BA-0EBB4179D477",
            "children": [{
              "componentName": "Picture",
              "id": "a8b921f4-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "marginTop": "1px",
                  "width": "10px",
                  "height": "9px",
                  "overflow": "hidden"
                },
                "dealGradient": [{
                  "backgroundImage": "linear-gradient(130deg, rgba(254,217,0,1.00) 9%, rgba(241,185,0,1.00) 76%)"
                }],
                "className": "icon_5",
                "source": {
                  "uri": "https://img.alicdn.com/imgextra/i2/O1CN01z8QsQ61LSz9qEDbrT_!!6000000001299-2-tps-20-18.png"
                },
                "autoScaling": false,
                "autoWebp": false
              },
              "rect": {
                "x": 166,
                "y": 378,
                "width": 10,
                "height": 9
              },
              "selfId": "5BBA8333-51DB-40AF-B07D-A027B86B203D"
            }],
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["video", "sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.9966446161270142,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 144,
                    "y": 357,
                    "width": 50,
                    "height": 50
                  },
                  "selfId": "2F8178E7-7840-4E5F-84BA-0EBB4179D477"
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "video"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "a8b94901-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "relative",
                "marginTop": "5px",
                "lineHeight": "28px",
                "whiteSpace": "nowrap",
                "color": "#999999",
                "fontSize": "24px",
                "fontWeight": 300
              },
              "text": "12.7万粉丝",
              "lines": 1,
              "className": "word_2"
            },
            "rect": {
              "x": 230,
              "y": 362,
              "width": 116,
              "height": 28
            },
            "selfId": "3A3E93ED-EC73-4327-B93F-8638883F95E90",
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.9288753271102905,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 230,
                    "y": 362,
                    "width": 116,
                    "height": 28
                  },
                  "selfId": "3A3E93ED-EC73-4327-B93F-8638883F95E90"
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "sliderbar_low_confident"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "bottom"
              },
              "component": {
                "type": "tipbubble"
              }
            },
            "nodeIdentification": {
              "baseComponent": ["tipbubble", "sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9869304895401001,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 144,
                  "y": 357,
                  "width": 202,
                  "height": 50
                },
                "selfId": null
              }
            }
          }
        }]
      }, {
        "componentName": "Picture",
        "id": "a8b921f2-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "9px",
            "marginRight": "10px",
            "width": "48px",
            "height": "24px"
          },
          "className": "label",
          "source": {
            "uri": "https://img.alicdn.com/imgextra/i2/O1CN01lT1OwJ1LFhfoE5vsT_!!6000000001270-2-tps-96-48.png"
          },
          "autoScaling": false,
          "autoWebp": false
        },
        "rect": {
          "x": 368,
          "y": 323,
          "width": 48,
          "height": 24
        },
        "selfId": "7EF8138C-02F1-4341-BF19-F903E3C12434",
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.999948263168335,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 368,
                "y": 323,
                "width": 48,
                "height": 24
              },
              "selfId": "7EF8138C-02F1-4341-BF19-F903E3C12434"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }, {
        "componentName": "View",
        "id": "65b5426c-7ef1-4f24-8a1a-9c57301a3415",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "marginTop": "9px",
            "marginRight": "36px",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderRadius": "4px",
            "borderColor": "#FFACBC",
            "backgroundColor": "#FFFFFF",
            "width": "84px",
            "height": "24px"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(102deg, rgba(7,200,255,1.00) 12%, rgba(12,150,255,1.00) 99%)"
          }],
          "className": "normal_div_9"
        },
        "rect": {
          "x": 426,
          "y": 323,
          "width": 84,
          "height": 24
        },
        "selfId": "62ECF03D-2493-4E0D-88C8-1C5D9D438A4F",
        "children": [{
          "componentName": "Text",
          "id": "a8b921f0-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginLeft": "5px",
              "lineHeight": "18px",
              "whiteSpace": "nowrap",
              "color": "#ff4d70",
              "fontSize": "18px",
              "fontWeight": 400
            },
            "text": "跨店满减",
            "lines": 1,
            "className": "txt_benifit"
          },
          "rect": {
            "x": 432,
            "y": 324,
            "width": 72,
            "height": 22
          },
          "selfId": "0FED3E3A-8028-416B-8129-B8CB2E7CC1090",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["itemDesc"],
              "baseComponent": ["sliderbar_low_confident"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "itemDesc",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9999819993972778,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 432,
                  "y": 324,
                  "width": 72,
                  "height": 22
                },
                "selfId": "0FED3E3A-8028-416B-8129-B8CB2E7CC1090"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "itemDesc"
              },
              "component": {
                "type": "sliderbar_low_confident"
              }
            }
          }
        }],
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["tipbubble", "sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9999922513961792,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 426,
                "y": 323,
                "width": 84,
                "height": 24
              },
              "selfId": "62ECF03D-2493-4E0D-88C8-1C5D9D438A4F"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "tipbubble"
            }
          }
        }
      }, {
        "componentName": "View",
        "id": "ada844e5-0a06-4975-8ac2-4ad660c7ab84",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "justifyContent": "center",
            "marginTop": "16px",
            "marginRight": "28px",
            "borderWidth": "2px",
            "borderStyle": "solid",
            "borderRadius": "24px",
            "borderColor": "#FF9500",
            "width": "110px",
            "height": "48px"
          },
          "dealGradient": [],
          "className": "buttonWrap"
        },
        "rect": {
          "x": 546,
          "y": 330,
          "width": 110,
          "height": 48
        },
        "selfId": "0DCFDDEC-61B1-40BA-9A8E-E329A36AB65F",
        "children": [{
          "componentName": "Text",
          "id": "a8b8fae9-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "maxWidth": "98px",
              "overflow": "hidden",
              "textOverflow": "ellipsis",
              "lineHeight": "26px",
              "whiteSpace": "nowrap",
              "color": "#ff9500",
              "fontSize": "26px",
              "fontWeight": 400
            },
            "text": "进店",
            "lines": 1,
            "className": "button"
          },
          "rect": {
            "x": 575,
            "y": 339,
            "width": 52,
            "height": 30
          },
          "selfId": "EF4E6230-1F06-4AD3-A9C2-D412044C989A0",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["itemDesc"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "itemDesc",
                "type": "fieldBind"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "itemDesc"
              }
            }
          }
        }],
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["button", "sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.999972939491272,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 546,
                "y": 330,
                "width": 110,
                "height": 48
              },
              "selfId": "0DCFDDEC-61B1-40BA-9A8E-E329A36AB65F"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "button"
            }
          }
        }
      }, {
        "componentName": "Picture",
        "id": "a8b8faeb-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "35px",
            "width": "18px",
            "height": "10px"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "icon_6",
          "source": {
            "uri": "https://img.alicdn.com/imgextra/i3/O1CN01vCo1Px1M1Krd10lbX_!!6000000001374-2-tps-36-20.png"
          },
          "autoScaling": false,
          "autoWebp": false
        },
        "rect": {
          "x": 684,
          "y": 349,
          "width": 18,
          "height": 10
        },
        "selfId": "C19856EC-40C8-4D18-B7B7-53866317F551",
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["arrow-left"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "arrow-left",
              "score": 0.9880919456481934,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 684,
                "y": 349,
                "width": 18,
                "height": 10
              },
              "selfId": "C19856EC-40C8-4D18-B7B7-53866317F551"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "arrow-left"
            }
          }
        }
      }],
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["sliderbar_low_confident"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "sliderbar_low_confident",
            "score": 0.9753055572509766,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 48,
              "y": 314,
              "width": 654,
              "height": 93
            },
            "selfId": null
          }
        },
        "layerProtocol": {
          "component": {
            "type": "sliderbar_low_confident"
          }
        }
      }
    }, {
      "componentName": "Picture",
      "id": "a8b921f5-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "76px",
          "left": "116px",
          "width": "23px",
          "height": "24px"
        },
        "dealGradient": [{
          "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
        }],
        "className": "icon_7",
        "source": {
          "uri": "https://img.alicdn.com/imgextra/i2/O1CN01LM9t0y1azFICUF6lX_!!6000000003400-2-tps-46-48.png"
        },
        "autoScaling": false,
        "autoWebp": false
      },
      "rect": {
        "x": 140,
        "y": 360,
        "width": 23,
        "height": 24
      },
      "selfId": "52B6CB52-4E8C-4052-B9B7-1DBE78649868"
    }, {
      "componentName": "Picture",
      "id": "a8b8faec-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "30px",
          "left": "4px",
          "width": "121px",
          "height": "80px"
        },
        "className": "logo_1",
        "source": {
          "uri": "https://img.alicdn.com/imgextra/i3/O1CN01GmuUxb1NwsEnj04Nz_!!6000000001635-2-tps-242-160.png"
        },
        "autoScaling": false,
        "autoWebp": false
      },
      "rect": {
        "x": 28,
        "y": 314,
        "width": 121,
        "height": 80
      },
      "selfId": "E41A70F6-4742-4C5A-9627-A492B6F2850C",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["purePicture"],
          "baseComponent": ["video", "wifi"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "purePicture",
            "type": "fieldBind"
          },
          "baseComponent": {
            "isConfident": true,
            "label": "wifi",
            "score": 0.999161958694458,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 28,
              "y": 314,
              "width": 121,
              "height": 80
            },
            "selfId": "E41A70F6-4742-4C5A-9627-A492B6F2850C"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "purePicture"
          },
          "component": {
            "type": "video"
          }
        }
      }
    }, {
      "componentName": "Block",
      "id": "3e3d65cc-4a52-49ef-9fae-1a5a97eb2d2c",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "marginTop": "3px",
          "marginLeft": "24px",
          "backgroundSize": "contain",
          "backgroundImage": "url(https://img.alicdn.com/imgextra/i4/O1CN01CMguLQ1mIu47Y7rAx_!!6000000004932-2-tps-856-102.png)",
          "width": "428px",
          "height": "51px"
        },
        "dealGradient": [{
          "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
        }],
        "src": "https://img.alicdn.com/imgextra/i4/O1CN01CMguLQ1mIu47Y7rAx_!!6000000004932-2-tps-856-102.png",
        "className": "normal_div_10"
      },
      "rect": {
        "x": 48,
        "y": 410,
        "width": 428,
        "height": 51
      },
      "selfId": "C8849528-9390-45D9-970B-09DDFC63020E",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["brandLogo"],
          "baseComponent": ["countdown"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "brandLogo",
            "type": "fieldBind"
          },
          "baseComponent": {
            "isConfident": true,
            "label": "countdown",
            "score": 0.9931790828704834,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 48,
              "y": 410,
              "width": 428,
              "height": 51
            },
            "selfId": "C8849528-9390-45D9-970B-09DDFC63020E"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "brandLogo"
          },
          "component": {
            "type": "countdown"
          }
        }
      },
      "children": [{
        "componentName": "Text",
        "id": "a8b8fae7-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "19px",
            "marginLeft": "16px",
            "lineHeight": "20px",
            "whiteSpace": "nowrap",
            "color": "#999999",
            "fontSize": "22px",
            "fontWeight": 400
          },
          "text": "本月女装人气第",
          "lines": 1,
          "className": "info"
        },
        "rect": {
          "x": 64,
          "y": 429,
          "width": 154,
          "height": 20
        },
        "selfId": "24435CEF-2703-4FE9-A4A7-FB1B3717D22B0",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemDesc"],
            "baseComponent": ["sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemDesc",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9985883831977844,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 64,
                "y": 429,
                "width": 154,
                "height": 20
              },
              "selfId": "24435CEF-2703-4FE9-A4A7-FB1B3717D22B0"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemDesc"
            },
            "component": {
              "type": "sliderbar_low_confident"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b8fae6-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "20px",
            "lineHeight": "20px",
            "whiteSpace": "nowrap",
            "color": "#ffaa00",
            "fontSize": "22px",
            "fontWeight": 400
          },
          "text": "1",
          "lines": 1,
          "className": "num"
        },
        "rect": {
          "x": 218,
          "y": 430,
          "width": 9,
          "height": 20
        },
        "selfId": "24435CEF-2703-4FE9-A4A7-FB1B3717D22B1",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemTitle"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemTitle",
              "type": "fieldBind"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemTitle"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b8fae5-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "19px",
            "marginRight": "14px",
            "lineHeight": "20px",
            "whiteSpace": "nowrap",
            "color": "#999999",
            "fontSize": "22px",
            "fontWeight": 400
          },
          "text": "名",
          "lines": 1,
          "className": "txt_2"
        },
        "rect": {
          "x": 227,
          "y": 429,
          "width": 22,
          "height": 20
        },
        "selfId": "24435CEF-2703-4FE9-A4A7-FB1B3717D22B2",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemDesc"],
            "baseComponent": ["arrow-left"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemDesc",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "arrow-left",
              "score": 0.9799831509590149,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 227,
                "y": 429,
                "width": 22,
                "height": 20
              },
              "selfId": "24435CEF-2703-4FE9-A4A7-FB1B3717D22B2"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemDesc"
            },
            "component": {
              "type": "arrow-left"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b8fae4-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "16px",
            "lineHeight": "26px",
            "whiteSpace": "nowrap",
            "color": "#999999",
            "fontSize": "22px",
            "fontWeight": 400
          },
          "text": "上新快",
          "lines": 1,
          "className": "word_3"
        },
        "rect": {
          "x": 263,
          "y": 426,
          "width": 66,
          "height": 26
        },
        "selfId": "71523ADA-EFF5-4570-99E6-97C4A953ACD90",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemDesc"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemDesc",
              "type": "fieldBind"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemDesc"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b8fae3-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "16px",
            "lineHeight": "26px",
            "whiteSpace": "nowrap",
            "color": "#999999",
            "fontSize": "22px",
            "fontWeight": 400
          },
          "text": "（8）",
          "lines": 1,
          "className": "text_1"
        },
        "rect": {
          "x": 329,
          "y": 426,
          "width": 51,
          "height": 26
        },
        "selfId": "49012766-C65E-42E3-A4F3-06B6B8395E9F0",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["shopName"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "shopName",
              "type": "fieldBind"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "shopName"
            }
          }
        }
      }],
      "fileName": "comp_tags"
    }, {
      "componentName": "Text",
      "id": "a8b8fae2-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "142px",
          "right": "247px",
          "lineHeight": "26px",
          "whiteSpace": "nowrap",
          "color": "#999999",
          "fontSize": "22px",
          "fontWeight": 400
        },
        "text": "（16）",
        "lines": 1,
        "className": "txt_3"
      },
      "rect": {
        "x": 412,
        "y": 426,
        "width": 67,
        "height": 26
      },
      "selfId": "DA93477D-DB47-4D3A-A411-8A59939789770",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["shopName"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "shopName",
            "type": "fieldBind"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "shopName"
          }
        }
      }
    }, {
      "componentName": "Text",
      "id": "a8b8fae1-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "142px",
          "right": "304px",
          "lineHeight": "26px",
          "whiteSpace": "nowrap",
          "color": "#999999",
          "fontSize": "22px",
          "fontWeight": 400
        },
        "text": "正品",
        "lines": 1,
        "className": "word_4"
      },
      "rect": {
        "x": 380,
        "y": 426,
        "width": 42,
        "height": 26
      },
      "selfId": "FCB6F17E-EC72-4FBB-B564-402E74940CB30",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["itemDesc"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "itemDesc",
            "type": "fieldBind"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "itemDesc"
          }
        }
      }
    }, {
      "componentName": "View",
      "id": "b0fb3ad8-0674-4671-9c36-4d1241d43273",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "marginTop": "13px",
          "marginLeft": "6px",
          "backgroundSize": "contain",
          "backgroundImage": "url(https://img.alicdn.com/imgextra/i4/O1CN01a29Ac91kr8R94SGpI_!!6000000004736-2-tps-730-728.png)",
          "width": "365px",
          "height": "364px"
        },
        "src": "https://img.alicdn.com/imgextra/i4/O1CN01a29Ac91kr8R94SGpI_!!6000000004736-2-tps-730-728.png",
        "className": "normal_div_11"
      },
      "rect": {
        "x": 30,
        "y": 474,
        "width": 365,
        "height": 364
      },
      "selfId": "566C8C7A-A7F5-479F-BDE4-2D37C3CA7ADC",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["purePicture"],
          "baseComponent": ["video", "sliderbar_low_confident"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "purePicture",
            "type": "fieldBind"
          },
          "baseComponent": {
            "isConfident": true,
            "label": "sliderbar_low_confident",
            "score": 0.9764789938926697,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 30,
              "y": 474,
              "width": 365,
              "height": 364
            },
            "selfId": "566C8C7A-A7F5-479F-BDE4-2D37C3CA7ADC"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "purePicture"
          },
          "component": {
            "type": "video"
          }
        }
      },
      "children": [{
        "componentName": "View",
        "id": "a8b94909-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "16px",
            "marginLeft": "18px",
            "borderRadius": "12px",
            "backgroundColor": "rgba(0,0,0,0.03)",
            "width": "319px",
            "height": "319px",
            "overflow": "hidden"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "colorDiv_1"
        },
        "rect": {
          "x": 48,
          "y": 490,
          "width": 319,
          "height": 319
        },
        "selfId": "80C851F8-D9CC-4BA3-88D0-FB5BB78942B4"
      }]
    }, {
      "componentName": "Text",
      "id": "a8b94908-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "550px",
          "left": "34px",
          "lineHeight": "32px",
          "whiteSpace": "nowrap",
          "color": "#333333",
          "fontSize": "24px",
          "fontWeight": 300
        },
        "text": "官网正品秋冬蓝色长袖新…",
        "lines": 1,
        "className": "desc"
      },
      "rect": {
        "x": 58,
        "y": 834,
        "width": 288,
        "height": 32
      },
      "selfId": "46599156-4E40-46D9-85E7-BED0DA0D24C80",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["itemTitle"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "itemTitle",
            "type": "fieldBind"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "itemTitle"
          }
        }
      }
    }, {
      "componentName": "Text",
      "id": "a8b94906-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "550px",
          "right": "46px",
          "lineHeight": "32px",
          "whiteSpace": "nowrap",
          "color": "#333333",
          "fontSize": "24px",
          "fontWeight": 300
        },
        "text": "官网正品袋鼠款黑色长袖…",
        "lines": 1,
        "className": "desc_1"
      },
      "rect": {
        "x": 392,
        "y": 834,
        "width": 288,
        "height": 32
      },
      "selfId": "853E0654-E77F-4948-9CC8-5BFFE85044BC0",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["itemTitle"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "itemTitle",
            "type": "fieldBind"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "itemTitle"
          }
        }
      }
    }, {
      "componentName": "View",
      "id": "a8b94904-8e38-11eb-a465-65aeb5535337",
      "props": {
        "style": {
          "position": "absolute",
          "top": "206px",
          "right": "25px",
          "borderRadius": "12px",
          "backgroundColor": "#F5F5F5",
          "width": "319px",
          "height": "319px",
          "overflow": "hidden"
        },
        "dealGradient": [{
          "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
        }],
        "className": "color_2"
      },
      "rect": {
        "x": 382,
        "y": 490,
        "width": 319,
        "height": 319
      },
      "selfId": "DC3A5976-4810-45D8-872E-678B52DBD6E2",
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["video"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "video",
            "score": 0.9999997615814209,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 382,
              "y": 490,
              "width": 319,
              "height": 319
            },
            "selfId": "DC3A5976-4810-45D8-872E-678B52DBD6E2"
          }
        },
        "layerProtocol": {
          "component": {
            "type": "video"
          }
        }
      }
    }, {
      "componentName": "View",
      "id": "e5f587ca-e64a-47d3-b426-03b96861a9be",
      "props": {
        "style": {
          "display": "flex",
          "position": "absolute",
          "top": "193px",
          "right": "7px",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center",
          "backgroundSize": "contain",
          "backgroundImage": "url(https://img.alicdn.com/imgextra/i1/O1CN017BaFvj1QrKHrLkSkV_!!6000000002029-2-tps-712-712.png)",
          "width": "356px",
          "height": "356px"
        },
        "src": "https://img.alicdn.com/imgextra/i1/O1CN017BaFvj1QrKHrLkSkV_!!6000000002029-2-tps-712-712.png",
        "className": "normal_div_12"
      },
      "rect": {
        "x": 363,
        "y": 477,
        "width": 356,
        "height": 356
      },
      "selfId": "A74783FD-01A6-4C44-AA34-245BBFCB673D",
      "smart": {
        "nodeIdentification": {
          "fieldBind": ["brandLogo"],
          "baseComponent": ["video"]
        },
        "nodeCustom": {
          "fieldBind": {
            "isConfident": true,
            "label": "brandLogo",
            "type": "fieldBind"
          },
          "baseComponent": {
            "isConfident": true,
            "label": "video",
            "score": 0.9999911785125732,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 363,
              "y": 477,
              "width": 356,
              "height": 356
            },
            "selfId": "A74783FD-01A6-4C44-AA34-245BBFCB673D"
          }
        },
        "layerProtocol": {
          "field": {
            "type": "brandLogo"
          },
          "component": {
            "type": "video"
          }
        }
      },
      "children": [{
        "componentName": "View",
        "id": "a8b94902-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "marginTop": "13px",
            "borderRadius": "12px",
            "backgroundColor": "rgba(0,0,0,0.03)",
            "width": "319px",
            "height": "319px",
            "overflow": "hidden"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "colorDiv_2"
        },
        "rect": {
          "x": 382,
          "y": 490,
          "width": 319,
          "height": 319
        },
        "selfId": "DACD90CB-A37C-4F1D-9EAF-A39DC330B88A"
      }]
    }, {
      "componentName": "View",
      "id": "94b24ab5-9342-4187-aff0-e4776452678e",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "center",
          "flexDirection": "row",
          "justifyContent": "space-between",
          "marginTop": "36px",
          "marginLeft": "34px",
          "width": "412px",
          "height": "32px"
        },
        "className": "moneyWrap"
      },
      "rect": {
        "x": 58,
        "y": 874,
        "width": 412,
        "height": 32
      },
      "children": [{
        "componentName": "Text",
        "id": "a8b94907-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "lineHeight": "28px",
            "letterSpacing": "0.17px",
            "whiteSpace": "pre",
            "color": "#3e3e3e",
            "fontSize": "28px",
            "fontWeight": 400
          },
          "text": "¥ 260",
          "lines": 1,
          "className": "moneyLabel"
        },
        "rect": {
          "x": 58,
          "y": 874,
          "width": 78,
          "height": 32
        },
        "selfId": "229F52D1-51EA-4734-B9C7-B9E2D84D48700",
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "left"
            }
          }
        }
      }, {
        "componentName": "Text",
        "id": "a8b94905-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "lineHeight": "28px",
            "letterSpacing": "0.17px",
            "whiteSpace": "pre",
            "color": "#3e3e3e",
            "fontSize": "28px",
            "fontWeight": 400
          },
          "text": "¥ 688",
          "lines": 1,
          "className": "money"
        },
        "rect": {
          "x": 392,
          "y": 874,
          "width": 78,
          "height": 32
        },
        "selfId": "3A086D21-8EC7-450B-A412-F50D7473FFBE0",
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "right"
            }
          }
        }
      }],
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["arrow-left"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "arrow-left",
            "score": 0.9308453798294067,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 58,
              "y": 874,
              "width": 412,
              "height": 32
            },
            "selfId": null
          }
        },
        "layerProtocol": {
          "component": {
            "type": "arrow-left"
          }
        }
      }
    }],
    "smart": {
      "nodeIdentification": {
        "bizModule": ["smartModule"]
      },
      "nodeCustom": {
        "bizModule": {
          "isConfident": true,
          "label": "smartModule",
          "score": 0.995540201663971,
          "type": "bizModule",
          "meta": {
            "threshold": 0.9,
            "props": {
              "labels": ["module_label_A", "module_label_B"]
            }
          },
          "rect": {
            "x": 24,
            "y": 284,
            "width": 702,
            "height": 650
          },
          "selfId": "D25B53A8-13D1-4674-94DB-34B78B89A4D0"
        }
      },
      "layerProtocol": {
        "module": {
          "type": "smartModule",
          "param": {
            "labels": ["module_label_A", "module_label_B"]
          }
        }
      }
    }
  }, {
    "componentName": "Block",
    "id": "221edea1-74fa-4752-ab4f-3afce077ac21",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "center",
        "flexDirection": "row",
        "marginTop": "24px"
      },
      "className": "ft"
    },
    "rect": {
      "x": 0,
      "y": 958,
      "width": 744,
      "height": 1018
    },
    "fileName": "mod_3",
    "children": [{
      "componentName": "View",
      "id": "fd6ee107-84f6-4beb-8b29-7c1e4d24c16a",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "height": "1018px"
        },
        "className": "normal_div_13"
      },
      "rect": {
        "x": 0,
        "y": 958,
        "width": 744,
        "height": 1018
      },
      "children": [{
        "componentName": "Block",
        "id": "0606c348-8fde-478a-be37-33c868e30507",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "flex-end",
            "flexDirection": "row",
            "justifyContent": "center",
            "width": "744px"
          },
          "className": "block_3"
        },
        "rect": {
          "x": 0,
          "y": 958,
          "width": 744,
          "height": 722
        },
        "smart": {
          "layerProtocol": {
            "module": {
              "type": "shopCard"
            }
          }
        },
        "selfId": "B10E4CF1-36F8-4FA5-9D05-1557264E8203",
        "fileName": "shopCard",
        "children": [{
          "componentName": "View",
          "id": "a8b9be3f-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "column",
              "marginBottom": "72px",
              "borderRadius": "24px",
              "backgroundColor": "#FFFFFF",
              "width": "702px",
              "height": "650px",
              "overflow": "hidden"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "block_4"
          },
          "rect": {
            "x": 24,
            "y": 958,
            "width": 702,
            "height": 650
          },
          "selfId": "7B3677BE-A986-42FB-9431-A0F83C921B15",
          "children": [{
            "componentName": "Picture",
            "id": "a8b9be3d-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "absolute",
                "top": "190px",
                "left": "7px",
                "width": "364px",
                "height": "364px"
              },
              "className": "shop",
              "source": {
                "uri": "https://img.alicdn.com/imgextra/i4/O1CN016AvRca1qVVQWLNDTC_!!6000000005501-2-tps-728-728.png"
              },
              "autoScaling": false,
              "autoWebp": false
            },
            "rect": {
              "x": 31,
              "y": 1148,
              "width": 364,
              "height": 364
            },
            "selfId": "83D83372-08AE-4A48-8A37-C667BBF19B51",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["purePicture"],
                "baseComponent": ["video"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "isConfident": true,
                  "label": "purePicture",
                  "type": "fieldBind"
                },
                "baseComponent": {
                  "isConfident": true,
                  "label": "video",
                  "score": 0.9999996423721313,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 31,
                    "y": 1148,
                    "width": 364,
                    "height": 364
                  },
                  "selfId": "83D83372-08AE-4A48-8A37-C667BBF19B51"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "purePicture"
                },
                "component": {
                  "type": "video"
                }
              }
            }
          }, {
            "componentName": "Picture",
            "id": "a8b9be30-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "absolute",
                "top": "82px",
                "left": "124px",
                "width": "25px",
                "height": "21px",
                "overflow": "hidden"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(130deg, rgba(254,217,0,1.00) 9%, rgba(241,185,0,1.00) 76%)"
              }],
              "className": "icon_8",
              "source": {
                "uri": "https://img.alicdn.com/imgextra/i1/O1CN01Qcj78H284dGtYIYLl_!!6000000007879-2-tps-50-42.png"
              },
              "autoScaling": false,
              "autoWebp": false
            },
            "rect": {
              "x": 148,
              "y": 1040,
              "width": 25,
              "height": 21
            },
            "selfId": "D75E2DED-D2CA-47E6-B8EC-994022EE23D9",
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.9987502098083496,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 148,
                    "y": 1040,
                    "width": 25,
                    "height": 21
                  },
                  "selfId": "D75E2DED-D2CA-47E6-B8EC-994022EE23D9"
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "sliderbar_low_confident"
                }
              }
            }
          }, {
            "componentName": "View",
            "id": "57cc9614-dd13-4a27-b354-0faa3cd0b008",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "flex-start",
                "alignSelf": "center",
                "flexDirection": "row",
                "marginTop": "30px"
              },
              "className": "block_5"
            },
            "rect": {
              "x": 48,
              "y": 988,
              "width": 654,
              "height": 93
            },
            "children": [{
              "componentName": "View",
              "id": "a8b99729-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "display": "flex",
                  "position": "relative",
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "marginRight": "16px",
                  "borderRadius": "40px",
                  "backgroundColor": "rgba(51,51,51,0.03)",
                  "overflow": "hidden"
                },
                "dealGradient": [{
                  "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                }],
                "className": "container"
              },
              "rect": {
                "x": 48,
                "y": 988,
                "width": 80,
                "height": 80
              },
              "selfId": "20D67928-92D7-4BD2-B07C-57BF3F4105AD",
              "children": [{
                "componentName": "View",
                "id": "af3abdd5-5bc3-44b9-a8f1-7a5663fd6be4",
                "props": {
                  "style": {
                    "display": "flex",
                    "alignItems": "center",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "backgroundSize": "contain",
                    "backgroundImage": "url(https://img.alicdn.com/imgextra/i4/O1CN01k44A2D1oTYVbk7vfc_!!6000000005226-2-tps-160-160.png)"
                  },
                  "className": "normal_div_14"
                },
                "rect": {
                  "x": 48,
                  "y": 988,
                  "width": 80,
                  "height": 80
                },
                "children": [{
                  "componentName": "View",
                  "id": "a8b99727-8e38-11eb-a465-65aeb5535337",
                  "props": {
                    "style": {
                      "borderRadius": "40px",
                      "backgroundColor": "rgba(51,51,51,0.03)",
                      "width": "80px",
                      "height": "80px",
                      "overflow": "hidden"
                    },
                    "dealGradient": [{
                      "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                    }],
                    "className": "color_3"
                  },
                  "rect": {
                    "x": 48,
                    "y": 988,
                    "width": 80,
                    "height": 80
                  },
                  "selfId": "2D2F2439-F2B9-47A0-9E1F-9B9E65FC3DC0"
                }]
              }],
              "smart": {
                "nodeIdentification": {
                  "baseComponent": ["video"]
                },
                "nodeCustom": {
                  "baseComponent": {
                    "isConfident": true,
                    "label": "video",
                    "score": 0.9930347204208374,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 48,
                      "y": 988,
                      "width": 80,
                      "height": 80
                    },
                    "selfId": "20D67928-92D7-4BD2-B07C-57BF3F4105AD"
                  }
                },
                "layerProtocol": {
                  "component": {
                    "type": "video"
                  }
                }
              }
            }, {
              "componentName": "View",
              "id": "933cab14-3f00-4a90-98b3-1355788a4fe8",
              "props": {
                "style": {
                  "display": "flex",
                  "position": "relative",
                  "alignItems": "flex-start",
                  "flexDirection": "column",
                  "marginTop": "4px",
                  "marginRight": "99px"
                },
                "className": "block_6"
              },
              "rect": {
                "x": 144,
                "y": 992,
                "width": 303,
                "height": 89
              },
              "children": [{
                "componentName": "Text",
                "id": "a8b9972a-8e38-11eb-a465-65aeb5535337",
                "props": {
                  "style": {
                    "position": "relative",
                    "marginLeft": "4px",
                    "maxWidth": "295px",
                    "height": "34px",
                    "overflow": "hidden",
                    "textOverflow": "ellipsis",
                    "lineHeight": "34px",
                    "whiteSpace": "nowrap",
                    "color": "#333333",
                    "fontSize": "30px",
                    "fontWeight": 500
                  },
                  "text": "本相织物潮流服饰店",
                  "lines": 1,
                  "className": "shopTitle_1"
                },
                "rect": {
                  "x": 148,
                  "y": 992,
                  "width": 270,
                  "height": 34
                },
                "selfId": "26CCF9AC-FF32-467B-B89F-9009B0A8A4DF0",
                "smart": {
                  "nodeIdentification": {
                    "fieldBind": ["shopName"],
                    "baseComponent": ["sliderbar_low_confident"]
                  },
                  "nodeCustom": {
                    "fieldBind": {
                      "isConfident": true,
                      "label": "shopName",
                      "type": "fieldBind"
                    },
                    "baseComponent": {
                      "isConfident": true,
                      "label": "sliderbar_low_confident",
                      "score": 0.9788455963134766,
                      "type": "baseComponent",
                      "meta": {
                        "threshold": 0.9
                      },
                      "rect": {
                        "x": 148,
                        "y": 992,
                        "width": 270,
                        "height": 34
                      },
                      "selfId": "26CCF9AC-FF32-467B-B89F-9009B0A8A4DF0"
                    }
                  },
                  "layerProtocol": {
                    "field": {
                      "type": "shopName"
                    },
                    "layout": {
                      "type": "layout",
                      "position": "top"
                    },
                    "component": {
                      "type": "sliderbar_low_confident"
                    }
                  }
                }
              }, {
                "componentName": "View",
                "id": "6307ffae-bfb4-4ed6-9cc0-29919995e9b3",
                "props": {
                  "style": {
                    "display": "flex",
                    "position": "relative",
                    "alignItems": "flex-end",
                    "flexDirection": "row",
                    "marginTop": "5px"
                  },
                  "className": "normal_div_15"
                },
                "rect": {
                  "x": 144,
                  "y": 1031,
                  "width": 303,
                  "height": 50
                },
                "children": [{
                  "componentName": "Text",
                  "id": "a8b9be31-8e38-11eb-a465-65aeb5535337",
                  "props": {
                    "style": {
                      "position": "absolute",
                      "top": "6px",
                      "left": "38px",
                      "lineHeight": "28px",
                      "whiteSpace": "nowrap",
                      "color": "#f2aa00",
                      "fontSize": "24px",
                      "fontWeight": 600
                    },
                    "text": "9.2",
                    "lines": 1,
                    "className": "num_1"
                  },
                  "rect": {
                    "x": 182,
                    "y": 1037,
                    "width": 36,
                    "height": 28
                  },
                  "selfId": "7D639187-CE3F-4F18-B3F8-3D561E38911C0",
                  "smart": {
                    "nodeIdentification": {
                      "baseComponent": ["sliderbar_low_confident"]
                    },
                    "nodeCustom": {
                      "baseComponent": {
                        "isConfident": true,
                        "label": "sliderbar_low_confident",
                        "score": 0.9881189465522766,
                        "type": "baseComponent",
                        "meta": {
                          "threshold": 0.9
                        },
                        "rect": {
                          "x": 182,
                          "y": 1037,
                          "width": 36,
                          "height": 28
                        },
                        "selfId": "7D639187-CE3F-4F18-B3F8-3D561E38911C0"
                      }
                    },
                    "layerProtocol": {
                      "component": {
                        "type": "sliderbar_low_confident"
                      }
                    }
                  }
                }, {
                  "componentName": "View",
                  "id": "d5532483-a9d2-415e-a949-6731e9ec8ca5",
                  "props": {
                    "style": {
                      "display": "flex",
                      "position": "relative",
                      "alignItems": "center",
                      "flexDirection": "row",
                      "justifyContent": "center",
                      "marginRight": "36px"
                    },
                    "className": "normal_div_16"
                  },
                  "rect": {
                    "x": 144,
                    "y": 1031,
                    "width": 50,
                    "height": 50
                  },
                  "children": [{
                    "componentName": "Picture",
                    "id": "a8b9972d-8e38-11eb-a465-65aeb5535337",
                    "props": {
                      "style": {
                        "position": "relative",
                        "width": "50px",
                        "height": "50px"
                      },
                      "dealGradient": [{
                        "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                      }],
                      "className": "largeIcon_1",
                      "source": {
                        "uri": "https://img.alicdn.com/imgextra/i3/O1CN01ilFGFi1zxkOIi0hFj_!!6000000006781-2-tps-100-100.png"
                      },
                      "autoScaling": false,
                      "autoWebp": false
                    },
                    "rect": {
                      "x": 144,
                      "y": 1031,
                      "width": 50,
                      "height": 50
                    },
                    "selfId": "AE093528-571E-451A-A489-69BF02D00F80"
                  }, {
                    "componentName": "Picture",
                    "id": "a8b9972b-8e38-11eb-a465-65aeb5535337",
                    "props": {
                      "style": {
                        "position": "absolute",
                        "top": "21px",
                        "right": "18px",
                        "width": "10px",
                        "height": "9px",
                        "overflow": "hidden"
                      },
                      "dealGradient": [{
                        "backgroundImage": "linear-gradient(130deg, rgba(254,217,0,1.00) 9%, rgba(241,185,0,1.00) 76%)"
                      }],
                      "className": "icon_9",
                      "source": {
                        "uri": "https://img.alicdn.com/imgextra/i2/O1CN01f4WIcl23YnH74RgVK_!!6000000007268-2-tps-20-18.png"
                      },
                      "autoScaling": false,
                      "autoWebp": false
                    },
                    "rect": {
                      "x": 166,
                      "y": 1052,
                      "width": 10,
                      "height": 9
                    },
                    "selfId": "D1B6F7B3-409F-4DD9-A362-5033647CB7E4"
                  }],
                  "smart": {
                    "nodeIdentification": {
                      "baseComponent": ["video", "video", "sliderbar_low_confident", "sliderbar_low_confident"]
                    },
                    "nodeCustom": {
                      "baseComponent": {
                        "isConfident": true,
                        "label": "sliderbar_low_confident",
                        "score": 0.9966446161270142,
                        "type": "baseComponent",
                        "meta": {
                          "threshold": 0.9
                        },
                        "rect": {
                          "x": 144,
                          "y": 1031,
                          "width": 50,
                          "height": 50
                        },
                        "selfId": null
                      }
                    },
                    "layerProtocol": {
                      "component": {
                        "type": "video"
                      }
                    }
                  }
                }, {
                  "componentName": "View",
                  "id": "db0b2118-d9da-437f-b1f9-af63e9cad078",
                  "props": {
                    "style": {
                      "display": "flex",
                      "position": "relative",
                      "alignItems": "center",
                      "flexDirection": "row",
                      "marginBottom": "17px",
                      "height": "28px"
                    },
                    "className": "normal_div_17"
                  },
                  "rect": {
                    "x": 230,
                    "y": 1036,
                    "width": 217,
                    "height": 28
                  },
                  "children": [{
                    "componentName": "Text",
                    "id": "a8b9be33-8e38-11eb-a465-65aeb5535337",
                    "props": {
                      "style": {
                        "marginRight": "14px",
                        "lineHeight": "24px",
                        "whiteSpace": "nowrap",
                        "color": "#999999",
                        "fontSize": "24px",
                        "fontWeight": 300
                      },
                      "text": "5年老店",
                      "lines": 1,
                      "className": "shopTitle_2"
                    },
                    "rect": {
                      "x": 230,
                      "y": 1036,
                      "width": 87,
                      "height": 28
                    },
                    "selfId": "D11F5D72-E40D-40AF-81E6-7DDE870A8F860",
                    "smart": {
                      "nodeIdentification": {
                        "fieldBind": ["itemDesc"]
                      },
                      "nodeCustom": {
                        "fieldBind": {
                          "isConfident": true,
                          "label": "itemDesc",
                          "type": "fieldBind"
                        }
                      },
                      "layerProtocol": {
                        "field": {
                          "type": "itemDesc"
                        },
                        "layout": {
                          "type": "layout",
                          "position": "left"
                        }
                      }
                    }
                  }, {
                    "componentName": "Text",
                    "id": "a8b9be32-8e38-11eb-a465-65aeb5535337",
                    "props": {
                      "style": {
                        "lineHeight": "24px",
                        "whiteSpace": "nowrap",
                        "color": "#999999",
                        "fontSize": "24px",
                        "fontWeight": 300
                      },
                      "text": "12.7万粉丝",
                      "lines": 1,
                      "className": "txt_4"
                    },
                    "rect": {
                      "x": 331,
                      "y": 1036,
                      "width": 116,
                      "height": 28
                    },
                    "selfId": "8934528F-0EAE-4E1D-BB4F-235F566F1D8D0",
                    "smart": {
                      "layerProtocol": {
                        "layout": {
                          "type": "layout",
                          "position": "right"
                        },
                        "component": {
                          "type": "sliderbar_low_confident"
                        }
                      },
                      "nodeIdentification": {
                        "baseComponent": ["sliderbar_low_confident"]
                      },
                      "nodeCustom": {
                        "baseComponent": {
                          "isConfident": true,
                          "label": "sliderbar_low_confident",
                          "score": 0.9288753271102905,
                          "type": "baseComponent",
                          "meta": {
                            "threshold": 0.9
                          },
                          "rect": {
                            "x": 331,
                            "y": 1036,
                            "width": 116,
                            "height": 28
                          },
                          "selfId": "8934528F-0EAE-4E1D-BB4F-235F566F1D8D0"
                        }
                      }
                    }
                  }],
                  "smart": {
                    "nodeIdentification": {
                      "baseComponent": ["countdown"]
                    },
                    "nodeCustom": {
                      "baseComponent": {
                        "isConfident": true,
                        "label": "countdown",
                        "score": 0.9932502508163452,
                        "type": "baseComponent",
                        "meta": {
                          "threshold": 0.9
                        },
                        "rect": {
                          "x": 230,
                          "y": 1036,
                          "width": 217,
                          "height": 28
                        },
                        "selfId": null
                      }
                    },
                    "layerProtocol": {
                      "component": {
                        "type": "countdown"
                      }
                    }
                  }
                }],
                "smart": {
                  "layerProtocol": {
                    "layout": {
                      "type": "layout",
                      "position": "bottom"
                    },
                    "component": {
                      "type": "sliderbar_low_confident"
                    }
                  },
                  "nodeIdentification": {
                    "baseComponent": ["sliderbar_low_confident"]
                  },
                  "nodeCustom": {
                    "baseComponent": {
                      "isConfident": true,
                      "label": "sliderbar_low_confident",
                      "score": 0.97467041015625,
                      "type": "baseComponent",
                      "meta": {
                        "threshold": 0.9
                      },
                      "rect": {
                        "x": 144,
                        "y": 1031,
                        "width": 303,
                        "height": 50
                      },
                      "selfId": null
                    }
                  }
                }
              }]
            }, {
              "componentName": "Picture",
              "id": "a8b9972c-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "absolute",
                  "top": "46px",
                  "left": "92px",
                  "width": "23px",
                  "height": "24px"
                },
                "dealGradient": [{
                  "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                }],
                "className": "icon_10",
                "source": {
                  "uri": "https://img.alicdn.com/imgextra/i1/O1CN014c0H761dbptZMnczR_!!6000000003755-2-tps-46-48.png"
                },
                "autoScaling": false,
                "autoWebp": false
              },
              "rect": {
                "x": 140,
                "y": 1034,
                "width": 23,
                "height": 24
              },
              "selfId": "0BE83C99-BCF6-42FD-AD1B-2F928A710397"
            }, {
              "componentName": "View",
              "id": "a8b99725-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "display": "flex",
                  "position": "relative",
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "marginTop": "16px",
                  "marginRight": "28px",
                  "borderWidth": "2px",
                  "borderStyle": "solid",
                  "borderRadius": "24px",
                  "borderColor": "#FF9500",
                  "width": "110px",
                  "height": "48px"
                },
                "dealGradient": [],
                "className": "buttonWrap_1"
              },
              "rect": {
                "x": 546,
                "y": 1004,
                "width": 110,
                "height": 48
              },
              "selfId": "C448E349-20D5-43B7-9058-93FB06292E78",
              "children": [{
                "componentName": "Text",
                "id": "a8b99724-8e38-11eb-a465-65aeb5535337",
                "props": {
                  "style": {
                    "maxWidth": "98px",
                    "overflow": "hidden",
                    "textOverflow": "ellipsis",
                    "lineHeight": "26px",
                    "whiteSpace": "nowrap",
                    "color": "#ff9500",
                    "fontSize": "26px",
                    "fontWeight": 400
                  },
                  "text": "进店",
                  "lines": 1,
                  "className": "button_1"
                },
                "rect": {
                  "x": 575,
                  "y": 1013,
                  "width": 52,
                  "height": 30
                },
                "selfId": "0E67C2AA-A389-4235-9B8D-F6E91A5070030",
                "smart": {
                  "nodeIdentification": {
                    "fieldBind": ["itemDesc"]
                  },
                  "nodeCustom": {
                    "fieldBind": {
                      "isConfident": true,
                      "label": "itemDesc",
                      "type": "fieldBind"
                    }
                  },
                  "layerProtocol": {
                    "field": {
                      "type": "itemDesc"
                    }
                  }
                }
              }],
              "smart": {
                "nodeIdentification": {
                  "baseComponent": ["button", "sliderbar_low_confident"]
                },
                "nodeCustom": {
                  "baseComponent": {
                    "isConfident": true,
                    "label": "sliderbar_low_confident",
                    "score": 0.999972939491272,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 546,
                      "y": 1004,
                      "width": 110,
                      "height": 48
                    },
                    "selfId": "C448E349-20D5-43B7-9058-93FB06292E78"
                  }
                },
                "layerProtocol": {
                  "component": {
                    "type": "button"
                  }
                }
              }
            }, {
              "componentName": "Picture",
              "id": "a8b99726-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "relative",
                  "marginTop": "35px",
                  "width": "18px",
                  "height": "10px"
                },
                "dealGradient": [{
                  "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                }],
                "className": "icon_11",
                "source": {
                  "uri": "https://img.alicdn.com/imgextra/i1/O1CN01IIqJf11y2fPaFmgHX_!!6000000006521-2-tps-36-20.png"
                },
                "autoScaling": false,
                "autoWebp": false
              },
              "rect": {
                "x": 684,
                "y": 1023,
                "width": 18,
                "height": 10
              },
              "selfId": "45A78C22-24AC-4C96-ABD0-70331EB9C9A0",
              "smart": {
                "nodeIdentification": {
                  "baseComponent": ["arrow-left"]
                },
                "nodeCustom": {
                  "baseComponent": {
                    "isConfident": true,
                    "label": "arrow-left",
                    "score": 0.9880919456481934,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 684,
                      "y": 1023,
                      "width": 18,
                      "height": 10
                    },
                    "selfId": "45A78C22-24AC-4C96-ABD0-70331EB9C9A0"
                  }
                },
                "layerProtocol": {
                  "component": {
                    "type": "arrow-left"
                  }
                }
              }
            }]
          }, {
            "componentName": "View",
            "id": "0a639075-660b-4a5f-82fd-f63ce7f0387d",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "flex-start",
                "flexDirection": "row",
                "marginTop": "3px",
                "marginLeft": "24px",
                "width": "338px",
                "height": "50px"
              },
              "className": "txtBgWrap"
            },
            "rect": {
              "x": 48,
              "y": 1084,
              "width": 338,
              "height": 50
            },
            "children": [{
              "componentName": "Picture",
              "id": "a8b99723-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "absolute",
                  "top": "0px",
                  "left": "0px",
                  "width": "338px",
                  "height": "50px"
                },
                "dealGradient": [{
                  "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                }],
                "className": "txtBg",
                "source": {
                  "uri": "https://img.alicdn.com/imgextra/i4/O1CN01agltW11MV6boGIvAw_!!6000000001439-2-tps-676-100.png"
                },
                "autoScaling": false,
                "autoWebp": false
              },
              "rect": {
                "x": 48,
                "y": 1084,
                "width": 338,
                "height": 50
              },
              "selfId": "A44818C9-FA67-40A2-92E6-0DD6CBAB0381"
            }, {
              "componentName": "Text",
              "id": "a8b99721-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "absolute",
                  "top": "16px",
                  "left": "123px",
                  "lineHeight": "26px",
                  "whiteSpace": "nowrap",
                  "color": "#666666",
                  "fontSize": "22px",
                  "fontWeight": 400
                },
                "text": "上新快",
                "lines": 1,
                "className": "text_2"
              },
              "rect": {
                "x": 171,
                "y": 1100,
                "width": 66,
                "height": 26
              },
              "selfId": "2CC359CF-CCA7-4659-835C-5E8273F543B30",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["itemDesc"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "itemDesc",
                    "type": "fieldBind"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "itemDesc"
                  }
                }
              }
            }, {
              "componentName": "Text",
              "id": "a8b99722-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "relative",
                  "marginTop": "16px",
                  "marginRight": "73px",
                  "marginLeft": "16px",
                  "lineHeight": "26px",
                  "whiteSpace": "nowrap",
                  "color": "#ff9500",
                  "fontSize": "22px",
                  "fontWeight": 400
                },
                "text": "90后偏爱",
                "lines": 1,
                "className": "txt_5"
              },
              "rect": {
                "x": 64,
                "y": 1100,
                "width": 93,
                "height": 26
              },
              "selfId": "D6680BE6-9386-4DA7-BED3-97EC87690AC50",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["shopName"],
                  "baseComponent": ["sliderbar_low_confident"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "shopName",
                    "type": "fieldBind"
                  },
                  "baseComponent": {
                    "isConfident": true,
                    "label": "sliderbar_low_confident",
                    "score": 0.9999125003814697,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 64,
                      "y": 1100,
                      "width": 93,
                      "height": 26
                    },
                    "selfId": "D6680BE6-9386-4DA7-BED3-97EC87690AC50"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "shopName"
                  },
                  "component": {
                    "type": "sliderbar_low_confident"
                  }
                }
              }
            }, {
              "componentName": "Text",
              "id": "a8b99720-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "relative",
                  "marginTop": "16px",
                  "marginRight": "32px",
                  "lineHeight": "26px",
                  "whiteSpace": "nowrap",
                  "color": "#666666",
                  "fontSize": "22px",
                  "fontWeight": 400
                },
                "text": "（8）",
                "lines": 1,
                "className": "word_5"
              },
              "rect": {
                "x": 230,
                "y": 1100,
                "width": 58,
                "height": 26
              },
              "selfId": "AD3EE713-81B7-46A8-9068-1AD3534044730",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["shopName"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "shopName",
                    "type": "fieldBind"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "shopName"
                  }
                }
              }
            }, {
              "componentName": "Text",
              "id": "a8b97022-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "relative",
                  "marginTop": "16px",
                  "lineHeight": "26px",
                  "whiteSpace": "nowrap",
                  "color": "#666666",
                  "fontSize": "22px",
                  "fontWeight": 400
                },
                "text": "（16）",
                "lines": 1,
                "className": "text_3"
              },
              "rect": {
                "x": 320,
                "y": 1100,
                "width": 67,
                "height": 26
              },
              "selfId": "135DF64D-04BE-4458-A4C5-FFC427DEBE040",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["shopName"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "shopName",
                    "type": "fieldBind"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "shopName"
                  }
                }
              }
            }, {
              "componentName": "Text",
              "id": "a8b97021-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "absolute",
                  "top": "16px",
                  "right": "56px",
                  "lineHeight": "26px",
                  "whiteSpace": "nowrap",
                  "color": "#666666",
                  "fontSize": "22px",
                  "fontWeight": 400
                },
                "text": "正品",
                "lines": 1,
                "className": "txt_6"
              },
              "rect": {
                "x": 286,
                "y": 1100,
                "width": 44,
                "height": 26
              },
              "selfId": "7C409B8F-BA78-425B-B4C7-B9D8A6A81AD80",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["itemDesc"],
                  "baseComponent": ["arrow-left"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "itemDesc",
                    "type": "fieldBind"
                  },
                  "baseComponent": {
                    "isConfident": true,
                    "label": "arrow-left",
                    "score": 0.9018475413322449,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 286,
                      "y": 1100,
                      "width": 44,
                      "height": 26
                    },
                    "selfId": "7C409B8F-BA78-425B-B4C7-B9D8A6A81AD80"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "itemDesc"
                  },
                  "component": {
                    "type": "arrow-left"
                  }
                }
              }
            }],
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["sliderbar_low_confident", "sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.960902750492096,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 48,
                    "y": 1084,
                    "width": 338,
                    "height": 50
                  },
                  "selfId": null
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "sliderbar_low_confident"
                }
              }
            }
          }, {
            "componentName": "View",
            "id": "a8b9be3e-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "marginTop": "30px",
                "marginLeft": "24px",
                "borderRadius": "12px",
                "backgroundColor": "#F5F5F5",
                "width": "320px",
                "height": "320px",
                "overflow": "hidden"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
              }],
              "className": "block_7"
            },
            "rect": {
              "x": 48,
              "y": 1164,
              "width": 320,
              "height": 320
            },
            "selfId": "4BFC383C-2F59-4AAB-A229-A01FDBF5C212",
            "children": [{
              "componentName": "View",
              "id": "a8b9be3b-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "position": "relative",
                  "marginTop": "5px",
                  "marginLeft": "48px",
                  "borderRadius": "12px",
                  "backgroundColor": "rgba(0,0,0,0.03)",
                  "width": "320px",
                  "height": "320px",
                  "overflow": "hidden"
                },
                "dealGradient": [{
                  "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                }],
                "className": "colorDiv_3"
              },
              "rect": {
                "x": 48,
                "y": 1164,
                "width": 320,
                "height": 320
              },
              "selfId": "EDAE4400-7095-4217-8728-DE7F7E571B62"
            }],
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["video", "sliderbar_low_confident", "sliderbar_low_confident", "sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.9984024167060852,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 48,
                    "y": 1164,
                    "width": 320,
                    "height": 320
                  },
                  "selfId": "4BFC383C-2F59-4AAB-A229-A01FDBF5C212"
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "video"
                }
              }
            }
          }]
        }, {
          "componentName": "View",
          "id": "06ac36fb-525f-4726-a6c7-8aacc754a241",
          "props": {
            "style": {
              "display": "flex",
              "position": "absolute",
              "bottom": "0px",
              "left": "0px",
              "alignItems": "flex-start",
              "flexDirection": "column",
              "width": "490px",
              "height": "521px"
            },
            "className": "layerWrap"
          },
          "rect": {
            "x": 0,
            "y": 1159,
            "width": 490,
            "height": 521
          },
          "children": [{
            "componentName": "Picture",
            "id": "a8b9be3c-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "absolute",
                "top": "0px",
                "alignSelf": "center",
                "width": "490px",
                "height": "521px"
              },
              "className": "layer",
              "source": {
                "uri": "https://img.alicdn.com/imgextra/i2/O1CN01TrreHI1F4MAJod5Ay_!!6000000000433-2-tps-980-1042.png"
              },
              "autoScaling": false,
              "autoWebp": false
            },
            "rect": {
              "x": 0,
              "y": 1159,
              "width": 490,
              "height": 521
            },
            "selfId": "D519D655-940C-4E4D-8965-19814F2685D3",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["brandLogo"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "isConfident": true,
                  "label": "brandLogo",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "brandLogo"
                }
              }
            }
          }, {
            "componentName": "View",
            "id": "a8b9be3b-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "relative",
                "marginTop": "5px",
                "marginLeft": "48px",
                "borderRadius": "12px",
                "backgroundColor": "rgba(0,0,0,0.03)",
                "width": "320px",
                "height": "320px",
                "overflow": "hidden"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
              }],
              "className": "color_4"
            },
            "rect": {
              "x": 48,
              "y": 1164,
              "width": 320,
              "height": 320
            },
            "selfId": "EDAE4400-7095-4217-8728-DE7F7E571B62"
          }, {
            "componentName": "Text",
            "id": "a8b9be3a-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "position": "relative",
                "marginTop": "24px",
                "marginLeft": "58px",
                "maxWidth": "374px",
                "height": "32px",
                "overflow": "hidden",
                "textOverflow": "ellipsis",
                "lineHeight": "32px",
                "whiteSpace": "nowrap",
                "color": "#333333",
                "fontSize": "24px",
                "fontWeight": 300
              },
              "text": "日系复古潮牌国潮流休闲…",
              "lines": 1,
              "className": "desc_2"
            },
            "rect": {
              "x": 58,
              "y": 1508,
              "width": 288,
              "height": 32
            },
            "selfId": "FE50F1D7-5ABE-4261-9192-0A994BD6E9320",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["itemTitle"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "isConfident": true,
                  "label": "itemTitle",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "itemTitle"
                }
              }
            }
          }, {
            "componentName": "View",
            "id": "b3bc9f49-20c8-4205-b02e-927e5c0ee240",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "space-between",
                "marginTop": "8px",
                "marginLeft": "58px",
                "width": "412px",
                "height": "32px"
              },
              "className": "moneyWrap_1"
            },
            "rect": {
              "x": 58,
              "y": 1548,
              "width": 412,
              "height": 32
            },
            "children": [{
              "componentName": "Text",
              "id": "a8b9be39-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "lineHeight": "28px",
                  "letterSpacing": "0.17px",
                  "whiteSpace": "pre",
                  "color": "#3e3e3e",
                  "fontSize": "28px",
                  "fontWeight": 400
                },
                "text": "¥ 260",
                "lines": 1,
                "className": "moneyLabel_1"
              },
              "rect": {
                "x": 58,
                "y": 1548,
                "width": 78,
                "height": 32
              },
              "selfId": "31643EAF-D7F3-46D8-A3EF-B83250AC6F5D0",
              "smart": {
                "layerProtocol": {
                  "layout": {
                    "type": "layout",
                    "position": "left"
                  }
                }
              }
            }, {
              "componentName": "Text",
              "id": "a8b9be37-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "lineHeight": "28px",
                  "letterSpacing": "0.17px",
                  "whiteSpace": "pre",
                  "color": "#3e3e3e",
                  "fontSize": "28px",
                  "fontWeight": 400
                },
                "text": "¥ 300",
                "lines": 1,
                "className": "money_1"
              },
              "rect": {
                "x": 392,
                "y": 1548,
                "width": 78,
                "height": 32
              },
              "selfId": "5E179CD0-D3A2-4BA0-9999-4ADC6A5BCE620",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["itemDesc"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "itemDesc",
                    "type": "fieldBind"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "itemDesc"
                  },
                  "layout": {
                    "type": "layout",
                    "position": "right"
                  }
                }
              }
            }],
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["arrow-left"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "arrow-left",
                  "score": 0.9269118905067444,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 58,
                    "y": 1548,
                    "width": 412,
                    "height": 32
                  },
                  "selfId": null
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "arrow-left"
                }
              }
            }
          }],
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["video"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "video",
                "score": 0.9987519979476929,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 0,
                  "y": 1159,
                  "width": 490,
                  "height": 521
                },
                "selfId": null
              }
            },
            "layerProtocol": {
              "component": {
                "type": "video"
              }
            }
          }
        }, {
          "componentName": "Text",
          "id": "a8b9be38-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "position": "absolute",
              "top": "550px",
              "right": "64px",
              "lineHeight": "32px",
              "whiteSpace": "nowrap",
              "color": "#333333",
              "fontSize": "24px",
              "fontWeight": 300
            },
            "text": "山本风宽松裙裤男可拆卸…",
            "lines": 1,
            "className": "desc_3"
          },
          "rect": {
            "x": 392,
            "y": 1508,
            "width": 288,
            "height": 32
          },
          "selfId": "606A6D0A-E3FD-46C0-9310-EF266D9307A80",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["itemTitle"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "itemTitle",
                "type": "fieldBind"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "itemTitle"
              }
            }
          }
        }, {
          "componentName": "View",
          "id": "a8b9be36-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "display": "flex",
              "position": "absolute",
              "top": "206px",
              "right": "42px",
              "alignItems": "center",
              "flexDirection": "row",
              "borderRadius": "12px",
              "backgroundColor": "rgba(0,0,0,0.03)",
              "width": "320px",
              "height": "320px",
              "overflow": "hidden"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "colorDiv_4"
          },
          "rect": {
            "x": 382,
            "y": 1164,
            "width": 320,
            "height": 320
          },
          "selfId": "4B987C87-386A-42B8-99C4-BB041B444AE8",
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["video", "sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9999996423721313,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 382,
                  "y": 1164,
                  "width": 320,
                  "height": 320
                },
                "selfId": "4B987C87-386A-42B8-99C4-BB041B444AE8"
              }
            },
            "layerProtocol": {
              "component": {
                "type": "video"
              }
            }
          }
        }, {
          "componentName": "Picture",
          "id": "a8b9be35-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "position": "absolute",
              "right": "0px",
              "bottom": "10px",
              "width": "380px",
              "height": "506px"
            },
            "className": "shopLong",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i4/O1CN01HxIa071p7rMb2YpPb_!!6000000005314-2-tps-760-1012.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 364,
            "y": 1164,
            "width": 380,
            "height": 506
          },
          "selfId": "0D7E5EF7-E545-4409-8AD3-24C943D0195C",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["brandLogo"],
              "baseComponent": ["video"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "brandLogo",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "video",
                "score": 0.999786913394928,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 364,
                  "y": 1164,
                  "width": 380,
                  "height": 506
                },
                "selfId": "0D7E5EF7-E545-4409-8AD3-24C943D0195C"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "brandLogo"
              },
              "component": {
                "type": "video"
              }
            }
          }
        }]
      }, {
        "componentName": "Picture",
        "id": "a8b9701f-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "position": "absolute",
            "right": "18px",
            "bottom": "44px",
            "width": "702px",
            "height": "300px",
            "overflow": "hidden"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "cover",
          "source": {
            "uri": "https://img.alicdn.com/imgextra/i4/O1CN01GmKt581qtmQ4UTRd1_!!6000000005554-2-tps-1404-600.png"
          },
          "autoScaling": false,
          "autoWebp": false
        },
        "rect": {
          "x": 24,
          "y": 1632,
          "width": 702,
          "height": 300
        },
        "selfId": "91384FF1-2313-4CAF-9EB1-D78EC109A075",
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["video", "sliderbar_low_confident"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9647627472877502,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 24,
                "y": 1632,
                "width": 702,
                "height": 300
              },
              "selfId": "91384FF1-2313-4CAF-9EB1-D78EC109A075"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "video"
            }
          }
        }
      }, {
        "componentName": "Picture",
        "id": "a8b9701e-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "position": "absolute",
            "right": "18px",
            "bottom": "0px",
            "width": "702px",
            "height": "578px"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "banner_1",
          "source": {
            "uri": "https://img.alicdn.com/imgextra/i4/O1CN01QAvMzA1hzt9xdXmCM_!!6000000004349-2-tps-1404-1156.png"
          },
          "autoScaling": false,
          "autoWebp": false
        },
        "rect": {
          "x": 24,
          "y": 1398,
          "width": 702,
          "height": 578
        },
        "selfId": "753E94A4-F05B-4F65-85BF-B2ABB18F6D64"
      }, {
        "componentName": "View",
        "id": "38046715-07d7-4bfe-9681-7567a686bc4d",
        "props": {
          "style": {
            "display": "flex",
            "position": "absolute",
            "bottom": "16px",
            "left": "0px",
            "alignItems": "flex-start",
            "flexDirection": "row",
            "backgroundSize": "contain",
            "backgroundImage": "url(https://img.alicdn.com/imgextra/i1/O1CN016CyQKl1YIX7l3c37V_!!6000000003036-2-tps-1194-780.png)",
            "width": "597px",
            "height": "390px"
          },
          "src": "https://img.alicdn.com/imgextra/i1/O1CN016CyQKl1YIX7l3c37V_!!6000000003036-2-tps-1194-780.png",
          "className": "normal_div_18"
        },
        "rect": {
          "x": 0,
          "y": 1570,
          "width": 597,
          "height": 390
        },
        "selfId": "AD1C4092-467D-43AB-8D40-92425D2CC63F",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemImg"],
            "baseComponent": ["video"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemImg",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "video",
              "score": 0.9999856948852539,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 0,
                "y": 1570,
                "width": 597,
                "height": 390
              },
              "selfId": "AD1C4092-467D-43AB-8D40-92425D2CC63F"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemImg"
            },
            "component": {
              "type": "video"
            }
          }
        },
        "children": [{
          "componentName": "View",
          "id": "76274887-358c-4272-9b69-aa566d851675",
          "props": {
            "style": {
              "display": "flex",
              "alignItems": "flex-start",
              "flexDirection": "column",
              "marginTop": "38px",
              "marginLeft": "24px",
              "backgroundSize": "contain",
              "backgroundImage": "url(https://img.alicdn.com/imgextra/i4/O1CN01mEAKOp1WbeQVaEgqN_!!6000000002807-2-tps-1014-648.png)",
              "width": "507px",
              "height": "324px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)"
            }],
            "src": "https://img.alicdn.com/imgextra/i4/O1CN01mEAKOp1WbeQVaEgqN_!!6000000002807-2-tps-1014-648.png",
            "className": "block_8"
          },
          "rect": {
            "x": 24,
            "y": 1608,
            "width": 507,
            "height": 324
          },
          "selfId": "6AF05E69-C2A5-4ADF-8650-5A1F3A2E03CB",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["brandLogo"],
              "baseComponent": ["video"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "brandLogo",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "video",
                "score": 0.9499842643737793,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 24,
                  "y": 1608,
                  "width": 507,
                  "height": 324
                },
                "selfId": "6AF05E69-C2A5-4ADF-8650-5A1F3A2E03CB"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "brandLogo"
              },
              "component": {
                "type": "video"
              }
            }
          },
          "children": [{
            "componentName": "View",
            "id": "c7431965-8dd4-4c6e-974a-a49b30b58347",
            "props": {
              "style": {
                "boxSizing": "border-box",
                "display": "flex",
                "position": "relative",
                "alignItems": "center",
                "flexDirection": "row",
                "marginTop": "64px",
                "borderTopRightRadius": "24px",
                "borderBottomRightRadius": "24px",
                "backgroundColor": "rgba(219,188,159,0.90)",
                "paddingRight": "20px",
                "paddingLeft": "20px",
                "height": "48px"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(99deg, rgba(255,247,231,1.00) -49%, rgba(234,210,167,1.00) -15%, rgba(220,193,143,1.00) 41%, rgba(186,150,99,1.00) 97%)"
              }],
              "className": "block_9"
            },
            "rect": {
              "x": 24,
              "y": 1672,
              "width": 180,
              "height": 48
            },
            "selfId": "9D2BE6DE-13A5-4059-A2B8-E8382F0BDD44",
            "children": [{
              "componentName": "Text",
              "id": "a8b97019-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "lineHeight": "28px",
                  "whiteSpace": "nowrap",
                  "color": "#2f1d06",
                  "fontSize": "28px",
                  "fontWeight": 500
                },
                "text": "极简轻生活",
                "lines": 1,
                "className": "text_4"
              },
              "rect": {
                "x": 44,
                "y": 1680,
                "width": 140,
                "height": 32
              },
              "selfId": "A8151F1B-2D32-42D4-9A8A-5684A0FFD8AF0",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["shopName"],
                  "baseComponent": ["sliderbar_low_confident"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "shopName",
                    "type": "fieldBind"
                  },
                  "baseComponent": {
                    "isConfident": true,
                    "label": "sliderbar_low_confident",
                    "score": 0.9752804040908813,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 44,
                      "y": 1680,
                      "width": 140,
                      "height": 32
                    },
                    "selfId": "A8151F1B-2D32-42D4-9A8A-5684A0FFD8AF0"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "shopName"
                  },
                  "component": {
                    "type": "sliderbar_low_confident"
                  }
                }
              }
            }],
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "top"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "a8b97018-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "WebkitBoxOrient": "vertical",
                "display": "-webkit-inline-box",
                "WebkitLineClamp": 2,
                "position": "relative",
                "marginTop": "20px",
                "marginLeft": "28px",
                "width": "240px",
                "height": "84px",
                "overflow": "hidden",
                "textOverflow": "ellipsis",
                "lineHeight": "42px",
                "color": "#ffffff",
                "fontSize": "30px",
                "fontWeight": 500
              },
              "text": "早安，想和你喝一杯咖啡聊聊人生",
              "lines": 2,
              "className": "title"
            },
            "rect": {
              "x": 52,
              "y": 1740,
              "width": 240,
              "height": 84
            },
            "selfId": "18720149-9F70-456B-B969-E7663615BAAC0",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["shopName"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "isConfident": true,
                  "label": "shopName",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "shopName"
                },
                "layout": {
                  "type": "layout",
                  "position": "middle"
                }
              }
            }
          }, {
            "componentName": "View",
            "id": "c33fde57-bd06-4424-8f42-f6afdced42b4",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "center",
                "flexDirection": "row",
                "marginTop": "24px",
                "marginLeft": "28px",
                "height": "28px"
              },
              "className": "group_1"
            },
            "rect": {
              "x": 52,
              "y": 1848,
              "width": 196,
              "height": 28
            },
            "children": [{
              "componentName": "View",
              "id": "e299439f-e377-472f-b6c8-b657ecf6bd68",
              "props": {
                "style": {
                  "display": "flex",
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "marginRight": "8px",
                  "backgroundSize": "contain",
                  "backgroundImage": "url(https://img.alicdn.com/imgextra/i1/O1CN01XpP0Ki1pDoVonWtyy_!!6000000005327-2-tps-52-48.png)",
                  "overflow": "hidden"
                },
                "dealGradient": [],
                "src": "https://img.alicdn.com/imgextra/i1/O1CN01XpP0Ki1pDoVonWtyy_!!6000000005327-2-tps-52-48.png",
                "className": "container_1"
              },
              "rect": {
                "x": 52,
                "y": 1850,
                "width": 26,
                "height": 24
              },
              "selfId": "8FD4DA31-CBD4-4C4A-928E-9BF6D07ECD16",
              "children": [{
                "componentName": "Picture",
                "id": "a8b97010-8e38-11eb-a465-65aeb5535337",
                "props": {
                  "style": {
                    "width": "26px",
                    "height": "24px"
                  },
                  "dealGradient": [{
                    "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
                  }],
                  "className": "icon_12",
                  "source": {
                    "uri": "https://img.alicdn.com/imgextra/i3/O1CN0139v9oL1vsvlPMBKqf_!!6000000006229-2-tps-52-48.png"
                  },
                  "autoScaling": false,
                  "autoWebp": false
                },
                "rect": {
                  "x": 52,
                  "y": 1850,
                  "width": 26,
                  "height": 24
                },
                "selfId": "D6A3430C-78F3-4EBA-A0C8-039AAE961327"
              }],
              "smart": {
                "layerProtocol": {
                  "layout": {
                    "type": "layout",
                    "position": "left"
                  },
                  "component": {
                    "type": "arrow-left"
                  }
                },
                "nodeIdentification": {
                  "baseComponent": ["arrow-left", "arrow-left"]
                },
                "nodeCustom": {
                  "baseComponent": {
                    "isConfident": true,
                    "label": "arrow-left",
                    "score": 0.9997175335884094,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 52,
                      "y": 1850,
                      "width": 26,
                      "height": 24
                    },
                    "selfId": "8FD4DA31-CBD4-4C4A-928E-9BF6D07ECD16"
                  }
                }
              }
            }, {
              "componentName": "Text",
              "id": "a8b97012-8e38-11eb-a465-65aeb5535337",
              "props": {
                "style": {
                  "lineHeight": "24px",
                  "whiteSpace": "nowrap",
                  "color": "rgba(255,255,255,0.85)",
                  "fontSize": "24px",
                  "fontWeight": 300
                },
                "text": "zakka日系小铺",
                "lines": 1,
                "className": "word_6"
              },
              "rect": {
                "x": 86,
                "y": 1848,
                "width": 162,
                "height": 28
              },
              "selfId": "B4F64537-9F68-4A1D-9D99-C2CCA7867DC70",
              "smart": {
                "nodeIdentification": {
                  "fieldBind": ["shopName"],
                  "baseComponent": ["sliderbar_low_confident"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "isConfident": true,
                    "label": "shopName",
                    "type": "fieldBind"
                  },
                  "baseComponent": {
                    "isConfident": true,
                    "label": "sliderbar_low_confident",
                    "score": 0.999293327331543,
                    "type": "baseComponent",
                    "meta": {
                      "threshold": 0.9
                    },
                    "rect": {
                      "x": 86,
                      "y": 1848,
                      "width": 162,
                      "height": 28
                    },
                    "selfId": "B4F64537-9F68-4A1D-9D99-C2CCA7867DC70"
                  }
                },
                "layerProtocol": {
                  "field": {
                    "type": "shopName"
                  },
                  "layout": {
                    "type": "layout",
                    "position": "right"
                  },
                  "component": {
                    "type": "sliderbar_low_confident"
                  }
                }
              }
            }],
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "bottom"
                },
                "component": {
                  "type": "countdown"
                }
              },
              "nodeIdentification": {
                "baseComponent": ["countdown", "sliderbar_low_confident"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 0.9986473917961121,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 52,
                    "y": 1848,
                    "width": 196,
                    "height": 28
                  },
                  "selfId": null
                }
              }
            }
          }]
        }]
      }, {
        "componentName": "View",
        "id": "5fddb586-2916-47fc-8fd7-87b25b113f38",
        "props": {
          "style": {
            "display": "flex",
            "position": "absolute",
            "right": "18px",
            "bottom": "0px",
            "alignItems": "flex-end",
            "flexDirection": "column",
            "backgroundSize": "contain",
            "backgroundImage": "url(https://img.alicdn.com/imgextra/i1/O1CN01lCe7aA1NDX1fdtInA_!!6000000001536-2-tps-712-838.png)",
            "width": "356px",
            "height": "419px"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "src": "https://img.alicdn.com/imgextra/i1/O1CN01lCe7aA1NDX1fdtInA_!!6000000001536-2-tps-712-838.png",
          "className": "normal_div_19"
        },
        "rect": {
          "x": 370,
          "y": 1557,
          "width": 356,
          "height": 419
        },
        "selfId": "313FA537-5DDE-4297-9B3C-539D41B42377",
        "children": [{
          "componentName": "View",
          "id": "e399647b-680b-4516-8a2f-a9b332c68268",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "justifyContent": "center",
              "marginTop": "132px",
              "backgroundSize": "contain",
              "backgroundImage": "url(https://img.alicdn.com/imgextra/i3/O1CN01KJctGc1ncsxhnZRVN_!!6000000005111-2-tps-420-420.png)",
              "width": "210px",
              "height": "210px",
              "overflow": "hidden"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "src": "https://img.alicdn.com/imgextra/i3/O1CN01KJctGc1ncsxhnZRVN_!!6000000005111-2-tps-420-420.png",
            "className": "storeWrap"
          },
          "rect": {
            "x": 507,
            "y": 1689,
            "width": 210,
            "height": 210
          },
          "selfId": "11C354CE-95C9-45E0-9341-FDE573EEBDCE",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["icon"],
              "baseComponent": ["video", "sliderbar_low_confident"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "icon",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9999617338180542,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 507,
                  "y": 1689,
                  "width": 210,
                  "height": 210
                },
                "selfId": "11C354CE-95C9-45E0-9341-FDE573EEBDCE"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "icon"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              },
              "component": {
                "type": "video"
              }
            }
          },
          "children": [{
            "componentName": "Picture",
            "id": "a8b97016-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "marginTop": "-5px",
                "width": "189px",
                "height": "187px"
              },
              "className": "store",
              "source": {
                "uri": "https://img.alicdn.com/imgextra/i2/O1CN01BP8i5b20Q8wsflfrF_!!6000000006843-2-tps-378-374.png"
              },
              "autoScaling": false,
              "autoWebp": false
            },
            "rect": {
              "x": 517,
              "y": 1698,
              "width": 189,
              "height": 187
            },
            "selfId": "D7220C82-467C-4710-B61E-92C2256FB972",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["itemImg"],
                "baseComponent": ["video", "sliderbar_low_confident"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "isConfident": true,
                  "label": "itemImg",
                  "type": "fieldBind"
                },
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar_low_confident",
                  "score": 1,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 517,
                    "y": 1698,
                    "width": 189,
                    "height": 187
                  },
                  "selfId": "D7220C82-467C-4710-B61E-92C2256FB972"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "itemImg"
                },
                "component": {
                  "type": "video"
                }
              }
            }
          }]
        }, {
          "componentName": "View",
          "id": "3cca6122-0f35-4a51-a1b2-f5b3205b3556",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "3px",
              "borderRadius": "3px",
              "backgroundColor": "rgba(255,255,255,0.35)",
              "width": "80px"
            },
            "dealGradient": [{
              "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
            }],
            "className": "block_10"
          },
          "rect": {
            "x": 622,
            "y": 1902,
            "width": 80,
            "height": 6
          },
          "selfId": "271E50DC-F27A-4CFD-BD34-A72730DC4F78",
          "children": [{
            "componentName": "View",
            "id": "a8b9490d-8e38-11eb-a465-65aeb5535337",
            "props": {
              "style": {
                "borderRadius": "3px",
                "backgroundColor": "#FFFFFF",
                "width": "16px",
                "height": "6px"
              },
              "dealGradient": [{
                "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
              }],
              "className": "color_5"
            },
            "rect": {
              "x": 622,
              "y": 1902,
              "width": 16,
              "height": 6
            },
            "selfId": "241328A4-A2BC-4859-873D-E52DE436A937",
            "smart": {
              "nodeIdentification": {
                "baseComponent": ["sliderbar"]
              },
              "nodeCustom": {
                "baseComponent": {
                  "isConfident": true,
                  "label": "sliderbar",
                  "score": 0.9905470013618469,
                  "type": "baseComponent",
                  "meta": {
                    "threshold": 0.9
                  },
                  "rect": {
                    "x": 622,
                    "y": 1902,
                    "width": 16,
                    "height": 6
                  },
                  "selfId": "241328A4-A2BC-4859-873D-E52DE436A937"
                }
              },
              "layerProtocol": {
                "component": {
                  "type": "sliderbar"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "bottom"
              },
              "component": {
                "type": "progressbar"
              }
            },
            "nodeIdentification": {
              "baseComponent": ["progressbar", "sliderbar_low_confident"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9942947030067444,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 622,
                  "y": 1902,
                  "width": 80,
                  "height": 6
                },
                "selfId": "271E50DC-F27A-4CFD-BD34-A72730DC4F78"
              }
            }
          }
        }],
        "smart": {
          "nodeIdentification": {
            "baseComponent": ["video"]
          },
          "nodeCustom": {
            "baseComponent": {
              "isConfident": true,
              "label": "video",
              "score": 0.9499998807907104,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 370,
                "y": 1557,
                "width": 356,
                "height": 419
              },
              "selfId": "313FA537-5DDE-4297-9B3C-539D41B42377"
            }
          },
          "layerProtocol": {
            "component": {
              "type": "video"
            }
          }
        }
      }]
    }, {
      "componentName": "View",
      "id": "83ea32b1-90f3-4535-8556-51cf8d7c09b2",
      "props": {
        "style": {
          "display": "flex",
          "position": "absolute",
          "right": "225px",
          "bottom": "77px",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center",
          "width": "231px",
          "height": "210px"
        },
        "className": "shopWrap"
      },
      "rect": {
        "x": 288,
        "y": 1689,
        "width": 231,
        "height": 210
      },
      "children": [{
        "componentName": "Picture",
        "id": "a8b97015-8e38-11eb-a465-65aeb5535337",
        "props": {
          "style": {
            "position": "absolute",
            "top": "0px",
            "right": "0px",
            "width": "210px",
            "height": "210px",
            "overflow": "hidden"
          },
          "dealGradient": [{
            "backgroundImage": "linear-gradient(to bottom, rgba(255,255,255,1.00) 0%, rgba(0,0,0,1.00) 100%)"
          }],
          "className": "shop_1",
          "source": {
            "uri": "https://img.alicdn.com/imgextra/i4/O1CN01A74ZPC1ji92nAWw8z_!!6000000004581-2-tps-420-420.png"
          },
          "autoScaling": false,
          "autoWebp": false
        },
        "rect": {
          "x": 309,
          "y": 1689,
          "width": 210,
          "height": 210
        },
        "selfId": "E7C3D725-3E0F-4F85-9A49-001726C3DA42",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemImg"],
            "baseComponent": ["video", "sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemImg",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9948294758796692,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 309,
                "y": 1689,
                "width": 210,
                "height": 210
              },
              "selfId": "E7C3D725-3E0F-4F85-9A49-001726C3DA42"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemImg"
            },
            "component": {
              "type": "video"
            }
          }
        }
      }, {
        "componentName": "View",
        "id": "d11436bc-aa2b-4b56-84b0-11524c5b762b",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "row",
            "marginTop": "5px",
            "backgroundSize": "contain",
            "backgroundImage": "url(https://img.alicdn.com/imgextra/i3/O1CN01nwuXR41cGToUWK8y0_!!6000000003573-2-tps-456-368.png)"
          },
          "src": "https://img.alicdn.com/imgextra/i3/O1CN01nwuXR41cGToUWK8y0_!!6000000003573-2-tps-456-368.png",
          "className": "storeWrap_1"
        },
        "rect": {
          "x": 288,
          "y": 1694,
          "width": 228,
          "height": 184
        },
        "selfId": "73CC788B-2DB6-4BBC-8D3C-A9B1C0474772",
        "smart": {
          "nodeIdentification": {
            "fieldBind": ["itemImg"],
            "baseComponent": ["video", "sliderbar_low_confident"]
          },
          "nodeCustom": {
            "fieldBind": {
              "isConfident": true,
              "label": "itemImg",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "sliderbar_low_confident",
              "score": 0.9999861717224121,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.9
              },
              "rect": {
                "x": 288,
                "y": 1694,
                "width": 228,
                "height": 184
              },
              "selfId": "73CC788B-2DB6-4BBC-8D3C-A9B1C0474772"
            }
          },
          "layerProtocol": {
            "field": {
              "type": "itemImg"
            },
            "component": {
              "type": "video"
            }
          }
        },
        "children": [{
          "componentName": "Picture",
          "id": "a8b97013-8e38-11eb-a465-65aeb5535337",
          "props": {
            "style": {
              "marginTop": "4px",
              "marginLeft": "33px",
              "width": "195px",
              "height": "180px"
            },
            "className": "store_1",
            "source": {
              "uri": "https://img.alicdn.com/imgextra/i1/O1CN01p4kOSM1s1r1801aUi_!!6000000005707-2-tps-390-360.png"
            },
            "autoScaling": false,
            "autoWebp": false
          },
          "rect": {
            "x": 321,
            "y": 1698,
            "width": 195,
            "height": 180
          },
          "selfId": "196D7374-280E-4538-918B-19BE26DE86AF",
          "smart": {
            "nodeIdentification": {
              "fieldBind": ["itemImg"],
              "baseComponent": ["video", "sliderbar_low_confident"]
            },
            "nodeCustom": {
              "fieldBind": {
                "isConfident": true,
                "label": "itemImg",
                "type": "fieldBind"
              },
              "baseComponent": {
                "isConfident": true,
                "label": "sliderbar_low_confident",
                "score": 0.9997475743293762,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.9
                },
                "rect": {
                  "x": 321,
                  "y": 1698,
                  "width": 195,
                  "height": 180
                },
                "selfId": "196D7374-280E-4538-918B-19BE26DE86AF"
              }
            },
            "layerProtocol": {
              "field": {
                "type": "itemImg"
              },
              "component": {
                "type": "video"
              }
            }
          }
        }]
      }],
      "smart": {
        "nodeIdentification": {
          "baseComponent": ["video", "sliderbar_low_confident"]
        },
        "nodeCustom": {
          "baseComponent": {
            "isConfident": true,
            "label": "sliderbar_low_confident",
            "score": 0.9999698400497437,
            "type": "baseComponent",
            "meta": {
              "threshold": 0.9
            },
            "rect": {
              "x": 288,
              "y": 1689,
              "width": 231,
              "height": 210
            },
            "selfId": null
          }
        },
        "layerProtocol": {
          "component": {
            "type": "video"
          }
        }
      }
    }],
    "smart": {
      "layerProtocol": {
        "module": {
          "type": "smartModule"
        }
      }
    }
  }],
  "imgcook": {
    "restore_id": "a8d84dcd-d2e1-4d33-80af-e5b48c19e57c",
    "dataConfig": {
      "schemaLaunchConfigId": 192477,
      "schemaConfigId": 192477,
      "schemaMockData": {
        "items": [{
          "hasRedEnvelope": "false",
          "liveUrl": "http://owsmgrbc.org/beoc",
          "liveStatus": "@u^*",
          "shopShareCount": "@interger()",
          "shopActUrl": "http://vrwn.com/kgjb",
          "shopSellerId": "y2nMT",
          "shopId": "y3@W",
          "shopName": "V8mR[lb",
          "shopRedEnvelopeStatus": "HhcFH",
          "shopRedEnvelopeUrl": "http://ktfxohfp.gov/xnrbw",
          "shopFansCount": "@interger()",
          "firstItemImg": "http://dummyimage.com/180x150",
          "secondItemImg": "http://dummyimage.com/120x60",
          "thirdItemImg": "http://dummyimage.com/125x125",
          "firstItemUrl": "http://fxmupro.com/mypgyw",
          "thirdItemUrl": "http://ifwf.gov/rjlflrsdd",
          "secondItemUrl": "http://oddjo.org/heytdek",
          "masterItemTitle": "QIHPi",
          "masterItemImg": "http://dummyimage.com/125x125",
          "masterItemUrl": "http://patwjo.gov/tffpqef",
          "artisanLogo": "http://dummyimage.com/250x250",
          "artisanName": "N",
          "artisanDesc": "0z@j",
          "artisanRoleType": "5^p@i",
          "masterVideoImg": "http://dummyimage.com/336x280",
          "masterVideoId": "PEhrt7",
          "masterVideoUrl": "http://bsdjkrdyon.gov/fybgk",
          "shopDesc": "uN88&1",
          "liveLogo": "http://dummyimage.com/120x600",
          "liveCount": "@interger()",
          "liveCoverImg": "http://dummyimage.com/300x600",
          "paidCouponId": 4996736622159536,
          "itemId": "eI!L",
          "itemTitle": "n0um@OW2$u",
          "itemUrl": "http://swqeecoy.gov/xtukpkre",
          "itemDesc": "zSouzWp%",
          "itemDesc1": "&wY4i44",
          "itemDesc2": "pGQ)%!",
          "itemImg": "http://dummyimage.com/800x800.jpg",
          "couponUrl": "http://lwu.gov/syodx",
          "couponValue": 4512408007880320,
          "brandLogo": "http://dummyimage.com/140x70.png",
          "itemCarImg": "http://dummyimage.com/1440x540.png",
          "couponThreshold": 7936719.11,
          "topicTitle": "秒NewTh",
          "bookedNum": 6050.7,
          "topicDesc": "菱形提花麻花纹针织毛线半指长手套袖套J08819 MIKU",
          "itemActPrice": 5845174.7,
          "biz_name": "首度家居创意LED吸顶灯客厅卧室灯具灯",
          "biz_url": "博纳屋豹纹桌面收纳盒 S02305Truffles德菲丝／德菲斯松露巧克力浓情古典25",
          "itemCount": 9004.7,
          "topicUrl": "夏季情侣凉拖鞋女居家拖鞋韩国室内塑料洗澡防滑浴室拖鞋J13486 护膝护理贴膝盖",
          "itemTopicUrl": "美国康宁锅/1",
          "name": "欧润哲不锈钢砧板架刀架组合多功能置物架切菜板架放刀架锅盖",
          "title": "H72591NewT",
          "clickUrl": "H71768补水抗痘NewTheBest纽比",
          "subtitle": "博纳屋圆舞曲裤子收纳盒 NewTheB",
          "picUrl": "WbjF",
          "logoUrl": "DJ实木照片墙带钟表12框时尚创意组合生活照相片墙相框墙包",
          "item95DiscountFlag": "]YW^4]",
          "itemDiscountFeeTitle": "lpo",
          "itemPreSaleDiscountFee": "[koM",
          "prepSaleHandsel": "N!viS%",
          "preSalePrice": 4614806.8,
          "iconImg": "http://dummyimage.com/60x60.jpg",
          "btnText": "*xGsJ4O",
          "itemMonthSoldCount": 5020009078249108,
          "itemTagPrice": 6546433.5,
          "isWuyougou": "xlAA",
          "itemPsoriasisPrice": 402899.28,
          "itemPsoriasisText": "O]SbsZG",
          "shopImg": "http://dummyimage.com/800x800.png",
          "paidCouponPrice": 9329959,
          "paidCouponLimitedAmount": 5882665662892128,
          "paidCouponThreshold": 5869970.6,
          "paidCouponValue": 8767807411030606,
          "lightShopUrl": "http://muib.org/ffnmm",
          "lightShopName": "5Y!13",
          "kolRoleType": "h2v!h*",
          "lightShopTag": "yN)PRd3",
          "lightShopDesc": "mxAp7L1H[jh!3",
          "lightShopLogo": "http://dummyimage.com/80x80",
          "liveUserName": "*ysc",
          "videoId": "SQ#l$KB",
          "videoCoverImg": "http://dummyimage.com/336x280",
          "videoUrl": "http://yxefqimkrk.org/mvjau",
          "qId": "uKdzt",
          "miniAppId": "5Ccp",
          "shopHeatCount": "@interger()",
          "shopDeclaration": "X[)f(48sWY3",
          "shopLogo": "http://dummyimage.com/120x600",
          "ipBrandLogo": "http://dummyimage.com/400x400",
          "crossBrandName": "$M9@LklMnI",
          "itemLongImg": "http://dummyimage.com/900x1200",
          "itemImg342x470": "http://dummyimage.com/342x470.jpg",
          "fullFrameBrandDesc5": "Fni2iuqEa",
          "fullFrameBrandDesc4": "r^1jHxDAv",
          "fullFrameBrandDesc3": "34X4IN&o3rp%eI",
          "fullFrameBrandDesc2": "ksADs2b(",
          "fullFrameBrandDesc": "Ql[00oflN",
          "fullFrameBrandImg": "http://dummyimage.com/342x530.jpg",
          "sellerId": "tAH",
          "brandId": "QO1t1",
          "brandName": "%r!A9",
          "itemActPriceTitle": "lIncOi",
          "itemPrice": 4102567.6,
          "itemPriceTitle": "*F#4s",
          "itemLongTitle": "sJBnv92YC",
          "itemImg220x340": "http://dummyimage.com/220x340.jpeg",
          "shopFpUrl": "http://paklpfvv.org/hwiimoimq",
          "SIGN_MINI_SHOW_URL": "nf(Ehqg",
          "tjLiveUrl": "5lQW",
          "fansCount": "lBUv*",
          "tjSpecialPic": "58Fl",
          "tjBrandLogo": "ql!l",
          "tjBenifitPoint": "Ysz",
          "brandPromotion": "O!Om#O#",
          "tjBrandName": "!@u",
          "directCoupon": "WTVY#",
          "brandSloganNameNew": ")xrZ",
          "brandLogoMohePic": "ME4]ZP",
          "remindNum": "(&Y[M",
          "brandFavorableReason": "D@fnOu",
          "brandSellerCoupon": "FiMA)5",
          "newBrandEnterImgUrl": "2ru4xE",
          "activityId": "3HJrGJ",
          "logoText": "02Z",
          "promotion": "zGOt33",
          "jhsBrandSeascapePic": "wgGGT",
          "personalBenefit": "NCK",
          "blockPreSale": "#KCNEz",
          "onlineItemCount": "Bga",
          "platformId": "$))#HP",
          "blockType": "0cfji",
          "soldCount": ")27J",
          "brandSalesInfo": "j9VLVhk",
          "shopType": "nkXy1m",
          "brandSalesInfoColor": "YG8iu4",
          "blockDacuIcon": "%H6HGI",
          "brandStatus": "RNttjT%",
          "timeRemind": "gjgaH",
          "wlJumpUrl": "Hq^%",
          "yyqqBrandLogo": "Gq%Z",
          "trackParams": "l^GB",
          "preRemindTime": "ToJlG",
          "leftTime": "PW[otZW",
          "soldRatio": "C8puh8",
          "tqgSellPoint": "HEqDrCV",
          "tqgZdqEndTime": "EOKw]16",
          "tqgDetailUrl": "vBr@",
          "qgjText": "RdBpWAM",
          "tqgZdqText": "6Eb#",
          "couponFullCut": "QZUJ%",
          "shopCoupon": "U!x2x!",
          "couponDirect": "ju$eA6",
          "tjItemSmallTitleJTT": "Cn13",
          "tjDcspmd": "w2*9(",
          "tjPrefitText": "xJP*Bh",
          "商品标题": "qKyc8g",
          "tjAppentrancePic": "9ynts",
          "biqiangActImgUrl": "F[TB&us",
          "itemLabel": "AJ8S",
          "totalStock": "QRm74&",
          "dcSpmd": "bQFR",
          "oetime": "[DJ#n",
          "ostime": "2CsI",
          "dailyMarketingIcon": "fYI",
          "itemPreSaleUrl": "^KVvT",
          "couponTemplateIconUrl": "KSzEC",
          "expandMoney": "fIESR",
          "titleIconsDacu": "^(R",
          "flag": "7iLT",
          "timeLimitedList": "$MMM",
          "auction_tag": "pvc[",
          "mjContent": "[pV%@V",
          "hyalineItemPic": "rNPp@#",
          "newMaterials": "jFo4PA",
          "remindType": "o%m80",
          "inventoryQuantity": 1321714184145544,
          "fwType": "XW7XrGg",
          "picUrlM": "XwkV)Q",
          "frontFirstCatIds": "Udq",
          "marketingCopyWriting": "((wlrU#",
          "preSale": "JnZGd#",
          "interestFreeCouponStageCount": "iKgz9b",
          "picUrlNew": "O#2u",
          "interestFreeByStageStageCount": "v1m8",
          "priceParts1": "G1z%",
          "priceParts0": "5IpJ",
          "period": "yuGip",
          "jddNum": "[$X@3r",
          "jddPrice": "#W3Ad",
          "marketingDisplayInfoColor": "Xx$2c",
          "marketingDisplayInfo": "cceXTNF",
          "superPlusIcon": "*PIk$",
          "serviceIcon": "gZ6!",
          "actIcon": "NeBMz",
          "picUrlFromIc": "@7J",
          "salesSite": "9KR4r",
          "interestFreeCoupon": "3yQWY",
          "interestFreePeriodIcon": "JBIl",
          "stageCount": "Ijdy",
          "shortName": "prVO",
          "itemStatus": "[@yQV",
          "juId": "%ZqEtl",
          "kolTags": "J)167",
          "kolDeclaration": "uyRCn2AUfpfx",
          "kolName": "YhY6Bx",
          "kolLogo": "http://dummyimage.com/400x400",
          "shopLongImg": "http://dummyimage.com/900x1200",
          "isLargePayShop": "true",
          "itemCountryName": "sQL4IE",
          "itemCountryLogo": "http://dummyimage.com/120x240\t",
          "isGlobalSeller": "false",
          "itemCollectCount": 2724196583274804,
          "itemDeclaration": "m2sUlt(Ho",
          "itemStockDesc": "kLR2e",
          "itemLogisticsText": "YnES",
          "presentImg": "http://dummyimage.com/100x100.jpg",
          "shopDesc1": "*Qb0P",
          "shopDesc2": "w^F8mHU",
          "itemInventoryQuantity": 1585381919321342,
          "itemInfo": ")ipWKt]Wr@6Z6Xs9gUyUYYjZW1"
        }, {
          "hasRedEnvelope": "false",
          "liveUrl": "http://vdvrpt.edu/pfcvvl",
          "liveStatus": "R2jEXr",
          "shopShareCount": "@interger()",
          "shopActUrl": "http://ffmxlbvzip.com/ggeycyyikn",
          "shopSellerId": "9Bq[E",
          "shopId": "ykH#5e",
          "shopName": "U@QRT4",
          "shopRedEnvelopeStatus": "mJK^pg",
          "shopRedEnvelopeUrl": "http://hbckkym.net/wwxargd",
          "shopFansCount": "@interger()",
          "firstItemImg": "http://dummyimage.com/125x125",
          "secondItemImg": "http://dummyimage.com/180x150",
          "thirdItemImg": "http://dummyimage.com/240x400",
          "firstItemUrl": "http://vognxheq.org/ezdtb",
          "thirdItemUrl": "http://pykuvxr.org/sbxsywr",
          "secondItemUrl": "http://nmjsy.co.uk/vopexnqifb",
          "masterItemTitle": "KoWVVZ",
          "masterItemImg": "http://dummyimage.com/336x280",
          "masterItemUrl": "http://kznkhihpiy.edu/obbhubrtpt",
          "artisanLogo": "http://dummyimage.com/336x280",
          "artisanName": "hOm",
          "artisanDesc": "JbS67Z",
          "artisanRoleType": "FgK*",
          "masterVideoImg": "http://dummyimage.com/720x300",
          "masterVideoId": "IhFoY",
          "masterVideoUrl": "http://vxjp.edu/rozosrncz",
          "shopDesc": "*zwxL^Bv",
          "liveLogo": "http://dummyimage.com/250x250",
          "liveCount": "@interger()",
          "liveCoverImg": "http://dummyimage.com/88x31",
          "paidCouponId": -8025493194243920,
          "itemId": "AW[)#w",
          "itemTitle": "B9hs&Aju",
          "itemUrl": "http://fflkxit.gov/afhbcd",
          "itemDesc": "@vJUXon",
          "itemDesc1": "ZPB2n",
          "itemDesc2": "XZbX8",
          "itemImg": "http://dummyimage.com/800x800.png",
          "couponUrl": "http://eudc.net/gwxl",
          "couponValue": 183315113287392,
          "brandLogo": "http://dummyimage.com/140x70.png",
          "itemCarImg": "http://dummyimage.com/1440x540.png",
          "couponThreshold": 5648893.1,
          "topicTitle": "DJ美国康宁/",
          "bookedNum": 2032.355,
          "topicDesc": "NewTheBest纽比士绿茶消炎排毒花瓣面膜150mlH71854 2.5L/3.5L锅盖(VS-2.5&amp;VS-3.5) 201",
          "itemActPrice": 7937224,
          "biz_name": "欧润哲创意时尚家用厨房脚踏式垃圾桶办公室/卫生间翻盖卫生桶 璞帝妃PETITFEE黑珍珠眼膜/眼贴去纹黑",
          "biz_url": "天堂伞折叠钢骨遮阳公主蘑菇晴雨伞太阳伞33020E平安快乐J13541 NewTheBest纽比士橄榄滋润护发锁水弹力素350mlH71750 天堂伞三折",
          "itemCount": 6293.7,
          "topicUrl": "欧润哲家用厨房脚踏式垃圾桶创意时尚卫生间酒店不锈钢垃圾",
          "itemTopicUrl": "美国康宁餐具/9件组套组/2",
          "name": "正品智美蜗牛热膜蜗牛粘液s",
          "title": "包根棉鞋居家保暖鞋蝴蝶结情",
          "clickUrl": "DJSnapware康宁扣圣",
          "subtitle": "纽比士炫金芙蓉女士保湿去黄补水美白蚕丝面膜贴纸面贴膜H08884 秒雅诗兰黛",
          "picUrl": "nOZ!aK",
          "logoUrl": "H71734美白补水保湿NewThe",
          "item95DiscountFlag": "R0t%p",
          "itemDiscountFeeTitle": "NPsLD",
          "itemPreSaleDiscountFee": "SNdO6^",
          "prepSaleHandsel": ")mny4*",
          "preSalePrice": 605178,
          "iconImg": "http://dummyimage.com/60x60.jpg",
          "btnText": "O@%Yd",
          "itemMonthSoldCount": 7602738928924494,
          "itemTagPrice": 9511196.6,
          "isWuyougou": "#2OAK",
          "itemPsoriasisPrice": 3493.8,
          "itemPsoriasisText": "r8Q#h*1",
          "shopImg": "http://dummyimage.com/800x800.png",
          "paidCouponPrice": 3293670.1,
          "paidCouponLimitedAmount": 8133177264219670,
          "paidCouponThreshold": 3864560,
          "paidCouponValue": 5588574896709864,
          "lightShopUrl": "http://ucw.gov/jmwgk",
          "lightShopName": "0Oqy16k",
          "kolRoleType": "qA",
          "lightShopTag": "2rGF5",
          "lightShopDesc": "5Ktb*l8lue^)&w",
          "lightShopLogo": "http://dummyimage.com/80x80",
          "liveUserName": "E",
          "videoId": "kw*KY",
          "videoCoverImg": "http://dummyimage.com/300x250",
          "videoUrl": "http://imuai.gov/vxypl",
          "qId": "1)j#Yr",
          "miniAppId": "XDjLcB",
          "shopHeatCount": "@interger()",
          "shopDeclaration": "j)8rMSiGj[g)",
          "shopLogo": "http://dummyimage.com/120x600",
          "ipBrandLogo": "http://dummyimage.com/400x400",
          "crossBrandName": "Wj[FWH",
          "itemLongImg": "http://dummyimage.com/900x1200",
          "itemImg342x470": "http://dummyimage.com/342x470.jpg",
          "fullFrameBrandDesc5": "OL2bXllO0EYc",
          "fullFrameBrandDesc4": "@tL2orH]&3*Uy",
          "fullFrameBrandDesc3": "7l",
          "fullFrameBrandDesc2": "CAR2[SSZrQ8(",
          "fullFrameBrandDesc": "yZs148WRyK@g",
          "fullFrameBrandImg": "http://dummyimage.com/342x530.jpg",
          "sellerId": "By7XF",
          "brandId": "Vm$YyA",
          "brandName": "lK^rZ6x",
          "itemActPriceTitle": "0#BEO",
          "itemPrice": 1037933.1,
          "itemPriceTitle": "oHK",
          "itemLongTitle": "gWG8DyFd",
          "itemImg220x340": "http://dummyimage.com/220x340.jpg",
          "shopFpUrl": "http://rlvqo.co.uk/klwqtoaro",
          "SIGN_MINI_SHOW_URL": "mY0ug",
          "tjLiveUrl": "NitP",
          "fansCount": "Bqs0#",
          "tjSpecialPic": "b@fDN",
          "tjBrandLogo": "8wk7L4P",
          "tjBenifitPoint": "TOUy9z",
          "brandPromotion": "SnT",
          "tjBrandName": "9Cv",
          "directCoupon": "!XkqFf",
          "brandSloganNameNew": "e8Ju",
          "brandLogoMohePic": "WuS",
          "remindNum": "Dkr!iu!",
          "brandFavorableReason": "5O^X*",
          "brandSellerCoupon": "W@QPJ",
          "newBrandEnterImgUrl": "^bb[SL",
          "activityId": "l8CFS",
          "logoText": "v]WP",
          "promotion": "Q45(IE",
          "jhsBrandSeascapePic": "iGg",
          "personalBenefit": "HB0ru",
          "blockPreSale": "E(j@Z",
          "onlineItemCount": "g(T",
          "platformId": "6b0w6qB",
          "blockType": "RV*l",
          "soldCount": "w!(]x6V",
          "brandSalesInfo": "SI&[BC",
          "shopType": "yss%n[m",
          "brandSalesInfoColor": "4K(*",
          "blockDacuIcon": "ZOc",
          "brandStatus": "B*[GmU",
          "timeRemind": "!z61pM",
          "wlJumpUrl": "63hwm",
          "yyqqBrandLogo": "rugH",
          "trackParams": "BY#w",
          "preRemindTime": "%qiuR",
          "leftTime": "BhXGG",
          "soldRatio": "pzzX",
          "tqgSellPoint": "twXID",
          "tqgZdqEndTime": "Ao)dl",
          "tqgDetailUrl": ")W4D!]",
          "qgjText": "wpp5z",
          "tqgZdqText": "6))m&N)",
          "couponFullCut": "S1z@VQ",
          "shopCoupon": "#9#@0",
          "couponDirect": "nTCT",
          "tjItemSmallTitleJTT": "F@D",
          "tjDcspmd": "9@pQ",
          "tjPrefitText": "bWWPmz",
          "商品标题": "fug6",
          "tjAppentrancePic": "%gycKZ",
          "biqiangActImgUrl": "Fb%iU",
          "itemLabel": "WF)",
          "totalStock": "CJJ",
          "dcSpmd": "buyg",
          "oetime": "8&uQbtd",
          "ostime": "yFmjPBd",
          "dailyMarketingIcon": "JLWuf",
          "itemPreSaleUrl": "lCP7E8",
          "couponTemplateIconUrl": "N@)2D",
          "expandMoney": "!(2ial",
          "titleIconsDacu": "AX*#K",
          "flag": "$%o",
          "timeLimitedList": "8RxeJ",
          "auction_tag": "I66%hI",
          "mjContent": "%or)",
          "hyalineItemPic": "i0L",
          "newMaterials": "HvtJg",
          "remindType": "%@v@",
          "inventoryQuantity": 7283616366857414,
          "fwType": "^[JyTk",
          "picUrlM": "KuHH",
          "frontFirstCatIds": "j60x",
          "marketingCopyWriting": "NJJCmB0",
          "preSale": "A&]qrn",
          "interestFreeCouponStageCount": "TiM!",
          "picUrlNew": "Gq8]",
          "interestFreeByStageStageCount": "tNWNc",
          "priceParts1": "PlhK",
          "priceParts0": "&[sCZ9",
          "period": "yK6x",
          "jddNum": "VB0u",
          "jddPrice": "vd0",
          "marketingDisplayInfoColor": "nk]5",
          "marketingDisplayInfo": "ddNs)",
          "superPlusIcon": "gP2dJ",
          "serviceIcon": "]$hj",
          "actIcon": "lzJtwm",
          "picUrlFromIc": "cVHj",
          "salesSite": "S#XG",
          "interestFreeCoupon": "OVq7vk",
          "interestFreePeriodIcon": "1@HjtY",
          "stageCount": "dBOo",
          "shortName": "7U[@",
          "itemStatus": "A6j7(",
          "juId": "GW&gf",
          "kolTags": "TAviH",
          "kolDeclaration": "TSXb$4vq",
          "kolName": "SV3",
          "kolLogo": "http://dummyimage.com/400x400",
          "shopLongImg": "http://dummyimage.com/900x1200",
          "isLargePayShop": "true",
          "itemCountryName": "z)b",
          "itemCountryLogo": "http://dummyimage.com/250x250\t",
          "isGlobalSeller": "true",
          "itemCollectCount": 1355047140438926,
          "itemDeclaration": "wzWCb#*EQ",
          "itemStockDesc": "Fy%D",
          "itemLogisticsText": "k45$F",
          "presentImg": "http://dummyimage.com/100x100.png",
          "shopDesc1": "vnGk4ul",
          "shopDesc2": "%RGeX0W",
          "itemInventoryQuantity": 7820114108631606,
          "itemInfo": "a(EBoF#UtGiV1"
        }]
      }
    },
    "sourceSchema": {
      "type": "object",
      "description": "营销常见字段集合",
      "properties": {
        "items": {
          "type": "array",
          "title": "列表",
          "items": {
            "title": "列表项",
            "type": "object",
            "properties": {
              "hasRedEnvelope": {
                "title": "当前是否有进店红包",
                "description": "当前是否有进店红包",
                "type": "boolean",
                "x-format": "@boolean()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "liveUrl": {
                "title": "直播地址",
                "description": "直播地址",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "liveStatus": {
                "title": "直播状态",
                "description": "直播状态",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "shopShareCount": {
                "title": "分享有礼人数",
                "description": "分享有礼人数",
                "type": "number",
                "x-format": "@interger()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "shopActUrl": {
                "title": "店铺承接页链接",
                "description": "店铺承接页链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "shopSellerId": {
                "title": "商家ID",
                "description": "商家ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "shopId": {
                "title": "店铺ID",
                "description": "店铺ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "shopName": {
                "title": "店铺名称",
                "description": "店铺名称(5-10个字)",
                "type": "string",
                "x-format": "@string(5,10)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "shopRedEnvelopeStatus": {
                "title": "群红包发放状态",
                "description": "群红包发放状态",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "shopRedEnvelopeUrl": {
                "title": "群红包发放链接",
                "description": "群红包发放链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "shopFansCount": {
                "title": "店铺微淘关注数",
                "description": "店铺微淘关注数",
                "type": "number",
                "x-format": "@interger()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "shopRateCount": {
                "title": "店铺信誉等级",
                "description": "",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "firstItemImg": {
                "title": "第一位商品图片",
                "description": "第一位商品图片",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "secondItemImg": {
                "title": "第二位商品图片",
                "description": "第二位商品图片",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "thirdItemImg": {
                "title": "第三位商品图片",
                "description": "第三位商品图片",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "firstItemUrl": {
                "title": "第一位商品链接",
                "description": "第一位商品链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "thirdItemUrl": {
                "title": "第三位商品链接",
                "description": "第三位商品链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "secondItemUrl": {
                "title": "第二位商品链接",
                "description": "第二位商品链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "masterItemTitle": {
                "title": "代表作名称",
                "description": "代表作名称",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "masterItemImg": {
                "title": "代表作商品图片",
                "description": "代表作商品图片",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "masterItemUrl": {
                "title": "代表作商品链接",
                "description": "代表作商品链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "artisanLogo": {
                "title": "匠人头像",
                "description": "匠人头像",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "artisanName": {
                "title": "匠人名称",
                "description": "匠人名称",
                "type": "string",
                "x-format": "@string(1,4)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "artisanDesc": {
                "title": "匠人描述",
                "description": "匠人描述",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "artisanRoleType": {
                "title": "匠人身份标签",
                "description": "匠人身份标签",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "masterVideoImg": {
                "title": "代表作视频封面",
                "description": "代表作视频封面",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "masterVideoId": {
                "title": "代表作视频Id",
                "description": "代表作视频ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "masterVideoUrl": {
                "title": "代表作视频链接",
                "description": "代表作视频链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112449"
              },
              "shopDesc": {
                "title": "店铺利益点",
                "description": "店铺利益点（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "liveLogo": {
                "title": "主播头像",
                "description": "主播头像",
                "type": "string",
                "x-format": "@image()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113957"
              },
              "liveCount": {
                "title": "直播间当前在线人数",
                "description": "直播间当前在线人数",
                "type": "number",
                "x-format": "@interger()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113957"
              },
              "liveCoverImg": {
                "title": "直播间封面",
                "description": "直播间封面",
                "type": "string",
                "x-format": "@image()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113957"
              },
              "paidCouponId": {
                "title": "有价优惠券宝贝ID",
                "description": "有偿优惠券宝贝ID",
                "type": "number",
                "x-format": "@integer()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108853"
              },
              "itemId": {
                "title": "商品ID",
                "description": "商品ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemTitle": {
                "title": "商品标题",
                "description": "商品短标题（6-10个字）",
                "type": "string",
                "x-format": "@string(6,10)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemUrl": {
                "title": "商品链接",
                "description": "商品链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemDesc": {
                "title": "商品利益点",
                "description": "商品利益点（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemDesc1": {
                "title": "商品利益点一",
                "description": "商品利益点一（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemDesc2": {
                "title": "商品利益点二",
                "description": "商品利益点二（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemImg": {
                "title": "商品图片",
                "description": "商品图片（800x800），格式jpg、png，体积：<500kb",
                "type": "string",
                "x-format": "@image('800x800', 'jpg|png', 0, 3000)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "couponUrl": {
                "title": "优惠券领取链接",
                "description": "优惠券链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "couponValue": {
                "title": "优惠券面额",
                "description": "优惠券面额",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "businessType": {
                "title": "汽车商品类型",
                "description": "汽车商品类型",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108953"
              },
              "brandLogo": {
                "title": "品牌LOGO",
                "description": "品牌LOGO（140x70），格式：png，体积：<5kb",
                "type": "string",
                "x-format": "@image('140x70','png',0,5)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemCarImg": {
                "title": "汽车商品白底图",
                "description": "商品白底图（1440x540），格式jpg、png，体积：<500kb",
                "type": "string",
                "x-format": "@image('1440x540', 'jpg|png', 0, 3000)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108953"
              },
              "autoShowProvience": {
                "title": "车展省份",
                "description": "车展省份",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowDate": {
                "title": "车展时间",
                "description": "车展时间",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowImg": {
                "title": "图片地址（666x410）",
                "description": "图片地址（666x410）",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowUrl": {
                "title": "跳转链接",
                "description": "跳转链接",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowTitle": {
                "title": "车展主题",
                "description": "车展主题",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowAddress": {
                "title": "车展地址",
                "description": "车展地址",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowGiftPackage": {
                "title": "车展礼包",
                "description": "车展礼包",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowPoweredBy": {
                "title": "车展承办",
                "description": "车展承办",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "autoShowPhoneNumber": {
                "title": "咨询电话",
                "description": "咨询电话",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108954"
              },
              "couponThreshold": {
                "title": "优惠券门槛",
                "description": "优惠券门槛",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105697"
              },
              "topicTitle": {
                "type": "string",
                "title": "专题标题",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "bookedNum": {
                "type": "number",
                "title": "预订数量",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "topicDesc": {
                "type": "string",
                "title": "专题描述",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "backgroundImage": {
                "title": "专题背景图",
                "description": "专题背景图",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114276"
              },
              "itemActPrice": {
                "title": "商品活动价",
                "description": "商品活动价",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "biz_name": {
                "type": "string",
                "title": "专题标题",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "biz_url": {
                "type": "string",
                "title": "专题链接",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "itemCount": {
                "type": "number",
                "title": "专题商品数量",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "topicUrl": {
                "type": "string",
                "title": "专题链接",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "itemTopicUrl": {
                "type": "string",
                "title": "专题链接",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/114251"
              },
              "name": {
                "type": "string",
                "title": "楼层名称",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109200"
              },
              "title": {
                "title": "标题",
                "description": "",
                "type": "string",
                "x-label": "itemTitle",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109200"
              },
              "clickUrl": {
                "title": "跳转链接",
                "description": "",
                "type": "string",
                "x-label": "itemUrl",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109200"
              },
              "subtitle": {
                "title": "副标题",
                "description": "",
                "type": "string",
                "x-label": "itemDesc",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109200"
              },
              "picUrl": {
                "title": "商品图",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "logoUrl": {
                "title": "品牌LOGO",
                "description": "",
                "type": "string",
                "x-label": "brandLogo",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109200"
              },
              "item95DiscountFlag": {
                "title": "88vip标志",
                "description": "88vip标志",
                "type": "string",
                "x-format": "@string()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/104356"
              },
              "itemDiscountFeeTitle": {
                "title": "定金立减文案",
                "description": "定金立减文案",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112639"
              },
              "itemPreSaleDiscountFee": {
                "title": "预售定金立减",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "prepSaleHandsel": {
                "title": "预售定金",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "preSalePrice": {
                "title": "预售价",
                "description": "预售价",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112639"
              },
              "iconImg": {
                "title": "坑位标",
                "description": "坑位标图片",
                "type": "string",
                "x-format": "@image('60x60','jpg|png',0,5)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "btnText": {
                "title": "行动点",
                "description": "行动点",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemMonthSoldCount": {
                "title": "商品月销量",
                "description": "商品月销量",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemTagPrice": {
                "title": "商品标签价",
                "description": "商品标签价",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "isWuyougou": {
                "title": "是否为无忧购商品",
                "description": "是否为无忧购商品",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemPsoriasisPrice": {
                "title": "牛皮癣到手价",
                "description": "牛皮癣价格",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemPsoriasisText": {
                "title": "牛皮癣文案",
                "description": "大促氛围图利益点（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "shopImg": {
                "title": "店铺图片",
                "description": "店铺图片（800x800），格式jpg、png，体积：<500kb",
                "type": "string",
                "x-format": "@image('800x800', 'jpg|png', 0, 3000)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "paidCouponPrice": {
                "title": "换购金额",
                "description": "换购金额",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108853"
              },
              "paidCouponLimitedAmount": {
                "title": "限购数量",
                "description": "限购数量",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108853"
              },
              "paidCouponThreshold": {
                "title": "优惠券门槛",
                "description": "优惠券门槛",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108853"
              },
              "paidCouponValue": {
                "title": "优惠券面额",
                "description": "优惠券面额",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108853"
              },
              "lightShopUrl": {
                "title": "轻店铺地址",
                "description": "轻店铺链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "lightShopName": {
                "title": "轻店铺名称",
                "description": "轻店铺名称",
                "type": "string",
                "x-format": "@string(1,8)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "kolRoleType": {
                "title": "红人身份标签",
                "description": "红人身份标识",
                "type": "string",
                "x-format": "@string(2,10)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "lightShopTag": {
                "title": "轻店铺类型标识",
                "description": "轻店铺类型标识",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "lightShopDesc": {
                "title": "轻店铺介绍",
                "description": "轻店铺介绍",
                "type": "string",
                "x-format": "@string(12,15)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "lightShopLogo": {
                "title": "轻店铺头像",
                "description": "轻店铺头像",
                "type": "string",
                "x-format": "@image('80x80')",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "liveUserName": {
                "title": "主播名称",
                "description": "主播名称",
                "type": "string",
                "x-format": "@string(1,4)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "videoId": {
                "title": "短视频ID",
                "description": "短视频ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "videoCoverImg": {
                "title": "短视频封面图",
                "description": "短视频封面图",
                "type": "string",
                "x-format": "@image()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "videoUrl": {
                "title": "短视频链接",
                "description": "短视频链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "qId": {
                "title": "轻店铺ID",
                "description": "轻店铺ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "miniAppId": {
                "title": "小程序ID",
                "description": "miniAppId",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/112419"
              },
              "shopHeatCount": {
                "title": "热力值",
                "description": "[造物节]店铺热力值",
                "type": "number",
                "x-format": "@interger()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "shopDeclaration": {
                "title": "店铺宣言",
                "description": "店铺宣言",
                "type": "string",
                "x-format": "@string(5,12)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "shopLogo": {
                "title": "店铺LOGO",
                "description": "店铺logo",
                "type": "string",
                "x-format": "@image()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "ipBrandLogo": {
                "title": "IP品牌Logo",
                "description": "IP品牌Logo",
                "type": "string",
                "x-format": "@image('400x400')",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/110824"
              },
              "crossBrandName": {
                "title": "联名品牌名称",
                "description": "联名品牌名称",
                "type": "string",
                "x-format": "@string(5,12)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/110824"
              },
              "itemLongImg": {
                "title": "商品长图",
                "description": "商品长图",
                "type": "string",
                "x-format": "@image('900x1200')",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemImg342x470": {
                "title": "商品场景图",
                "description": "商品场景图（342x470），格式jpg、png，体积：<500kb",
                "type": "string",
                "x-format": "@image('342x470', 'jpg|png', 0, 3000)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "fullFrameBrandDesc5": {
                "title": "弹幕5",
                "description": "不超过15个字",
                "type": "string",
                "x-format": "@string(0,15)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "fullFrameBrandDesc4": {
                "title": "弹幕4",
                "description": "不超过15个字",
                "type": "string",
                "x-format": "@string(0,15)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "fullFrameBrandDesc3": {
                "title": "弹幕3",
                "description": "不超过15个字",
                "type": "string",
                "x-format": "@string(0,15)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "fullFrameBrandDesc2": {
                "title": "弹幕2",
                "description": "不超过15个字",
                "type": "string",
                "x-format": "@string(0,15)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "fullFrameBrandDesc": {
                "title": "弹幕1",
                "description": "不超过15个字",
                "type": "string",
                "x-format": "@string(0, 15)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "fullFrameBrandImg": {
                "title": "品牌主图",
                "description": "品牌主图（342x530，PNG或JPG，大小不超过300K）",
                "type": "string",
                "x-format": "@image('342x530','png|jpg','0','300')",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105358"
              },
              "sellerId": {
                "title": "卖家id",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "brandId": {
                "title": "品牌ID",
                "description": "品牌ID",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "brandName": {
                "title": "品牌名称",
                "description": "品牌名称",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "isOvsLocalSendGoods": {
                "title": "海外本地发货标",
                "description": "海外本地发货标",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113117"
              },
              "isOvsFreeShipping": {
                "title": "海外包邮标",
                "description": "是否海外包邮",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113117"
              },
              "discountRate": {
                "title": "商品折扣率",
                "description": "商品折扣率",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113117"
              },
              "foreignPrice": {
                "title": "商品外币价",
                "description": "商品外币价",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/113117"
              },
              "itemActPriceTitle": {
                "title": "商品活动价标题",
                "description": "商品活动价标题",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemPrice": {
                "title": "商品原价",
                "description": "商品原价",
                "type": "number",
                "x-format": "@float(0,9999999,0,2)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemPriceTitle": {
                "title": "商品原价标题",
                "description": "商品原价标题",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemLongTitle": {
                "title": "商品长标题",
                "description": "商品长标题（6-14个字）",
                "type": "string",
                "x-format": "@string(6,14)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105418"
              },
              "itemImg220x340": {
                "title": "商品图片",
                "description": "商品图片（220x340），格式jpg、jpeg，体积：<100kb",
                "type": "string",
                "x-format": "@image('220x340', 'jpg|jpeg', 0, 100)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/105418"
              },
              "shopFpUrl": {
                "title": "店铺首页链接",
                "description": "店铺首页链接",
                "type": "string",
                "x-format": "@url()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "SIGN_MINI_SHOW_URL": {
                "title": "店铺详情页minisite",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "tjLiveUrl": {
                "title": "直播链接",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "fansCount": {
                "title": "微淘粉丝数",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "tjSpecialPic": {
                "title": "店铺入口底图",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "tjBrandLogo": {
                "title": "店铺logo",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "tjBenifitPoint": {
                "title": "店铺利益点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "brandPromotion": {
                "title": "品牌利益点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "tjBrandName": {
                "title": "店铺名称",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "directCoupon": {
                "title": "领券信息",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "brandSloganNameNew": {
                "title": "品牌slogen",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "brandLogoMohePic": {
                "title": "品牌logo(brandLogoMohePic)",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "remindNum": {
                "title": "多少人想买",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "brandFavorableReason": {
                "title": "品牌推荐理由",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "brandSellerCoupon": {
                "title": "品牌利益点卖点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "newBrandEnterImgUrl": {
                "title": "品牌入口素材(长)",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "activityId": {
                "title": "品牌团活动id",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "logoText": {
                "title": "品牌logo文案",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "promotion": {
                "title": "品牌价格利益点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "jhsBrandSeascapePic": {
                "title": "品牌大促海景图",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "personalBenefit": {
                "title": "品牌大促利益点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "blockPreSale": {
                "title": "品牌预售状态",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "onlineItemCount": {
                "title": "已开团的商品数",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "platformId": {
                "title": "主频道ID",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "blockType": {
                "title": "BlockBO的类型",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "soldCount": {
                "title": "多少件已售",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "brandSalesInfo": {
                "title": "卖点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "shopType": {
                "title": "店铺类型",
                "description": "店铺类型",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "brandSalesInfoColor": {
                "title": "卖点颜色",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "blockDacuIcon": {
                "title": "品牌大促标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "brandStatus": {
                "title": "品牌团状态",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "timeRemind": {
                "title": "开团时间",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "wlJumpUrl": {
                "title": "minisite链接",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98169"
              },
              "yyqqBrandLogo": {
                "title": "一元抢券用品牌logo",
                "description": "默认",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "trackParams": {
                "title": "埋点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "preRemindTime": {
                "title": "开团提醒时间",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "leftTime": {
                "title": "剩余时间",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "soldRatio": {
                "title": "进度",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tqgSellPoint": {
                "title": "卖点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tqgZdqEndTime": {
                "title": "整点抢倒计时",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tqgDetailUrl": {
                "title": "抢购详情",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "qgjText": {
                "title": "一盘货",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tqgZdqText": {
                "title": "淘抢购整点抢文案",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "couponFullCut": {
                "title": "第二件半价/第二件0元",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "shopCoupon": {
                "title": "店铺优惠券",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "couponDirect": {
                "title": "单品优惠券",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tjItemSmallTitleJTT": {
                "title": "商品利益点3",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tjDcspmd": {
                "title": "商品利益点2",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tjPrefitText": {
                "title": "商品利益点1",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "商品标题": {
                "title": "tjShortName",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "tjAppentrancePic": {
                "title": "商品图（白底图）",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "biqiangActImgUrl": {
                "title": "商品图（场景图）",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "itemLabel": {
                "title": "商品label",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "totalStock": {
                "title": "报名数量",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "dcSpmd": {
                "title": "大促利益点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "oetime": {
                "title": "活动结束时间",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "ostime": {
                "title": "活动开始时间",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "dailyMarketingIcon": {
                "title": "日常满减标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "itemPreSaleUrl": {
                "title": "预售标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "couponTemplateIconUrl": {
                "title": "品类券模板icon",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "expandMoney": {
                "title": "预售定金膨胀金额",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "titleIconsDacu": {
                "title": "大促标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "flag": {
                "title": "国旗标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "timeLimitedList": {
                "title": "显示膨胀信息列表",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "auction_tag": {
                "title": "主搜tag",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "mjContent": {
                "title": "满减内容",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "hyalineItemPic": {
                "title": "透明底图",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "newMaterials": {
                "title": "招商素材",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "remindType": {
                "title": "售卖状态",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "inventoryQuantity": {
                "title": "商品库存",
                "description": "商品库存",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "fwType": {
                "title": "是否热卖",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "picUrlM": {
                "title": "商品图片",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "frontFirstCatIds": {
                "title": "类目id",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "marketingCopyWriting": {
                "title": "购物津贴",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "preSale": {
                "title": "是否预售",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "interestFreeCouponStageCount": {
                "title": "用券免息",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "picUrlNew": {
                "title": "商品图新",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "interestFreeByStageStageCount": {
                "title": "12期免息",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "priceParts1": {
                "title": "价格小数部分（价格隐藏用）",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "priceParts0": {
                "title": "价格整数部分（价格隐藏用）",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "period": {
                "title": "分期数",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "jddNum": {
                "title": "拼团几人团",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "jddPrice": {
                "title": "拼团价格",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "marketingDisplayInfoColor": {
                "title": "优惠透出色值",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "marketingDisplayInfo": {
                "title": "优惠透出",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "superPlusIcon": {
                "title": "超级会员标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "serviceIcon": {
                "title": "服务标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "actIcon": {
                "title": "大促标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "picUrlFromIc": {
                "title": "淘宝主图",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "salesSite": {
                "title": "站点",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "interestFreeCoupon": {
                "title": "免息券图标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "interestFreePeriodIcon": {
                "title": "商家分期免息图标",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "stageCount": {
                "title": "分期期数",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "shortName": {
                "title": "商品短标题",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "itemStatus": {
                "title": "商品状态",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "juId": {
                "title": "商品ju id",
                "description": "",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/98173"
              },
              "kolTags": {
                "title": "个性化风格标签",
                "description": "红人标签",
                "type": "string",
                "x-format": "@string()",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "kolDeclaration": {
                "title": "红人宣言",
                "description": "红人宣言",
                "type": "string",
                "x-format": "@string(5,14)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "kolName": {
                "title": "红人名称",
                "description": "红人名称",
                "type": "string",
                "x-format": "@string(1,6)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "kolLogo": {
                "title": "红人头像",
                "description": "红人头像",
                "type": "string",
                "x-format": "@image('400x400')",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "shopLongImg": {
                "title": "店铺长图",
                "description": "店铺长图",
                "type": "string",
                "x-format": "@image('900x1200')",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109034"
              },
              "isLargePayShop": {
                "title": "对公大额支付店铺",
                "description": "是否为大额支付店铺",
                "type": "boolean",
                "x-format": "@boolean()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemCountryName": {
                "title": "发货地国家名称",
                "description": "发货地国家名称",
                "type": "string",
                "x-format": "@string(1,8)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemCountryLogo": {
                "title": "发货地国家Logo",
                "description": "发货地国家Logo",
                "type": "string",
                "x-format": "@image()\t",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "isGlobalSeller": {
                "title": "是否全球购卖家",
                "description": "是否为全球购卖家",
                "type": "boolean",
                "x-format": "@boolean()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemCollectCount": {
                "title": "想买人气",
                "description": "想买人气",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemDeclaration": {
                "title": "宝贝宣言",
                "description": "宝贝宣言",
                "type": "string",
                "x-format": "@string(5,10)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemStockDesc": {
                "title": "集采规格",
                "description": "集采规格文案",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "itemLogisticsText": {
                "title": "商品物流时效标",
                "description": "商品物流时效标",
                "type": "string",
                "x-format": "@string()",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "prodPlaceInfo": {
                "title": "产业带信息",
                "description": "产业带信息",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "huabeiInfo": {
                "title": "花呗分期免息信息",
                "description": "花呗分期免息信息",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/109052"
              },
              "presentImg": {
                "title": "赠品图",
                "description": "赠品图，格式：jpg，体积：20kb",
                "type": "string",
                "x-format": "@image('100x100', 'jpg|png', 0, 20)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "presentDesc": {
                "title": "赠品描述",
                "description": "赠品描述",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "shopDesc1": {
                "title": "店铺利益点一",
                "description": "店铺利益点一（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "shopDesc2": {
                "title": "店铺利益点二",
                "description": "店铺利益点二（5-8个字）",
                "type": "string",
                "x-format": "@string(5,8)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "shopItemId": {
                "title": "店铺关联商品ID",
                "description": "店铺关联商品ID",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "livingRoomUrl": {
                "title": "直播间地址",
                "description": "",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "livingRoomStatus": {
                "title": "直播状态",
                "description": "0 未开始；1 直播中；2 直播已结束",
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108955"
              },
              "itemInventoryQuantity": {
                "title": "商品库存",
                "description": "商品库存",
                "type": "number",
                "x-format": "@integer(0)",
                "x-required:": false,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              },
              "itemInfo": {
                "title": "商品简介",
                "description": "≤40个字(不区分中英文)，含标点",
                "type": "string",
                "x-format": "@string(0,40)",
                "x-required:": true,
                "x-from": "https://dip.alibaba-inc.com/pages/schemas/108844"
              }
            }
          }
        }
      },
      "title": "[营销]通用模型"
    },
    "functions": [{
      "content": "export default function created() {\n\n}",
      "name": "created",
      "type": "lifeCycles"
    }, {
      "content": "export default function mounted() {\n\n}",
      "name": "mounted",
      "type": "lifeCycles"
    }, {
      "content": "const getOSInfo = (ua) => {\n  var os = {\n    name: 'unknown',\n    version: '0.0.0'\n  };\n\n  if (/Windows\\sPhone\\s(?:OS\\s)?([\\d\\.]+)/.test(ua)) {\n    os = {\n      name: 'Windows Phone',\n      isWindowsPhone: true,\n      version: RegExp.$1\n    };\n  } else if (/Safari/.test(ua) && /Android[\\s\\/]([\\d\\.]+)/.test(ua)) {\n    os.version = RegExp.$1;\n    if (/Mobile\\s+Safari/.test(ua)) {\n      os.name = 'Android';\n      os.isAndroid = true;\n    } else {\n      os.isAndroid = true;\n      os.name = 'AndroidPad';\n      os.isAndroidPad = true;\n    }\n  } else if (/(iPhone|iPad|iPod)/.test(ua)) {\n    var name = RegExp.$1;\n    if (/OS ([\\d_\\.]+) like Mac OS X/.test(ua)) {\n      os = {\n        name: name,\n        isIPhone: name !== 'iPad',\n        isIPad: name === 'iPad',\n        isIOS: true,\n        version: RegExp.$1\n      };\n    }\n  }\n  return os;\n};\nconst osInfo = getOSInfo(navigator.userAgent || '');\nconst isIOS = !!osInfo.isIOS;\nconst isAndroid = !!osInfo.isAndroid;\nconst ua = window.navigator.userAgent || '';\nconst isJu = ua.indexOf('AliApp(JU') !== -1;\n\n// iphoneX: 2436 / iphoneXR: 1792 / iphoneX Max: 2688\nconst isIPhoneXSeries = () => {\n  const isIphoneXSeriesWidth = window && window.screen && window.screen.width && window.screen.height && (\n    parseInt(window.screen.width, 10) == 375 && parseInt(window.screen.height, 10) == 812 ||\n    parseInt(window.screen.width, 10) == 414 && parseInt(window.screen.height, 10) == 896\n  );\n  return isIOS && isIphoneXSeriesWidth;\n};\n\n// 获取顶部栏高度\nexport const navbarHeight = () => {\n  let navHeight = 0;\n  if (isAndroid) {\n    navHeight = 96;\n  } else if (isIOS) {\n    navHeight = 78;\n  }\n  return navHeight;\n};\n\n// 获取电池状态栏高度\nexport const getStatusBarHeight = () => {\n  if (isIOS || isAndroid & isJu) {\n    return isIPhoneXSeries() ? 48 * 2 : 24 * 2;\n  }\n  return 0;\n};",
      "name": "getNavigationHeight",
      "type": "custom"
    }, {
      "content": "export default function isWeiXinClient() {\n    var ua = navigator.userAgent.toLowerCase(); \n    if (ua.match(/MicroMessenger/i)==\"micromessenger\") { \n        return true; \n    } else { \n        return false; \n    }\n}",
      "name": "isWeixinClient",
      "type": "custom"
    }, {
      "content": "// 环境初始化部分\ntry {\n  window.WindVane.call(\"WebAppInterface\", \"setNaviBarHidden\", {\n    hidden: \"1\",\n    animated: \"0\",\n    statusBarHidden: \"1\"\n  });\n} catch (err) { }\n\n// 异形屏适配计算部分\nconst isIOS = Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));\nconst isAndroid = Boolean(navigator.userAgent.match(/android/i));\nconst isIphoneX = window &&\n  window.screen &&\n  window.screen.width &&\n  window.screen.height &&\n  (\n    (window.screen.width == 375 && window.screen.height == 812) ||\n    (window.screen.width == 414 && window.screen.height == 896)\n  );\nconst statusBarHeight = (isIphoneX ? 88 : (isIOS ? 40 : 8));\nconst statusBar = `${statusBarHeight / 100}rem`;\nconst statusBarWithTitle = `${statusBarHeight / 100 + 0.86}rem`;\n\n// 库部分\n// 默认配置\nexport const URGECFG_DEFAULT = {\n  eventName: \"活动\",\n};\nexport const BUSYCFG_DEFAULT = {\n  busyText: \"\",\n  busyUrl: \"\",\n};\nexport const MANUALCFG_DEFAULT = {\n  title: \"双11笔笔返\",\n\n  extraIcon: \"\",\n  extraEarned: \"已到账\",\n  extraTime: \"距结束\",\n  extraRule: \"规则\",\n  \n  searchUrl: \"\",\n  ruleUrl: \"\",\n  dashUrl: \"\",\n  walletUrl: \"\",\n  \n  bgBtnDefault: \"https://img.alicdn.com/tfs/TB1XdT8jdTfau8jSZFwXXX1mVXa-840-176.png\",\n  bgBtnDisabled: \"https://img.alicdn.com/tfs/TB1uuQtiIieb18jSZFvXXaI3FXa-840-176.png\",\n\n  btnDowngrade: \"当前高峰，请稍后再试\",\n  btnPageDowngrade: \"参与人数较多，请稍后再试\",\n  \n  btnNotStart: \"提前加购\",\n  btnNotApplied: \"立即开启\",\n  btnCompleted: \"继续购物\",\n  btnDefault: \"每次购物预计返8% 去赚钱\",\n\n  hintCompleted: \"恭喜你已经赚满{{M}}元\",\n  hintNotCompleted: \"多买多赚，快去下单吧\",\n  hintWaitFan: \"你有笔笔返红包即将到账\",\n  hintWaitFanA: \"\",\n  hintWaitFanB: \"元即将到账，去查看\",\n\n  middleHintText: \"{{M}}元红包等你来赚\",\n  middleHintTextCompleted: \"累计可返{{M}}元\",\n  bottomHintText: \"仅本活动页商品及指定活动商品参与\",\n\n  bgDefault: \"https://img.alicdn.com/tfs/TB1Mu0qYRr0gK0jSZFnXXbRRXXa-1440-520.png\",\n  bgNotStart: \"https://img.alicdn.com/tfs/TB1BnJtYNv1gK0jSZFFXXb0sXXa-1440-520.png\",\n  bgNotApplied: \"https://img.alicdn.com/tfs/TB1gE0nYUY1gK0jSZFCXXcwqXXa-1440-520.png\",\n  bgDowngrade: \"https://img.alicdn.com/tfs/TB1gE0nYUY1gK0jSZFCXXcwqXXa-1440-520.png\",\n\n  topNotStart: \"11月1日0点开始，快去加购吧\",\n  topNotCompleted: \"继续下单赚钱\",\n}\n\nexport function withIn(x, a, b) {\n  return Math.max(\n    Math.min(x, b), a\n  );\n}\n\nexport function numToStr(n) {\n  return (typeof n === 'number' ? String(n) : n);\n}\n\n// 处理数据\nexport function processData(ret) {\n  const {\n    countDownMillSecond,\n    hasWaitFan,\n    maxAmount,\n    issuedAmount,\n    ratio,\n    progress,\n    waitFanAmount,\n  } = ((ret || {}).data || {});\n\n  let wProgress = 0;\n  try {\n    wProgress = withIn(parseInt(progress, 10) || 0, 0, 100);\n  } catch(err) {}\n  \n  return {\n    status: (ret || {}).status || '',\n    ratio,\n    progress: wProgress,\n    countDownMillSecond,\n\n    hasWaitFan: numToStr(hasWaitFan),\n    maxAmount: numToStr(maxAmount),\n    issuedAmount: numToStr(issuedAmount),\n    waitFanAmount: numToStr(waitFanAmount),\n  };\n}\n\n// 解析 url\nexport function parseSearch() {\n  const res = {};\n  const search = (window && window.location || location).search || \"\";\n  search.substr(1).split(\"&\").forEach((query) => {\n    const queryParam = query.split(\"=\");\n    if (queryParam.length != 2) return;\n    res[queryParam[0]] = queryParam[1];\n  });\n  return res;\n}\n\nexport function urlCheck(key) {\n  if (!key) {\n    return false;\n  }\n  const params = parseSearch() || {};\n  return params[key] === 'true' || params[key] === '1';\n}\n\nexport function queryStringify(obj) {\n  let res = [];\n  Object.keys(obj).forEach((key) => {\n    res.push(`${key}=${obj[key]}`);\n  });\n  return res.join(\"&\");\n}\n\nexport const DEFAULT_LOGKEY = \"/bbf.bbfmodule.click\";\n\nexport function buildTrackParam(spmc, others = {}, logkey = DEFAULT_LOGKEY) {\n  let spm = \"0.0.0.0\";\n  if (window.$zebra) {\n    const { spma, spmb } = window.$zebra;\n    spm = `${spma}.${spmb}.${spmc}.1`;\n  };\n\n  const params = {\n    spm,\n    ...others,\n  };\n\n  return {\n    logkey,\n    gokey: queryStringify(params),\n    hashcode: 'GET'\n  }\n}\n\nexport function getOtherParams(mod) {\n  const ret = {};\n  \n  try {\n    ret.channel = `${window.$zebra.spma}.${window.$zebra.spmb}`;\n  } catch(err) {}\n\n  try {\n    const data = mod.get();\n    ret.status = data.status === 'completed'\n      ? 's5'\n      : data.status === 'notCompleted'\n      ? (data.hasWaitFan === '1' ? 's4' : 's3')\n      : (data.status === 'notStart' ? 's2' : 's1');\n  } catch(err) {}\n\n  return ret;\n}\n\nexport function trackParam(spmc, goldkey = DEFAULT_LOGKEY) {\n  const params = buildTrackParam(spmc, getOtherParams(this), goldkey);\n  const paramStr = `${params.logkey}-----${params.gokey}-----${params.hashcode}`;\n  return JSON.stringify({\n    clickTrackInfo: paramStr,\n    trackInfo: paramStr\n  });\n}\n\n// 调用部分\nexport default function env() {\n  return {\n    statusBar,\n    statusBarWithTitle,\n    trackParam: trackParam.bind(this),\n  };\n}",
      "name": "env",
      "type": "custom"
    }, {
      "content": "export default function toBottom() {\n  try {\n    this.set({ trans: 1 });\n    window.dispatchEvent(new CustomEvent('onToBtn', { bubbles: true, cancelable: true }));\n  } catch (err) { }\n}\n",
      "name": "toBottom",
      "type": "custom"
    }, {
      "content": "let inited = false;\n\nexport default function setProgressRef(ref) {\n  try {\n    if (!inited) {\n      inited = true;\n      const preloadProgress = this.get().progress || 0;\n      \n      if (preloadProgress !== 0) {\n        ref.style.width = '0%';\n        ref.style.transition = `1s ease`;\n        setTimeout(() => {\n          ref.style.width = `${preloadProgress}%`;\n          setTimeout(() => {\n            ref.style.transition = `none`;\n          }, 1200);\n        }, 50);\n      }\n    }\n  } catch(err) {}\n}\n",
      "name": "setProgressRef",
      "type": "custom"
    }, {
      "content": "import { buildTrackParam, getOtherParams } from './env';\n\nexport default function track(spmc, goldkey, type='CLK') {\n  const others = getOtherParams(this);\n  const params = buildTrackParam(spmc, others, goldkey);\n\n  try {\n    window.goldlog.record(params.logkey, type, params.gokey, params.hashcode);\n  } catch(err) {}\n}\n",
      "name": "track",
      "type": "custom"
    }]
  },
  "state": {
    "items": [{
      "hasRedEnvelope": "false",
      "liveUrl": "http://owsmgrbc.org/beoc",
      "liveStatus": "@u^*",
      "shopShareCount": "@interger()",
      "shopActUrl": "http://vrwn.com/kgjb",
      "shopSellerId": "y2nMT",
      "shopId": "y3@W",
      "shopName": "V8mR[lb",
      "shopRedEnvelopeStatus": "HhcFH",
      "shopRedEnvelopeUrl": "http://ktfxohfp.gov/xnrbw",
      "shopFansCount": "@interger()",
      "firstItemImg": "http://dummyimage.com/180x150",
      "secondItemImg": "http://dummyimage.com/120x60",
      "thirdItemImg": "http://dummyimage.com/125x125",
      "firstItemUrl": "http://fxmupro.com/mypgyw",
      "thirdItemUrl": "http://ifwf.gov/rjlflrsdd",
      "secondItemUrl": "http://oddjo.org/heytdek",
      "masterItemTitle": "QIHPi",
      "masterItemImg": "http://dummyimage.com/125x125",
      "masterItemUrl": "http://patwjo.gov/tffpqef",
      "artisanLogo": "http://dummyimage.com/250x250",
      "artisanName": "N",
      "artisanDesc": "0z@j",
      "artisanRoleType": "5^p@i",
      "masterVideoImg": "http://dummyimage.com/336x280",
      "masterVideoId": "PEhrt7",
      "masterVideoUrl": "http://bsdjkrdyon.gov/fybgk",
      "shopDesc": "uN88&1",
      "liveLogo": "http://dummyimage.com/120x600",
      "liveCount": "@interger()",
      "liveCoverImg": "http://dummyimage.com/300x600",
      "paidCouponId": 4996736622159536,
      "itemId": "eI!L",
      "itemTitle": "n0um@OW2$u",
      "itemUrl": "http://swqeecoy.gov/xtukpkre",
      "itemDesc": "zSouzWp%",
      "itemDesc1": "&wY4i44",
      "itemDesc2": "pGQ)%!",
      "itemImg": "http://dummyimage.com/800x800.jpg",
      "couponUrl": "http://lwu.gov/syodx",
      "couponValue": 4512408007880320,
      "brandLogo": "http://dummyimage.com/140x70.png",
      "itemCarImg": "http://dummyimage.com/1440x540.png",
      "couponThreshold": 7936719.11,
      "topicTitle": "秒NewTh",
      "bookedNum": 6050.7,
      "topicDesc": "菱形提花麻花纹针织毛线半指长手套袖套J08819 MIKU",
      "itemActPrice": 5845174.7,
      "biz_name": "首度家居创意LED吸顶灯客厅卧室灯具灯",
      "biz_url": "博纳屋豹纹桌面收纳盒 S02305Truffles德菲丝／德菲斯松露巧克力浓情古典25",
      "itemCount": 9004.7,
      "topicUrl": "夏季情侣凉拖鞋女居家拖鞋韩国室内塑料洗澡防滑浴室拖鞋J13486 护膝护理贴膝盖",
      "itemTopicUrl": "美国康宁锅/1",
      "name": "欧润哲不锈钢砧板架刀架组合多功能置物架切菜板架放刀架锅盖",
      "title": "H72591NewT",
      "clickUrl": "H71768补水抗痘NewTheBest纽比",
      "subtitle": "博纳屋圆舞曲裤子收纳盒 NewTheB",
      "picUrl": "WbjF",
      "logoUrl": "DJ实木照片墙带钟表12框时尚创意组合生活照相片墙相框墙包",
      "item95DiscountFlag": "]YW^4]",
      "itemDiscountFeeTitle": "lpo",
      "itemPreSaleDiscountFee": "[koM",
      "prepSaleHandsel": "N!viS%",
      "preSalePrice": 4614806.8,
      "iconImg": "http://dummyimage.com/60x60.jpg",
      "btnText": "*xGsJ4O",
      "itemMonthSoldCount": 5020009078249108,
      "itemTagPrice": 6546433.5,
      "isWuyougou": "xlAA",
      "itemPsoriasisPrice": 402899.28,
      "itemPsoriasisText": "O]SbsZG",
      "shopImg": "http://dummyimage.com/800x800.png",
      "paidCouponPrice": 9329959,
      "paidCouponLimitedAmount": 5882665662892128,
      "paidCouponThreshold": 5869970.6,
      "paidCouponValue": 8767807411030606,
      "lightShopUrl": "http://muib.org/ffnmm",
      "lightShopName": "5Y!13",
      "kolRoleType": "h2v!h*",
      "lightShopTag": "yN)PRd3",
      "lightShopDesc": "mxAp7L1H[jh!3",
      "lightShopLogo": "http://dummyimage.com/80x80",
      "liveUserName": "*ysc",
      "videoId": "SQ#l$KB",
      "videoCoverImg": "http://dummyimage.com/336x280",
      "videoUrl": "http://yxefqimkrk.org/mvjau",
      "qId": "uKdzt",
      "miniAppId": "5Ccp",
      "shopHeatCount": "@interger()",
      "shopDeclaration": "X[)f(48sWY3",
      "shopLogo": "http://dummyimage.com/120x600",
      "ipBrandLogo": "http://dummyimage.com/400x400",
      "crossBrandName": "$M9@LklMnI",
      "itemLongImg": "http://dummyimage.com/900x1200",
      "itemImg342x470": "http://dummyimage.com/342x470.jpg",
      "fullFrameBrandDesc5": "Fni2iuqEa",
      "fullFrameBrandDesc4": "r^1jHxDAv",
      "fullFrameBrandDesc3": "34X4IN&o3rp%eI",
      "fullFrameBrandDesc2": "ksADs2b(",
      "fullFrameBrandDesc": "Ql[00oflN",
      "fullFrameBrandImg": "http://dummyimage.com/342x530.jpg",
      "sellerId": "tAH",
      "brandId": "QO1t1",
      "brandName": "%r!A9",
      "itemActPriceTitle": "lIncOi",
      "itemPrice": 4102567.6,
      "itemPriceTitle": "*F#4s",
      "itemLongTitle": "sJBnv92YC",
      "itemImg220x340": "http://dummyimage.com/220x340.jpeg",
      "shopFpUrl": "http://paklpfvv.org/hwiimoimq",
      "SIGN_MINI_SHOW_URL": "nf(Ehqg",
      "tjLiveUrl": "5lQW",
      "fansCount": "lBUv*",
      "tjSpecialPic": "58Fl",
      "tjBrandLogo": "ql!l",
      "tjBenifitPoint": "Ysz",
      "brandPromotion": "O!Om#O#",
      "tjBrandName": "!@u",
      "directCoupon": "WTVY#",
      "brandSloganNameNew": ")xrZ",
      "brandLogoMohePic": "ME4]ZP",
      "remindNum": "(&Y[M",
      "brandFavorableReason": "D@fnOu",
      "brandSellerCoupon": "FiMA)5",
      "newBrandEnterImgUrl": "2ru4xE",
      "activityId": "3HJrGJ",
      "logoText": "02Z",
      "promotion": "zGOt33",
      "jhsBrandSeascapePic": "wgGGT",
      "personalBenefit": "NCK",
      "blockPreSale": "#KCNEz",
      "onlineItemCount": "Bga",
      "platformId": "$))#HP",
      "blockType": "0cfji",
      "soldCount": ")27J",
      "brandSalesInfo": "j9VLVhk",
      "shopType": "nkXy1m",
      "brandSalesInfoColor": "YG8iu4",
      "blockDacuIcon": "%H6HGI",
      "brandStatus": "RNttjT%",
      "timeRemind": "gjgaH",
      "wlJumpUrl": "Hq^%",
      "yyqqBrandLogo": "Gq%Z",
      "trackParams": "l^GB",
      "preRemindTime": "ToJlG",
      "leftTime": "PW[otZW",
      "soldRatio": "C8puh8",
      "tqgSellPoint": "HEqDrCV",
      "tqgZdqEndTime": "EOKw]16",
      "tqgDetailUrl": "vBr@",
      "qgjText": "RdBpWAM",
      "tqgZdqText": "6Eb#",
      "couponFullCut": "QZUJ%",
      "shopCoupon": "U!x2x!",
      "couponDirect": "ju$eA6",
      "tjItemSmallTitleJTT": "Cn13",
      "tjDcspmd": "w2*9(",
      "tjPrefitText": "xJP*Bh",
      "商品标题": "qKyc8g",
      "tjAppentrancePic": "9ynts",
      "biqiangActImgUrl": "F[TB&us",
      "itemLabel": "AJ8S",
      "totalStock": "QRm74&",
      "dcSpmd": "bQFR",
      "oetime": "[DJ#n",
      "ostime": "2CsI",
      "dailyMarketingIcon": "fYI",
      "itemPreSaleUrl": "^KVvT",
      "couponTemplateIconUrl": "KSzEC",
      "expandMoney": "fIESR",
      "titleIconsDacu": "^(R",
      "flag": "7iLT",
      "timeLimitedList": "$MMM",
      "auction_tag": "pvc[",
      "mjContent": "[pV%@V",
      "hyalineItemPic": "rNPp@#",
      "newMaterials": "jFo4PA",
      "remindType": "o%m80",
      "inventoryQuantity": 1321714184145544,
      "fwType": "XW7XrGg",
      "picUrlM": "XwkV)Q",
      "frontFirstCatIds": "Udq",
      "marketingCopyWriting": "((wlrU#",
      "preSale": "JnZGd#",
      "interestFreeCouponStageCount": "iKgz9b",
      "picUrlNew": "O#2u",
      "interestFreeByStageStageCount": "v1m8",
      "priceParts1": "G1z%",
      "priceParts0": "5IpJ",
      "period": "yuGip",
      "jddNum": "[$X@3r",
      "jddPrice": "#W3Ad",
      "marketingDisplayInfoColor": "Xx$2c",
      "marketingDisplayInfo": "cceXTNF",
      "superPlusIcon": "*PIk$",
      "serviceIcon": "gZ6!",
      "actIcon": "NeBMz",
      "picUrlFromIc": "@7J",
      "salesSite": "9KR4r",
      "interestFreeCoupon": "3yQWY",
      "interestFreePeriodIcon": "JBIl",
      "stageCount": "Ijdy",
      "shortName": "prVO",
      "itemStatus": "[@yQV",
      "juId": "%ZqEtl",
      "kolTags": "J)167",
      "kolDeclaration": "uyRCn2AUfpfx",
      "kolName": "YhY6Bx",
      "kolLogo": "http://dummyimage.com/400x400",
      "shopLongImg": "http://dummyimage.com/900x1200",
      "isLargePayShop": "true",
      "itemCountryName": "sQL4IE",
      "itemCountryLogo": "http://dummyimage.com/120x240\t",
      "isGlobalSeller": "false",
      "itemCollectCount": 2724196583274804,
      "itemDeclaration": "m2sUlt(Ho",
      "itemStockDesc": "kLR2e",
      "itemLogisticsText": "YnES",
      "presentImg": "http://dummyimage.com/100x100.jpg",
      "shopDesc1": "*Qb0P",
      "shopDesc2": "w^F8mHU",
      "itemInventoryQuantity": 1585381919321342,
      "itemInfo": ")ipWKt]Wr@6Z6Xs9gUyUYYjZW1"
    }, {
      "hasRedEnvelope": "false",
      "liveUrl": "http://vdvrpt.edu/pfcvvl",
      "liveStatus": "R2jEXr",
      "shopShareCount": "@interger()",
      "shopActUrl": "http://ffmxlbvzip.com/ggeycyyikn",
      "shopSellerId": "9Bq[E",
      "shopId": "ykH#5e",
      "shopName": "U@QRT4",
      "shopRedEnvelopeStatus": "mJK^pg",
      "shopRedEnvelopeUrl": "http://hbckkym.net/wwxargd",
      "shopFansCount": "@interger()",
      "firstItemImg": "http://dummyimage.com/125x125",
      "secondItemImg": "http://dummyimage.com/180x150",
      "thirdItemImg": "http://dummyimage.com/240x400",
      "firstItemUrl": "http://vognxheq.org/ezdtb",
      "thirdItemUrl": "http://pykuvxr.org/sbxsywr",
      "secondItemUrl": "http://nmjsy.co.uk/vopexnqifb",
      "masterItemTitle": "KoWVVZ",
      "masterItemImg": "http://dummyimage.com/336x280",
      "masterItemUrl": "http://kznkhihpiy.edu/obbhubrtpt",
      "artisanLogo": "http://dummyimage.com/336x280",
      "artisanName": "hOm",
      "artisanDesc": "JbS67Z",
      "artisanRoleType": "FgK*",
      "masterVideoImg": "http://dummyimage.com/720x300",
      "masterVideoId": "IhFoY",
      "masterVideoUrl": "http://vxjp.edu/rozosrncz",
      "shopDesc": "*zwxL^Bv",
      "liveLogo": "http://dummyimage.com/250x250",
      "liveCount": "@interger()",
      "liveCoverImg": "http://dummyimage.com/88x31",
      "paidCouponId": -8025493194243920,
      "itemId": "AW[)#w",
      "itemTitle": "B9hs&Aju",
      "itemUrl": "http://fflkxit.gov/afhbcd",
      "itemDesc": "@vJUXon",
      "itemDesc1": "ZPB2n",
      "itemDesc2": "XZbX8",
      "itemImg": "http://dummyimage.com/800x800.png",
      "couponUrl": "http://eudc.net/gwxl",
      "couponValue": 183315113287392,
      "brandLogo": "http://dummyimage.com/140x70.png",
      "itemCarImg": "http://dummyimage.com/1440x540.png",
      "couponThreshold": 5648893.1,
      "topicTitle": "DJ美国康宁/",
      "bookedNum": 2032.355,
      "topicDesc": "NewTheBest纽比士绿茶消炎排毒花瓣面膜150mlH71854 2.5L/3.5L锅盖(VS-2.5&amp;VS-3.5) 201",
      "itemActPrice": 7937224,
      "biz_name": "欧润哲创意时尚家用厨房脚踏式垃圾桶办公室/卫生间翻盖卫生桶 璞帝妃PETITFEE黑珍珠眼膜/眼贴去纹黑",
      "biz_url": "天堂伞折叠钢骨遮阳公主蘑菇晴雨伞太阳伞33020E平安快乐J13541 NewTheBest纽比士橄榄滋润护发锁水弹力素350mlH71750 天堂伞三折",
      "itemCount": 6293.7,
      "topicUrl": "欧润哲家用厨房脚踏式垃圾桶创意时尚卫生间酒店不锈钢垃圾",
      "itemTopicUrl": "美国康宁餐具/9件组套组/2",
      "name": "正品智美蜗牛热膜蜗牛粘液s",
      "title": "包根棉鞋居家保暖鞋蝴蝶结情",
      "clickUrl": "DJSnapware康宁扣圣",
      "subtitle": "纽比士炫金芙蓉女士保湿去黄补水美白蚕丝面膜贴纸面贴膜H08884 秒雅诗兰黛",
      "picUrl": "nOZ!aK",
      "logoUrl": "H71734美白补水保湿NewThe",
      "item95DiscountFlag": "R0t%p",
      "itemDiscountFeeTitle": "NPsLD",
      "itemPreSaleDiscountFee": "SNdO6^",
      "prepSaleHandsel": ")mny4*",
      "preSalePrice": 605178,
      "iconImg": "http://dummyimage.com/60x60.jpg",
      "btnText": "O@%Yd",
      "itemMonthSoldCount": 7602738928924494,
      "itemTagPrice": 9511196.6,
      "isWuyougou": "#2OAK",
      "itemPsoriasisPrice": 3493.8,
      "itemPsoriasisText": "r8Q#h*1",
      "shopImg": "http://dummyimage.com/800x800.png",
      "paidCouponPrice": 3293670.1,
      "paidCouponLimitedAmount": 8133177264219670,
      "paidCouponThreshold": 3864560,
      "paidCouponValue": 5588574896709864,
      "lightShopUrl": "http://ucw.gov/jmwgk",
      "lightShopName": "0Oqy16k",
      "kolRoleType": "qA",
      "lightShopTag": "2rGF5",
      "lightShopDesc": "5Ktb*l8lue^)&w",
      "lightShopLogo": "http://dummyimage.com/80x80",
      "liveUserName": "E",
      "videoId": "kw*KY",
      "videoCoverImg": "http://dummyimage.com/300x250",
      "videoUrl": "http://imuai.gov/vxypl",
      "qId": "1)j#Yr",
      "miniAppId": "XDjLcB",
      "shopHeatCount": "@interger()",
      "shopDeclaration": "j)8rMSiGj[g)",
      "shopLogo": "http://dummyimage.com/120x600",
      "ipBrandLogo": "http://dummyimage.com/400x400",
      "crossBrandName": "Wj[FWH",
      "itemLongImg": "http://dummyimage.com/900x1200",
      "itemImg342x470": "http://dummyimage.com/342x470.jpg",
      "fullFrameBrandDesc5": "OL2bXllO0EYc",
      "fullFrameBrandDesc4": "@tL2orH]&3*Uy",
      "fullFrameBrandDesc3": "7l",
      "fullFrameBrandDesc2": "CAR2[SSZrQ8(",
      "fullFrameBrandDesc": "yZs148WRyK@g",
      "fullFrameBrandImg": "http://dummyimage.com/342x530.jpg",
      "sellerId": "By7XF",
      "brandId": "Vm$YyA",
      "brandName": "lK^rZ6x",
      "itemActPriceTitle": "0#BEO",
      "itemPrice": 1037933.1,
      "itemPriceTitle": "oHK",
      "itemLongTitle": "gWG8DyFd",
      "itemImg220x340": "http://dummyimage.com/220x340.jpg",
      "shopFpUrl": "http://rlvqo.co.uk/klwqtoaro",
      "SIGN_MINI_SHOW_URL": "mY0ug",
      "tjLiveUrl": "NitP",
      "fansCount": "Bqs0#",
      "tjSpecialPic": "b@fDN",
      "tjBrandLogo": "8wk7L4P",
      "tjBenifitPoint": "TOUy9z",
      "brandPromotion": "SnT",
      "tjBrandName": "9Cv",
      "directCoupon": "!XkqFf",
      "brandSloganNameNew": "e8Ju",
      "brandLogoMohePic": "WuS",
      "remindNum": "Dkr!iu!",
      "brandFavorableReason": "5O^X*",
      "brandSellerCoupon": "W@QPJ",
      "newBrandEnterImgUrl": "^bb[SL",
      "activityId": "l8CFS",
      "logoText": "v]WP",
      "promotion": "Q45(IE",
      "jhsBrandSeascapePic": "iGg",
      "personalBenefit": "HB0ru",
      "blockPreSale": "E(j@Z",
      "onlineItemCount": "g(T",
      "platformId": "6b0w6qB",
      "blockType": "RV*l",
      "soldCount": "w!(]x6V",
      "brandSalesInfo": "SI&[BC",
      "shopType": "yss%n[m",
      "brandSalesInfoColor": "4K(*",
      "blockDacuIcon": "ZOc",
      "brandStatus": "B*[GmU",
      "timeRemind": "!z61pM",
      "wlJumpUrl": "63hwm",
      "yyqqBrandLogo": "rugH",
      "trackParams": "BY#w",
      "preRemindTime": "%qiuR",
      "leftTime": "BhXGG",
      "soldRatio": "pzzX",
      "tqgSellPoint": "twXID",
      "tqgZdqEndTime": "Ao)dl",
      "tqgDetailUrl": ")W4D!]",
      "qgjText": "wpp5z",
      "tqgZdqText": "6))m&N)",
      "couponFullCut": "S1z@VQ",
      "shopCoupon": "#9#@0",
      "couponDirect": "nTCT",
      "tjItemSmallTitleJTT": "F@D",
      "tjDcspmd": "9@pQ",
      "tjPrefitText": "bWWPmz",
      "商品标题": "fug6",
      "tjAppentrancePic": "%gycKZ",
      "biqiangActImgUrl": "Fb%iU",
      "itemLabel": "WF)",
      "totalStock": "CJJ",
      "dcSpmd": "buyg",
      "oetime": "8&uQbtd",
      "ostime": "yFmjPBd",
      "dailyMarketingIcon": "JLWuf",
      "itemPreSaleUrl": "lCP7E8",
      "couponTemplateIconUrl": "N@)2D",
      "expandMoney": "!(2ial",
      "titleIconsDacu": "AX*#K",
      "flag": "$%o",
      "timeLimitedList": "8RxeJ",
      "auction_tag": "I66%hI",
      "mjContent": "%or)",
      "hyalineItemPic": "i0L",
      "newMaterials": "HvtJg",
      "remindType": "%@v@",
      "inventoryQuantity": 7283616366857414,
      "fwType": "^[JyTk",
      "picUrlM": "KuHH",
      "frontFirstCatIds": "j60x",
      "marketingCopyWriting": "NJJCmB0",
      "preSale": "A&]qrn",
      "interestFreeCouponStageCount": "TiM!",
      "picUrlNew": "Gq8]",
      "interestFreeByStageStageCount": "tNWNc",
      "priceParts1": "PlhK",
      "priceParts0": "&[sCZ9",
      "period": "yK6x",
      "jddNum": "VB0u",
      "jddPrice": "vd0",
      "marketingDisplayInfoColor": "nk]5",
      "marketingDisplayInfo": "ddNs)",
      "superPlusIcon": "gP2dJ",
      "serviceIcon": "]$hj",
      "actIcon": "lzJtwm",
      "picUrlFromIc": "cVHj",
      "salesSite": "S#XG",
      "interestFreeCoupon": "OVq7vk",
      "interestFreePeriodIcon": "1@HjtY",
      "stageCount": "dBOo",
      "shortName": "7U[@",
      "itemStatus": "A6j7(",
      "juId": "GW&gf",
      "kolTags": "TAviH",
      "kolDeclaration": "TSXb$4vq",
      "kolName": "SV3",
      "kolLogo": "http://dummyimage.com/400x400",
      "shopLongImg": "http://dummyimage.com/900x1200",
      "isLargePayShop": "true",
      "itemCountryName": "z)b",
      "itemCountryLogo": "http://dummyimage.com/250x250\t",
      "isGlobalSeller": "true",
      "itemCollectCount": 1355047140438926,
      "itemDeclaration": "wzWCb#*EQ",
      "itemStockDesc": "Fy%D",
      "itemLogisticsText": "k45$F",
      "presentImg": "http://dummyimage.com/100x100.png",
      "shopDesc1": "vnGk4ul",
      "shopDesc2": "%RGeX0W",
      "itemInventoryQuantity": 7820114108631606,
      "itemInfo": "a(EBoF#UtGiV1"
    }]
  }
}