import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

function RealHeader() {
    return (
        <Container>
        <Sidebar>
            <MenuIcon className="mi"/>
          
        </Sidebar>

        <Main>
            <ImageContainer>
                <Link to = '/'>

                <img src="/img/logo.png"/>
                </Link>
              
            </ImageContainer>

            <Heading>
                <h3 className="hh1">Your own Home:</h3>
                <h1 className="hh2">The ultimate personal freedom</h1>
            </Heading>

            <Button>
                View Our Properties
            </Button>

            <TextContent>
                Seen on
            </TextContent>

            <Logo>
                <img className="i1" src="/img/logo-bbc.png" />
                <img className="i2" src="/img/logo-bi.png" />
                <img className="i3" src="/img/logo-forbes.png" />
                <img className="i4" src="/img/logo-techcrunch.png" />
            </Logo>

        </Main>

        <Realtors>
people photos
        </Realtors>


        </Container>

    )
}

export default RealHeader

const Container=styled.div `
display:flex;
height:80vh;






`

const Sidebar=styled.div `
background-color:#e69963;

//height:600vh;
position:absolute;
top:0;
bottom:0;
width:40px;
display:flex;
justify-content:center;

.mi{
margin-top:20px;
font-size:2.1rem;
cursor:pointer;
color:white;
}


`


const Main=styled.div `
padding:2rem;
background-color:#54483A;
flex-grow:0.79;
background-image:  linear-gradient(rgba(16,29,44,.93),rgba(16,29,44,.93))   ,url("/img/hero.jpeg");
background-size:cover;
background-position:center;


display:grid;
grid-template-rows:1fr min-content 6rem 1fr;
grid-row-gap:2rem;

`

const ImageContainer=styled.div `
display:flex;
justify-content:center;
margin-top:1.5rem;
img{
    height:2rem;
}
`

const Heading=styled.div `



margin-left:8rem;
margin-top:3rem;

@media(max-width:900px){
    margin-left:2rem;
}

.hh1{
    color:#e69963;
    font-size:1.2rem;
    text-transform:uppercase;
    letter-spacing:0.5rem;
    font-weight:400;

    @media(max-width:800px){
        font-size:0.8rem;
    }


}

.hh2{
  

    color:#f9f7f6;
 font-size:2.8rem;
 font-style:italic;
 line-height:1.6;

 @media(max-width:800px){
     font-size:2rem;
 }

 
}

`


const Button=styled.button `
background-color:#e69963;
border:none;
height:50px;
width:190px;
margin-left:50px;
color:white;
font-weight:800;
font-size:17px;

align-self:start;
justify-self:start;

margin-left:8rem;

@media(max-width:800px){
   margin-left:3rem;
}


`


const TextContent=styled.div `
--tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));

font-size:1.4rem;

display:grid;
grid-template-columns: 1fr max-content 1fr;
grid-gap:1.5rem;
align-items:center;

&:before,
&:after{
    content:"";
    height:1px;
    display:block;
    background-color:#aaa;
}

`

const Logo=styled.div `
display:grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap:2rem;
justify-items:center;


img{
    height:30px;
    filter:brightness(70%);

    @media(max-width:870px){
        height:15px;
    }
    
}

`

const Realtors=styled.div `
background-color:#101d2c;

flex-grow:0.3;

`