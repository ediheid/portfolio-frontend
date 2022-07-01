import clearSky from "./Static/clear-sky.png";
import fewClouds from "./Static/few-clouds.png";
import scatteredClouds from "./Static/scattered-clouds.png";
import brokenClouds from "./Static/broken-clouds.png";
import lightRain from "./Static/light-rain.png";
import rain from "./Static/rain.png";
import thunderstorm from "./Static/thunderstorm.png";
import snow from "./Static/snow.png";
import mist from "./Static/mist.png";

export const weatherConditions = [
  {
    backgroundImage: clearSky,
    alt: "By Francesco Ungaro: https://www.pexels.com/photo/blue-sky-281260/",
    iconDay: "01d",
    iconNight: "01n",
  },
  {
    backgroundImage: fewClouds,
    alt: "",
    iconDay: "02d",
    iconNight: "02n",
  },
  {
    backgroundImage: scatteredClouds,
    alt: "By Miguel Á. Padriñán: https://www.pexels.com/photo/white-clouds-on-blue-sky-19670/",
    iconDay: "03d",
    iconNight: "03n",
  },
  {
    backgroundImage: brokenClouds,
    alt: "By Magda Ehlers: https://www.pexels.com/photo/white-clouds-2114014/",
    iconDay: "04d",
    iconNight: "04n",
  },
  {
    backgroundImage: lightRain,
    alt: "By Lum3n: https://www.pexels.com/photo/close-up-of-water-droplets-against-blue-background-311039/",
    iconDay: "09d",
    iconNight: "09n",
  },
  {
    backgroundImage: rain,
    alt: "By Chris Kane: https://www.pexels.com/photo/reflection-of-building-on-body-of-water-at-daytime-166360/",
    iconDay: "10d",
    iconNight: "10n",
  },
  {
    backgroundImage: thunderstorm,
    alt: "By Alexandre Bringer: https://www.pexels.com/photo/lightning-unk-on-green-grass-field-3637060/",
    iconDay: "11d",
    iconNight: "11n",
  },
  {
    backgroundImage: snow,
    alt: "By Pixabay: https://www.pexels.com/photo/adventure-altitude-climb-clouds-273809/",
    iconDay: "13d",
    iconNight: "13n",
  },
  {
    backgroundImage: mist,
    alt: "By Pixabay: https://www.pexels.com/photo/adventure-clouds-cold-dark-clouds-266451/",
    iconDay: "50d",
    iconNight: "50n",
  },
];
