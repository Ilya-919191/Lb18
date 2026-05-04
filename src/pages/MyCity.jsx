import React, { useState, useEffect } from 'react';
import "./pages.css"

const MyCity = () => {
  const [cityData, setCityData] = useState({"temp": null, "lat": null, "lon": null});

  useEffect(() => {
    fetch('https://wttr.in/Trebukhiv?format=j1')
      .then(res => res.json())
      .then(data => {
        setCityData({
          temp: data.current_condition[0].temp_C,
          lat: data.nearest_area[0].latitude,
          lon: data.nearest_area[0].longitude
        });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="contentBlock">
        <p>
          Я народився та виріс у селі Требухів. Це велике село неподалік Києва, приблизно за 15–20 км від столиці, фактично поруч із Броварами.
          Тут живе понад 6 тисяч людей, і воно вважається одним із більших сіл Київщини.
        </p>
      </div>
      <div className="contentBlock">
        <ul>
          <li>Україна, Київська обл., Броварський рай., с.Требухів</li>
          <li>Температура: {cityData.temp}°C</li>
          <li>Координати: {cityData.lat}, {cityData.lon}</li>
        </ul>
      </div>
    </>
  );
};

export default MyCity;