import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const getOption = data => ({
  series: [
    {
      type: 'treemap',
      data,
    },
  ],
});

const TreeMap = props => (
  <ReactEcharts
    style={{ height: '600px' }}
    option={getOption(props.data)}
    theme={'dark'}
  />
);

TreeMap.propTypes = {
  data: PropTypes.array,
};

export default TreeMap;
