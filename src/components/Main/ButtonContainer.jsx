import React, { useState } from 'react'
import styled from 'styled-components'
import { 
  ButtonStyle, 
  ButtonBox, 
  ButtonLine, 
  TextureBox
} from '../styles/Button.style'
import { ReactComponent as PlayBar } from '../../assets/SVG/ButtonPlay.svg'
import { Link, animateScroll as scroll } from 'react-scroll'

function ButtonContainer(props) { 
  const scrollBtn = () => {
    scroll.scrollToBottom()
  }
  return (
    <ButtonStyle>
      <ButtonBox>
        <PlayBar style={{
          "width": "15%",
          "height": "15%",
          "padding": "0 10px 0 15px",
          "justify-contents" : "center",
        }}/>
        <TextureBox>
          Store
        </TextureBox>
      </ButtonBox>
    </ButtonStyle>
  )
}

export default ButtonContainer