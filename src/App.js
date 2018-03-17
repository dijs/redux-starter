import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <span className="c1">React</span> + <span className="c2">Redux</span>
          </h1>
        </header>
        <p className="counter" onClick={this.props.increment}>
          { this.props.count }
        </p>
        <button className="button1" onClick={this.props.increment}>Increment</button>
        <button className="button2" onClick={this.props.incrementAsync}>Increment Async</button>
      </div>
    );
  }
}

export default hot(module)(App);
