import { useEffect, useState } from 'react';

export default function Card({ city, country, isSet }) {
  const [cordinates, setCordinates] = useState({ lat: '', lon: '' });
  const [data, setData] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    try {
      const fetchCord = async () => {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`
        );
        const cord = await response.json();
        if (cord.length > 0) {
          setCordinates({ lat: cord[0].lat, lon: cord[0].lon });
        }
      };
      if (city && country) {
        fetchCord();
      }
    } catch (error) {
      console.log(error);
    }
  }, [city, country]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        if (cordinates.lat !== '' && cordinates.lon !== '') {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${cordinates.lat}&lon=${cordinates.lon}&appid=${apiKey}`
          );

          const data = await response.json();

          setData(data);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [cordinates]);
  if (isSet) {
    return (
      <>
        {data && (
          <div key={data.weather[0].id}>
            <h3>
              {city}, {country}
            </h3>
            <p>{data.weather[0].main}</p>
            <p>{data.weather[0].description}</p>
            <span>Temperature {data.main.temp}F</span>
          </div>
        )}
      </>
    );
  }
  return;
}
