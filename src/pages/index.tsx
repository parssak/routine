import RoutineList from "components/molecules/RoutineList";
import { getDate } from "utils/ui.utils";

export default function Home() {
  return (
    <>
      <main className="container min-h-screen pt-24 ">
        <div className="max-w-3xl mx-auto">
          <span>{getDate()}</span>
          <h1 className="text-4xl font-medium mb-12">Good Morning.</h1>
          <RoutineList />
        </div>
      </main>
    </>
  );
}
