import React, { useState } from 'react';
import WeatherForm from "./components/WeatherForm";
import WeatherChart from "./components/WeatherChart";
import './css/App.css';
require('dotenv').config();
const axios = require('axios').default;

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
    const [weather, setWeather] = useState({});
    const [error, setError] = useState("");

    /**
     * Get the weather data
     * 
     * @param {object} event Event object
     *  
     * @return void 
     */
    const getWeatherData = (event) => {
        event.preventDefault();
        let city = event.target.city.value;
        let country = event.target.country.value;
        
        // Validate the user input city and country before the API request
        if (typeof city !== 'string' || typeof country !== 'string' ||
            city.length === 0 || country.length === 0) {
            setError("Please enter a city and country");
            return;
        } 
        
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
            setError("");
        }) 
        .catch(function (error) {
            setApiError(error);
        });
    }

    /**
     * Set error received from the API to UI
     * 
     * @param {object} error Object error from the API 
     * 
     * @return void
     */
    function setApiError (error) {
        // Validate the error object
        if (typeof error === 'object' &&
            error !== null &&
            typeof error.response === 'object' &&
            typeof error.response.data === 'object' &&
            typeof error.response.data.message === 'string' ) {
            setError(error.response.data.message);
            return;
        }
        // The error object couldn't be validated, inform as an unknown API error
        setError('Unknown API error');
    }

  return (
    <div className="App">
        <header className="App-header">
            <p>Urban Weather</p>
        </header>
        <div>
        <WeatherForm 
            getWeatherData={getWeatherData}
        />
        <WeatherChart 
            city={weather.city}
            country={weather.country}
            tempC={weather.tempC}
            tempF={weather.tempF}
            description={weather.description}
            error={error}
        />
        </div>
    </div>
  );
}

export default App;
