import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { Brightness4, Brightness7, Menu as MenuIcon, Work, School, Contacts } from '@mui/icons-material';
import SKM1 from '../../assets/images/SKM1.jpg';
import './Header.css';

const HeaderComponent = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="transparent-header">
      <Toolbar className="header-toolbar">
        <Box display="flex" alignItems="center">
          <Link to="/" className="logo-link">
            <img src={SKM1} alt="Logo" className="logo-image" />
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {location.pathname !== '/projects' && (
                <Button className="menu-item" color="inherit" component={Link} to="/projects">Projects</Button>
            )}
            {location.pathname !== '/extracurricular' && (
                <Button className="menu-item" color="inherit" component={Link} to="/extracurricular">Extracurricular</Button>

            )}
            {location.pathname !== '/contact' && (
                <Button className="menu-item" color="inherit" component={Link} to="/contact">Contact</Button>
            )}
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
             {location.pathname !== '/projects' && (
                <MenuItem onClick={handleMenuClose} component={Link} to="/projects">
                <Work /> Projects
              </MenuItem>
             )}
             {location.pathname !== '/projects' && (
                <MenuItem onClick={handleMenuClose} component={Link} to="/extracurricular">
                <School /> Extracurricular
              </MenuItem>
             )}
             {location.pathname !== '/projects' && (
                <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
                <Contacts /> Contact
              </MenuItem>
             )}
          <MenuItem onClick={toggleTheme}>
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />} {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
