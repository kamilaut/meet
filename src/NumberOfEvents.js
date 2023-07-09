import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: this.props.numberOfEvents || 32,
    errorText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value <= 0 || value > 100) {
      this.setState({ errorText: 'Please enter a valid number of events (1-100).' });
    } else {
      this.setState({ numberOfEvents: value, errorText: '' });
      this.props.updateEvents(undefined, value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number-of-events-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        {this.state.errorText && <ErrorAlert text={this.state.errorText} />}
      </div>
    );
  }
}

export default NumberOfEvents;
