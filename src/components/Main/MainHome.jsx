import React, { useEffect, useState } from 'react'
import Header from '../Header/header'
import SecondPage from './SecondPage'
import MainSlide from './MainSlide'

import {
  Homepage, Background, Section2
} from '../styles/Home.style'

import { 
  Animator, 
  Fade, 
  MoveIn, 
  MoveOut, 
  ScrollContainer, 
  ScrollPage, 
  Sticky,
  batch,
} from 'react-scroll-motion'
import { FullPage, Slide } from 'react-full-page'


function MainHome() {
  const [isScroll, setIsScroll] = useState(false);

  return (
    <Homepage>
      <Header />
      <FullPage controls>
        <Slide>
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                  <MainSlide />
                  <Background />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </Slide>
        <Slide>
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(Sticky(), Fade(), MoveIn(0, 200))} style={{"z-index": "-2"}}>
                <Section2>
                  
                </Section2>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </Slide>
      </FullPage>
    </Homepage>
  )
}

export default MainHome