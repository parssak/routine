import Widget from "components/atoms/Widget";
import useWeather from "hooks/useWeather";
import React, { ReactElement, useEffect } from "react";

export default function WeatherWidget(): ReactElement {
  const { weather, getWeather } = useWeather();

  useEffect(() => {
    getWeather();
  }, [])

  console.debug(weather)

  return (
    <Widget title="Weather" className="md:col-span-2">
      <>
        <p className="font-medium mb-4 font-mono text-blue-700 dark:text-blue-500">
          Toronto, ON
        </p>
        <div className="space-x-3 flex">
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
          <div className="h-16 w-12 bg-blue-100 dark:bg-blue-700 rounded"></div>
        </div>
      </>
    </Widget>
  );
}
