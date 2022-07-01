import React, { useState } from "react";
import axios from "axios";

// Images & icons
import mainBg from "../Weather-App/Static/mainBG.png";
import clearSky from "./Static/clear-sky.png";
import fewClouds from "./Static/few-clouds.png";
import scatteredClouds from "./Static/scattered-clouds.png";
import brokenClouds from "./Static/broken-clouds.png";
import lightRain from "./Static/light-rain.png";
import rain from "./Static/rain.png";
import thunderstorm from "./Static/thunderstorm.png";
import snow from "./Static/snow.png";
import mist from "./Static/mist.png";

// Remove accents
const removeAccents = require("remove-accents-diacritics");

const weatherAppKey = process.env.REACT_APP_WEATHER_APP_KEY;
// Todo: Move API call to Service folder
// import { getWeatherData } from "./Services/GetWeatherData";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  let [location, setLocation] = useState("");

  console.log("Testing accents", location);

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

  // backgroundImage: `url(${clearSky})`,
  // alt: "By Francesco Ungaro: https://www.pexels.com/photo/blue-sky-281260/",

  // ,  alt: "Hand holding globe - By Porapak Apichodilok from Pexels.com"`

  //   scatteredClouds: {
  //     backgroundImage: scatteredClouds,
  //     alt: "By Miguel Á. Padriñán: https://www.pexels.com/photo/white-clouds-on-blue-sky-19670/",
  //   },
  //   brokenClouds: {
  //     backgroundImage: brokenClouds,
  //     alt: "By Magda Ehlers: https://www.pexels.com/photo/white-clouds-2114014/",
  //   },
  //   lightRain: {
  //     backgroundImage: lightRain,
  //     alt: "By Lum3n: https://www.pexels.com/photo/close-up-of-water-droplets-against-blue-background-311039/",
  //   },
  //   rain: {
  //     backgroundImage: rain,
  //     alt: "By Chris Kane: https://www.pexels.com/photo/reflection-of-building-on-body-of-water-at-daytime-166360/",
  //   },
  //   thunderstorm: {
  //     backgroundImage: thunderstorm,
  //     alt: "By Alexandre Bringer: https://www.pexels.com/photo/lightning-unk-on-green-grass-field-3637060/",
  //   },
  //   snow: {
  //     backgroundImage: snow,
  //     alt: "By Pixabay: https://www.pexels.com/photo/adventure-altitude-climb-clouds-273809/",
  //   },
  //   mist: {
  //     backgroundImage: mist,
  //     alt: "By Pixabay: https://www.pexels.com/photo/adventure-clouds-cold-dark-clouds-266451/",
  //   },

  return (
    <div
      className="weather-app-container"
      // Set bg based on weather condition icon parameter
      style={
        (weatherData.main && weatherData.weather[0].icon === "01d") ||
        (weatherData.main && weatherData.weather[0].icon === "01n")
          ? {
              backgroundImage: `url(${clearSky})`,
            }
          : (weatherData.main && weatherData.weather[0].icon === "02d") ||
            (weatherData.main && weatherData.weather[0].icon === "02n")
          ? {
              backgroundImage: `url(${fewClouds}) `,
            }
          : (weatherData.main && weatherData.weather[0].icon === "03d") ||
            (weatherData.main && weatherData.weather[0].icon === "03n")
          ? { backgroundImage: `url(${scatteredClouds})` }
          : (weatherData.main && weatherData.weather[0].icon === "04d") ||
            (weatherData.main && weatherData.weather[0].icon === "04n")
          ? { backgroundImage: `url(${brokenClouds})` }
          : (weatherData.main && weatherData.weather[0].icon === "09d") ||
            (weatherData.main && weatherData.weather[0].icon === "09n")
          ? { backgroundImage: `url(${lightRain})` }
          : (weatherData.main && weatherData.weather[0].icon === "10d") ||
            (weatherData.main && weatherData.weather[0].icon === "10n")
          ? { backgroundImage: `url(${rain})` }
          : (weatherData.main && weatherData.weather[0].icon === "11d") ||
            (weatherData.main && weatherData.weather[0].icon === "11n")
          ? { backgroundImage: `url(${thunderstorm})` }
          : (weatherData.main && weatherData.weather[0].icon === "13d") ||
            (weatherData.main && weatherData.weather[0].icon === "13n")
          ? { backgroundImage: `url(${snow})` }
          : (weatherData.main && weatherData.weather[0].icon === "50d") ||
            (weatherData.main && weatherData.weather[0].icon === "50n")
          ? { backgroundImage: `url(${mist})` }
          : {
              backgroundImage: `url(${mainBg})`,
            }
      }
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
