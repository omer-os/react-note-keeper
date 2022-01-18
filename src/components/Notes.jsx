import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import AddNote from './AddNote'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import NewNote from './NewNote';


export const Body=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    .notes{
        height: 350px;
        width: 450px;
        border: 1px solid white;
        margin-top: 5px;
        overflow-y: scroll;
    }
`

export default function Notes() {
    const [AllNotes, setAllNotes] = useState([])
    
    return (
        <Body>
            <AddNote AllNotes={AllNotes} setAllNotes={setAllNotes} />

            <div className="notes">
                <List sx={{margin:"0 5px"}}>
                    {
                        AllNotes.map((note)=>{
                            return <NewNote 
                            noteText={note.noteText}
                            noteData={note.noteData}
                            key={note.noteData.id}
                            />
                        })
                    }
                </List>
            </div>
        </Body>
    )
}
