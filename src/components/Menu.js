import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";


function Menu() {

   
    return (
        <Container>
            <ImageContent>
                <Link to= '/'>
                <img loading="lazy" src='/images/favicon.png' alt=""/>
                </Link>
                
            </ImageContent>

            <RightMenu>
                <First>
                    <Link to='/'>
                    Home
                    </Link>
                    
                </First>

               

                <Second >
                    <Link to ='/location'>
                    Locations

                    </Link>
  
                   
   </Second>

                

                <Third>
                    <Link to='/SignIn'>
                    SignIn
                    </Link>
                    
                </Third>

                <Fourth>
                    <Link to='/SignUp'>
                    SignUp
                    </Link>
                   
                </Fourth>
            </RightMenu>
        </Container>
    )
}

export default Menu

const Container=styled.div `

height:80px;
display:flex;
align-items:center;
background-color:black;

position:sticky;
top:0;


z-index:10;

`

const ImageContent=styled.div `

img{
    cursor:pointer;
    height:60px;
    width:80px;
}

flex-grow:1;

@media(max-width:800px){
    flex-grow:0.4;
   
}


`

const RightMenu=styled.div `
display:flex;
font-size:18px;
color:white;
width:40%;

justify-content:space-around;
font-weight:700;
cursor:pointer;

@media(max-width:800px){
    display:flex;
    align-items:Center;
    justify-content:center;
   font-size:15px;
   justify-content:flex-end;
   width:77%;
}




`

const First=styled.div `
margin-left:-2px;

@media(max-width:800px){
    margin-left:-20px;
}

a{
    color:white;
    text-decoration:none;
}

`

const Second=styled.div `


@media(max-width:800px){
    margin-left:20px;
}

a{
    color:white;
    text-decoration:none;
}

`

const Third=styled.div `
@media(max-width:800px){
    margin-left:20px;
}

a{
    color:white;
    text-decoration:none;
}

`

const Fourth=styled.div `
@media(max-width:800px){
    margin-left:20px;
    //width:2rem;
}

a{
    color:white;
    text-decoration:none;
}

`