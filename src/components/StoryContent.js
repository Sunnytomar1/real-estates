import React from 'react'
import styled from 'styled-components'
import RealHomes from './RealHomes'

function StoryContent({image}) {
    return (
        <Container>
        <RealHomes
        image="/img/house-1.jpeg"
        />
        <RealHomes
         image="/img/house-2.jpeg"
        />
        <RealHomes
         image="/img/house-3.jpeg"
        />
        <RealHomes
         image="/img/house-4.jpeg"
        />

<RealHomes
         image="/img/house-5.jpeg"
        />

<RealHomes
         image="/img/house-6.jpeg"
        />
        </Container>
    )
}

export default StoryContent

const Container=styled.div `

background-color:white;
margin-top:100px;
margin-left:12px;
padding:3em;
display:grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
grid-gap:8rem;


@media(max-width:800px){
    margin-top:220px;
    padding:2rem;
    margin-right:8rem;
}

@media(min-width:801px){

}

@media(max-width:600px){

    display:grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media(min-width:600px){

    display:grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media(min-width:768px){
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-left:-2rem;
    
}

@media(min-width:1224px){
    display:grid;
grid-template-columns: repeat(3, minmax(0, 1fr));

}

`
