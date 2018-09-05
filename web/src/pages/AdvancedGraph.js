import React, { Component } from 'react';
import BarChart from '../components/BarChart';
import requestsData from '../data/week4/3.1.1';
class AdvancedGraph extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Advanced Graph</p>
        <p>Total Requests</p>
        <BarChart indexs={requestsData.indexs} data={requestsData.data} />
      </div>
    );
  }
}

export default AdvancedGraph;
