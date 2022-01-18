import { ThemeProvider } from "@mui/system";
import { createTheme, Fab } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";

export const Body = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(380px, 500px);
  background: #23283f;
  overflow: hidden;
  justify-content: center;
  position: relative;
`;

export default function App() {
  const [AllNotes, setAllNotes] = useState([])

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(255, 255, 255)",
      },
      secondary: {
        main: "rgb(171, 167, 231)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <NavBar AllNotes={AllNotes} setAllNotes={setAllNotes}/>
        <Notes AllNotes={AllNotes} setAllNotes={setAllNotes}/>
        

      </Body>
    </ThemeProvider>
  );
}
