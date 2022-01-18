import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";

export const Body = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  background: #23283f;
  overflow: hidden;
`;

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(255, 255, 255)",
      },
      secondary: {
        main: "rgb(192, 188, 255)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <NavBar />
        <Notes />
      </Body>
    </ThemeProvider>
  );
}
