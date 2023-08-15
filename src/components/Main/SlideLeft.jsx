import React, { useState } from 'react'
import {ReactComponent as LeftBar} from '../../assets/SVG/LeftBar.svg'
import { 
    SlideButton,
    SlideButtonContainer
 } from '../styles/SlideButton.style'

function SlideLeft(props) {
    console.log(props)
    return (
        <SlideButtonContainer>
            <SlideButton onClick={props.onClick}>
                <LeftBar style={{"color" : "white"}}/>
            </SlideButton>
        </SlideButtonContainer>
    )
}

export default SlideLeft