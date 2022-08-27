import React from "react";

export default function Weather(props) {
  if (props.city) {
    let imgUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    return (
      <main>
        <div className="weather-today">
          <h2>
            <span>{props.temp}</span>˚C
          </h2>
          <h1>{props.city}</h1>
          <div className="today-description">{props.description}</div>
          <div className="today-min-max">
            <span className="max-temp">{props.maxTemp}</span>˚|{" "}
            <span className="min-temp">{props.minTemp}</span>˚
          </div>
          <div className="today-details">
            <div className="today-feelslike">
              Feels like: {props.feelsLike}˚
            </div>
            <div className="today-humidity">Humidity: {props.humidity}%</div>
            <div className="today-windspeed">
              Wind speed: {props.windSpeed} km/h
            </div>
          </div>
        </div>
        <div class="weather-image">
          <img src={imgUrl} alt={props.description} />
        </div>
      </main>
    );
  } else {
    return <main></main>;
  }
}
