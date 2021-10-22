import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import ProductTwo from './ProductTwo'
import ProductThree from './ProductThree'
import Fade from 'react-reveal/Fade';

function SectionSecond() {
    return (
        <Container>

            <Heading>
                POPULAR LOCATIONS
            </Heading>

           <Fade left>
           <ProductContainer>

<Product/>
<ProductTwo/>
   <ProductThree/>
  
</ProductContainer>
   
               </Fade> 
    
            
        </Container>
    )
}

export default SectionSecond

const Container=styled.div `
//height:120vh;
background-color:#fafafa;
padding:80px 0;
margin-top:-85px;



`

const Heading=styled.div `

padding:9rem;
margin-left:190px;
font-size:34px;
text-transform:uppercase;
font-weight:700;
display:inline-block;
background-image: linear-gradient(to right, rgba(30,60,114,1), rgba(42,82,152,0.8));

-webkit-background-clip:text;
color:transparent;
letter-spacing:2px;
transition: all .2s;

&:hover{
   transform:skewY(2deg) skewX(15deg) scale(1.1);
   text-shadow: .5rem 1rem 2rem rgba($color-black, .2);
   

}

@media(max-width:800px){
  
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:20px;
  font-size:30px;
  
  padding:3rem;
  margin-top:50px;
 
}



`


const ProductContainer=styled.div `

margin-top:-60px;

    display:grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    



@media(max-width:1268px){
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    

}


@media(max-width:800px){
    display:grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    

}




`