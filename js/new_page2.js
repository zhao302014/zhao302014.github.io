(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.deal .chart'));
    // 2.指定配置项和数据
    var option = {
        title: [
            {
              text: '报警处理情况',
              left: 'center',
              textStyle: {
                  color: '#01a9b7',
                  fontSize: 17
                }
            }
          ],
        dataset: {
          source: [
            ['score', 'number', 'name'],
            [334, 334, '已经处理报警'],
            [246, 246, '未处理报警'],
            [580, 580, '报警总数']
          ]
        },
        grid: { left: '0.05%',
            right: '12%',   
            bottom: '15%',
            top: '21%',
            containLabel: true },
        xAxis: { name: '件' },
        yAxis: { type: 'category' },
        series: [
          {
            type: 'bar',
            encode: {
              x: 'number',
              y: 'name'
            },
            itemStyle: {
              normal: {
                label: {
                  formatter: [],
                  show:true,
                  position: "right",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: 15,
                    color: '#80cad7'
                  }
                },
                  color: function(params) {
                      var colorList = ['#91cc75','#fac858', '#5470c6'];
                      return colorList[params.dataIndex]
                  }
              }
          }
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.type .chart'));
    // 2.指定配置项和数据
    var option = {
        title: {
          text: '报警类型分析',
          left: 'center',
          textStyle: {
            color: '#01a9b7',
            fontSize: 17
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#eeeeee',
            fontSize: 10
          }
        },
        textStyle: {
          color: '#eeeeee',
          fontSize: 10
        },
        series: [
          {
            name: '报警类型',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 32, name: '重度报警' },
              { value: 246, name: '一般报警' },
              { value: 251, name: '中度报警' }
              
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.degree .chart'));
    // 2.指定配置项和数据
    var option = {
        title: [
          {
            text: '报警等级分析',
            left: 'center',
            textStyle: {
                color: '#01a9b7',
                fontSize: 17
              }
          }
        ],
        polar: {
          radius: [21, '50%']
        },
        angleAxis: {
          max: 600,
          startAngle: 90
        },
        radiusAxis: {
          type: 'category',
          data: ['等级四', '等级三', '等级二', '等级一'],
          show: false
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: [164,246,315,432],
          coordinateSystem: 'polar',
          label: {
            position: 'middle',
            formatter: '{b}: {c}',
            enabled: false
          }
        }
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.weight .detail_one'));
    // 2.指定配置项和数据
    var option = {
      title: {
              text: '客流负载',
              left: 'center',
              textStyle: {
                color: '#01a9b7',
                fontSize: 17
              }
            },
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '52%'],
          radius: '70%',
          min: 0,
          max: 100,
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 10,
            offsetCenter: [0, '-49%'],
            itemStyle: {
              color: 'inherit'
            }
          },
          axisTick: {
            length: 3,
            lineStyle: {
              color: '#92abb4',
              width: 1
            }
          },
          splitLine: {
            length: 5,
            lineStyle: {
              color: '#4e94a9',
              width: 2
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
              if (value === 0.875) {
                return 'Grade A';
              } else if (value === 0.625) {
                return 'Grade B';
              } else if (value === 0.375) {
                return 'Grade C';
              } else if (value === 0.125) {
                return 'Grade D';
              }
              return '';
            }
          },
          title: {
            offsetCenter: [0, '-10%'],
            fontSize: 20
          },
          detail: {
            fontSize: 21,
            offsetCenter: [0, '-15%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 1) + '%';
            },
            color: 'inherit'
          },
          data: [
            {
              value: 46,
              // name: '客流负载'
            }
          ]
        }
      ]
    };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();


(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.weight .detail_two'));
  // 2.指定配置项和数据
  var option = {
    title: [
      {
        text: '流量趋势',
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
      data: ['实时', '累计'],
      orient: 'vertical',
      left: 'right',
      top: '-1%',
      textStyle: {
        color: '#eeeeee',
        fontSize: 10
      }
    },
    grid: {
      left: '2%',
      right: '3%',
      top: '21%',
      bottom: '39%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
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
        name: '累计',
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
        data: [49, 39, 55, 26, 68, 79, 39, 47, 36, 40]
      },
      {
        name: '实时',
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
        data: [49, 44, 64, 67, 66, 36, 53, 42, 35, 61]
      },
    ]
  };
    // 3.把配置项给实例对象
    myChart.setOption(option);
})();


(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.weight .detail_three'));
  // 2.指定配置项和数据
  var option = {
    title: [
      {
        text: '总能耗趋势',
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
      data: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
    },
    yAxis: {
      type: 'value',
      name: '单位：kgce/t '
    },
    grid: {
      left: '2%',
      right: '3%',
      top: '21%',
      bottom: '39%',
      containLabel: true
    },
    series: [
      {
        data: [53, 56, 54, 49, 55, 52, 58, 50, 46, 48],
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