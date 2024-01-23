import React, { useState, useEffect } from 'react';

const GlasgowInfo = ({ width }) => {
  const [weatherData, setWeatherData] = useState({
    date: '',
    time: '',
    temp: '',
    description: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/weather'); // Adjust the URL to your API endpoint
        const data = await response.json();
        console.log('Raw response:', response);

        // Assuming the API returns date and time in a format that needs processing
        const dateTime = new Date();
        setWeatherData({
          date: dateTime.toLocaleDateString(),
          time: dateTime.toLocaleTimeString(),
          temp: data.temp,
          description: data.description
        });
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="glasgow-info" style={{ width: width }}>
      <div className="location">
        <p>Glasgow, Scotland</p>
        <p>⌖55.8642° N, 4.2518° W</p>
      </div>
      <div>
        <p>{weatherData.date}</p>
        <p>{weatherData.time}</p>
      </div>
      <div>
        <p>{weatherData.temp}</p>
        <p>{weatherData.description}</p>
      </div>
    </div>
  );
};

export default GlasgowInfo;

