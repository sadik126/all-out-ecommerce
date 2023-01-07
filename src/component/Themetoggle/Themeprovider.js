import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const ThemeContext = createContext();

const Themeprovider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                {children}
            </ThemeContext.Provider>

        </div>
    );
};

export default Themeprovider;