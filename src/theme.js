import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // fonte padrão para textos
    h4: {
      fontFamily: "Montserrat, Arial, sans-serif", // títulos grandes
    },
    h6: {
      fontFamily: "Poppins, Arial, sans-serif", // títulos dos cards
    },
    body1: {
      fontFamily: "Roboto, Arial, sans-serif", // parágrafos
    },
  },
  palette: {
    background: {
      default: "#000", // fundo preto
      paper: "#222",   // fundo dos cards
    },
    text: {
      primary: "#FFB300", // texto amarelo
      secondary: "#fff",  // texto secundário branco
    },
    primary: {
      main: "#FFB300", // cor principal (botões, etc)
      contrastText: "#000",
    },
  },
});

export default theme;