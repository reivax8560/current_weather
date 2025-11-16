import { useEffect, useState } from "react";
import { dateConversion, timeConversion } from "./utils/formatDateFr";
import mock from "./mock/mock.json";

export default function App() {
  const [weatherDatas, setWeatherDatas] = useState(mock);
  /*
  const [searchedCity, setSearchedCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "5d751d6421f899ebcc97f4b3416c8d63"

  // https://api.weatherstack.com/current?access_key=5d751d6421f899ebcc97f4b3416c8d63&query=grues

  ////////////////////////////////////////////// requête initiale
  useEffect(() => 
    fetch({`https://api.weatherstack.com/current?access_key=${apiKey}&query=${searchedCity}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((datas) => setWeatherDatas(datas))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

    //////////////////////////////////////////// requête via serveur vercel
  useEffect(() => {
    fetch(`/api/weather?city=Paris`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((datas) => setWeatherDatas(datas))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  */

  const location = weatherDatas.location;
  const current = weatherDatas.current;

  return (
    <div className="App">
      <h1 className="main-title">Current Weather</h1>

      <section className="main-content">
        {/********************************** LOCALISATION / DATE ********************************/}
        <div className="location">
          <h2 className="city">{`${location.name} `}</h2>
          <i className="country">{`(${location.region}, ${location.country})`}</i>
        </div>

        <p className="local-time">{dateConversion(location.localtime)}</p>

        <div className="weather-description">
          {/************************************ IMAGE ****************************************/}
          <img
            className="weather-icon"
            src={current.weather_icons}
            alt="weather icon"
          />
          {/********************************* DESCRIPTION *************************************/}
          <div className="weather-items-ctnr">
            <p className="weather-item">
              <b>Description :</b>
              {` ${current.weather_descriptions}`}
            </p>
            <p className="weather-item">
              <b>Température :</b>
              {` ${current.temperature} °C`}
            </p>
            <p className="weather-item">
              <b>Couverture nuageuse :</b>
              {` ${current.cloudcover} %`}
            </p>
            <p className="weather-item">
              <b>Précipitations :</b>
              {` ${current.precip} cm`}
            </p>
            <p className="weather-item">
              <b>Vent :</b>
              {` ${current.wind_speed} km/h, direction ${current.wind_dir}`}
            </p>
            <p className="weather-item">
              <b>Humidité :</b>
              {` ${current.humidity} %`}
            </p>
            <p className="weather-item">
              <b>Soleil :</b>
              {` levé  à ${timeConversion(
                current.astro.sunrise
              )} - couché à ${timeConversion(current.astro.sunset)}`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
