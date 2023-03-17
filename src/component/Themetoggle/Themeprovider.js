import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const ThemeContext = createContext();

const Themeprovider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [darkMode, setDarkMode] = useState(false);

    if (darkMode) {
        localStorage.setItem('theme', darkMode);
        setTheme(darkMode)
    }



    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setDarkMode }}>
                {children}
            </ThemeContext.Provider>

        </div>
    );
};

export default Themeprovider;