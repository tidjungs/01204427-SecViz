import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  state = {
    data: [
      {
        title: 'Week 1 - Graph Connectivity',
        description: 'Visualize Thai Internet Connectivity',
        url: '/week1',
      },
      {
        title: 'Week 3 - Basic Graph',
        description: 'Analytics and Visualization from Login Logs',
        url: '/week3',
      },
      {
        title: 'Week 4 - Advanced Graph',
        description:
          'Analytics and Visualization from Web Logs usin Advanced Graph',
        url: '/week4',
      },
    ],
  };
  render() {
    return (
      <div>
        <p className="title">01204427 - Applied Security Visualization</p>
        <div className="content">
          <List
            itemLayout="horizontal"
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
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
