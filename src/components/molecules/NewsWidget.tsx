import Widget from "components/atoms/Widget";
import React, { ReactElement } from "react";

interface Props {}

export default function NewsWidget({}: Props): ReactElement {
  return (
    <Widget title="News" className="md:row-span-2">
      <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi id sapiente qui beatae? Molestiae recusandae ut suscipit nam sapiente dignissimos labore fugiat incidunt! Blanditiis fugiat quam, error dolorum praesentium ad nihil rem non autem obcaecati, reiciendis nostrum quis natus.
      </>
    </Widget>
  );
}
