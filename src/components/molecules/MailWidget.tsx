import React, { ReactElement } from "react";
import Widget from "components/atoms/Widget";

interface Props {}

export default function MailWidget({}: Props): ReactElement {
  return (
    <Widget title="Mail">
      <div>mail</div>
    </Widget>
  );
}
