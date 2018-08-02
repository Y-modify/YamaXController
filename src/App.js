import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { FaRobot } from 'react-icons/fa';
import './App.css';

window.WebSocket = window.WebSocket || window.MozWebSocket;

const connection = new WebSocket('ws://192.168.2.116:3333');

class App extends Component {
  constructor(props) {
    super(props)
    this.originPosition = {
      x: window.innerWidth/2 - 50,
      y: window.innerHeight/2 - 50
    }

    this.state = {
      lastSent: {
        x: 0,
        y: 0
      },
      position: this.originPosition
    }
  }

  handleDrag = (e, data) => {
    this.setState({
      position: {
        x: data.x,
        y: data.y
      }
    })
    const {x, y} = this.state.lastSent
    const orig = this.originPosition
    const relX = data.x - orig.x
    const relY = data.y - orig.y
    const len  = Math.sqrt((relX - x)**2 + (relY - y)**2)
    if(len > 20) {
      connection.send(`pos ${relX} ${relY}`)
      this.setState({
        lastSent: {
          x: relX,
          y: relY
        }
      })
    }
  }

  handleStop = () => {
    this.setState({
      lastSent: {
        x: 0,
        y: 0
      },
      position: this.originPosition
    })
    connection.send(`stop`)
  }

  render() {
    return (
      <div className="container">
        <svg height="100%" width="100%" className="line-container">
          <line x1={this.originPosition.x + 50} y1={this.originPosition.y + 50} x2={this.state.position.x + 50} y2={this.state.position.y + 50} className="line" />
        </svg>
        <Draggable
          position={this.state.position}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="control">
            <FaRobot />
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
