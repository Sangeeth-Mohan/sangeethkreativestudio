import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFileDownload,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Loader from "../Loader/LoaderComponent";
import welcomeImage from "../../assets/images/SKM2.png";
import { useThemeContext } from "../../context/ThemeContext";
import useScreenSize from "../../hooks/useScreenSize";
import "./WelcomePage.css";

const WelcomePageComponent = () => {
  const [loading, setLoading] = useState(true);
  const { mode } = useThemeContext();
  const { width } = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const getFontSize = () => {
    if (width < 600) return "h4";
    if (width < 960) return "h3";
    return "h2";
  };

  const handleDownloadCV = () => {
    window.open("/SangeethKumarMohan.pdf", "_blank");
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="welcome-container"
      data-theme={mode}
    >
      <Box className="welcome-text-container">
        <Typography
          variant={getFontSize()}
          component="h1"
          className="name-class"
        >
          SANGEETH K MOHAN
        </Typography>
        <Typography variant="h6" component="p" className="intro-title">
          Sr. Lead Front-End Engineer
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaFileDownload />}
              sx={{ mr: 2 }}
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            mt={2}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaEnvelope />}
              component={Link}
              to="/contact"
            >
              Contact Me
            </Button>
          </motion.div>
        </Box>
        <Box mt={2} py={3} className="social-icons">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <IconButton
              href="https://www.linkedin.com/in/sangeethkumarmohan/"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedin />
            </IconButton>
            <IconButton
              href="https://github.com/Sangeeth-Mohan/sangeethkreativestudio"
              target="_blank"
              className="social-icon"
            >
              <FaGithub />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/sangee1199"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              className="social-icon"
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/sangeeth.kumar.524934?mibextid=LQQJ4d"
              target="_blank"
              className="social-icon"
            >
              <FaFacebook />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
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
    </Box>
  );
};

export default WelcomePageComponent;
