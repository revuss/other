import { useEffect, useState } from "react";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    return savedTheme ? savedTheme : "light";
  });

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return { themeMode, darkTheme, lightTheme };
};

export default useTheme;
