import React from "react";
import ThemeProvider from "./themeprovider";
import ThemeButton from "./themebutton";

const App = () => {
    return (
        <ThemeProvider>
            <ThemeButton />
        </ThemeProvider>
    );
};

export default App;