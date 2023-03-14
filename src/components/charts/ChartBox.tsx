import ReactEcharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

const ChartBox = ({ data }: any) => {
  const [xarray, setXarray] = useState();
  const [areaArray, setAreaArray] = useState();
  const [barArray, setBarArray] = useState();

  useEffect(() => {
    if (data) {
      const dataArray = Object.entries(data);
      const xarrayThumb = [];
      const areaArrayThumb = [];
      const barArrayThumb = [];
      for (let i = 0; i < dataArray.length; i++) {
        console.log(dataArray[i][1]);
        xarrayThumb.push(dataArray[i][0]);
        areaArrayThumb.push(dataArray[i][1].value_area);
        barArrayThumb.push(dataArray[i][1].value_bar);
      }
      setXarray(xarrayThumb);
      setAreaArray(areaArrayThumb);
      setBarArray(barArrayThumb);
    }
  }, [data]);

  console.log(barArray);

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
      data: ['Area', 'bar'],
    },
    xAxis: [
      {
        type: 'category',
        data: xarray,
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Area',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value}',
        },
      },
      {
        type: 'value',
        name: 'Bar',
        min: 10000,
        max: 20000,
        interval: 5000,
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    series: [
      {
        name: 'Area',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: number) {
            return value;
          },
        },
        data: areaArray,
      },
      {
        name: 'Bar',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: number) {
            return value;
          },
        },
        data: barArray,
      },
    ],
  };
  return (
    <ReactEcharts option={options} style={{ width: '100%', height: '100%' }} />
  );
};

export default ChartBox;
