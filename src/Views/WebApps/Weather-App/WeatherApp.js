import React, { useEffect, useState } from "react";

import { getWeatherData } from "../../../Services/GetWeatherData";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const handleCityInput = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  useEffect(() => {
    getWeatherData(setWeatherData);
  }, []);

  console.log(weatherData.current_weather);

  // let updatedWeatherData = {

  // city: "Entered City" ,
  // current: weatherData.current_weather.temperature,
  // }

  // console.log("Test", updatedWeatherData.city, updatedWeatherData.current)

  return (
    <div className="weather-app-container">
      <form onSubmit={handleCityInput}>
        <input placeholder="Enter location.."></input>

        <button type="submit">Search</button>
      </form>

      {/* <div>{weatherData.current_weather.temperature}</div> */}
    </div>
  );
};

export default WeatherApp;
