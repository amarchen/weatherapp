/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => { // eslint-disable-line 
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

const getForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastedWeather: [],
    };
  }

  async componentWillMount() {
    const fullForecast = (await getForecastFromApi()).list;
    const threeItems = fullForecast.slice(0, 3);

    this.setState({ forecastedWeather: threeItems });
  }

  render() {
    return (
      <div className="forecast">
        <ul>
          {this.state.forecastedWeather.map((elem) => {
            const wi = elem.weather[0].icon.slice(0, -1);
            const ts = elem.dt_txt;
            return <li key={elem.dt}><Weather icon={wi} timeString={ts} /> </li>;
          }
          )}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(
  <Forecast />,
  document.getElementById('app')
);
