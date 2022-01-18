import { IconButton, InputAdornment, Slide, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export const NoteTextFiled=styled(TextField)`
    width: 100%;
    overflow: hidden;
`

export default function AddNote({AllNotes, setAllNotes}) {
    const [NoteText, setNoteText] = useState("")
    
    const AddNoteFunction = ()=>{
        NoteText.length>0 && setAllNotes([...AllNotes, {noteText: NoteText, noteData: {id: AllNotes.length+1}}])
        setNoteText("")
    }
    
    return (
        <NoteTextFiled
        sx={{
            input:{color:"white"},
        }}
        InputProps={{
            startAdornment: (
              NoteText!=="" ? <InputAdornment position="start">
              <Slide in={true} direction='right'>
                <IconButton edge="start" onClick={()=>setNoteText("")} color="primary">
                    <ClearRoundedIcon />
                </IconButton>
              </Slide>
            </InputAdornment> : ""
            ),
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={()=>AddNoteFunction()} edge="end" color="primary">
                        <SendRoundedIcon />
                    </IconButton>
                </InputAdornment>
            ),
          }}

          value={NoteText}
          onChange={(e)=>{setNoteText(e.target.value)}}
          placeholder="Add New Note"
          >
            
        </NoteTextFiled>
    )
}
