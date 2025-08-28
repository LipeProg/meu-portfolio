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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // coluna no mobile, linha no desktop
          width: "100%",
          gap: 4,
        }}
      >
        {/* Box da esquerda: cards dos projetos */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            order: { xs: 2, md: 1 }, // no mobile os cards ficam abaixo do texto
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={10}>
              <MediaCard />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Estore />
            </Grid>
            <Grid item xs={12} sm={10}>
              <JrInformatica />
            </Grid>
          </Grid>
        </Box>

        {/* Box da direita: textos */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            px: 2,
            order: { xs: 1, md: 2 }, // no mobile o texto vem primeiro
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              fontFamily: "Montserrat, Arial, sans-serif",
              mb: 3,
            }}
          >
            Projetos
          </Typography>

          <Typography
            sx={{
              color: "text.primary",
              fontFamily: "Roboto, Arial, sans-serif",
              mb: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "600px",
            }}
          >
            Aqui você encontra alguns dos meus principais projetos desenvolvidos
            durante minha trajetória acadêmica e profissional. Cada projeto representa
            um desafio superado e uma oportunidade de aprendizado.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontFamily: "Montserrat, Arial, sans-serif",
                mb: 1,
              }}
            >
              Como posso ajudar sua empresa?
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontFamily: "Roboto, Arial, sans-serif",
                fontSize: { xs: "1rem", md: "1.05rem" },
                maxWidth: "600px",
                mt: 3,
              }}
            >
              Posso ajudar sua empresa criando sistemas que facilitam o dia a dia e economizam tempo. 
              Tenho facilidade em encontrar maneiras de deixar processos mais rápidos e organizados, 
              além de trazer ideias novas para melhorar os resultados. Aprendo com rapidez, colaboro de forma 
              eficiente em equipe e estou preparado para aplicar meus conhecimentos em projetos que fortaleçam 
              os resultados da empresa e impulsionem o crescimento sustentável do negócio.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
