import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  state = {
    assignments: [
      {
        title: 'Week1',
        color: '#3498db',
        topics: [
          { title: 'Domestic graph', link: '/', icon: 'home' },
          { title: 'International graph', link: '/', icon: 'global' },
        ],
      },
      {
        title: 'Week3',
        color: '#27ae60',
        topics: [{ title: 'Visualization log', link: '/', icon: 'bar-chart' }],
      },
    ],
  };
  render() {
    return (
      <div>
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
                  <Link to={topic.link}>
                    <Icon type={topic.icon} />
                    <label className="topic-label">{topic.title}</label>
                  </Link>
                </Button>
              ))}
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
