import React, { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import './Themetoggle.css';

const Themetoggle = () => {
    // const [darkMode, setDarkMode] = useState(false);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
    };
    return (
        <div className="toggle" onClick={handleClick}>
            <Moon />
            <Sun />
            {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
            <div
                className="t-button"
                style={darkMode ? { left: "2px" } : { right: "2px" }}
            ></div>
        </div>
    );
};

export default Themetoggle;