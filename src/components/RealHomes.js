import React from 'react'
import styled from 'styled-components'


function RealHomes({image}) {
    return (
        <Container>
      <Upper>

      <ImageContainer>
<img src={image}/>
</ImageContainer>

<Heading>
<h2>Beautiful Family House</h2>
</Heading>


<Bottom>


<DetailOne>
<img src="/img/3.png"/>
<p>25km</p>
</DetailOne>



<DetailTwo>
<img src="/img/user.png"/>
<p>2400+</p>
</DetailTwo>




<DetailThree>
<img src="/img/area.png"/>
<p>10000sqm</p>

</DetailThree>




<DetailFour>
<img src="/img/4.png"/>
<p>$45000000</p>

</DetailFour>




</Bottom>
      </Upper>


<BottomMost>
    Contact Realtor
</BottomMost>




        </Container>
    )
}

export default RealHomes

const Container=styled.div `
background-color:#f9f7f6;
height:500px;
color:black;
margin-left:52px;

position:relative;

display:flex;
flex-direction:column;

@media(min-width:1024px){
    
    width:300px;
}

@media(min-width:768px){
    width:300px;
}

@media(max-width:600px){
    width:320px;
}

@media(min-width:600px) and (max-width:768px){
    width:350px;
    margin-left:10rem;
    margin-top:4rem;
}


`


const Upper=styled.div `
flex-grow:1;

`

const ImageContainer=styled.div `


img{
    height:100%;
    width:100%;
    height:14rem;
  
}

`

const Heading=styled.div `
background-color:#101d2c;
height:51px;
width:220px;
position:absolute;

margin-top:-20px;
margin-left:35px;

display:flex;
align-items:center;
justify-content:center;


h2{
    
    color:white;
    font-weight:700;
  
    font-size:15px;
   
}

`


const Bottom=styled.div `
display:grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
grid-gap:3rem;

margin-top:65px;

`


const DetailOne=styled.div `
display:flex;
align-items:center;
justify-content:center;
img{
    height:20px;
    width:20px;
}

p{
    --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));

font-weight:700;
font-size:14px;
}

`

const DetailTwo=styled.div `
display:flex;
align-items:center;
justify-content:center;
img{
    height:20px;
    width:20px;

}

p{
    --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));

font-weight:700;
font-size:14px;
}

`

const DetailThree=styled.div `
display:flex;
align-items:center;
justify-content:center;

img{
    height:20px;
    width:20px;
}

p{
    --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));

font-weight:700;
font-size:14px;
}

`


const DetailFour=styled.div `
display:flex;
align-items:center;
justify-content:center;
img{
    height:20px;
    width:20px;
}

p{
    --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));

font-weight:700;
font-size:14px;
}

`

const BottomMost=styled.div `

background-color:#e69963;
height:56px;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:18px;
font-weight:700;
cursor:pointer;

:hover{
    background-color:#B28451;
}

`