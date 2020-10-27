import React from "react";
import "./Style.css";

const WeatherChart = ({ city, country, tempC, tempF, description }) => {
    return (
        <div>
        {city && country ? 
            <div className="chart">
                {<p>{city}, {country}</p>}
                {tempC && tempF ? <p>{tempC.toFixed(1)} &deg;C</p> : <p>{tempF.toFixed(1)} &deg;F</p>}
                {<p>{description}</p>}
            </div>
            : null}
        </div>
    )
}


export default WeatherChart;