import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';

import './App.css';

class App extends Component {
  state = {
    assignments: [
      {
        title: 'Week1',
        color: '#34495e',
        topics: [
          { title: 'Domestic graph', link: '', icon: 'home' },
          { title: 'International graph', link: '', icon: 'global' },
        ],
      },
      {
        title: 'Week3',
        color: '#2980b9',
        topics: [{ title: 'Visualization log', link: '', icon: 'bar-chart' }],
      },
    ],
  };
  render() {
    return (
      <div className="app">
        <p className="title">01204427 - Applied Security Visualization</p>
        <div className="content">
          {this.state.assignments.map(asm => (
            <Card
              title={asm.title}
              className="card"
              headStyle={{
                backgroundColor: asm.color,
                color: 'white',
              }}
            >
              {asm.topics.map(topic => (
                <Button className="topic-btn">
                  <Icon type={topic.icon} />
                  <label className="topic-label">{topic.title}</label>
                </Button>
              ))}
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
