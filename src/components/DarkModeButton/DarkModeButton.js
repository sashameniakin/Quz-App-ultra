import { useState, useEffect } from "react";
import { ThemeContext, themes } from "../../dark_theme/ThemeContext";
import "./DarkModeButton.css";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState();

  //TODO:

  /*   => {
    const localData = localStorage.getItem("darkMode", darkMode);
    return localData ?? false;
  }); */

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
              localStorage.setItem("darkMode", !darkMode);
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          ></div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
