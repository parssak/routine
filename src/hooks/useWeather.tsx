import axios from "axios";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { OPEN_WEATHER_API } from "secrets";
import useLocalStorage from "./useLocalStorage";

const weatherState = atom({
  key: "weatherState",
  default: {} as IWeatherData,
});

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const useWeather = () => {
  const [weather, setWeather] = useRecoilState(weatherState);
  const [localWeather, setLocalWeather] =
    useLocalStorage<IWeatherData>("weather");
  
  useEffect(() => {
    if (localWeather) {
      setWeather(localWeather);
    } 
  }, [localWeather]);
  
  const getWeather = async () => {
    const { data } = await axios.get(`${baseURL}Toronto`, {
      params: {
        appid: OPEN_WEATHER_API,
        units: "metric",
      },
    });
    setWeather(data);
    setLocalWeather(data);
  };

  return { weather, getWeather };
};

export default useWeather;
