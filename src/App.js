import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import WelcomePageComponent from "./components/WelcomePage/WelcomePageComponent";
import Contact from "./pages/Contact/Contact";
import ThemeContextProvider from "./context/ThemeContext";
import { Box } from "@mui/material";
import "./index.css";

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
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
