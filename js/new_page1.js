(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.trend .chart'));
    // 2.指定配置项和数据
    var option = {
        title: [
          {
            text: '停留时间',
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
          data: ['01', '02', '03', '04', '05', '06', '07']
        },
        yAxis: {
          type: 'value',
          name: '单位：kgce/t '
        },
        grid: { left: '0.05%',
            right: '12%',   
            bottom: '15%',
            top: '30%',
            containLabel: true },
        series: [
          {
            data: [1000, 2100, 3500, 2450, 3300, 3000, 200],
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
            }
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.consume .chart'));
    // 2.指定配置项和数据
    var option = {
        title: {
                text: '能耗占比',
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
            top: '15%',
            left: 'left',
            textStyle: {
                color: '#eeeeee',
                fontSize: 10
              }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '65%'],
            center: ['60%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 31.29, name: '空调用电' },
              { value: 19.74, name: '耗水用电' },
              { value: 20.76, name: '动力用电' },
              { value: 23.27, name: '照明用电' },
              { value: 2.93, name: '其他用电' }
            ]
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.use_water .chart'));
    // 2.指定配置项和数据
    var option = {
        title: {
          text: '上周用水量',
          left: 'center',
          textStyle: {
            color: '#01a9b7',
            fontSize: 17
          }
        },
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07']
        },
        yAxis: {
          type: 'value',
          name: '单位：吨 '
        },
        grid: { left: '0.05%',
            right: '12%',   
            bottom: '15%',
            top: '30%',
            containLabel: true 
        },
        series: [
          {
            data: [320, 180, 370, 275, 230, 245, 310],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#5470c6'
                },
            }
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();

(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.use_electricity .chart'));
    // 2.指定配置项和数据
    var option = {
        title: {
          text: '上周用电量',
          left: 'center',
          textStyle: {
            color: '#01a9b7',
            fontSize: 17
          }
        },
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07']
        },
        yAxis: {
          type: 'value',
          name: '   单位：kW·h'
        },
        grid: { left: '0.5%',
            right: '15%',   
            bottom: '15%',
            top: '30%',
            containLabel: true 
        },
        series: [
          {
            data: [320, 180, 370, 275, 230, 245, 310],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#14eec3'
                },
            }
          }
        ]
      };
      // 3.把配置项给实例对象
      myChart.setOption(option);
})();