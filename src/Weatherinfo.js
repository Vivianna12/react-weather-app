import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="current-city">{props.data.city}</h1>
            <p className="weather-app-details">
              <span>
                <FormattedDate date={props.data.date} />
              </span>{" "}
              <span className="text-capitalize">
                {" "}
                {props.data.description}{" "}
              </span>
              <br />
              Humidity: <strong> {props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}mph</strong>
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <div className="d-flex">
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
            </div>
          </div>
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
      </main>
    </div>
  );
}
