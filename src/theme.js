import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#651fff",
    dark: "#0100ca",
    light: "#651fff66",
    green: "#00803ff0",
    yellow: "#ffc800",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
