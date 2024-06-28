import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box component="footer" py={3} textAlign="center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <IconButton href="https://facebook.com" target="_blank" color="primary">
          <FaFacebook />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="primary">
          <FaInstagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="primary">
          <FaLinkedin />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Footer;
