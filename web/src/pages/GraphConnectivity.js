import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Button } from 'antd';
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
    dataIndex: 0,
    option: getOption(doministicJSON),
  };
  onDataChange = (dataSet, dataIndex) => () => {
    this.setState({
      dataIndex,
      option: getOption(dataSet),
    });
  };
  render() {
    return (
      <div>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Button
            disabled={this.state.dataIndex === 0}
            style={{ marginRight: '10px' }}
            onClick={this.onDataChange(doministicJSON, 0)}
          >
            DOM
          </Button>
          <Button
            disabled={this.state.dataIndex === 1}
            onClick={this.onDataChange(internationalJSON, 1)}
          >
            INTER
          </Button>
        </div>
        <ReactEcharts option={this.state.option} style={{ height: '90vh' }} />
      </div>
    );
  }
}

export default VisualLog;
