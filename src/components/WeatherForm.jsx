import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Style.css";

const WeatherForm = ({ getWeatherData }) => {
    return (
        <div className="text-center">
            <Form onSubmit={getWeatherData}>
                <Form.Group className="mx-auto w-50 mt-3">
                    <Form.Control 
                        type="text"
                        name="city"
                        placeholder="City"
                        className="formInput mb-3"
                    />
                    <Form.Control 
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="formInput"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Get Weather
                </Button>
            </Form>
        </div>
    )

}


export default WeatherForm;