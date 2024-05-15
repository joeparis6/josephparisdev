import React from "react";


export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({children}) => {
  
  const [theme, setTheme] = React.useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
