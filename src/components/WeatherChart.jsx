import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../css/Style.css";

const WeatherChart = ({ city, country, tempC, tempF, description, error }) => {
    const [temp, setTemp] = useState();
    const [unit, setUnit] = useState();
    
    useEffect(() => {
        setTemp(tempC);
        setUnit(<>&deg;C</>);
    }, [tempC])
    
    const ConvertTemp = () => { 
        if(temp === tempF) {
            setTemp(tempC);
            setUnit(<>&deg;C</>);
        } else if (temp === tempC) {
            setTemp(tempF);
            setUnit(<>&deg;F</>);
        }
    }

    return (
        <div>
        <Button 
            onClick={ConvertTemp} 
            variant="primary" 
            className="d-flex justify-content-center mx-auto mt-3">
            Unit {unit}
        </Button>
        {error ? 
            <p className="error">{error}</p>
        : null}
        {city && country ? 
            <div className="weatherChart">
                {<p>{city}, {country}</p>}
                <p>{temp ? temp.toFixed(1) : null}{unit}</p>
                {<p>{description}</p>}
            </div>
            : null}
        </div>
    )
}


export default WeatherChart;