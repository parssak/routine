import Widget from "components/atoms/Widget";
import useNews from "hooks/useNews";
import React, { ReactElement, useEffect } from "react";

interface Props {}

export default function NewsWidget({}: Props): ReactElement {
  const { news, getNews } = useNews();

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Widget title="News" className="md:row-span-2">
      <div className="space-y-4 pt-2">
        {news.map(({ title, href, imageSrc }) => (
          <a
            key={href}
            href={href}
            // open in same secondary tab
            target="_blank"
            className="block p-2 rounded-md text-gray-700 focus:outline-none border focus:border-violet-400 focus:shadow-md focus:shadow-violet-400/30 transition duration-150 ease-in-out"
          >
            <div className="flex items-center space-x-3">
              {imageSrc ? (
                <div className="flex-shrink-0">
                  <img className="h-full rounded overflow-hidden object-cover" src={imageSrc} alt={title} />
                </div>
              ) : null}
              <div className="space-y-1">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {title}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Widget>
  );
}
