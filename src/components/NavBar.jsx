import React from 'react'
import styled from 'styled-components'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { createTheme, IconButton, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Typography } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

export const Body=styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    font-weight: 700;
    color: white;
    padding: 20px 40px;
    background: #23283f;
`



export default function NavBar() {
    const [MenuOpened, setMenuOpened] = useState(false)
    
    return (
        <>
            <Body>
            <div className="appname">Notes</div>

            <IconButton size="large" color="inherit" 
            onClick={()=>{setMenuOpened(!MenuOpened)}}
            >
                {
                    !MenuOpened ? <MenuRoundedIcon 
                    size="big"
                    color="primary"
                    /> : <CloseRoundedIcon 
                    size="big"
                    color="primary"
                    />
                }            
            </IconButton>   
        </Body>



        <SwipeableDrawer
            open={MenuOpened}
            onClose={()=>setMenuOpened(!MenuOpened)}
            onOpen={()=>setMenuOpened(true)}
            sx={{
                background:"rgb(49, 49, 49)"
            }}
            >
                <List>
                    <ListItem>
                        <ListItemText>
                            <Typography variant='h6' fontWeight={600}>Settings</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>Delete All Notes</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>

        </>
    )
}
