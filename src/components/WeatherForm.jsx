import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const WeatherForm = ({ getWeatherData, error }) => {
    return (
        <div>
            <Form onSubmit={getWeatherData}>
                <Form.Group>
                    <Form.Control 
                        type="text"
                        name="city"
                        placeholder="City"
                    />
                    <Form.Control 
                        type="text"
                        name="country"
                        placeholder="Country"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {error}
            </Form>
        </div>
    )

}


export default WeatherForm;