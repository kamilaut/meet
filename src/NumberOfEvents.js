import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: 32, // Default value of the input field
    };
  }

  render() {
    return (
      <div className="number-of-events">
        <input
          className="number-of-events-input"
          type="number"
          value={this.state.numberOfEvents}
          onChange={(e) => this.setState({ numberOfEvents: e.target.value })}
        />
      </div>
    );
  }
}

export default NumberOfEvents;