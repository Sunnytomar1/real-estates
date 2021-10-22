import React from 'react'
import styled from 'styled-components'

function Gallery() {
    return (
        <Container>
        <ImageContainer>
            <img className="i1" src="/img/gal-1.jpeg" alt=""/>
            <img className="i2" src="/img/gal-2.jpeg" alt=""/>
            <img className="i3" src="/img/gal-3.jpeg" alt=""/>
            <img className="i4" src="/img/gal-4.jpeg" alt=""/>
            <img className="i5" src="/img/gal-5.jpeg" alt=""/>
            <img className="i6" src="/img/gal-6.jpeg" alt=""/>
            <img className="i7" src="/img/gal-7.jpeg" alt=""/>     
            <img  className="i8" src="/img/gal-8.jpeg" alt=""/>
            <img className="i9" src="/img/gal-9.jpeg" alt=""/>
            <img className="i10" src="/img/gal-10.jpeg" alt=""/>
            <img className="i11" src="/img/gal-11.jpeg" alt=""/>
            <img className="i12" src="/img/gal-12.jpeg" alt=""/>
            <img className="i13" src="/img/gal-13.jpeg" alt=""/>
            <img className="i14" src="/img/gal-14.jpeg" alt=""/>
        </ImageContainer>
        </Container>
    )
}

export default Gallery


const Container=styled.div `
background-color:#f9f7f6;
margin-left:52px;
margin-top:5rem;


padding:1.5rem;



`

const ImageContainer=styled.div `
display:grid;
grid-template-columns: repeat(8, minmax(0, 1fr));
grid-template-rows: repeat(7, minmax(0, 1fr));
grid-gap:1.1rem;
object-fit:contain;

.i1{

    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
}

.i2{
         
   grid-row: 1 / span 3;
    grid-column: 3 / span 3;
    }

    .i3{
         
        grid-row: 1 / span 2;
         grid-column: 6 / 7;
         }

         .i4{
         
            grid-row: 1 / span 2;
             grid-column: 7 / -1;
             }


    .i5{
         
        grid-row: 3 / span 3;
         grid-column: 1 / span 2;
         }

         .i6{
         
            grid-row: 4 / span 2;
             grid-column: 3 / span 2;
             }

             .i7{
         
                grid-row: 4 / 5;
                 grid-column: 5 / 6;
                 }

                 .i8{
         
                    grid-row: 3 / span 2;
                     grid-column: 6 / span 2;
                     }

                     .i9{
         
                        grid-row: 3 / span 3;
                         grid-column: 8 / -1;
                         }

                         .i10{
         
                            grid-row: 6 / span 2;
                             grid-column: 1 / 2;
                             }

                             .i11{
         
                                grid-row: 6 / span 2;
                                 grid-column: 2 / span 2;
                                 }
    
                                 .i12{
         
                                    grid-row: 6 / span 2;
                                     grid-column: 4 / 5;
                                     }

                                   .i13{
         
                                        grid-row: 5 / span 3;
                                         grid-column: 5 / span 3;
                                         }

                                         .i14{
         
                                            grid-row: 6 / span 3;
                                             grid-column: 8 / -1;
                                             }
    

            
        
         

    img{
        height:100%;
        width:100%;
    }



`

