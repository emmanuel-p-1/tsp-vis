import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';

import './Visualiser.css';

export default class Visualiser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [
          { id: 0 }
        ],
        links: [
        ]
      },
      config: {},
      nodeCount: 1
    };
  }

  createNode = () => {
    const newNode = `${this.state.nodeCount}`;
    this.state.data.nodes.push({ id: newNode });
    this.setState({ data: this.state.data, nodeCount: this.state.nodeCount + 1 });
  }

  render() {
    return (
      <Graph 
        id="graph"
        data={this.state.data}
        config={this.state.config}
        onClickGraph={this.createNode}
      />
    );
  }
}