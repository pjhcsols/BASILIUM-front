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
  MoveIn, 
  MoveOut, 
  ScrollContainer, 
  ScrollPage, 
  Sticky,
  batch,
} from 'react-scroll-motion'
import { FullPage, Slide } from 'react-full-page'


function MainHome() {
  const [isScroll, setIsScroll] = useState("scrolling up");

  useEffect(()=>{
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    const updateScrollDir = () =>{
      const scrollY = window.pageYOffset;
      if(Math.abs(scrollY - lastScrollY) < threshold){
        ticking = false;
        return;
      }
      console.log(scrollY, lastScrollY)
      setIsScroll(Math.abs(scrollY - lastScrollY) > 10 ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if(!ticking){
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  }, [isScroll]);

  return (
    <Homepage>
      <Header 
        isScroll={isScroll}
      />
      <FullPage>
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
              <Animator animation={batch(Sticky(), Fade(), MoveIn(0, 200))} >
                <Section2>
                  <MainStore />
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