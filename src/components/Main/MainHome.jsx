import React, { useEffect, useState } from 'react'
import Header from '../Header/header'
import SecondPage from './SecondPage'
import MainSlide from './MainSlide'
import MainStore from '../Store/MainStore'

import {
  Homepage, Background, Section2
} from '../styles/Home.style'

import { 
  Animator, 
  Fade,
  MoveOut, 
  ScrollContainer, 
  ScrollPage, 
  Sticky,
  batch,
} from 'react-scroll-motion'
import { 
  FullPage, 
  Slide 
} from 'react-full-page'


function MainHome() {
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 500){
        setIsScrollingDown(true);
      }else{
        setIsScrollingDown(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Homepage>
      <FullPage>
        <Header 
          isScroll={isScrollingDown}
        />
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
              <Section2>
                <MainStore />
              </Section2>
            </ScrollPage>
          </ScrollContainer>
        </Slide>
      </FullPage>
    </Homepage>
  )
}

export default MainHome