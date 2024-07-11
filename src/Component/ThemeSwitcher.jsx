import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    // Apply the theme on the document body or root element
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex">
      <span className="mr-2 font-bold">Dark Mode</span>
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
    </div>
  );
};
export default ThemeSwitcher;
