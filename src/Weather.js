import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1 className="current-city">The Bronx</h1>
            <p className="weather-app-details">
              <span>Friday 9:21</span>, <span> few clouds </span>
              <br />
              Humidity: <strong> 49%</strong>, Wind: <strong>8mph</strong>
            </p>
          </div>
          <div className="weather-app-temp">
            <div className="weather-app-icon">🌤️</div>
            <div className="weather-app-value">42</div>
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
}
