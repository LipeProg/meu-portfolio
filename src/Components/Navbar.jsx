import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "background.default" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            width: "auto",
            color: "text.primary",
            fontFamily: "Montserrat, Arial, sans-serif", // Título
          }}
        >
          Luis Felipe
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1, ml: -11 }}>
          <Button
            color="inherit"
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              fontFamily: "Poppins, Arial, sans-serif", // Botão
            }}
            onClick={() => scrollToSection("about")}
          >
            Sobre
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              fontFamily: "Poppins, Arial, sans-serif", // Botão
            }}
            onClick={() => scrollToSection("projetos")}
          >
            Projetos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
