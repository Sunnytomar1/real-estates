import React from 'react'
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import animateDown  from 'react-reveal/Fade';
import Fade from 'react-reveal/Fade';
import moveInLeft from 'react-reveal'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <Container>
           <BackgroundImage>


<Content>
    <Fade right>
    Real 
    </Fade>
                   
                   <h2>estate</h2>
               </Content>




              
               <Fade bottom>
               <ButtonGroup>

             <Link to = "/location">

             <LeftButton>
          KNOW MORE
      </LeftButton>

             </Link>
              

               
       
<Link to = "/location">

<RightButton>
EXPLORE LOCATION
       </RightButton>
</Link>
       
   </ButtonGroup>

               </Fade>
  

   <Arrow>
       <KeyboardArrowDownIcon />
   </Arrow>
           </BackgroundImage>
        </Container>
    )
}

export default Header

const Container=styled.div `


`

const BackgroundImage=styled.div `
height:95vh;
background-image:  linear-gradient(to right bottom, rgba(30,60,114,1), rgba(42,82,152,0.8) ) , url('/images/hero.jpg');

background-size:cover;

background-position:top;

clip-path:polygon(0 0, 100% 0, 100% 75vh, 0 100%);

display:flex;
flex-direction:column;


@media(max-width:800px){
    height:85vh;
}



`

const Content=styled.div `
font-size:20px;
color:white;

flex-grow:0.7;

display:flex;
align-items:center;
justify-content:center;
margin-top:-40px;
font-weight:700;
text-transform:uppercase;
font-size:38px;
letter-spacing:6px;


h2{
    margin-left:1.5rem;
    margin-top:2.5rem;
    --tw-text-opacity: 1;
color: rgba(217, 119, 6, var(--tw-text-opacity));

@media(max-width:700px){
font-size:44px;
}

}

animation: moveInLeft 1s;

`

const ButtonGroup=styled.div `
//height:110vh;
display:flex;
align-items:Center;
justify-content:center;

@media(max-width:700px){
    flex-direction:column;
}

a{
    text-decoration:none;
}



`


const LeftButton=styled.div `
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
border-radius:100px;
font-size:16px;

display:flex;
align-items:center;
justify-content:center;
opacity:0.9;
cursor:pointer;

margin:10px 30px 0;

:hover{
    opacity:0.7;
}

`


const RightButton=styled(LeftButton) `

background-color:white;
color:black;
opacity:0.6;
`

const Arrow=styled.div `
color:white;

display:flex;
justify-content:center;
align-items:center;
margin-top:2rem;

animation: animateDown  infinite 1s;

`

