"use client";

import { useState } from "react";

const ThemeButton = () => {
  const [darkmode, setDarkmode] = useState<boolean>(
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkmode(document.documentElement.classList.contains("dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="shadow-md bg-white dark:bg-slate-500 text-black dark:text-black rounded-full px-2 py-1 text-sm font-semibold"
    >
      {darkmode ? "🫣 Turn on the lights" : "😎 Turn off the lights"}
    </button>
  );
};

export default ThemeButton;
