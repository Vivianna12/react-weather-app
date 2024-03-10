import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`fahrenheit`);
  function covertToCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  function covertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature ">
        <span className="weather-app-value">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="weather-app-unit">
          °F |
          <a href="/" onClick={covertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature ">
        <span className="weather-app-value">{Math.round(celsius)}</span>
        <span className="weather-app-unit">
          <a href="/" onClick={covertToFahrenheit}>
            °F
          </a>
          | °C
        </span>
      </div>
    );
  }
}
