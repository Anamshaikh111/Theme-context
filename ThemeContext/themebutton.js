import React, { useContext } from "react";
import ThemeContext from "./themecontext";

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
        style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff" ,
            padding: "20px",
        }}
        >
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeButton;