import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.copyright}>
          © All Rights Reserved. MyWeather created by
          <a href="https://github.com/alemlodyigor">Alemlodyigor</a> and powered
          by
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </p>
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          className={classes.img}
        />
      </div>
      <div className={classes.download}>
        <a href="https://alemlodyigor.pl/myweather.zip" download>
          Download MyW on windows
        </a>
      </div>
    </footer>
  );
};

export default Footer;
