import ReactEcharts from 'echarts-for-react';

const ChartBox = ({ data }: any) => {
  console.log(data);
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ['지역', 'bar'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '지역',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: 'bar',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: '지역',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return (value as number) + ' ml';
          },
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: 'bar',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return (value as number) + ' °C';
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };
  return (
    <ReactEcharts
      option={options}
      style={{ width: '100%', height: '100%' }}
    ></ReactEcharts>
  );
};

export default ChartBox;
