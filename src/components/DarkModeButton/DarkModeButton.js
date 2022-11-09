import { useState } from "react";
import { ThemeContext, themes } from "../../dark_theme/ThemeContext";
import "./DarkModeButton.css";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(true);

  //Dark-theme

  return (
    <div className="container-flex__darkmode">
      <h2>Dark Mode</h2>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <div
            id="div"
            className={`switch-btn ${darkMode ? "switch-on" : ""}`}
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          ></div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
