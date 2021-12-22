import React, { ReactElement, useEffect } from "react";
import Widget from "components/atoms/Widget";
import useMail from "hooks/useMail";
import GoogleLogin from "react-google-login";
import { GMAIL_CLIENT_ID } from "secrets";
import useGoogleAuth from "hooks/useGoogleAuth";

const responseGoogle = (response) => {
  console.log(response);
};

interface Props {}

export default function MailWidget({}: Props): ReactElement {
  const { auth, storeAuth, isAuthenticated } = useGoogleAuth();
  const { getMail } = useMail();

  useEffect(() => {
    if (auth.accessToken) {
      getMail();
    }
  }, [auth]);

  return (
    <Widget title="Mail">
      {isAuthenticated() ? (
        <div>Authenticated</div>
      ) : (
        <GoogleLogin
          clientId={GMAIL_CLIENT_ID}
          buttonText="Login"
          onSuccess={storeAuth}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {/* open gmail */}
      {/* <a
        href="https://mail.google.com/mail/u/0/#inbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Mail &rarr;
      </a> */}
    </Widget>
  );
}
