import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: "Friday, 9:21",
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <header>
          <form>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="search-form-input"
            />
            <button type="submit" className="search-form-button">
              Search
            </button>
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="current-city">{weatherData.city}</h1>
              <p className="weather-app-details">
                <span>{weatherData.date}</span>,{" "}
                <span className="text-capitalize">
                  {" "}
                  {weatherData.description}{" "}
                </span>
                <br />
                Humidity: <strong> {weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind}mph</strong>
              </p>
            </div>
            <div className="weather-app-temp">
              <img
                className="weather-app-icon"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
              <div className="weather-app-value">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="weather-app-unit">°F</div>
            </div>
          </div>
          <div className="weather-forecast">
            <div className="weather-forecast-date">Friday</div>

            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
              width="44"
            />

            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong> 18° </strong>
              </span>
              <span className="weather-forecast-temperature-min"> 12°</span>
            </div>
            <div className="weather-forecast-date">Friday</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
              width="44"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong> 18° </strong>
              </span>
              <span className="weather-forecast-temperature-min"> 12°</span>
            </div>

            <div className="weather-forecast-date">Friday</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
              width="44"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong> 18° </strong>
              </span>
              <span className="weather-forecast-temperature-min"> 12°</span>
            </div>

            <div className="weather-forecast-date">Friday</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
              width="44"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong> 18° </strong>
              </span>
              <span className="weather-forecast-temperature-min"> 12°</span>
            </div>

            <div className="weather-forecast-date">Friday</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
              width="44"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong> 18° </strong>
              </span>
              <span className="weather-forecast-temperature-min"> 12°</span>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    let apiKey = "f42atbc02aod4017c837cbfe1c70ef22";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
