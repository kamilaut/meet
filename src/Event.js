import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false, 
    };
  }

  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <p className="event-location">{event.location}</p>
        <p className="event-date-time">{event.start.dateTime}</p>

        {showDetails && (
          <div className="event-details">
            <p className="event-description">{event.description}</p>
          </div>
        )}

        <button className="toggle-details-btn" onClick={this.toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    );
  }
}

export default Event;