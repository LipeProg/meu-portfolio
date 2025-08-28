import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function About() {
  return (
    <Container
      sx={{
        py: 5,
        backgroundColor: "background.default",
        minWidth: "100%",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // coluna no mobile, linha no desktop
          width: "100%",
          gap: 4,
        }}
      >
        {/* Box da esquerda: textos */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            px: { xs: 0, md: 2 },
            ml: { md: 10 },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              fontFamily: "Montserrat, Arial, sans-serif",
            }}
          >
            Sobre Mim
          </Typography>
          <Typography
            sx={{
              color: "text.primary",
              maxWidth: "700px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Olá! Meu nome é Luis Felipe, sou desenvolvedor em formação, com
            experiência em projetos acadêmicos e práticos voltados para o
            desenvolvimento de software. Atualmente curso Ciência da Computação e
            já concluí um curso técnico em Análise e Desenvolvimento de Sistemas.
            <br />
            <br />
            Tenho interesse em C# e .NET para back-end, além de experiência em
            front-end com React. Estou sempre em busca de aprender novas
            tecnologias e expandir minhas habilidades, com foco em evoluir também
            na área de ciência de dados no futuro.
            <br />
            <br />
            Gosto de resolver problemas, transformar ideias em soluções
            funcionais e colaborar em projetos que gerem impacto real. Fora do
            mundo da programação, sou entusiasta de fotografia e tecnologia em
            geral.
            <br />
            <br />
            Meu objetivo é seguir crescendo como desenvolvedor, construindo
            soluções que unam inovação, eficiência e valor para as pessoas.
          </Typography>
        </Box>

        {/* Box da direita: cards de skills */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {/* Tecnologias */}
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ backgroundColor: "background.paper", width: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: "bold",
                      fontFamily: "Poppins, Arial, sans-serif",
                    }}
                  >
                    Tecnologias
                  </Typography>
                  <List dense>
                    {["C#", ".NET", "JavaScript", "React", "SQL Server", "Git", "Docker"].map(
                      (tech, i) => (
                        <ListItem key={i}>
                          <ListItemText
                            primary={tech}
                            sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                          />
                        </ListItem>
                      )
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Hard Skills */}
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ backgroundColor: "background.paper", width: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: "bold",
                      fontFamily: "Poppins, Arial, sans-serif",
                    }}
                  >
                    Hard Skills
                  </Typography>
                  <List dense>
                    {[
                      "Desenvolvimento back-end",
                      "Desenvolvimento front-end",
                      "Bancos de dados relacionais",
                      "Versionamento com Git/GitHub",
                      "Criação de APIs",
                    ].map((skill, i) => (
                      <ListItem key={i}>
                        <ListItemText
                          primary={skill}
                          sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Soft Skills */}
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ backgroundColor: "background.paper", width: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: "bold",
                      fontFamily: "Poppins, Arial, sans-serif",
                    }}
                  >
                    Soft Skills
                  </Typography>
                  <List dense>
                    {["Comunicação", "Trabalho em equipe", "Proatividade", "Resiliência"].map(
                      (soft, i) => (
                        <ListItem key={i}>
                          <ListItemText
                            primary={soft}
                            sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                          />
                        </ListItem>
                      )
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
