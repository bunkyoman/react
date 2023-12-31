// Counter.js
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>카운터: {this.state.count}</h1>
        <button onClick={this.increment}>증가</button>
        <button onClick={this.decrement}>감소</button>
      </div>
    );
  }
}

export default Counter;