import React, { Component } from 'react';
import { FaArrowUp, FaArrowRight, FaArrowLeft, FaArrowDown } from 'react-icons/fa';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="control control-up">
          <FaArrowUp />
        </div>
        <div className="control control-right">
          <FaArrowRight />
        </div>
        <div className="control control-left">
          <FaArrowLeft />
        </div>
        <div className="control control-down">
          <FaArrowDown />
        </div>
      </div>
    );
  }
}

export default App;
