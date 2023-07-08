import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: this.props.numberOfEvents || 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
  
    if (value <= 0 || isNaN(value)) {
      this.props.setErrorAlert('Please enter a valid number of events.');
    } else {
      this.props.setErrorAlert('');
      this.setState({ numberOfEvents: value });
      this.props.updateEvents(undefined, value);
    }
  };
  

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
