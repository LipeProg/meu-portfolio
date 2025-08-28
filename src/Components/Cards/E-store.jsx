import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function EstoreCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "background.paper" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/Estore.png" // troque pela imagem do projeto
        title="E-store CRM Ótica"
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
          E-store - CRM de uma Ótica
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          Desenvolvi um sistema para gestão de vendas, estoques e pedidos em uma ótica, com interface moderna e fácil de usar. O objetivo é tornar os processos mais organizados e eficientes.
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
