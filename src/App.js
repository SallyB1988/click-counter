import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">Counter is {this.state.counter}</h1>
        <button data-test="increment-button" onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default App;
