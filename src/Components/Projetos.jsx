import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import MediaCard from "./Cards/MediaCard";
import Estore from "./Cards/E-store";
import JrInformatica from "./Cards/JrInformatica";

export default function Projetos() {
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
        marginTop: 8,
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* Box da esquerda: cards dos projetos */}
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



          <Grid container spacing={3} justifyContent="center">
            
            <Grid item xs={12} md={10}>
              <MediaCard />
            </Grid>

            <Grid item xs={12} md={10}>
              <Estore />
            </Grid>

            <Grid item xs={12} md={10}>
              <JrInformatica />
            </Grid>
            {/* Adicione mais <Grid item><MediaCard /></Grid> se quiser mais cards */}
          </Grid>
        </Box>

        {/* Box da direita: textos */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: 2,
          }}
        >
          {/* Texto de apresentação da aba */}

          <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Montserrat, Arial, sans-serif",
                mb: 3,
                marginBottom: 5,
              }}
            >
              Projetos
          </Typography>


          <Typography
            sx={{
              color: "text.primary",
              fontFamily: "Roboto, Arial, sans-serif",
              textAlign: "left",
              mb: 3,
              fontSize: "1.1rem",
              maxWidth: "600px",
              marginBottom: 8,
            }}
          >
            Aqui você encontra alguns dos meus principais projetos desenvolvidos
            durante minha trajetória acadêmica e profissional. Cada projeto representa
            um desafio superado e uma oportunidade de aprendizado.
          </Typography>

          {/* Texto sobre como pode ajudar na empresa */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontFamily: "Montserrat, Arial, sans-serif",
                textAlign: "left",
                mb: 1,
              }}
            >
              Como posso ajudar sua empresa?
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontFamily: "Roboto, Arial, sans-serif",
                textAlign: "left",
                fontSize: "1.05rem",
                maxWidth: "600px",
                marginTop: 3,
              }}
            >
              Posso ajudar sua empresa criando sistemas que facilitam o dia a dia e economizam tempo. Gosto de encontrar maneiras de deixar processos mais rápidos e organizados, além de trazer ideias novas para melhorar os resultados. Aprendo rápido, trabalho bem em equipe e estou pronto para contribuir em projetos que façam a empresa crescer.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}