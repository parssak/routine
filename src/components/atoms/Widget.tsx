import React, { ReactElement } from "react";

interface Props {
  title: string;
  children: ReactElement;
  className?: string;
}

export default function Widget({
  title,
  children,
  className,
}: Props): ReactElement {
  return (
    <button
      type="button"
      className={`
      block 
      text-left 
      w-full 
      group 
      p-4 
      transition-all
      border-2
      outline-none 
      rounded-lg
      focus:shadow-lg
      border-blue-100
      dark:border-blue-500
      focus:border-violet-300
      focus:shadow-violet-500/20
      ${className}
      `}
    >
      <h2 className="text-2xl font-semibold font-mono text-blue-700 dark:text-blue-500 group-focus:text-violet-600 dark:group-focus:text-violet-400 transition group-focus:underline ">
        {title}
      </h2>
      {children}
    </button>
  );
}
