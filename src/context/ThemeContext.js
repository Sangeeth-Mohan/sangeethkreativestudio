import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
    createTheme({
      typography: {
        fontFamily: 'Merienda, sans-serif',
        body1: {
          lineHeight: 0,
        },
        body2: {
          lineHeight: 0,
        },
      },
      palette: {
        mode,
        primary: {
          main: mode === 'light' ? '#ddd6f3' : '#243b55',
        },
        background: {
          default: mode === 'light' ? 'linear-gradient(45deg, #ddd6f3 30%, #faaca8 90%)' : 'linear-gradient(45deg, #141e30 30%, #243b55 90%)',
          paper: mode === 'light' ? '#faaca8' : '#243b55',
        },
        text: {
          primary: mode === 'light' ? '#000000' : '#ffffff',
          secondary: mode === 'light' ? '#555555' : '#aaaaaa',
        },
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
