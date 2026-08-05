'use client';

import { useState, useEffect } from 'react';
import { HiSun, HiCloud, HiLocationMarker } from 'react-icons/hi';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);

  useEffect(() => {
    // Open-Meteo API for Kerala, India (Lat: 9.59, Lon: 76.52)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=9.59&longitude=76.52&current_weather=true')
      .then((res) => res.json())
      .then((data) => {
        if (data?.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode,
          });
        }
      })
      .catch(() => {
        setWeather({ temp: 28, code: 1 });
      });
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
      <HiLocationMarker className="text-pink-400" />
      <span>Kerala, IN:</span>
      <span className="font-bold text-cyan-400">{weather ? `${weather.temp}°C` : '28°C'}</span>
      <HiSun className="text-amber-400 text-sm" />
    </div>
  );
}