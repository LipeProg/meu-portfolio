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
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* Box da esquerda: textos e informações */}
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: 2,
            marginLeft: 10,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              textAlign: "left",
              width: "100%",
              fontFamily: "Montserrat, Arial, sans-serif", // Título
            }}
          >
            Sobre Mim
          </Typography>
          <Typography
            sx={{
              color: "text.primary",
              maxWidth: "700px",
              width: "100%",
              textAlign: "left",
              alignSelf: "flex-start",
              fontFamily: "Roboto, Arial, sans-serif", // Parágrafo
              fontSize: "1.1rem",
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
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <Grid container spacing={6}>


            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "background.paper", width: '250px' }}>
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

                    <ListItem>
                      <ListItemText
                        primary="C#"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary=".NET"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary="JavaScript"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>   

                    <ListItem>
                      <ListItemText
                        primary="React"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem> 

                    <ListItem>
                      <ListItemText
                        primary="SQL Server"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>      

                     <ListItem>
                      <ListItemText
                        primary="Git"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary="Docker"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>     


                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "background.paper", width: '250px' }}>
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
                    <ListItem>
                      <ListItemText
                        primary="Desenvolvimento back-end"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Desenvolvimento front-end"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Bancos de dados relacionais"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Versionamento com Git/GitHub"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Criação de APIs"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "background.paper", width: '250px' }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: "bold",
                      fontFamily: "Poppins, Arial, sans-serif", // Card título
                    }}
                  >
                    Soft Skills
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary="Comunicação"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }} // Card item
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Trabalho em equipe"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Proatividade"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Resiliência"
                        sx={{ color: "text.primary", fontFamily: "Poppins, Arial, sans-serif" }}
                      />
                    </ListItem>
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