import React, {useEffect} from 'react'
import styled from 'styled-components'

import Header from './Header'
import Section from './Section'
import Features from './Features'
import SectionSecond from './SectionSecond'
//import {useHistory} from 'react-router-dom'

function Home() {
  
    

    return (
        <Container >
        <Header/>
        <Section/>
        <Features/>
        <SectionSecond/>
            
        </Container>
    )
}

export default Home

const Container=styled.div `

padding:15px;

@media(max-width:700px){
    padding:4px;
}

`

