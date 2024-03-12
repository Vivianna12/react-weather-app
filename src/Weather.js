import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";
import "./index.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
    });
  }

  function search() {
    let apiKey = "f42atbc02aod4017c837cbfe1c70ef22";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="search-form-input"
              onChange={handleCityChange}
            />
            <button type="submit" className="search-form-button">
              Search
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </header>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
