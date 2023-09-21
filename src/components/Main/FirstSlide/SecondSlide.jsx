import React, { useState } from 'react'
import {
  BrandList,
  CasualBox,
  CasualText,
  IMG1,
  IMG2,
  IMG3,
  IMGBox,
  SecondContainer,
  Subscription,
  SubscriptionBox,
  ViewButtonBox,
} from '../../styles/SecondSlide.style'
import { ReactComponent as LoadMore } from '../../../assets/SVG/LoadMore.svg'
import { motion } from 'framer-motion'

function SecondSlide() {
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
      <SecondContainer>
        <CasualBox>
          <CasualText>casual & street brand</CasualText>
        </CasualBox>
        <SubscriptionBox>
          <Subscription>The brand BASILIUM, which means "decorations of kings and queens," was  expressed<br/></Subscription>
          <Subscription>under the motto of silver ornaments worn by ancien t kings. I promise to grow further as a<br/></Subscription>
          <Subscription>brand that pursues standard and simple details without losing a fresh feeling with a new<br/></Subscription>
          <Subscription>design that combines basic silhouette with trendy and modern sensibility</Subscription>
        </SubscriptionBox>
        <BrandList>
          <IMGBox style={{"left": "300px"}}>
            <IMG1 />
          </IMGBox>
          <IMGBox>
            <IMG2 />
          </IMGBox>
          <IMGBox style={{"right":"300px"}}>
            <IMG3 />
          </IMGBox>
        </BrandList>
        <ViewButtonBox>
          <LoadMore style={{"width":"100%"}}/>
        </ViewButtonBox>
      </SecondContainer>
    </motion.div>
  )
}

export default SecondSlide