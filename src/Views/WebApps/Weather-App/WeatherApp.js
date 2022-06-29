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
      } catch (e) {
        console.log(e);
      }
    }

    // if(event.key === "Enter"){

    // try{
    //   fetch(weatherUrl)
    //   .then(response => response.json())
    //   .then(data => setWeatherData(data))

    // console.log(weatherData)}
    // catch(e){
    //   console.log(e)
    // }}

    //   // try {
    //   //   const response = await fetch(weatherUrl)
    //   //   const data = await response.json();
    //   //   setWeatherData(data);
    //   //   console.log("test", response.data)
    //   // } catch (e) {
    //   //   console.log(e);
    //   // }
    // }
  };

  // useEffect(() => {
  //   getWeatherData(setWeatherData);
  // }, []);

  // console.log(weatherData);

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
        <h1>Sydney</h1>
      </div>
      <div>
        <h2>20</h2>
      </div>
      <div>
        <span>Clouds</span>
      </div>
      <div>
        <span>Feels like</span>
      </div>
      <div>
        <span>Humidity</span>
      </div>
      <div>
        <span>Wind</span>
      </div>
    </div>
  );
};

export default WeatherApp;
