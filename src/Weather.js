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
            <h1>The Bronx</h1>
            <p>
              Friday 9:21, few clouds
              <br />
              Humidity: 46%, Wind:8mph
            </p>
          </div>
          <div className="weather-app-temp">
            <h2>42°F</h2>
          </div>
        </div>
        <ul>
          <li>Friday</li>
          <p>63°F - 36°F☀️</p>
          <li>Saturday</li>
          <p>63°F - 36°F☀️</p>
          <li>Sunday</li>
          <p>67°F - 46°F☀️</p>
          <li>Monday</li>
          <p>65°F - 38°F☀️</p>
          <li>Tuesday</li>
          <p>63°F - 36°F☀️</p>
        </ul>
      </main>
      <footer>
        <p>
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
        </p>
      </footer>
    </div>
  );
}
