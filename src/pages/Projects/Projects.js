import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { title: "Project 1", description: "Description of project 1" },
  { title: "Project 2", description: "Description of project 2" },
  { title: "Project 3", description: "Description of project 3" }
];

const Projects = () => {
  return (
    <Box className="projects-container">
      <Typography variant="h3" component="h2" mb={4} textAlign="center">
        My Projects
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="project-card"
          >
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
