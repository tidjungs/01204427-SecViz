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
  <ReactEcharts
    style={{ height: '600px' }}
    option={getOption(props.indexs, props.data)}
    theme={'dark'}
  />
);

BarChart.propTypes = {
  indexs: PropTypes.array,
  data: PropTypes.array,
};

export default BarChart;
