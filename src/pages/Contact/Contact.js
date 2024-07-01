import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, useMediaQuery } from '@mui/material';
import { FaInstagram, FaTwitter, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_emailToSangeeth', 'template_pct', form, 'QFoaOLtUzdbRUl2iB')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setForm({ name: '', email: '', message: '' });
        setError('');
      }, (error) => {
        console.log('FAILED...', error);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-container"
    >
      <Typography variant="h2" component="h1" className="contact-title">
        Contact
      </Typography>
      <Typography variant="body1" component="p" className="contact-text">
        Thanks for reaching out to me!
      </Typography>
      <Typography variant="body1" component="p" className="contact-text">
        Get in touch with me via email or social media.
      </Typography>
      <form className="contact-form" onSubmit={handleSubmit}>
        <Box className="contact-form-left">
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            className="contact-input"
            margin="normal"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            className="contact-input"
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />
        </Box>
        <Box className="contact-form-right">
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={isSmallScreen ? 4 : 8}
            className="contact-input"
            margin="normal"
            value={form.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className="send-button"
            type="submit"
          >
            Send Email
          </Button>
          {isSent && <Typography variant="body2" color="success">Message sent successfully!</Typography>}
          {error && <Typography variant="body2" color="error">{error}</Typography>}
        </Box>
      </form>
      <Box className="social-media">
        <IconButton href="https://www.linkedin.com/in/sangeethkumarmohan/" target="_blank" className="social-icon">
            <FaLinkedin />
        </IconButton>
        <IconButton href="https://github.com/Sangeeth-Mohan/sangeethkreativestudio" target="_blank" className="social-icon">
            <FaGithub />
        </IconButton>
        <IconButton href="https://www.instagram.com/sangee1199" target="_blank" className="social-icon">
            <FaInstagram />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" className="social-icon">
            <FaTwitter />
        </IconButton>
        <IconButton href="https://www.facebook.com/sangeeth.kumar.524934?mibextid=LQQJ4d" target="_blank" className="social-icon">
            <FaFacebook />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
