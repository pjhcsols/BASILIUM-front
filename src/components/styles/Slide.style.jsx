import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1;
`

export const AnimatedSlideBox = styled(motion.div)`
    width: 1320px;
    margin: 0 auto;
`

export const SlideLeftContainer = styled.div`
    width: 35%;
    position: absolute;
    margin: 0 auto;
    top: 40%;
    left: 10%;
    z-index: 2;
`

export const SlideRightContainer = styled.div`
    width: 85%;
    position: absolute;
    margin: 0 auto;
    top: 40%;
    left: 30%;
    z-index: 2;
`

export const SlideButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: none;
    border: 0;
`

export const SlideButtonContainer = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    flex: 1;
`

export const TotalScreenSlide = styled.div`
    width: 1320px;
    height: 1000px;
    position: relative;
    margin: 0 auto;
`