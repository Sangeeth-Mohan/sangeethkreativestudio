import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { MotionDiv } from '../../utils/motion'; 
import './Home.css';

const Home = () => {
  return (
    <MotionDiv className="home-container">
      <Box p={3}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Sangeeth Kreative Studio
        </Typography>
        <Typography variant="body1" align="center">
          This is the home page of your portfolio.
        </Typography>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Featured Projects
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="project-card">
                <Typography variant="h6">Project 1</Typography>
                <Typography variant="body1">Description of Project 1</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="project-card">
                <Typography variant="h6">Project 2</Typography>
                <Typography variant="body1">Description of Project 2</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="project-card">
                <Typography variant="h6">Project 3</Typography>
                <Typography variant="body1">Description of Project 3</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MotionDiv>
  );
};

export default Home;
