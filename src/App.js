import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './App.css';

window.WebSocket = window.WebSocket || window.MozWebSocket;

const connection = new WebSocket('ws://192.168.2.116:3333');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {
        x: window.innerWidth/2 - 50,
        y: window.innerHeight/2 - 50
      }
    }
  }

  handleDrag = (e, data) => {
    this.setState({
      position: {
        x: data.x,
        y: data.y
      }
    })
    connection.send(`pos ${data.x - window.innerWidth/2 - 50} ${data.y - window.innerHeight/2 - 50}`)
  }

  handleStop = () => {
    this.setState({
      position: {
        x: window.innerWidth/2 - 50,
        y: window.innerHeight/2 - 50
      }
    })
    connection.send(`stop`)
  }

  render() {
    return (
      <div className="container">
        <Draggable
          position={this.state.position}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="control">
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
