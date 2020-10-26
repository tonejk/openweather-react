import React from "react";

const WeatherChart = ({ city, country, tempC, tempF, description }) => {
    return (
        <div>
            {city && country ? <p>{city}, {country}</p> : null}
            {tempC && tempF && description ? <p>{tempC.toFixed(1)} &deg;C / {tempF.toFixed(1)} &deg;F, {description}</p> : null}
        </div>
    )

}


export default WeatherChart;