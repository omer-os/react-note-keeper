import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function NewNote({noteText, noteData}) {
  return (
    <ListItem id={toString(noteData.id)} button>
      <ListItemText>
        <Typography color="white">{noteText}</Typography>
        <ListItemSecondaryAction>
          <IconButton color="inherit">
            <DeleteIcon sx={{ fill: "white" }} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemText>
    </ListItem>
  );
}
