import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import WelcomePageComponent from "./components/WelcomePage/WelcomePageComponent";
import Contact from "./pages/Contact/Contact";
import ThemeContextProvider from "./context/ThemeContext";
import { Box } from "@mui/material";
import "./index.css";
import ProjectTimeline from "./components/Projects/ProjectTimeline";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Box className="app-container">
          <HeaderComponent />
          <Box
            component="main"
            className="main-container"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Routes>
              <Route path="/" element={<WelcomePageComponent />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/workExperience" element={<ProjectTimeline />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
