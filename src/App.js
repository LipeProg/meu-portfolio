import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projetos from "./Components/Projetos";
import theme from "./theme";
import Footer from "./Components/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar /> 
          <div id="hero"> <HeroSection /> </div> 
          <div id="about"> <About /> </div> 
          <div id="projetos"> <Projetos /> </div>
          <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
