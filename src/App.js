import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="control control-up">
          ↑
        </div>
        <div className="control control-right">
          →
        </div>
        <div className="control control-left">
          ←
        </div>
        <div className="control control-down">
          ↓
        </div>
      </div>
    );
  }
}

export default App;
