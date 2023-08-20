import React, { createContext, useState } from 'react';

/**
 * @description context to store theme state
 */
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * @description provider for theme context
 */
const ThemeContextProvider = ({ children }) => {
  // default to lightmode
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
