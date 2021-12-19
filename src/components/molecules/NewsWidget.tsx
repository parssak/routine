import Widget from "components/atoms/Widget";
import React, { ReactElement } from "react";

interface Props {}

export default function NewsWidget({}: Props): ReactElement {
  return (
    <Widget title="News">
      <>top articles</>
    </Widget>
  );
}
