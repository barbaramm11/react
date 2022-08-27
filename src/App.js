import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

export default function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [icon, setIcon] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c9340caae81260dc304fd1a5b37c6e0c&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setCity(response.data.name);
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setMaxTemp(Math.round(response.data.main.temp_max));
    setMinTemp(Math.round(response.data.main.temp_min));
    setFeelsLike(Math.round(response.data.main.feels_like));
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function updateCity(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <div className="app-container">
        <header>
          <button className="unit-switch">˚F</button>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="search"
              name="searchcity"
              className="search-input"
              placeholder="Search city..."
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <button className="use-device-button">
            <i className="fa-solid fa-location-dot"></i> Use device location
          </button>
        </header>
        <Weather
          city={city}
          temp={temp}
          description={description}
          maxTemp={maxTemp}
          minTemp={minTemp}
          feelsLike={feelsLike}
          humidity={humidity}
          windSpeed={windSpeed}
          icon={icon}
        />
      </div>
      <footer>
        <p>
          {" "}
          <a href="https://github.com/barbaramm11/react">
            Made by Barbara Morales
          </a>
        </p>
      </footer>
    </div>
  );
}
