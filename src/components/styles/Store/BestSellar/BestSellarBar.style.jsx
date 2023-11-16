import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const BestSellarBG = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SlideBar = styled.div`
    width: 100%;
    height: 100%;
`

export const BSlide = styled.div`
    width: 100%;
    height: 100%;
`

export const SwiperContainer = styled(SwiperSlide)`
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
`

export const LeftButtonContainer = styled.button`
    width: 1.5%;
    height: 4%;
    position: absolute;
    top: 40%;
    right: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    z-index: 1;
`

export const RightButtonContainer = styled.button`
    width: 3%;
    height: 4%;
    position: absolute;
    top: 40%;
    left: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    z-index: 1;
`