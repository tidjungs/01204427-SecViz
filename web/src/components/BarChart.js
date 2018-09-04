import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const getOption = (indexs, data) => ({
  xAxis: {
    type: 'category',
    data: indexs,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: data,
      type: 'bar',
    },
  ],
});

const BarChart = props => (
  <ReactEcharts option={getOption(props.indexs, props.data)} theme={'dark'} />
);

BarChart.propTypes = {
  indexs: PropTypes.array,
  data: PropTypes.data,
};

export default BarChart;
