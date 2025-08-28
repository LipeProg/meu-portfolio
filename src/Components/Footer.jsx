import React from "react";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.default",
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #222",
        mt: 8,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 1 }}>
        <a
          href="mailto:seuemail@email.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <EmailIcon sx={{ color: "text.primary", fontSize: 32 }} />
        </a>
        <a
          href="https://linkedin.com/in/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <LinkedInIcon sx={{ color: "text.primary", fontSize: 32 }} />
        </a>
        <a
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <GitHubIcon sx={{ color: "text.primary", fontSize: 32 }} />
        </a>
      </Box>
      <Typography
        sx={{
          color: "text.primary",
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: "0.95rem",
        }}
      >
        © {new Date().getFullYear()} Luis Felipe. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}