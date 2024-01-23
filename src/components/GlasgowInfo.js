import React, { useState, useEffect } from 'react';

const GlasgowInfo = () => {
  const [dateTime, setDateTime] = useState('');
  const [weather, setWeather] = useState({ temp: '', description: '' });

  useEffect(() => {
    // Update the date and time every second
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    // Fetch weather data
    const fetchWeather = async () => {
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather({
          temp: `${data.main.temp} °C`,
          description: data.weather[0].description
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();

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

