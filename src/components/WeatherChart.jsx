import React from "react";

const WeatherChart = ({ city, country, temperature, description }) => {
    return (
        <div>
            {city && country ? <p>{city}, {country}</p> : null}
            {temperature && description ? <p>{temperature}, {description}</p> : null}
        </div>
    )

}


export default WeatherChart;