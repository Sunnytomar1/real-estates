import React from 'react'
import styled from 'styled-components';
import Item from './Item'

function Features({image,heading}) {
    return (
        <Container>
           <Item
           image="/images/a.png"
           heading="GLOBE"
           />
           <Item
           image="/images/b.png"
           heading="HOME"
           />
           <Item
           image="/images/c.png"
           heading="MAP"
           />
           <Item
           image="/images/d.png"
           heading="Time"
           />

        </Container>
    )
}

export default Features


const Container=styled.div `
height:100vh;

background-image:  linear-gradient(to right bottom, rgba(30,60,114,1), rgba(42,82,152,0.8) ) , url('/images/nat-7.jpg');

background-size:cover;

background-position:top;

transform: skewY(-7deg);

display:grid;
grid-template-columns: repeat(4, minmax(0, 1fr));

display:flex;
align-items:center;
justify-content:center;

margin-top:80px;



@media(max-width:700px){
    margin-top:400px;
}





`