import React, { useState } from 'react'
import {
  FirstSlideBlock,
  TextureContainer,
  TitleContainer,
  MainTextureContainer,
  ButtonBox,
  TextBox
} from '../..//styles/First_seg.style'

import ButtonContainer from '../ButtonContainer'

import { motion } from 'framer-motion'

function FirstSegment() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50},
        visible: { opacity: 1, y: 0}
      }}
      initial= "hidden"
      animate= "visible"
      transition={{
        duration: 0.5,
        delay: 0.25
      }}
    >
      <FirstSlideBlock>
        <TitleContainer>
          <TextBox>
            <MainTextureContainer>
              BASILIUM<br/>
            </MainTextureContainer>
            <TextureContainer>
              Basilium of the King and Queen casual & street Brand
            </TextureContainer>
          </TextBox>
        </TitleContainer>
        <ButtonBox>
          <ButtonContainer />
        </ButtonBox>
      </FirstSlideBlock>  
    </motion.div>
  )
}

export default FirstSegment