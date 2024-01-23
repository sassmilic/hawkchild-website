import React, { useState, useEffect } from 'react';

const GlasgowInfo = () => {
  const [dateTime, setDateTime] = useState('');
  const [weather, setWeather] = useState({ temp: '', description: '' });

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeather = async () => {
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherData = {
          temp: `${data.main.temp} °C`,
          description: data.weather[0].description,
          time: new Date().getTime() // Store the current time
        };
        setWeather(weatherData);

        // Cache data in localStorage
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    // Function to update date and time every second
    const updateDateTime = () => {
      setDateTime(new Date().toLocaleString());
    };

    // Check cache for weather data
    const cachedWeatherData = JSON.parse(localStorage.getItem('weatherData'));
    if (cachedWeatherData && new Date().getTime() - cachedWeatherData.time < 600000) { // 10 minutes in milliseconds
      setWeather(cachedWeatherData);
    } else {
      fetchWeather();
    }

    // Update the date and time every second
    const interval = setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial update

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glasgow-info">
      <div className="location">
        <p>Glasgow, UK</p>
        <p>⌖55.8642° N, 4.2518° W</p>
      </div>
      <div>
        <p>{dateTime.split(',')[0]}</p>
        <p>{dateTime.split(',')[1]}</p>
      </div>
      <div>
        <p>{weather.temp}</p>
        <p>{weather.description}</p>
      </div>
    </div>
  );
};

export default GlasgowInfo;

