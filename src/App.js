import React, { useState } from 'react';
import WeatherForm from "./components/WeatherForm";
import WeatherChart from "./components/WeatherChart";
import './App.css';
const axios = require('axios').default;

const API_KEY = "e253a95cf981ba68d074c93288f773e7";

function App() {
    const [weather, setWeather] = useState({});

    const getWeatherData = (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}fi&units=metric&appid=${API_KEY}`)
        .then(function (apiData) {
            setWeather({
                data: apiData,
                city: apiData.data.name,
                country: apiData.data.sys.country,
                temperature: apiData.data.main.temp,
                description: apiData.data.weather[0].description,
            });
            console.log(apiData.data);
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
        <WeatherChart 
            city={weather.city}
            country={weather.country}
            temperature={weather.temperature}
            description={weather.description}
        />
        </div>
    </div>
  );
}

export default App;
