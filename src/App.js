import React, { useState, useEffect } from 'react';
import './App.css';
const axios = require('axios').default;

const API_KEY = "e253a95cf981ba68d074c93288f773e7";

function App() {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Oulu,fi&units=metric&appid=${API_KEY}`)
        .then(function (data) {
          setWeather(data.data);
          console.log(data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, []); //  Run once on load

  return (
    <div className="App">
        <header className="App-header">
            <p>OpenWeather</p>
        </header>
        <div>
        <li>{weather.main && weather.main.temp}&deg;C</li>
        <li>{weather.weather && weather.weather[0].main}</li>
        <li>{weather.name}</li>
        </div>
    </div>
  );
}

export default App;
