import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import GraphConnectivity from './pages/GraphConnectivity';
import BasicGraph from './pages/BasicGraph';
import AdvancedGraph from './pages/AdvancedGraph';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/week1" component={GraphConnectivity} />
            <Route exact path="/week3" component={BasicGraph} />
            <Route exact path="/week4" component={AdvancedGraph} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
