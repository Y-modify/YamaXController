import React, { Component } from 'react';
import { FaCoffee, FaBolt } from 'react-icons/fa';
import qs from 'querystring'

import Controller from './Controller'

import './App.css';

window.WebSocket = window.WebSocket || window.MozWebSocket;

class App extends Component {
  constructor(props) {
    super(props)

    const host = qs.parse(window.location.search.substr(1)).host
    this.connection = new WebSocket(host ? `ws://${host}` : 'ws://192.168.2.116:3333');
    this.connection.onopen = () => {
      this.setState({
        connectionState: this.connection.readyState
      })
    }

    this.state = {
      connectionState: WebSocket.CONNECTING,
      is_sitting: false
    }
  }

  handleDrag = ({x, y}) => {
    this.connection.send(`pos ${x} ${y}`)
  }

  handleStop = () => {
    this.connection.send(`stop`)
  }

  handleSit = () => {
    this.connection.send(this.state.is_sitting ? 'situp' : 'sitdown')
    this.setState({
      is_sitting: !this.state.is_sitting
    })
  }

  render() {
    return (
      <div className="container">
        <Controller onDrag={this.handleDrag} onStop={this.handleStop} connectionState={this.state.connectionState} />
        <div className="sit-button-container">
          <div className="sit-button" onClick={this.handleSit}>
            {this.state.is_sitting ? <FaBolt /> : <FaCoffee />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
