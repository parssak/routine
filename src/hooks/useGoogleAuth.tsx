import { atom, useRecoilState } from "recoil";
import useLocalStorage from "hooks/useLocalStorage";
import { IGoogleAuth } from "types";
import { useEffect } from "react";
import { GoogleLoginResponse } from "react-google-login";

const authState = atom({
  key: "authState",
  default: {} as GoogleLoginResponse,
});

export default function useGoogleAuth() {
  const [auth, setAuth] = useRecoilState(authState);
  const [localAuth, setLocalAuth] = useLocalStorage<GoogleLoginResponse>("auth");

  useEffect(() => {
    if (localAuth) {
      setAuth(localAuth);
    }
  }, []);

  const storeAuth = (result: GoogleLoginResponse) => {
    setAuth(result);
    setLocalAuth(result);
  };

  const isAuthenticated = () => {
    return auth.accessToken !== undefined;
  };

  return { auth, storeAuth, isAuthenticated };
  
}

