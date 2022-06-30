import React, { useEffect, useState } from "react";
import axios from "axios";

// Images & icons
import mainBg from "../Weather-App/Static/mainBG.png";
import clearSky from "./Static/clear-sky.png";
import fewClouds from "./Static/few-clouds.png";
import scatteredClouds from "./Static/scattered-clouds.png";
import brokenClouds from "./Static/broken-clouds.png";
import lightRain from "./Static/light-rain-png";
import rain from "./Static/rain.png";

const weatherAppKey = process.env.REACT_APP_WEATHER_APP_KEY;
// Todo: Move API call to Service folder
// import { getWeatherData } from "./Services/GetWeatherData";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  let [location, setLocation] = useState("");

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAppKey}&units=metric`;

  // Call weather API and set weather data
  const getWeatherData = async (event) => {
    if (event.key === "Enter") {
      try {
        axios.get(weatherUrl).then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
        });
        setLocation("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Weather conditions backgrounds and icons
  const weatherConditions = {
    main: {
      backgroundImage: mainBg,
      alt: "Hand holding globe - By Porapak Apichodilok from Pexels.com",
    },
    clearSky: {
      backgroundImage: clearSky,
      alt: "By Francesco Ungaro: https://www.pexels.com/photo/blue-sky-281260/",
    },
    fewClouds: {
      backgroundImage: fewClouds,
      alt: "By Pixabay: https://www.pexels.com/photo/blue-skies-53594/",
    },
    scatteredClouds: {
      backgroundImage: scatteredClouds,
      alt: "By Miguel Á. Padriñán: https://www.pexels.com/photo/white-clouds-on-blue-sky-19670/",
    },
    brokenClouds: {
      backgroundImage: brokenClouds,
      alt: "By Magda Ehlers: https://www.pexels.com/photo/white-clouds-2114014/",
    },
    lightRain: {
      backgroundImage: lightRain,
      alt: "By Lum3n: https://www.pexels.com/photo/close-up-of-water-droplets-against-blue-background-311039/",
    },
    rain: {
      backgroundImage: rain,
      alt: "By Chris Kane: https://www.pexels.com/photo/reflection-of-building-on-body-of-water-at-daytime-166360/",
    },
  };

  return (
    <div
      className="weather-app-container"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Glassmorphism container for weather content only displays when data is returned */}
      <div className={weatherData.main ? "returned-data-container" : null}>
        {/* City */}
        <h1>{weatherData.name}</h1>

        {/* Country  */}
        {weatherData.main ? <h2>,{weatherData.sys.country}</h2> : null}

        {/* Temperature */}
        {weatherData.main ? <h2>{weatherData.main.temp}°c</h2> : null}

        {/*  Feels like */}
        {weatherData.main ? (
          <span> Feels like: {weatherData.main.feels_like}°c</span>
        ) : null}

        {/* Weather Condition */}
        {weatherData.weather ? (
          <span>{weatherData.weather[0].main}</span>
        ) : null}

        {/* Detail of weather condition - not sure if I should keep or not? */}
        {/* <div>
          {weatherData.weather ? (
            <span>{weatherData.weather[0].description}</span>
          ) : null}
        </div> */}

        {/* Humidity */}
        {weatherData.main ? (
          <span> Humidity: {weatherData.main.humidity}%</span>
        ) : null}
      </div>

      {/* Search Input */}
      <search>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
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
