import React, { useEffect, useState } from "react";
import axios from "axios";

import { weatherConditions } from "./WeatherConditions";

// Images & icons
import mainBg from "../Weather-App/Static/mainBG.png";

const weatherAppKey = process.env.REACT_APP_WEATHER_APP_KEY;

// Remove accents - called in onChange event and setLocation
const removeAccents = require("remove-accents-diacritics");

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [data, setData] = useState({});
  let [location, setLocation] = useState("");
  let [iconId, setIconId] = useState("");
  let [bgImg, setBgImg] = useState("");

  // console.log("Testing accents", location);

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAppKey}&units=metric`;

  // Call weather API and set weather data
  const getWeatherData = async (event) => {
    if (event.key === "Enter") {
      try {
        axios.get(weatherUrl).then((response) => {
          const returnedData = response.data;
          const nestedData = response.data.weather[0].icon;
          // setWeatherData(returnedData);
          setIconId(nestedData);

          console.log("!!!", returnedData, nestedData);

          // console.log(response.data);
          console.log("ID!!!", iconId);
          // console.log("BG img", bgImg);

          // Find correlating bg from returned data, passed into iconID and return the bg image from found object
          // weatherConditions.map((object) => {
          //   if (iconId === object.iconDay || iconId === object.iconNight) {
          //     setBgImg(object.backgroundImage);
          //   } else {
          //     return null;
          //   }
          //   return bgImg;
          // });
        });

        setLocation("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div
      className="weather-app-container"
      style={
        weatherData.main && weatherData.weather[0].icon && bgImg !== ""
          ? { backgroundImage: `url(${bgImg})` }
          : { backgroundImage: `url(${mainBg})` }
      }

      // Set bg based on weather condition icon parameter

      // style={
      //   (weatherData.main && weatherData.weather[0].icon === "01d") ||
      //   (weatherData.main && weatherData.weather[0].icon === "01n")
      //     ? {
      //         backgroundImage: `url(${clearSky})`,
      //       }
      //     : (weatherData.main && weatherData.weather[0].icon === "02d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "02n")
      //     ? {
      //         backgroundImage: `url(${fewClouds}) `,
      //       }
      //     : (weatherData.main && weatherData.weather[0].icon === "03d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "03n")
      //     ? { backgroundImage: `url(${scatteredClouds})` }
      //     : (weatherData.main && weatherData.weather[0].icon === "04d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "04n")
      //     ? { backgroundImage: `url(${brokenClouds})` }
      //     : (weatherData.main && weatherData.weather[0].icon === "09d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "09n")
      //     ? { backgroundImage: `url(${lightRain})` }
      //     : (weatherData.main && weatherData.weather[0].icon === "10d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "10n")
      //     ? { backgroundImage: `url(${rain})` }
      //     : (weatherData.main && weatherData.weather[0].icon === "11d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "11n")
      //     ? { backgroundImage: `url(${thunderstorm})` }
      //     : (weatherData.main && weatherData.weather[0].icon === "13d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "13n")
      //     ? { backgroundImage: `url(${snow})` }
      //     : (weatherData.main && weatherData.weather[0].icon === "50d") ||
      //       (weatherData.main && weatherData.weather[0].icon === "50n")
      //     ? { backgroundImage: `url(${mist})` }
      //     : {
      //         backgroundImage: `url(${mainBg})`,
      //       }
      // }
    >
      {/* Glassmorphism container for weather content only displays when data is returned */}
      <div className={weatherData.main ? "returned-data-container" : null}>
        <div className="main-weather-info-container">
          {/* City & country */}
          <h1 className="city-heading">
            {weatherData.name}{" "}
            {weatherData.main ? (
              <span>&#40;{weatherData.sys.country}&#41;</span>
            ) : null}
          </h1>

          {/* Temperature */}
          {weatherData.main ? (
            <h2 className="current-temperature"> {weatherData.main.temp}°c</h2>
          ) : null}
        </div>

        <div className="extra-weather-info-container">
          {/*  Feels like */}
          {weatherData.main ? (
            <span className="extra-weather-details">
              {" "}
              Feels like: {weatherData.main.feels_like}°c
            </span>
          ) : null}

          {/* Weather Condition */}
          {/* {weatherData.weather ? (
            <span className="extra-weather-details">{weatherData.weather[0].main}</span>
          ) : null} */}

          {/* Humidity */}
          {weatherData.main ? (
            <span className="extra-weather-details">
              {" "}
              Humidity: {weatherData.main.humidity}%
            </span>
          ) : null}

          {/* Weather Description */}
          {weatherData.weather ? (
            <span className="extra-weather-details">
              {weatherData.weather[0].description}
            </span>
          ) : null}
        </div>
      </div>

      {/* Search Input */}
      <search>
        <input
          className="weather-search-input"
          value={location}
          onChange={(event) =>
            // Sets location and removes accents so user can type in any language characters
            setLocation(removeAccents.remove(event.target.value))
          }
          onKeyPress={getWeatherData}
          placeholder="Enter location.."
          type="text"
        ></input>
      </search>

      {/* Add max and min for the day */}
    </div>
  );
};

export default WeatherApp;
