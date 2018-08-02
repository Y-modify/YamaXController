import React, { Component } from 'react';
import qs from 'querystring'

import Controller from './Controller'
import SitButton from './SitButton'

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
      connectionState: WebSocket.CONNECTING
    }
  }

  handleDrag = ({x, y}) => {
    this.connection.send(`pos ${x} ${y}`)
  }

  handleStop = () => {
    this.connection.send(`stop`)
  }

  handleSit = (is_sitting) => {
    this.connection.send(is_sitting ? 'situp' : 'sitdown')
  }

  render() {
    return (
      <div className="container">
        <Controller onDrag={this.handleDrag} onStop={this.handleStop} connectionState={this.state.connectionState} />
        <SitButton onTap={this.handleSit} />
      </div>
    );
  }
}

export default App;
