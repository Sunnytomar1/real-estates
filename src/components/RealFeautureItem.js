import React from 'react'
import styled from 'styled-components'

function RealFeautureItem({image,heading,description}) {
    return (
        <Container>
            <IconContainer>
<img src={image} alt=""/>
            </IconContainer>

<Bottom>

<Heading>
    <h2>{heading}</h2>
         </Heading>

         <Description>
    <p>{description}</p>

         </Description>
           

</Bottom>

        

        </Container>
    )
}

export default RealFeautureItem

const Container=styled.div `
background-color:white;

font-size:22px;
margin-top:6rem;
margin-bottom:7rem;
margin-left:2rem;


display:flex;
justify-content:space-between;

@media(max-width:700px){
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:0rem;
    margin-left:0px;
}

`


const IconContainer=styled.div `

img{
    height:50px;
    width:50px;
    margin-left:-25px;

    @media(max-width:1000px){
        margin-left:-5px;
    }




 
   
}

`

const Bottom=styled.div `
margin-top:10px;
margin-left:10px;



`



const Heading=styled.div `



h2{
    --tw-text-opacity: 1;
color: rgba(217, 119, 6, var(--tw-text-opacity));

font-size:23px;
font-weight:800;


@media(max-width:600px){
    width:60vw;
}
}




`


const Description=styled.div `
margin-top:25px;
p{
    font-size:16px;
    --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));
width:22vw;

font-weight:600;


@media(max-width:700px){
    width:100%;
}
}

`

