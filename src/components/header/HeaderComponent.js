import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useThemeContext } from '../../context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';



const HeaderComponent = () => {
    const { toggleTheme, mode } = useThemeContext();

  return (
    <AppBar position="static" component={motion.div} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Toolbar
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundImage: mode === 'light' ? 'linear-gradient(45deg, #ddd6f3 30%, #faaca8 90%)' : 'linear-gradient(45deg, #141e30 30%, #243b55 90%)',

        }}
        >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" component="span" fontWeight="bold">
              SK
            </Typography>
            <Typography variant="subtitle1" component="span" sx={{ ml: 1 }}>
              studio
            </Typography>
          </Box>
        </Typography>
        <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
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
