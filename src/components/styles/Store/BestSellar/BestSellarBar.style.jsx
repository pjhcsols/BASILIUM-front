import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const SlideBar = styled.div`
    position: absolute;
    width: 100%;
    height: 60%;
    top: 10%;
`

export const BSlide = styled.div`
    width: 100%;
    height: 50%;
`

export const SwiperContainer = styled(SwiperSlide)`
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    bottom: 100%;
`

export const LeftButtonContainer = styled.button`
    width: 3%;
    height: 4%;
    position: absolute;
    top: 30%;
    right: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #212529;
    border: 1px;
    border-radius: 50%;
    z-index: 1;
`

export const RightButtonContainer = styled.button`
    width: 3%;
    height: 4%;
    position: absolute;
    top: 30%;
    left: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #212529;
    border: 1px;
    border-radius: 50%;
    z-index: 1;
`