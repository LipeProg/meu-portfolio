import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
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
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* Box da esquerda: conteúdo existente */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
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
              fontFamily: "Montserrat, Arial, sans-serif", // Título
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
              fontFamily: "Roboto, Arial, sans-serif", // Subtítulo
            }}
          >
            Desenvolvedor | Estudante de Ciência da Computação
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              width: "150px",
              py: 2,
              fontWeight: "bold",
              fontFamily: "Poppins, Arial, sans-serif", // Botão
            }}
          >
            Ver Projetos
          </Button>
        </Box>

        {/* Box da direita: foto e ícones de contato */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Foto do usuário */}
          <Box
            component="img"
            src="/fotoperfil.png" // ajuste o caminho da sua foto
            alt="Luis Felipe"
            sx={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              objectFit: "cover",
              mb: 3,
              boxShadow: 3,
            }}
          />
          {/* Ícones de contato abaixo da foto */}
          <Box sx={{ display: "flex", gap: 4 }}>
            <a
              href="mailto:proglipe@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <EmailIcon sx={{ color: "text.primary", fontSize: 40 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-felipe-9559982ab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <LinkedInIcon sx={{ color: "text.primary", fontSize: 40 }} />
            </a>
            <a
              href="https://github.com/LipeProg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <GitHubIcon sx={{ color: "text.primary", fontSize: 40 }} />
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}