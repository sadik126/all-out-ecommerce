import React, { useState } from 'react';

const Themetoggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div>
            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Dark Mode
            </button>

        </div>
    );
};

export default Themetoggle;