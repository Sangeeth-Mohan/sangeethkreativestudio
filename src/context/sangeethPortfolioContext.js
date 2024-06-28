import { ThemeContext, ThemeProvider as MUIThemeProvider} from '@emotion/react';
import { createTheme } from '@mui/material';
import {createContext, useContext, useState, } from 'react';

//create context
export const SangeethPortfolioThemeContext = createContext();

//create theme
export const useTheme = ()=>{
    useContext(SangeethPortfolioThemeContext);}

//create themeProvider
export const SangeethPortfolioThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=>{
        setTheme((currentTheme)=> (currentTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme, toggleTheme,
    }

    const muiTheme = createTheme({
        palette:{
            mode: theme,
        },
    });
    
    //return themeProvider
    return(
        <ThemeContext.Provider value={value}>
            <MUIThemeProvider theme={muiTheme}>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};