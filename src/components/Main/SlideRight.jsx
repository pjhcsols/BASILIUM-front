import React from 'react'

import {ReactComponent as RightBar} from '../../assets/SVG/RightBar.svg'
import { 
  SlideButton,
  SlideButtonContainer
} from '../styles/SlideButton.style'

function SlideRight(props) {
  return (
    <SlideButtonContainer>
        <SlideButton onClick={props.onClick}>
            <RightBar style={{"color": "white"}}/>
        </SlideButton>
    </SlideButtonContainer>
  )
}

export default SlideRight