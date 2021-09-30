'use strict';

import React, { Component } from 'react';
import Icon from '@ant-design/icons';
import saasSimulator from '@alife/saas-simulator';
import { fetch } from 'whatwg-fetch';
import './style.css';

const print = function(value) {
  console.log(value);
};
class Block_0 extends Component {
  id1() {
    fetch(
      'https://pre-apistudio.alibaba-inc.com/openapi/mock_api?projectId=5fc611b47f32555337dc5540&api=mtop.alsc.pos.bill.customer.batchqueryanalysis&errorCode=date&param={%22analysisIds%22:[%22OVERALL_FLOW_OVERVIEW%22,%22INSIGHT_OVERVIEW%22,%22MEMBER_CHANNEL%22,%22CUSTOMER_CHANNEL%22],%22intervalType%22:%22LAST_SEVEN_DAYS%22,%22intervalTime%22:%222021-05-16%22,%22bizChannel%22:%22%E5%85%A8%E9%83%A8%22}',
      { method: 'GET', body: {} }
    ).then(response => response.json());
  }
  render() {
    return (
      <div className="mod">
        {true && (
          <saasSimulator className="box">
            <div className="hd">
              <div className="normal_div">
                <div className="normal_div_1" label={'erert'}>
                  {true && <span className="txt">新增会员(人)</span>}
                  <img
                    className="icon-money"
                    src={'https://img.alicdn.com/imgextra/i3/O1CN01bpNoOq1gk1oyxNGJm_!!6000000004179-2-tps-22-22.png'}
                  />
                </div>
                <span className="word">23,426</span>
                <span className="text">undefined</span>
              </div>
              <div className="normal_div_2">
                <div className="normal_div_3">
                  <span className="txt_1">消费会员(人)</span>
                  <Icon
                    className="icon-money_1"
                    onClick={e => {
                      console.log('sdfsdf');
                    }}
                  />
                </div>
                <span className="word_1">23,426</span>
                <div className="normal_div_4">
                  <div className="empty" />
                  <div className="normal_div_5">
                    <span className="text_1">+0.25%</span>
                  </div>
                </div>
              </div>
              <div className="normal_div_6">
                <div className="normal_div_7">
                  <span className="txt_2">累计会员(人)</span>
                  <img
                    className="icon-money_2"
                    src={'https://img.alicdn.com/imgextra/i4/O1CN01EXEvg41MsSnjEoExT_!!6000000001490-2-tps-22-22.png'}
                  />
                </div>
                <span className="word_2">23,426</span>
              </div>
            </div>
            <div className="bd">
              <div className="normal_div_8">
                <div className="normal_div_9">
                  <img
                    className="line"
                    src={'https://img.alicdn.com/imgextra/i4/O1CN019pPYxH26E8FaiKsca_!!6000000007629-2-tps-1198-14.png'}
                  />
                  <img
                    className="line_1"
                    src={'https://img.alicdn.com/imgextra/i2/O1CN01BALslg20StJoGJNDp_!!6000000006849-2-tps-1434-6.png'}
                  />
                  <img
                    className="line_2"
                    src={'https://img.alicdn.com/imgextra/i4/O1CN01Hc9xld25typ2vyQL9_!!6000000007585-2-tps-1434-6.png'}
                  />
                  <div className="normal_div_10">
                    <img
                      className="icon-locate"
                      src={'https://img.alicdn.com/imgextra/i3/O1CN01mmy3DN1onhvhYVSIY_!!6000000005270-2-tps-20-20.png'}
                    />
                    <span className="text_2">支付宝</span>
                    <img
                      className="icon"
                      src={'https://img.alicdn.com/imgextra/i1/O1CN01JUEs1y1iZc32NNOTA_!!6000000004427-2-tps-20-20.png'}
                    />
                    <span className="txt_3">饿了么</span>
                    <img
                      className="icon_1"
                      src={'https://img.alicdn.com/imgextra/i3/O1CN01cXTWny1thov1YfSMk_!!6000000005934-2-tps-20-20.png'}
                    />
                    <span className="word_3">口碑</span>
                    <img
                      className="icon_2"
                      src={'https://img.alicdn.com/imgextra/i4/O1CN01beU8kw1GtTzOCUiKt_!!6000000000680-2-tps-20-20.png'}
                    />
                    <span className="text_3">微信</span>
                    <img
                      className="icon-locate_1"
                      src={'https://img.alicdn.com/imgextra/i3/O1CN01x0v80S1Ti7A4Ljb2q_!!6000000002415-2-tps-20-20.png'}
                    />
                    <span className="txt_4">后台</span>
                  </div>
                  <div className="normal_div_11">
                    <div className="block">
                      <span className="num">3200</span>
                      <span className="num_1">2400</span>
                      <span className="num_2">1600</span>
                      <span className="num_3">800</span>
                      <span className="num_4">0</span>
                    </div>
                    <div className="block_1">
                      <div className="normal_div_12">
                        <img
                          className="floorBg"
                          src={
                            'https://img.alicdn.com/imgextra/i2/O1CN01ygxH401xfJD3XLXqI_!!6000000006470-2-tps-1200-126.png'
                          }
                        />
                        <div className="normal_div_13">
                          <img
                            className="longBg"
                            src={
                              'https://img.alicdn.com/imgextra/i4/O1CN012N4ii91WlGjijeBfm_!!6000000002828-2-tps-1200-162.png'
                            }
                          />
                          <img
                            className="icon_3"
                            src={
                              'https://img.alicdn.com/imgextra/i3/O1CN019sRbgM1lE2EcWcA3y_!!6000000004786-2-tps-18-18.png'
                            }
                          />
                          <img
                            className="icon_4"
                            src={
                              'https://img.alicdn.com/imgextra/i4/O1CN019vUQtw22UqEdGyzq4_!!6000000007124-2-tps-18-18.png'
                            }
                          />
                          <img
                            className="icon_5"
                            src={
                              'https://img.alicdn.com/imgextra/i4/O1CN01q31Ixb1N1ciiBantE_!!6000000001510-2-tps-18-18.png'
                            }
                          />
                        </div>
                        <img
                          className="bar"
                          src={
                            'https://img.alicdn.com/imgextra/i3/O1CN01rjcA8k1JDkkVawhJx_!!6000000000995-2-tps-1200-140.png'
                          }
                        />
                        <div className="normal_div_14">
                          <div className="normal_div_15">
                            <div className="normal_div_16">
                              <img
                                className="icon-play"
                                src={
                                  'https://img.alicdn.com/imgextra/i2/O1CN01YayvBS1Efclsw2Wrv_!!6000000000379-2-tps-18-18.png'
                                }
                              />
                              <img
                                className="icon_6"
                                src={
                                  'https://img.alicdn.com/imgextra/i4/O1CN01ftRnSL275GBzkjQci_!!6000000007745-2-tps-18-18.png'
                                }
                              />
                            </div>
                            <div className="normal_div_17">
                              <img
                                className="icon-play_1"
                                src={
                                  'https://img.alicdn.com/imgextra/i2/O1CN01A7UCcF26nOkHLmyDJ_!!6000000007706-2-tps-18-18.png'
                                }
                              />
                              <img
                                className="icon_7"
                                src={
                                  'https://img.alicdn.com/imgextra/i4/O1CN01zQSU0q1FI62jcibXH_!!6000000000463-2-tps-18-18.png'
                                }
                              />
                            </div>
                            <div className="normal_div_18">
                              <img
                                className="icon-play_2"
                                src={
                                  'https://img.alicdn.com/imgextra/i4/O1CN01WUjQIe1cGTo7il2fo_!!6000000003573-2-tps-18-18.png'
                                }
                              />
                              <img
                                className="icon_8"
                                src={
                                  'https://img.alicdn.com/imgextra/i2/O1CN01YJXFCT1KFPnmmzPn9_!!6000000001134-2-tps-18-18.png'
                                }
                              />
                            </div>
                            <div className="normal_div_19">
                              <img
                                className="icon-play_3"
                                src={
                                  'https://img.alicdn.com/imgextra/i2/O1CN01hMQxoX27tBMi0O6NV_!!6000000007854-2-tps-18-18.png'
                                }
                              />
                              <img
                                className="icon_9"
                                src={
                                  'https://img.alicdn.com/imgextra/i1/O1CN012Vz2yP1olsLaS3LQI_!!6000000005266-2-tps-18-18.png'
                                }
                              />
                            </div>
                          </div>
                          <img
                            className="icon_10"
                            src={
                              'https://img.alicdn.com/imgextra/i3/O1CN01vkKcDR1P4UQxQjtlZ_!!6000000001787-2-tps-18-18.png'
                            }
                          />
                          <div className="normal_div_20">
                            <div className="normal_div_21">
                              <img
                                className="icon_11"
                                src={
                                  'https://img.alicdn.com/imgextra/i1/O1CN01LfckUv1ghjqLjVpMZ_!!6000000004174-2-tps-18-18.png'
                                }
                              />
                            </div>
                            <img
                              className="icon_12"
                              src={
                                'https://img.alicdn.com/imgextra/i1/O1CN01L76Jcj2ADS7sjvxRd_!!6000000008169-2-tps-18-18.png'
                              }
                            />
                            <div className="normal_div_22">
                              <img
                                className="icon-play_4"
                                src={
                                  'https://img.alicdn.com/imgextra/i4/O1CN01g3Pf6f1KIcZax0z1d_!!6000000001141-2-tps-18-18.png'
                                }
                              />
                              <img
                                className="icon_13"
                                src={
                                  'https://img.alicdn.com/imgextra/i1/O1CN01hAktgq1Z7N50mmrKV_!!6000000003147-2-tps-18-18.png'
                                }
                              />
                            </div>
                            <img
                              className="icon_14"
                              src={
                                'https://img.alicdn.com/imgextra/i4/O1CN01scn6in1Zt0H1MaAA6_!!6000000003251-2-tps-18-18.png'
                              }
                            />
                          </div>
                        </div>
                        <img
                          className="icon-play_5"
                          src={
                            'https://img.alicdn.com/imgextra/i2/O1CN01zqPay51yTgmAi9wvj_!!6000000006580-2-tps-18-18.png'
                          }
                        />
                        <img
                          className="icon-play_6"
                          src={
                            'https://img.alicdn.com/imgextra/i4/O1CN01NvsSeH1f7j5GMR6BW_!!6000000003960-2-tps-18-18.png'
                          }
                        />
                        <img
                          className="icon_15"
                          src={
                            'https://img.alicdn.com/imgextra/i2/O1CN010eB7UU1LqLLsTlapQ_!!6000000001350-2-tps-18-18.png'
                          }
                        />
                        <div className="normal_div_23">
                          <img
                            className="icon_16"
                            src={
                              'https://img.alicdn.com/imgextra/i4/O1CN01CB5tMF1sr9MqvHO1k_!!6000000005819-2-tps-18-18.png'
                            }
                          />
                        </div>
                        <img
                          className="icon_17"
                          src={
                            'https://img.alicdn.com/imgextra/i3/O1CN01SPVp8j1xFf1sHP3LT_!!6000000006414-2-tps-18-18.png'
                          }
                        />
                        <img
                          className="icon_18"
                          src={
                            'https://img.alicdn.com/imgextra/i4/O1CN01hbfkDv222u4lkl03P_!!6000000007063-2-tps-18-18.png'
                          }
                        />
                        <img
                          className="icon-play_7"
                          src={
                            'https://img.alicdn.com/imgextra/i4/O1CN01xVs7KG1DItV1GpkhA_!!6000000000194-2-tps-18-18.png'
                          }
                        />
                        <img
                          className="icon_19"
                          src={
                            'https://img.alicdn.com/imgextra/i3/O1CN01RfNyct1XRrZTRKvZu_!!6000000002921-2-tps-18-18.png'
                          }
                        />
                        <div className="normal_div_24">
                          <img
                            className="icon-play_8"
                            src={
                              'https://img.alicdn.com/imgextra/i2/O1CN01b67LMc1mUoMJ3PUSm_!!6000000004958-2-tps-18-18.png'
                            }
                          />
                          <img
                            className="icon_20"
                            src={
                              'https://img.alicdn.com/imgextra/i2/O1CN01UPshXc1Gx99qumQaM_!!6000000000688-2-tps-18-18.png'
                            }
                          />
                        </div>
                        <img
                          className="icon-play_9"
                          src={
                            'https://img.alicdn.com/imgextra/i4/O1CN01FA1Ya11V9QOUmZ7r4_!!6000000002610-2-tps-18-18.png'
                          }
                        />
                      </div>
                      <div className="div" />
                      <div className="normal_div_25">
                        <img
                          className="line_3"
                          src={
                            'https://img.alicdn.com/imgextra/i3/O1CN011IcDMd1X2fmrPL15N_!!6000000002866-2-tps-1434-6.png'
                          }
                        />
                        <img
                          className="line_4"
                          src={
                            'https://img.alicdn.com/imgextra/i3/O1CN01WdIRaN1xUm6IBGqOS_!!6000000006447-2-tps-1434-6.png'
                          }
                        />
                      </div>
                      <div className="normal_div_26">
                        <div className="normal_div_27">
                          <div className="empty_1" />
                          <div className="lineWrap">
                            <img
                              className="line_5"
                              src={
                                'https://img.alicdn.com/imgextra/i2/O1CN01I4BVRc1wDzyc71BAS_!!6000000006275-2-tps-1434-6.png'
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="normal_div_28">
                    <span className="txt_5">5-1</span>
                    <span className="word_4">5-2</span>
                    <span className="text_4">5-3</span>
                    <span className="txt_6">5-4</span>
                    <span className="word_5">5-5</span>
                    <span className="text_5">5-6</span>
                  </div>
                </div>
              </div>
              <div className="normal_div_29">
                <span className="num_5">2810</span>
                <span className="word_6">2020-5-3</span>
                <div className="list">
                  <div className="row">
                    <span className="text_6">新增会员</span>
                    <span className="num_6">2810</span>
                  </div>
                  <div className="row2">
                    <span className="word_7">支付宝</span>
                    <span className="num_7">358</span>
                  </div>
                  <div className="row3">
                    <span className="txt_7">饿了么</span>
                    <span className="num_8">2810</span>
                  </div>
                  <div className="row4">
                    <span className="text_7">口碑</span>
                    <span className="num_9">358</span>
                  </div>
                </div>
                <span className="word_8">微信</span>
                <div className="normal_div_30">
                  <span className="text_8">后台</span>
                  <span className="num_10">358</span>
                </div>
              </div>
            </div>
          </saasSimulator>
        )}
      </div>
    );
  }
}
export default Block_0;
