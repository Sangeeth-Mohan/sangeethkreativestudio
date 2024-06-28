import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ThemeContextProvider from './context/ThemeContext';
import { Box } from '@mui/material';




function App() {
  return (
    <ThemeContextProvider>
      <Router>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
        <HeaderComponent />
        <Box
            component="main"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </Box>
        </Box>
    </Router>
    </ThemeContextProvider>
    
  );
}

export default App;
