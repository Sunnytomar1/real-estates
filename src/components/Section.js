import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section() {
    return (
        <Container>
        <Fade right>
            <Out>

            <Heading>
    Exciting Tourist Locations Worldwide
</Heading>   
            </Out>
       
            </Fade>   

            <Bottom>
                
           <Fade bottom>
           <TourAbout>
<h3>You will gonna fall in love with interior designs</h3>
<p>Dedicated group of proffesionals working on each and every aspect to provide the best designs to customer and make them Happy..This is our vision we are working on</p>
<h3 className="h">You will gonna fall in love with interior designs</h3>
<p className="pt">Dedicated group of proffesionals working on each and every aspect to provide the best designs to customer and make them Happy..This is our vision we are working on</p>


<Btn>
    KNOW MORE 
</Btn>

</TourAbout>


               
           </Fade>
          




<Fade bottom>
<ImageCompose>

<img className="i1" src="/images/nat-1-large.jpg" alt=""/>
<img className="i2" src="/images/nat-2.jpg" alt=""/>
<img className="i3" src="/images/nat-4.jpg" alt=""/>

</ImageCompose>

</Fade>


                </Bottom> 


           



        </Container>
    )
}

export default Section


const Container=styled.div `
background-color:#fff;
height:140vh;
padding:25rem 0;
margin-top:-40vh;
`


const Out=styled.div `
display:flex;
justify-content:center;
margin-top:-50px;
`

const Heading=styled.div `

font-size:25px;
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
    margin-top:-19px;
}



`

const Bottom=styled.div `


margin-top:90px;

display:grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
text-align:center;

@media(max-width:800px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top:-10px;
    margin-left:-18px;
}
`

const TourAbout=styled.div `
margin-top:70px;
h3{
    font-size:21px;
    --tw-text-opacity: 1;
    --tw-text-opacity: 1;
    color: rgba(75, 85, 99, var(--tw-text-opacity));

    @media(max-width:800px){
        margin-top:-20px;
    }



}
.h{
    margin-top:90px;
}

p{
    margin-top:18px;
    margin-left:40px;
    width:90%;
    font-size:17px;
    --tw-text-opacity: 1;
color: rgba(245, 158, 11, var(--tw-text-opacity));
font-weight:700;

@media(max-width:700px){
    margin-left:19px;
}
    
}

`





const Btn=styled.div `

margin-top:40px;
margin-left:-200px;
display:inline-block;
font-size:15px;

border-bottom:1px solid #55c57a;
color:#55c57a;
font-weight:900;
cursor:pointer;
transition:all .2s;

:hover{
    background-color:#55c57a;
    color:#fff;
    box-shadow:0 0rem 0.5rem rgba(0,0,0);
    transform: translateY(-2px);

    &:active{
        box-shadow: 0 0.1rem rgba(0,0,0);
        transform: translateY(0);
    }
}

@media(max-width:800px){
   margin:30px auto;
}




`


const ImageCompose=styled.div `
position:relative;
display:grid;
grid-template-columns: repeat(1, minmax(0, 1fr));
margin-top:50px;


img{
    width:55%;
    box-shadow: 0 0.4rem 1rem rgba(0,0,0) ;
    border-radius:20px;
    transition:all .2s;

    &:hover{
        outline: 0.1rem solid white;
        transform:scale(1.05);
        box-shadow:0 0.5rem 2rem rgba(0,0,0);
        z-index:20;
    }

    @media(max-width:700px){
        width:60%;
    }

}

.i1{
    position:absolute;
     left:0;
     top:-2rem;

}

.i2{
    position:absolute;
    right:0;
    top:1rem;
}

.i3{
    position:absolute;
    left:20%;
     top:10rem;
}


@media(max-width:700px){
    margin-top:80px;
}


`
