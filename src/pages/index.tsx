import CommandLine from "components/atoms/CommandLine";
import Widget from "components/atoms/Widget";
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
      <div className="max-w-3xl mx-auto pt-36 pb-12 relative">
        <div className="fixed primary-bg w-full top-0 pt-6 shadow-xl shadow-gray-50 dark:shadow-zinc-900">
          <span>{getDate()}</span>
          <h1 className="text-4xl font-medium">{getGreeting()}</h1>
        </div>
        <div className="space-y-4">
          <WeatherWidget />
          <NewsWidget />
          <MailWidget />
          <NewsWidget />
          <WeatherWidget />
          <NewsWidget />
          <WeatherWidget />
          <NewsWidget />
          <WeatherWidget />
          <NewsWidget />
        </div>
      </div>
          <CommandLine />
      
    </div>
  );
}
