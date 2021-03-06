import CommandLine from "components/atoms/CommandLine";
import CalendarWidget from "components/molecules/CalendarWidget";
import MailWidget from "components/molecules/MailWidget";
import NewsWidget from "components/molecules/NewsWidget";
import WeatherWidget from "components/molecules/WeatherWidget";
import { getDate, getGreeting } from "utils/ui.utils";

export default function Home() {
  return (
    <div
      className="
    primary-bg min-h-screen select-none font-mono tracking-tight px-4 
    "
    >
      <CommandLine />
      <div className="fixed primary-bg w-full top-0 left-0 right-0 z-20 px-4">
        <div className="pt-12 shadow-xl shadow-gray-50 dark:shadow-zinc-900 max-w-5xl mx-auto">
          <span>{getDate()}</span>
          <h1 className="text-4xl font-medium">{getGreeting()}</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-36 pb-12 relative">
        <div className="grid gap-3 md:grid-cols-2 grid-flow-row-dense">
          <WeatherWidget />
          <NewsWidget />
          <CalendarWidget />
          <MailWidget />
        </div>
      </div>
    </div>
  );
}
