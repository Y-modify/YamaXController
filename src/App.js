import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="control">
        <div className="control-up">
          ↑
        </div>
        <div className="control-right">
          →
        </div>
        <div className="control-left">
          ←
        </div>
        <div className="control-down">
          ↓
        </div>
      </div>
    );
  }
}

export default App;
