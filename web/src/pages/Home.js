import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';
import connectImg from '../img/connect.png';
import basicGraphImg from '../img/basic-graph.png';

class Home extends Component {
  state = {
    data: [
      {
        title: 'Week 1 - Graph Connectivity',
        description: 'Visualize Thai Internet Connectivity',
        url: '/week1',
        img: connectImg,
      },
      {
        title: 'Week 3 - Basic Graph',
        description: 'Analytics and Visualization from Login Logs',
        url: '/week3',
        img: basicGraphImg,
      },
      {
        title: 'Week 4 - Advanced Graph',
        description:
          'Analytics and Visualization from Web Logs usin Advanced Graph',
        url: '/week4',
        img: '',
      },
    ],
  };
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <p className="title">01204427 - Applied Security Visualization</p>
        <div className="content">
          <List
            itemLayout="horizontal"
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.img} />}
                  title={<Link to={item.url}>{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Home;
