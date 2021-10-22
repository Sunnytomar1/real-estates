import React from 'react'
import styled from 'styled-components'

function Item({image,heading}) {
    return (
        <Container>
            <ImageContainer>
<img src={image}/>
            </ImageContainer>
           <Heading>
    <h2>{heading}</h2>
               </Heading> 

               <Content>

<p>This is so freaky cool </p>
               </Content>
        </Container>
    )
}

export default Item

const Container=styled.div `

height:390px;
width:260px;

margin:0 auto;

background-color:white;
//margin:1.25rem;
padding:1rem;
margin-top:-8rem;
box-shadow: 0 2.5rem 4rem rgba(0,0,0);

display:flex;
flex-direction:column;
align-items:Center;

transition:all .2s;


&:hover{
    transform:translateY(-1.5rem) scale(1.03);
}


@media(max-width:600px){
height:100px;
width:100px;
}

@media(max-width:1000px){
height:300px;
width:200px;
}

@media(max-width:1224px){
height:350px;
width:220px;
}




`

const ImageContainer=styled.div `



img{
   font-size:6rem;
}



`


const Heading=styled.div `
margin-top:40px;


`


const Content=styled.div `


`