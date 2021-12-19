import { atom, useRecoilState } from "recoil";
import axios from "axios";
import useLocalStorage from "hooks/useLocalStorage";
import { useEffect } from "react";

const mailState = atom({
  key: "mailState",
  default: [],
});

export default function useMail() {
  const [mail, setMail] = useRecoilState(mailState);
  const [localMail, setLocalMail] = useLocalStorage<any>("mail");

  const getMail = async () => {
    const { data } = await axios.get("/api/mail");
    const { result } = data;
    setMail(result);
    setLocalMail(result);
  };

  useEffect(() => {
    if (localMail) {
      setMail(localMail);
    }
  }, []);

  return { mail, getMail };
}
