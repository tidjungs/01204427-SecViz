import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const getOption = data => ({
  parallelAxis: [
    {
      dim: 0,
      name: 'Time',
      type: 'category',
      data: [...new Set(data.map(d => d[0]))],
    },
    {
      dim: 1,
      name: 'Username',
      type: 'category',
      data: [...new Set(data.map(d => d[1]))],
    },
    {
      dim: 2,
      name: 'Src IP',
      type: 'category',
      data: [...new Set(data.map(d => d[2]))],
    },
    {
      dim: 3,
      name: 'Dst IP',
      type: 'category',
      data: [...new Set(data.map(d => d[3]))],
    },
    {
      dim: 4,
      name: 'Host',
      type: 'category',
      data: [...new Set(data.map(d => d[4]))],
    },
    {
      dim: 5,
      name: 'Dst Port',
      type: 'category',
      data: [...new Set(data.map(d => d[5]))],
    },
  ],
  series: [
    {
      type: 'parallel',
      data: data,
    },
  ],
});

const TreeMap = props => (
  <ReactEcharts option={getOption(props.data)} theme={'dark'} />
);

TreeMap.propTypes = {
  data: PropTypes.array,
};

export default TreeMap;
