import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Loader from '../Loader/LoaderComponent';
import welcomeImage from '../../assets/images/LandingPageBackground.jpg';
import { useThemeContext } from '../../context/ThemeContext';


const WelcomePageComponent = () => {
  const [loading, setLoading] = useState(true);
  const { mode } = useThemeContext();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false, 2000)); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        backgroundImage: mode === 'light' ? 'linear-gradient(45deg, #ddd6f3 30%, #faaca8 90%)' : 'linear-gradient(45deg, #141e30 30%, #243b55 90%)',
        color: 'text.primary',
        flex: 1,
      }}
    >
      <Box textAlign="center" mb={4}>
        <motion.img
          src={welcomeImage}
          alt="Sangeeth K Mohan"
          style={{ width: '150px', borderRadius: '50%' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Typography variant="h4" component="h1" mt={2}>
          I am Sangeeth K Mohan
        </Typography>
        <Typography variant="h6" component="p" mt={1}>
          Welcome to my creative space
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="contained" color="primary" startIcon={<FaFileDownload />} sx={{ mr: 2 }}>
            Download CV
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="contained" color="primary" startIcon={<FaEnvelope />}>
            Contact Me
          </Button>
        </motion.div>
      </Box>
      <Box component="footer" py={3} textAlign="center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <IconButton href="https://facebook.com" target="_blank" color="default">
          <FaFacebook />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="default">
          <FaInstagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="default">
          <FaLinkedin />
        </IconButton>
      </motion.div>
    </Box>
    </Box>

  );
};

export default WelcomePageComponent;
