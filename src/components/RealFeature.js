import React from 'react'
import styled from 'styled-components'
import RealFeautureItem from './RealFeautureItem'

function RealFeature({image,heading,description}) {
    return (
        <Container>
            <RealFeautureItem
            image="/img/1.png"
            heading="100% premium homes"
            description="Designed out by best engineers. We strive in out the best quality. No one is better than us in providing the best class services"
            />
            <RealFeautureItem
            image="/img/2.0.png"
            heading="Only the best properties"
            description="We have covered over 1000 varous location like Delhi,Gurugram,Bombay, Bangalore and expanding all over the country"
            />
            <RealFeautureItem
            image="/img/3.png"
            heading="All homes  in top location"
            description="Delhi,Bombay,Gurugram are som of the top location we strive upon on till now"
            />
            <RealFeautureItem
            image="/img/4.png"
            heading="New Home in one week"
            description="As we always promise we work 24/7 and deliever our project at the earliest without any hastle"
            />
            <RealFeautureItem
            image="/img/5.png"
            heading="Top 1% realtors"
            description="We are being awarded many awards for being the best consecutive for 5 years in this field"
            />
            <RealFeautureItem
            image="/img/6.png"
            heading="Secure Payments with Razorpay"
            description="Now there is no hastle in downpayment.This is highest secure "
            />
        </Container>
    )
}

export default RealFeature

const Container=styled.div `
margin-left:52px;
padding:4rem;


display:grid;
grid-template-columns: repeat(3, minmax(0, 1fr));

@media(max-width:749px){
    display:grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    
}

@media(min-width:750px){
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

}

@media(min-width:1024px){

    display:grid;
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
}



`