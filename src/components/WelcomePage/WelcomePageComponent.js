import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Loader from '../Loader/LoaderComponent';
import welcomeImage from '../../assets/images/SangeethPic1.PNG';
import welcomeBackgroundImage from '../../assets/images/LandingPageBackground.jpg';
import { useThemeContext } from '../../context/ThemeContext';
import './WelcomePage.css';
import { Parallax } from 'react-parallax';

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
        className="welcome-container"
        data-theme={mode}
      >
        <Box className="welcome-text-container" >
          <Typography variant="h4" component="h1" mt={2} class="animate-charcter">
            I'M SANGEETH K MOHAN
          </Typography>
          <Typography variant="h6" component="p" mt={1}>
            Welcome to my creative space
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="contained" color="primary" startIcon={<FaFileDownload />} sx={{ mr: 2 }}>
                Download CV
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} mt={2}>
              <Button variant="contained" color="primary" startIcon={<FaEnvelope />}>
                Contact Me
              </Button>
            </motion.div>
          </Box>
          <Box mt={2} py={3} className="social-icons">
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
        {/* <Box className="welcome-divider">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1 }}
            className="divider-line"
          />
        </Box> */}
        <Box className="welcome-image-container">
          <motion.img
            src={welcomeImage}
            alt="Sangeeth K Mohan"
            className="welcome-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Box>
        {/* <motion.div
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="scroll-indicator"
        >
          <FaArrowDown />
        </motion.div> */}
      </Box>
  );
};

export default WelcomePageComponent;
