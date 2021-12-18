import { atom, useRecoilState } from "recoil";

const routineState = atom({
  key: "routineState",
  default: [
    {
      id: "1",
      title: "Check News",
      description: "Check news from the web",
      color: "orange",
      duration_ms: 1000,
    },
    {
      id: "2",
      title: "Check Mail",
      description: "Check mail from the web",
      color: "indigo",
      duration_ms: 2000,
    },
    {
      id: "3",
      title: "Duolingo Lesson",
      description: "Check news from the web",
      color: "green",
      duration_ms: 1000,
    },
    {
      id: "4",
      title: "Setup Calendar",
      description: "Check news from the web",
      color: "red",
      duration_ms: 1000,
    },
    {
      id: "5",
      title: "Workout",
      description: "Check mail from the web",
      color: "blue",
      duration_ms: 2000,
    },
    {
      id: "6",
      title: "Duolingo Lesson",
      description: "Check news from the web",
      color: "green",
      duration_ms: 1000,
    },
  ] as ITask[],
});

export default function useRoutine() {
  const [routine, setRoutine] = useRecoilState(routineState);

  const addTask = (task: ITask) => {
    setRoutine([...routine, task]);
  };

  const removeTask = (task: ITask) => {
    setRoutine(routine.filter((t) => t.id !== task.id));
  };

  const updateTask = (task: ITask) => {
    setRoutine(routine.map((t) => (t.id === task.id ? task : t)));
  };

  return {
    routine,
    addTask,
    removeTask,
    updateTask,
  };
}
