import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function JrInformaticaCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "background.paper" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/jrinfromatica.png" // troque pela imagem do projeto
        title="Página de Apresentação - JR Informática"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          Página de Apresentação - JR Informática
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          Desenvolvi uma página de apresentação para a JR Informática, destacando serviços, produtos e informações da empresa de forma moderna e responsiva. O objetivo foi criar uma interface clara e atrativa para clientes e visitantes.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontFamily: "Roboto, Arial, sans-serif",
            marginTop: 1,
          }}
        >
          Tecnologias: React, Material-UI, JavaScript, CSS
        </Typography>
      </CardContent>

    </Card>
  );
}
