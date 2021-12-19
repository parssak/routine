import React, { ReactElement, useEffect } from "react";
import Widget from "components/atoms/Widget";
import useMail from "hooks/useMail";

interface Props {}

export default function MailWidget({}: Props): ReactElement {
  return (
    <Widget title="Mail">
      {/* open gmail */}
      <a
        href="https://mail.google.com/mail/u/0/#inbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Mail &rarr;
      </a>
    </Widget>
  );
}
