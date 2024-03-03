import React from "react";

export default function Weather() {
  return (
    <div className="weather-app">
      <header>
        <form>
          <input
            type="search placeholder="
            Enter
            City
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
            <div id="icon"></div>
            <div className="weather-app-value">42</div>
            <div className="weather-app-unit">°F</div>
          </div>
        </div>
        <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date">Friday</div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather-icon"
                width="44"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">18°</span>
                <span className="weather-forecast-temperature-min"> 12°</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        This project was coded by{" "}
        <a
          href="
        https://github.com/Vivianna12"
          target="blank"
          rel="noreferrer"
        >
          Vivianna Samite Estevez
        </a>{" "}
        is open sourced on Github and hosted on Netlify
      </footer>
    </div>
  );
}
