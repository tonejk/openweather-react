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
                <input 
                    type="text"
                    name="country"
                    placeholder="Country"
                />
                <button>Submit</button>
            </form>
        </div>
    )

}


export default WeatherForm;