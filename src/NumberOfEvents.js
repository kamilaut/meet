import React, { Component } from 'react';

class NumberOfEvents extends Component {
 state = {
 numberOfEvents: this.props.numberOfEvents || 32, // setting the default value for numberOfEvents
}

handleInputChanged = (event) => {
  const value = event.target.value;
  this.setState ({ numberOfEvents: value});
  this.props.updateEvents(null, value); // calling updateEvents with location =null and eventCount=value
}
  

  render() {
    return (
      <div className="number-of-events">
        <input
          className="number-of-events-input"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;