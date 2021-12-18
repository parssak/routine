import useRoutine from "hooks/useRoutine";
import React, { ReactElement } from "react";

interface Props {
  task: ITask;
}

export default function Card({ task }: Props): ReactElement {
  const { routine, removeTask } = useRoutine();

  const getIndex = (): number => {
    return routine.findIndex((routineTask) => routineTask.id === task.id);
  };

  const isFirst = (): boolean => {
    return getIndex() === 0;
  };

  return (
    <button
      className={`
      rounded-2xl
      p-6
      h-64
      w-full
      bg-${task.color}-500
      shadow-${task.color}-300/10
      shadow-lg
      text-white
      flex
      flex-col
      justify-between
      transform
      transition-all
      duration-250
      relative 
      top-0
      ${isFirst() ? "hover:scale-105" : "hover:top-5"}
      `}
      style={{
        zIndex: 99 - getIndex(),
        transform: `scale(${1 - 0.01 * getIndex()})`,
        // opacity: 1 - 0.1 * getIndex(),
      }}
      onClick={() => removeTask(task)}
    >
      <div className="flex w-full justify-end relative">
        <span className="text-lg">{task.duration_ms} ms</span>
      </div>
      <div className="flex w-full justify-between items-end">
        <h1 className="text-3xl font-semibold">{task.title}</h1>
        <span className="text-xl">
          {isFirst() ? <span>Start &rarr;</span> : `${task.duration_ms} ms`}
        </span>
      </div>
    </button>
  );
}
