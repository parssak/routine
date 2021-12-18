import useRoutine from "hooks/useRoutine";
import React, { ReactElement } from "react";

interface Props {
  task: ITask;
}

export default function Card({ task }: Props): ReactElement {
  const { routine, removeTask } = useRoutine();

  const isFirst = (): boolean => {
    return routine.indexOf(task) === 0;
  }




  return (
    <button
      className={`
      rounded-2xl
      p-6
      h-64
      w-full
      bg-${task.color}-500
      shadow-${task.color}-300/30
      shadow-lg
      text-white
      flex
      flex-col
      justify-between
      transform
      transition-all
      relative 
      top-0
      ${isFirst() ? "scale-105" : "hover:top-5"}
      `}
      style={{ zIndex: 99 - Number(task.id) }}
      onClick={() => removeTask(task)}
    >
      <div className="flex justify-end relative">
        <span className="text-lg">{task.duration_ms} ms</span>
      </div>
      <div className="flex justify-between items-end">
        <h1 className="text-3xl font-semibold">{task.title}</h1>
        <span className="text-xl">
          {isFirst() ? <span>Start &rarr;</span> : `${task.duration_ms} ms`}
        </span>
      </div>
    </button>
  );
}
