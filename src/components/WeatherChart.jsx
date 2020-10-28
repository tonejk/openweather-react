import React, { useState, useEffect } from "react";
import "./Style.css";

const WeatherChart = ({ city, country, tempC, tempF, description }) => {
    const [temp, setTemp] = useState();
    
    useEffect(() => {
        setTemp(tempC)
    }, [tempC])
    
    const ConvertTemp = () => { 
        if(temp === tempF) {
            setTemp(tempC);
        } else if (temp === tempC) {
            setTemp(tempF);
        }
    }

    return (
        <div>
        <button onClick={ConvertTemp}>Change unit</button>
        {city && country ? 
            <div className="chart">
                {<p>{city}, {country}</p>}
                {temp ? temp.toFixed(1) : null}
                {<p>{description}</p>}
            </div>
            : null}
            {console.log(temp)}
        </div>
    )
}


export default WeatherChart;