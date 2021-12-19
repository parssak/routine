import React, { ReactElement } from "react";
import Widget from "components/atoms/Widget";

interface Props {}

export default function MailWidget({}: Props): ReactElement {
  return (
    <Widget title="Mail">
      <div>
        <div className="p-1 w-full">Mail 1 from Bob</div>
        <div className="p-1 w-full">Mail 2 from Bob</div>
        <div className="p-1 w-full">Mail 3 from Bob</div>
        <div className="p-1 w-full">Mail 4 from Bob</div>
      </div>
    </Widget>
  );
}
