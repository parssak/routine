import Card from "components/atoms/Card";
import useRoutine from "hooks/useRoutine";
import React, { ReactElement } from "react";

interface Props {}

export default function RoutineList({}: Props): ReactElement {
  const { routine } = useRoutine();

  return (
    <div className="routine-list relative">
      {routine.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
}
