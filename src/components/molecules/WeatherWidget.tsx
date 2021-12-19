import Widget from "components/atoms/Widget";
import useWeather from "hooks/useWeather";
import React, { ReactElement, useEffect } from "react";

export default function WeatherWidget(): ReactElement {
  const { weather, getWeather } = useWeather();

  useEffect(() => {
    // getWeather();
  }, []);

  return (
    <Widget title="Weather" className="md:col-span-2">
      {Object.keys(weather).length > 0 ? (
        <>
          <div className="flex justify-between">
            <p className="font-medium mb-4 font-mono text-blue-700 dark:text-blue-500">
              {weather.name}, {weather.sys.country}
            </p>
            <p className='text-right text-sm text-gray-500'>
              Sunrise:{" "}
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()} <br />
              Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">{weather.main.temp}°C</h2>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">
                Feels like {weather.main.feels_like}°C
                <br />
                {weather.weather[0].description}
              </p>
              <p>
                min: {weather.main.temp_min}°C
                <br />
                max: {weather.main.temp_max}°C
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </Widget>
  );
}
