import React from "react";
import "./Form.css";
const List = (props) => {
  const {
    error,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    humidity,
    date,
  } = props.weather;

  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h1>
          Searching for <span>{city}</span>
        </h1>
        <h3>Date and hour {date}</h3>
        <h3>Temperature: {temp} °C</h3>
        <h3>Sunrise: {sunriseTime}</h3>
        <h3>Sunset: {sunsetTime}</h3>
        <h3>Pressure: {pressure} hPa</h3>
        <h3>Humidity: {humidity} %</h3>
      </div>
    );
  }
  return (
    <div className="result">{error ? `We don't have ${city}` : content}</div>
  );
};

export default List;
