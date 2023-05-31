(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.type .chart'));
    // 2.指定配置项和数据
    var option = {
        title: [
            {
              text: '入驻企业类型（占比）',
              left: 'center',
              textStyle: {
                  color: '#01a9b7',
                  fontSize: 17
                }
            }
        ],
        series: [
          {
            name: 'Chart',
            type: 'pie',
            radius: [21, 55],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 3
            },
            data: [
              { value: 40, name: '软件业' },
              { value: 25, name: '制造业' },
              { value: 37, name: '加工业' },
              { value: 33, name: '服务业' },
              { value: 28, name: '其他' }
            ]
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

// (function() {
//     // 1.实例化对象
//     var myChart = echarts.init(document.querySelector('.type .chart'));
//     // 2.指定配置项和数据
//     var option = {
//         title: {
//           text: '报警类型分析',
//           left: 'center',
//           textStyle: {
//             color: '#01a9b7',
//             fontSize: 17
//           }
//         },
//         tooltip: {
//           trigger: 'item'
//         },
//         legend: {
//           orient: 'vertical',
//           left: 'left',
//           textStyle: {
//             color: '#eeeeee',
//             fontSize: 10
//           }
//         },
//         textStyle: {
//           color: '#eeeeee',
//           fontSize: 10
//         },
//         series: [
//           {
//             name: '报警类型',
//             type: 'pie',
//             radius: '50%',
//             data: [
//               { value: 32, name: '重度报警' },
//               { value: 246, name: '一般报警' },
//               { value: 251, name: '中度报警' }
              
//             ],
//             emphasis: {
//               itemStyle: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)'
//               }
//             }
//           }
//         ]
//       };
//       // 3.把配置项给实例对象
//       myChart.setOption(option);
// })();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.report .chart'));
    // 2.指定配置项和数据
    var option = {
      title: [
        {
            text: '今日到岗人数（占比）',
            left: 'center',
            textStyle: {
                color: '#01a9b7',
                fontSize: 17
              }
          },
        {
          text: '83%',
          left: 'center',
          top: 'center',
          textStyle: {
              fontSize: 24,
              color: '#FFFFFF',
              fontFamily: 'DINAlternate-Bold, DINAlternate',
              foontWeight: '666',
          },
      }],
      polar: {//极坐标系地底板，类似于grid
          radius: ['55%', '77%'],
          center: ['50%', '50%'],
      },
      angleAxis: {//角度轴，一个圆圈
          max: 100,
          show: true,
          axisLabel: {
              show: false
          },
          axisTick: {
              show: false
          },
          splitLine: {
              show: false
          }
      },
      radiusAxis: {//径向轴，一段线段，type:'category'类目轴，类似的x轴的类目轴
          type: 'category',
          show: false,
          axisLabel: {
              show: true,
          },
          axisLine: {
              show: true,
          },
          axisTick: {
              show: true,
          },
      },
      series: [{
          name: '',
          type: 'bar',//柱状图
          roundCap: true,
          barWidth: 90,
          showBackground: true,
          backgroundStyle: {
              color: 'rgba(66, 66, 66, .3)',
          },
          data: [83],
          coordinateSystem: 'polar',//采用极坐标系

          itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{//color为渐变色
                      offset: 0,
                      color: '#16CEB9',
                  },
                  {
                      offset: 1,
                      color: '#6648FF',
                  },
                  ]),
              },
          },
      },
      {
          name: '',
          type: 'pie',//饼图
          startAngle: 90,//开始的角度
          radius: ['85%'],
          hoverAnimation: false,
          animation:false,//不开启动画，
          center: ['50%', '50%'],
          itemStyle: {
              color: 'rgba(66, 66, 66, 0)',//饼图的颜色，设置为透明
              borderWidth: 0,//主要显示边框
              borderColor: '#5269EE',
          },
          data: [100],
      },
      {
          name: '',
          type: 'pie',
          startAngle: 80,
          radius: ['55%'],
          hoverAnimation: false,
          animation:false,
          center: ['50%', '50%'],
          itemStyle: {
              color: 'rgba(66, 66, 66, .1)',
              borderWidth: 1,
              borderColor: '#5269EE',
          },
          data: [100],
      }
      ],

  };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.come_from .chart'));
    // 2.指定配置项和数据
    var option = {
      title: {
        text: '工作人员来源',
        left: 'left',
        textStyle: {
            color: '#01a9b7',
            fontSize: 17
          }
      },
      tooltip: {
        trigger: 'item'
      },
      radar: {
        indicator: [
          { text: '人才招聘会', max: 400 },
          { text: '招聘网站', max: 400 },
          { text: '校园招聘会', max: 400 },
          { text: '中介机构', max: 400 },
          { text: '内招', max: 400 }
        ]
      },
      series: (function () {
        var series = [];
        for (var i = 1; i <= 22; i++) {
          series.push({
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 1.1
            },
            emphasis: {
              areaStyle: {
                color: 'rgba(28, 33, 44, 0.3)'
              }
            },
            data: [
              {
                value: [
                  (40 - i) * 10,
                  (38 - i) * 4 + 60,
                  i * 6 + 10,
                  i * 9,
                  i * 17,
                ],
                name: i + 2000 + ''
              }
            ]
          });
        }
        return series;
      })()
    };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();


(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.change .chart'));
  // 2.指定配置项和数据
  var option = {
    title: [
      {
        text: '今日人流量',
        left: 'center',
        textStyle: {
            color: '#01a9b7',
            fontSize: 17
          }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#68a2a7'
        }
      }
    },
    legend: {
      data: ['进入', '离开'],
      left: 'right',
      top: '2%',
      textStyle: {
        color: '#eeeeee',
        fontSize: 10
      }
    },
    grid: {
      left: '2%',
      right: '3%',
      top: '25%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位：人'
      }
    ],
    series: [
      {
        name: '进入',
        type: 'line',
        areaStyle: {//区域填充渐变颜色
                  color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                          offset: 0, color: 'rgba(0,249,223,1)' // 0% 处的颜色
                      }, {
                          offset: 1, color: 'rgba(0,135,185,0.11)' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                  }
              },
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        data: [367, 211, 108, 55, 21, 211, 333, 289, 136, 214, 123, 48, 15]
      },
      {
        name: '离开',
        type: 'line',
        stack: 'Total',
              areaStyle: {//区域填充渐变颜色
                  color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                          offset: 0, color: 'rgba(148, 171, 123,1)' // 0% 处的颜色
                      }, {
                          offset: 1, color: 'rgba(170, 210, 87,0.11)' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                  }
              },
        emphasis: {
          focus: 'series'
        },
        data: [33, 145, 89, 412, 37, 54, 101, 120, 310, 377, 91, 21, 7]
      },
    ]
  };
    // 3.把配置项给实例对象
    myChart.setOption(option);
})();


(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.firms_number .firms'));
  // 2.指定配置项和数据
  var option = {
    title: [
      {
        text: '每月入驻情况',
        left: 'center',
        textStyle: {
            color: '#01a9b7',
            fontSize: 17
          }
      }
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    },
    yAxis: {
      type: 'value',
      name: '单位：户'
    },
    grid: {
      left: '2%',
      right: '3%',
      top: '21%',
      bottom: '37%',
      containLabel: true
    },
    series: [
      {
        data: [12, 15, 9, 17, 21, 18, 11, 14, 19, 16, 10, 15],
        type: 'line',
        areaStyle: {//区域填充渐变颜色
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(1, 112, 255,1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(0,135,185,0.11)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
      }
    ]
  };
    // 3.把配置项给实例对象
    myChart.setOption(option);
})();