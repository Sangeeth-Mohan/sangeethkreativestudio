import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { SangeethPortfolioThemeProvider } from './context/sangeethPortfolioContext.js';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <SangeethPortfolioThemeProvider>
      <Router>
        <div className='App'>
          <HeaderComponent/>
          <NavBarComponent />
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='projects' Component={Projects}/>
            <Route path='contact' Component={Contact}/>
          </Routes>
          <FooterComponent/>
        </div>
      </Router>
    </SangeethPortfolioThemeProvider>
  );
}

export default App;
