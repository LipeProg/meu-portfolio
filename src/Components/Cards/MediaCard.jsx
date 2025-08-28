import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ChatSoldadorCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "background.paper" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/chat-soldador.jpg" // troque pela imagem do projeto
        title="Chat de Apoio para Profissionais"
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
          Chat de Apoio para Profissionais
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          Desenvolvi um chat inteligente especializado para apoiar profissionais. O sistema utiliza a API do ChatGPT treinada para responder dúvidas específicas da área, ajudando trabalhadores a obter informações técnicas de forma rápida e prática.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontFamily: "Roboto, Arial, sans-serif",
            marginTop: 1,
          }}
        >
          Tecnologias: API ChatGPT, React, Node.js
        </Typography>
      </CardContent>

    </Card>
  );
}
