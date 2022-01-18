import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const NoteTextFiled=styled(TextField)`
    width: 450px;
`

export default function AddNote({AllNotes, setAllNotes}) {
    const [NoteText, setNoteText] = useState("")
    
    const AddNoteFunction = ()=>{
        setAllNotes([...AllNotes, {
            noteData:{
                noteDate:"2022",
                noteColor:"green",
                id:Math.random(1, 550)
            },
            noteText:NoteText
        }])
    }
    
    return (
        <NoteTextFiled
        sx={{
            input:{color:"white"},
        }}
        InputProps={{
            startAdornment: (
              NoteText!=="" ? <InputAdornment position="start">
              <IconButton edge="start" onClick={()=>setNoteText("")} color="primary">
                  <ClearRoundedIcon />
              </IconButton>
            </InputAdornment> : ""
            ),
            color:"secondary",
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={()=>AddNoteFunction()} edge="end" color="primary">
                        <MenuRoundedIcon />
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
