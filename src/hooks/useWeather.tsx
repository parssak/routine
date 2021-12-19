import axios from "axios";
import { atom, useRecoilState } from "recoil";

const weatherState = atom({
  key: "weatherState",
  default: {} as any,
});

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const useWeather = () => {
  const [weather, setWeather] = useRecoilState(weatherState);
  const getWeather = async () => {
    const apiKey = process.env.OPEN_WEATHER_API;
    console.debug(process.env)
    console.debug(apiKey);
    // const { data } = await axios.get(`${baseURL}Toronto,ON`, {
    //   params: {
    //     appid: apiKey,
    //   },
    // });
    
    // setWeather(data);
  };

  return { weather, getWeather };
};

export default useWeather;
