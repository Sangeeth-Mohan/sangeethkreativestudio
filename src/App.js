import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import WelcomePageComponent from './components/WelcomePage/WelcomePageComponent';
import Home from './pages/Home/Home';
import ThemeContextProvider from './context/ThemeContext';
import { Box } from '@mui/material';
import './index.css';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: 'inherit',
          }}
        >
        <HeaderComponent />
        <Box
            component="main"
            className="main-container"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          <Routes>
            <Route path="/" element={<>
              <WelcomePageComponent/>
            </>} />
          </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
    
  );
}

export default App;
