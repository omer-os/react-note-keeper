import React from "react";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: 700;
  color: white;
  padding: 20px 20px;
  background: #23283f;
`;

export default function NavBar({ AllNotes, setAllNotes }) {
  const [MenuOpened, setMenuOpened] = useState(false);
  const [OpenDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Body>
        <div className="appname">Notes</div>

        <IconButton
          size="large"
          color="inherit"
          onClick={() => {
            setMenuOpened(!MenuOpened);
          }}
        >
          {!MenuOpened ? (
            <MenuRoundedIcon size="big" color="primary" />
          ) : (
            <CloseRoundedIcon size="big" color="primary" />
          )}
        </IconButton>
      </Body>

      <SwipeableDrawer
        open={MenuOpened}
        onClose={() => setMenuOpened(!MenuOpened)}
        onOpen={() => setMenuOpened(true)}
        sx={{
          background: "rgb(49, 49, 49)",
        }}
      >
        <List>
          <ListItem>
            <ListItemText>
              <Typography variant="h6" fontWeight={600}>
                Settings
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDialog(true)} button>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText>Delete All Notes</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <Dialog
        open={OpenDialog}
        keepMounted
        onClose={() => setOpenDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are You Sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This will delete all your notes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={() => {
              setOpenDialog(false);
              setAllNotes([]);
            }}
          >
            Close
          </Button>

          <Button
            color="error"
            onClick={() => {
              setOpenDialog(false);
              setAllNotes([]);
            }}
          >
            Yes Delete My Notes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
