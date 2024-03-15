import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature ">
      <span className="weather-app-value">{Math.round(props.fahrenheit)}</span>
      <span className="weather-app-unit">°F </span>
    </div>
  );
}
