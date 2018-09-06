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
import './AdvancedGraph.css';
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
      <div className="adv-graph-layout">
        <p className="title">Advanced Graph</p>
        <p className="sub-title">Total Requests</p>
        <BarChart indexs={requestsData.indexs} data={requestsData.data} />
        <br />
        <p className="sub-title">Percentage of requests from each user.</p>
        <TreeMap data={this.state.usersData} />
        <br />
        <p className="sub-title">Top Users Requests</p>
        <Parallel data={this.state.topUserRequestData} />
        <br />
        <p className="sub-title">Top Egress Host</p>
        <TreeMap data={this.state.egressHostData} />
        <br />
        <p className="sub-title">Top Ingress Host</p>
        <TreeMap data={this.state.ingressHostData} />
        <br />
        <p className="sub-title">Top Egress File Type</p>
        <TreeMap data={this.state.egressFileTypeData} />
        <br />
        <p className="sub-title">Top Ingress File Type</p>
        <TreeMap data={this.state.ingressFileTypeData} />
      </div>
    );
  }
}

export default AdvancedGraph;
