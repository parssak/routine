import { atom, useRecoilState } from "recoil";
import axios from "axios";
import useLocalStorage from "hooks/useLocalStorage";
import { useEffect } from "react";
import useGoogleAuth from "./useGoogleAuth";

const mailState = atom({
  key: "mailState",
  default: [],
});

export default function useMail() {
  const [mail, setMail] = useRecoilState(mailState);
  const [localMail, setLocalMail] = useLocalStorage<any>("mail");
  const { auth } = useGoogleAuth()

  const getMail = async () => {
    try {
      const { data } = await axios.get("/api/mail", {
        params: {
          accessToken: auth.accessToken,
          userId: auth.profileObj.googleId,
        }  
      });
  
      const { result } = data;
      setMail(result);
      setLocalMail(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (localMail) {
      setMail(localMail);
    }
  }, []);

  return { mail, getMail };
}
