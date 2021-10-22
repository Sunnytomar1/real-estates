import React from 'react'
import styled from 'styled-components';

function Story() {
    return (
        <Container>
    <Leftside>
<img src="/img/house-1.jpeg"/>

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

export default Story


const Container=styled.div `


height:95vh;



margin-left:51px;
display:flex;

@media(max-width:800px){
    flex-direction:column;
}



`

const Leftside=styled.div `
background-color:#e69963;
flex:0.6;

img{
    height:100%;
    width:100%;
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



h2{
    font-weight:800;
    font-size:29px;
}


@media(max-width:800px){
    width:70vw;
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

