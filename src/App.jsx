import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Notes from './components/Notes'


export const Body=styled.div`
    height:100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    background: #23283f;
    overflow: hidden;
`

export default function App() {
    return (
        <Body>
            <NavBar />
            <Notes />
        </Body>
    )
}
