import { atom, useRecoilState } from "recoil";
import axios from "axios";
import useLocalStorage from "hooks/useLocalStorage";
import { useEffect } from "react";
import { INewsArticle } from "types";

const newsState = atom({
  key: "newsState",
  default: [] as INewsArticle[],
});

const useNews = () => {
  const [news, setNews] = useRecoilState(newsState);
  const [localNews, setLocalNews] = useLocalStorage<INewsArticle[]>("news");

  const getNews = async () => {
    const { data } = await axios.get("/api/news");
    const { result } = data;
    setNews(result);
    setLocalNews(result);
  };
  
  useEffect(() => {
    if (localNews) {
      setNews(localNews);
    }
  }, [])

  return { news, getNews };
};

export default useNews;
