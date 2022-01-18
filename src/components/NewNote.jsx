import {
  Collapse,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";



export default function NewNote({ noteText, noteData, setAllNotes, AllNotes }) {
  const [Col, setCol] = useState(true);

  const handleDelete = () => {
    setCol(false);
    setTimeout(() => {
      setAllNotes(AllNotes.filter((note) => note.noteData.id !== noteData.id));
    }, 200);
  };
  return (
    <Slide in={true} direction="right" >
      <ListItem id={toString(noteData.id)}>
      <Collapse in={Col}>{
        <ListItemText>
          <Typography color="white">{noteText}</Typography>
          <ListItemSecondaryAction>
            <IconButton onClick={() => handleDelete()} color="inherit">
              <DeleteIcon sx={{ fill: "white" }} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemText>}
      </Collapse>
    </ListItem>
    </Slide>
  );
}
