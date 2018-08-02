import React, { Component } from 'react';
import { FaCoffee, FaBolt } from 'react-icons/fa';

import './SitButton.css';

class SitButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_sitting: false
    }
  }

  handleSit = () => {
    this.props.onTap(this.state.is_sitting)
    this.setState({
      is_sitting: !this.state.is_sitting
    })
  }

  render() {
    return (
      <div className="sit-button-container">
        <div className="sit-button" onClick={this.handleSit}>
          {this.state.is_sitting ? <FaBolt /> : <FaCoffee />}
        </div>
      </div>
    );
  }
}

export default SitButton;
