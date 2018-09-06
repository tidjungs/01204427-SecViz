import React, { Component } from 'react';
import BarChart from '../components/BarChart';
import TreeMap from '../components/TreeMap';
import Parallel from '../components/Parallel';
import requestsData from '../data/week4/3.1.1';
import usersData from '../data/week4/3.1.2';
import topUserRequestData from '../data/week4/3.2';
import egressHostData from '../data/week4/3.3';
import ingressHostData from '../data/week4/3.4';
import egressFileTypeData from '../data/week4/3.5';
import ingressFileTypeData from '../data/week4/3.6';
class AdvancedGraph extends Component {
  state = {
    topUserRequestData,
    usersData,
    egressHostData,
    ingressHostData,
    egressFileTypeData,
    ingressFileTypeData,
  };
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>Advanced Graph</p>
        <p>Total Requests</p>
        <BarChart indexs={requestsData.indexs} data={requestsData.data} />
        <br />
        <p>Percentage of requests from each user.</p>
        <TreeMap data={this.state.usersData} />
        <br />
        <p>Top Users Requests</p>
        <Parallel data={this.state.topUserRequestData} />
        <br />
        <p>Top Egress Host</p>
        <TreeMap data={this.state.egressHostData} />
        <br />
        <p>Top Ingress Host</p>
        <TreeMap data={this.state.ingressHostData} />
        <br />
        <p>Top Egress File Type</p>
        <TreeMap data={this.state.egressFileTypeData} />
        <br />
        <p>Top Ingress File Type</p>
        <TreeMap data={this.state.ingressFileTypeData} />
      </div>
    );
  }
}

export default AdvancedGraph;
