import React from 'react';
import { Box, Typography } from '@mui/material';
// import ContactCard from './ContactCard';
import './Contact.css';

const Contact = () => {
  return (
    <Box className="contact-container">
      <Typography variant="h3" component="h2" mb={4} textAlign="center">
        Contact Me
      </Typography>
      {/* <ContactCard /> */}
    </Box>
  );
};

export default Contact;
