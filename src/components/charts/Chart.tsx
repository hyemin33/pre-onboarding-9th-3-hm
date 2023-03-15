import ReactEcharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

const Chart = ({ data }: any) => {
  const [xarray, setXarray] = useState<string[]>([]);
  const [areaArray, setAreaArray] = useState<number[]>([]);
  const [barArray, setBarArray] = useState<number[]>([]);
  const [idArray, setIdArray] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      let xarrayThumb: string[] = [];
      let areaArrayThumb: number[] = [];
      let barArrayThumb: number[] = [];
      let idArrayThumb: string[] = [];

      // entry 타입은 무엇일까요.
      Object.entries(data).forEach((entry: any) => {
        xarrayThumb = [...xarrayThumb, entry[0]];
        areaArrayThumb = [...areaArrayThumb, entry[1].value_area];
        barArrayThumb = [...barArrayThumb, entry[1].value_bar];
        idArrayThumb = [...idArrayThumb, entry[1].id];
      });
      setXarray(xarrayThumb);
      setAreaArray(areaArrayThumb);
      setBarArray(barArrayThumb);
      setIdArray(idArrayThumb);
    }
  }, [data]);

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: 'red',
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
      data: ['Area', 'Bar'],
    },
    xAxis: [
      {
        axisLabel: {
          interval: 8,
          rotate: 55,
          formatter: function (value: string) {
            const label = value.split(' ');
            return label[0] + '\n' + label[1];
          },
          textStyle: {
            baseline: 'top',
            color: '#333',
            fontSize: 10,
            fontWeight: 'bold',
          },
        },
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
        itemStyle: {
          color: '#9ea1ff',
        },
        emphasis: {
          itemStyle: {
            color: '#6e1ef4',
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            backgroundColor: '#6e1ef4',
            fontWeight: 'bold',
            padding: 3,
            fontSize: 14,

            formatter: function (params: any) {
              return idArray[params.dataIndex];
            },
          },
        },
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
        itemStyle: {
          color: '#ff7875',
        },
        emphasis: {
          itemStyle: {
            color: '#a31515',
            borderColor: '#a31515',
            borderWidth: 5,
          },
        },
      },
    ],
  };
  return (
    <ReactEcharts option={options} style={{ width: '100%', height: '80%' }} />
  );
};

export default Chart;
