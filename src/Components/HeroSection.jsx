import React from "react";
import { Container, Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function HeroSection() {
  return (
    <Container
      sx={{
        backgroundColor: "background.default",
        minHeight: "60vh",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // coluna no mobile, linha no desktop
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 4,
        }}
      >
        {/* Box da esquerda: texto */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mb: { xs: 4, md: 0 }, // margem embaixo no mobile
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              maxWidth: "600px",
              width: "100%",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontSize: { xs: "2rem", md: "3rem" }, // fonte menor no mobile
            }}
          >
            Olá, sou Luis Felipe 👋
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "text.primary",
              maxWidth: "600px",
              width: "100%",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Desenvolvedor | Estudante de Ciência da Computação
          </Typography>

        </Box>

        {/* Box da direita: foto + ícones */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/fotoperfil.png`}
            alt="Luis Felipe"
            sx={{
              width: { xs: 200, sm: 250, md: 300 }, // imagem menor em telas pequenas
              height: { xs: 200, sm: 250, md: 300 },
              borderRadius: "50%",
              objectFit: "cover",
              mb: 3,
              boxShadow: 3,
            }}
          />
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:proglipe@outlook.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon sx={{ color: "text.primary", fontSize: 40 }} />
            </a>
            <a href="https://www.linkedin.com/in/luis-felipe-9559982ab/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ color: "text.primary", fontSize: 40 }} />
            </a>
            <a href="https://github.com/LipeProg" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ color: "text.primary", fontSize: 40 }} />
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
