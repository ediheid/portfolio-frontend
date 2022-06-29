import React, { useEffect, useState } from "react";
import axios from "axios";


// import { getWeatherData } from "./Services/GetWeatherData";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e6a7dfd2692802a84edcdd8fa6cae4d7&units=metric`;

  const getWeatherData = async (event) => {
    if (event.key === "Enter") {
      try {
        axios.get(weatherUrl).then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
        });
        setLocation("")
      } catch (e) {
        console.log(e);
      }
    }
  };



  return (
    <div className="weather-app-container">
      <search>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={getWeatherData}
          placeholder="Enter location.."
          type="text"
        ></input>
      </search>

      <div>
        <h1>{weatherData.name}</h1>
      </div>

      <div>
        <h2>,{weatherData.sys.country}</h2>
      </div>

      <div>
        {weatherData.main ? <h2>{weatherData.main.temp}°c</h2> : null}
      </div>

      <div>
       Feels like:
       {weatherData.main ?  <span>{weatherData.main.feels_like}°c</span> : null}
      </div>

      <div>
        {weatherData.weather ? <span>{weatherData.weather[0].main}</span> : null}
      </div>

      <div>
        {weatherData.weather ? <span>{weatherData.weather[0].description}</span> : null}
      </div>
     
      <div>
        Humidity:
        {weatherData.main ? <span>{weatherData.main.humidity}%</span> : null}
      </div>
     

{/* Add max and min for the day */}

    </div>
  );
};

export default WeatherApp;
