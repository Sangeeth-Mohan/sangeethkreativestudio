import React from "react";
import {Container, Grid} from '@mui/material';
import {motion} from 'framer-motion';
import './LandingPage.css'

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "ease-in-out" }
  };

const LandingPageComponent = () => {
    return(
        <Container maxWidth='false' className="landing-page">
            {/* <div className="grid-container">
                <motion.div variants={cardVariants} initial="initial" animate="animate" className="grid-item" >Professional Career</motion.div>
                <motion.div variants={cardVariants} initial="initial" animate="animate" className="grid-item" >Kuthufy</motion.div>
                <motion.div variants={cardVariants} initial="initial" animate="animate" className="grid-item" >Projects</motion.div>

            </div> */}
            {/* <Grid container spacing={2} justifyContent='center' alignItems="center" className="grid-container">
                <Grid item xs={12} md={4} className="grid-item">
                    Professional Career
                </Grid>
                <Grid item xs={12} md={4} className="grid-item">
                    Kuthufy
                </Grid>
                <Grid item xs={12} md={4} className="grid-item">
                    Projects
                </Grid>
            </Grid> */}
        </Container>
    )
}

export default LandingPageComponent;