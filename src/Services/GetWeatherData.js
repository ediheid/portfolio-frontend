// import { response } from "express"

let baseUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature&current_weather=true&timezone=Europe%2FBerlin";

export const getWeatherData = async (setWeatherData) => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    
    setWeatherData(data);
  } catch (e) {
    console.log(e);
  }
};
