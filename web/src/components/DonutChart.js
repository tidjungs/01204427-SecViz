import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const getOption = (title, indexs, data, tooltipText) => ({
  title: {
    text: title,
    right: '30px',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: indexs,
  },
  series: [
    {
      name: tooltipText,
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data,
    },
  ],
});

const Donut = props => (
  <ReactEcharts
    option={getOption(props.title, props.indexs, props.data, props.tooltipText)}
    theme={'dark'}
  />
);

Donut.propTypes = {
  title: PropTypes.string,
  indexs: PropTypes.array,
  data: PropTypes.array,
  tooltipText: PropTypes.string,
};

export default Donut;
