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
    margin: 0 20px;
    gap: 20px;
    .notes{
        height: 80%;
        width: 100%;
        border: 1px solid white;
        overflow-y: scroll;
    }
`

export default function Notes({AllNotes, setAllNotes}) {
    
    
    return (
        <Body>
            <AddNote AllNotes={AllNotes} setAllNotes={setAllNotes} />

            <div className="notes">
                <List sx={{margin:"0 5px"}}>
                    {
                        AllNotes.map((note)=>{
                            return <NewNote 
                            AllNotes={AllNotes}
                            setAllNotes={setAllNotes}
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
