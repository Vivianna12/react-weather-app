import React from "react";
import FormattedDate from "./FormattedDate";

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
          <div className="weather-app-temp">
            <img
              className="weather-app-icon"
              src={props.data.iconUrl}
              alt={props.data.description}
            />
            <div className="weather-app-value">
              {Math.round(props.data.temperature)}
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
}
