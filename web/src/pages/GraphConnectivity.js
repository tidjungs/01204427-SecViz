import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import doministicJSON from '../data/doministic';
import internationalJSON from '../data/international';

const getOption = dataSet => ({
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      progressiveThreshold: 700,
      data: dataSet.nodes.map(function(node) {
        return {
          x: node.x,
          y: node.y,
          id: node.id,
          name: node.label,
          symbolSize: node.size,
          itemStyle: {
            normal: {
              color: node.color,
            },
          },
        };
      }),
      edges: dataSet.edges.map(function(edge) {
        return {
          source: edge.sourceID,
          target: edge.targetID,
        };
      }),
      label: {
        emphasis: {
          position: 'right',
          show: true,
        },
      },
      roam: true,
      focusNodeAdjacency: true,
      lineStyle: {
        normal: {
          width: 0.5,
          curveness: 0.3,
          opacity: 0.7,
        },
      },
    },
  ],
});
class VisualLog extends Component {
  state = {
    option: getOption(doministicJSON),
  };
  onDataChange = dataSet => () => {
    this.setState({
      option: getOption(dataSet),
    });
  };
  render() {
    return (
      <div>
        <div style={{ height: '5vh' }}>
          <button onClick={this.onDataChange(doministicJSON)}>DOM</button>
          <button onClick={this.onDataChange(internationalJSON)}>INTER</button>
        </div>
        <ReactEcharts
          option={this.state.option}
          theme={'dark'}
          style={{ height: '95vh' }}
        />
      </div>
    );
  }
}

export default VisualLog;
