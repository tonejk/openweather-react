import React, { useState } from 'react';
import WeatherForm from "./components/WeatherForm";
import WeatherChart from "./components/WeatherChart";
import './App.css';
require('dotenv').config();
const axios = require('axios').default;

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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
                tempC: apiData.data.main.temp,
                tempF: apiData.data.main.temp*9/5+32,
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
            tempC={weather.tempC}
            tempF={weather.tempF}
            description={weather.description}
        />
        </div>
    </div>
  );
}

export default App;
