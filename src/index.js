import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
