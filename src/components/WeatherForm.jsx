import React from "react";

const WeatherForm = ({ getWeatherData }) => {
    return (
        <div>
            <form onSubmit={getWeatherData}>
                <input 
                    type="text"
                    name="city"
                    placeholder="City"
                />
                <button>Submit</button>
            </form>
        </div>
    )

}


export default WeatherForm;