import React, { useEffect, useState } from 'react'

import FirstSegment from './FirstSlide/FirstSlide'
import SecondSlide from './FirstSlide/SecondSlide'
import ThirdSlide from './FirstSlide/ThirdSlide'
import SlideLeft from './SlideLeft'
import SlideRight from './SlideRight'
import {ReactComponent as RightBar} from '../../assets/SVG/RightBar.svg'
import {ReactComponent as LeftBar} from '../../assets/SVG/LeftBar.svg'

import {
    Wrapper,
    AnimatedSlideBox,
    SlideRightContainer,
    SlideLeftContainer,
    TotalScreenSlide
} from '../styles/Slide.style'

import { AnimatePresence } from 'framer-motion';
import { SlideButton, SlideButtonContainer } from '../styles/SlideButton.style'


function MainSlide() {
    const components = [FirstSegment, SecondSlide, ThirdSlide]
    const [page, setPage] = useState(0);

    const boxVariants = {
        entry: {
            x: page ? -500 : 500,
            opacity: 0,
            scale: 0
        },
        center: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {duration: 0.5}
        },
        exit:{
            x: page ? 500: -500,
            opacity: 0,
            scale: 0,
            trasition: { duration: 0.5 }
        }
    }
    const NextClick = () => {
        if(page < (components.length-1)) setPage(page+1);
        console.log(page);
    }

    const BackClick = () => {
        if(page > 0) setPage(page-1);
        console.log(page);
    }

    return (
        <Wrapper>
            <AnimatePresence>
                <AnimatedSlideBox
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={boxVariants}
                >
                    <SlideLeftContainer>
                        <SlideButtonContainer>
                            <SlideButton onClick={BackClick}>
                                <LeftBar style={{"color" : "white"}}/>
                            </SlideButton>
                        </SlideButtonContainer>
                    </SlideLeftContainer>
                    <TotalScreenSlide>
                        {components[page]()}
                    </TotalScreenSlide>
                    <SlideRightContainer>
                        <SlideButtonContainer>
                            <SlideButton onClick={NextClick}>
                                <RightBar style={{"color" : "white"}}/>
                            </SlideButton>
                        </SlideButtonContainer>
                    </SlideRightContainer>
                </AnimatedSlideBox>
            </AnimatePresence>
        </Wrapper>
        
    )
}

export default MainSlide