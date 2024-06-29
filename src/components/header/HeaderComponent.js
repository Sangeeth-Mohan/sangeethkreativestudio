import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import SKM1 from '../../assets/images/SKM1.jpg';
import './Header.css'



const HeaderComponent = () => {
    const { toggleTheme, mode } = useThemeContext();

  return (
    <AppBar position="fixed" className='transparent-header'>
      <Toolbar
        className="header-toolbar"
        >
          <Box display="flex" alignItems="center">
            <Link to="/" className="logo-link">
                <img src={SKM1} alt="Logo" className="logo-image" />
            </Link>
          </Box>
        <Box>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/extracurricular">Extracurricular</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
