import React, { ReactElement, useEffect, useRef, useState } from "react";

interface Props {}

export default function CommandLine({}: Props): ReactElement {
  const [showCommandLine, setShowCommandLine] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    const toggleCommandLine = (e: KeyboardEvent) => {
      if (e.key === "/") {
        setShowCommandLine(!showCommandLine);
        e.preventDefault();
        ref?.current?.focus();
      }
    };

    document.addEventListener("keydown", toggleCommandLine);

    const closeCommandLine = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowCommandLine(false);
      }
    };

    document.addEventListener("keydown", closeCommandLine);
    return () => {
      document.removeEventListener("keydown", toggleCommandLine);
      document.removeEventListener("keydown", closeCommandLine);
    };
  }, [showCommandLine]);

  if (!showCommandLine) {
    return null;
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      // automcomplete
    }
  };


  return (
    <div
      className="
    fixed bottom-0 w-full p-1 left-0 right-0 px-4 border-t-4 text-white
    focus-within:bg-black focus-within:border-yellow-500
    "
    >
      <div className="max-w-3xl mx-auto text-lg">
        <input
          type="text"
          className="w-full p-1 bg-transparent outline-none"
          ref={ref}
          // on focus end
          onBlur={() => setShowCommandLine(false)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
