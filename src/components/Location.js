import React from 'react'
import styled from 'styled-components'

import RealHeader from './RealHeader'
import RealFeature from './RealFeature'
import Story from './Story'
import StoryContent from './StoryContent'
import RealHomes from './RealHomes'
import Gallery from './Gallery'

import StorySecond from './StorySecond'

function Location() {
    return (
        <Container>
            <RealHeader/>
            <RealFeature/>
            <Story/>
            <StorySecond/>
            <StoryContent/>
         
            <Gallery/>
        

        </Container>
    )
}

export default Location


const Container=styled.div `
position:relative;
`