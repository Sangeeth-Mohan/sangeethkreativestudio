import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./ProjectTimeline.css";
import projects from "../../data/projects";
import { loadImage } from "../../utils/imageHelper";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ProjectTimeline = () => {
  const [expanded, setExpanded] = useState({});
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleToggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="timeline-container"
    >
      <Typography variant="h2" component="h1" className="timeline-title">
        Work Experience
      </Typography>
      <Timeline position={isMobile ? "right" : "alternate"}>
        {projects.map((project, index) => (
          <TimelineItem
            key={index}
            className={`timeline-item ${
              isMobile ? "mobile-timeline-item" : ""
            }`}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <TimelineSeparator>
              <TimelineDot>
                <img
                  src={loadImage(project.logo)}
                  alt={`${project.company} logo`}
                  className="timeline-logo"
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent component={motion.div} variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={isMobile ? "mobile-timeline-content" : ""}
              >
                <Card style={{ maxWidth: "800px", width: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" component="h1">
                      {project.company}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ lineHeight: "1.2" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ lineHeight: "1.2" }}
                    >
                      {project.duration}
                    </Typography>
                    <Box mt={2} className="timeline-box">
                      <ul style={{ paddingLeft: "20px" }}>
                        {project.description
                          .slice(
                            0,
                            expanded[index] ? project.description.length : 2
                          )
                          .map((point, idx) => (
                            <li
                              key={idx}
                              style={{
                                marginBottom: "0.5rem",
                                listStyleType: "disc",
                              }}
                            >
                              <Typography
                                variant="body2"
                                paragraph
                                style={{
                                  display: "block",
                                  width: "100%",
                                  lineHeight: "1.2",
                                  fontFamily: "serif",
                                  textAlign: "justify",
                                }}
                              >
                                {point}
                              </Typography>
                            </li>
                          ))}
                      </ul>
                      <IconButton
                        size="small"
                        onClick={() => handleToggleExpand(index)}
                      >
                        {expanded[index] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ProjectTimeline;
