import "./ToggleButton.css";
import "../style.css";
import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export const ToggleButton = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);

  return (
    <div className={`"container-switch" ${theme}`}>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
