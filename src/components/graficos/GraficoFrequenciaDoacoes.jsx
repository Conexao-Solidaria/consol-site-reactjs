import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const LineChart = () => {
  useEffect(() => {
    const series = [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        stack: 'a',
        name: 'a'
      },
      {
        data: [10, 46, 64, '-', 0, '-', 0],
        type: 'bar',
        stack: 'a',
        name: 'b'
      },
      {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar',
        stack: 'a',
        name: 'c'
      },
      {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar',
        stack: 'b',
        name: 'd'
      },
      {
        data: [10, 20, 150, 0, '-', 50, 10],
        type: 'bar',
        stack: 'b',
        name: 'e'
      }
    ];

    const stackInfo = {};
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) {
          continue;
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: []
          };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data && data !== '-') {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }
    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data;
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 20 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j],
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
          }
        };
      }
    }

    const chartDom = document.getElementById('chart');
    const myChart = echarts.init(chartDom);
    const option = {
      text: 'Gráfico de Barras Empilhadas',
        subtext: 'Exemplo de gráfico com barras empilhadas',
        left: 'center',
        top: 'top',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold'
        },
        subtextStyle: {
          fontSize: 12
        }
      ,xAxis: {
        type: 'category',
        data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']
      },
      yAxis: {
        type: 'value'
      },
      series: series,
      legend: {
        data: ['a', 'b', 'c', 'd', 'e']
      }
    };
    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: '100%', height: '100%' }}></div>;
};

export default LineChart;
