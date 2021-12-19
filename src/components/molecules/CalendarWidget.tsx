import React, { ReactElement } from 'react'
import Widget from 'components/atoms/Widget'

interface Props {
  
}

export default function CalendarWidget({}: Props): ReactElement {
  return (
    <Widget title="Calendar" className="md:row-span-2">
      <div>
        <h3 className="font-bold">Today:</h3>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <h3 className="font-bold">Tomorrow:</h3>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      
    </Widget>
  )
}
