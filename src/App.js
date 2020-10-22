import React, { useState } from 'react';
import WeatherForm from "./components/WeatherForm";
import './App.css';
const axios = require('axios').default;

const API_KEY = "e253a95cf981ba68d074c93288f773e7";

function App() {
    const [weather, setWeather] = useState({});

    const getWeatherData = (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},fi&units=metric&appid=${API_KEY}`)
        .then(function (data) {
          setWeather(data.data);
          console.log(data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

  return (
    <div className="App">
        <header className="App-header">
            <p>OpenWeather</p>
        </header>
        <div>
        <WeatherForm getWeatherData={getWeatherData}/>
        <li>{weather.main && weather.main.temp}</li>
        <li>{weather.weather && weather.weather[0].main}</li>
        <li>{weather.name}</li>
        </div>
    </div>
  );
}

export default App;
