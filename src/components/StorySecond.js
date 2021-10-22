import React from 'react'
import styled from 'styled-components'

function StorySecond() {
    return (
        <Container>
            <Leftside>

<img src="/img/story-1.jpeg"/>
<img className="i2" src="/img/story-2.jpeg"/>
</Leftside>

<RightSide>
<HeadingOne>
<h3>Happy Customers</h3>
</HeadingOne>

<HeadingTwo>
<h2>"The best decision of our lives"</h2>
</HeadingTwo>

<About>
<p>We are happy to add value and hapinness in the lives of the people</p>

</About>

<Button>
Find Your Own Home
</Button>

</RightSide>
        </Container>
    )
}

export default StorySecond


const Container=styled.div `


height:95vh;
margin-top:80px;


margin-left:51px;
display:flex;

@media(max-width:800px){
    flex-direction:column;
    margin-top:150px;
}



`

const Leftside=styled.div `
background-color:#e69963;
flex:0.6;
display:flex;
align-items:center;
justify-content:center;

background-image: linear-gradient(to left , rgba(253, 183, 119), rgba(42,82,152,0.8) ),  url("/img/back.jpg");

@media(max-width:800px){
    background-size:cover;
    
}

position:relative;

img{
    width:70%;
    height:50%;
   
   @media(max-width:800px){
       height:100%;
       width:100%;
   }

}

.i2{
    width:50%;
    height:35%;
    position:absolute;
    top:400px;
    left:400px;

    @media(max-width:900px){
        display:none;
    }
}

`


const RightSide=styled.div `
background-color:#f9f7f6;
flex:0.4;
padding:4rem;

display:flex;
flex-direction:column;
justify-content:center;




`


const HeadingOne=styled.div `

font-size:1rem;
color:#e69963;
text-transform:uppercase;
letter-spacing:0.4rem;
h3{
    font-weight:500;
}
`

const HeadingTwo=styled.div `
margin-top:20px;
width:32vw;
--tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));
line-height:1.5;
letter-spacing:0.1rem;

@media(max-width:800px){
    width:75vw;
}

h2{
    font-weight:800;
    font-size:29px;
}
`

const About=styled.div `
margin-top:45px;
--tw-text-opacity: 1;
color: rgba(75, 85, 99, var(--tw-text-opacity));

`

const Button=styled.button `
height:50px;
width:290px;
margin-top:50px;
background-color:#fff;
border:none;
border-radius:15px;

cursor:pointer;
text-transform:uppercase;
--tw-text-opacity: 1;
color: rgba(55, 65, 81, var(--tw-text-opacity));
font-weight:700;
font-size:14px;
transition:all .2s;

:hover{
    background-color:#B28451;
}

`