import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Card>
<ImageContainer>


</ImageContainer>

<Heading>
<h2>explore </h2>
<span>Location</span>
</Heading>

<Description>

<ul>
    <li>3 day tour</li>
    <li>Up to 30 People</li>
    <li>Best Location</li>
    <li>Price</li>
</ul>
</Description>

           


            </Card>
           
           
        </Container>
    )
}

export default Product


const Container=styled.div `

height:100vh;


`

const Card=styled.div `

height:33rem;
width:23rem;

background-color:#fff;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
margin:3rem;
border-radius:20px;

font-size:2rem;





padding:2rem;

position:relative;

@media(max-width:800px){
    margin:5rem auto;
    width:22rem;
    height:35rem;

}



  `

  const ImageContainer=styled.div `
 
 

  height:13rem;
  margin:-30px -31.8px;

 
   background-image: url('/images/nat-5.jpg');
   background-size:cover;

   --tw-bg-opacity: 1;
   background-color: rgba(245, 158, 11, var(--tw-bg-opacity));


   background-blend-mode: screen;
 

-webkit-clip-path:polygon(0 0 , 100% 0, 100% 82% , 0 100%);

   clip-path:polygon(0 0 , 100% 0, 100% 82% , 0 100%);
  
  `

  const Heading=styled.div `
 position:absolute;
top:1rem;
right:2rem;

width:9vw;





h2{
    font-size:22px;
    text-transform:uppercase;
   
    --tw-text-opacity: 1;
    color: rgba(229, 231, 235, var(--tw-text-opacity));
    font-weight:500;


    background-color: #f7b42c;
    background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);
    


  margin-top:8rem;
   
   
}

span{
    font-size:22px;
    text-transform:uppercase;
   
    --tw-text-opacity: 1;
    color: rgba(229, 231, 235, var(--tw-text-opacity));
    font-weight:500;


    background-color #ff4e00;
background-image linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);


margin:2rem;
position:absolute;
top:120px;
left:-8px;


}


  `


  const Description=styled.div `
  margin-top:50px;
  ul{
      list-style:none;
      font-size:18px;
      font-weight:700;
      width:100%;
  }

  li{
      text-align:center;
      --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));
      padding:1.5rem;
      border-bottom:1px solid #eee;
  }
  
  `

