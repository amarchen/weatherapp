/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      icon: props.icon,
      timeString: props.timeString,
    };
  }


  render() {
    const { icon, timeString } = this.state;

    return (
      <div className="forecastElem">
        <div className="icon">
          { icon && <img src={`/img/${icon}.svg`} alt="weather icon" /> }
        </div> - {timeString}
      </div>
    );
  }
}

Weather.propTypes = {
  icon: PropTypes.string.isRequired,
  timeString: PropTypes.string.isRequired,
};

export default Weather;
