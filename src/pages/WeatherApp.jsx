import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/WeatherApp.css";
import WeatherCard from "../components/WeatherCard.jsx";

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=23.17&longitude=75.78&current_weather=true",
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-state">Loading...</div>;
  if (error) return <div className="error-state">Error: {error}</div>;

  return (
    <div className="weather-container">
      <WeatherCard weatherData={data.current_weather} />
    </div>
  );
};

export default WeatherApp;
