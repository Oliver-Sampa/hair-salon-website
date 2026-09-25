import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#0d0d0d",
    surface: "#1a1a1a",
    text: "#f5f0e6",
    primary: "#000000",
    accent: "#d4af37",
    muted: "#b8b2a4",
    white: "#ffffff",
  },
  maxWidth: "1100px",
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;