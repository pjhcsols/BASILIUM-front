import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const ExBg = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 100%;
    position: relative;
    background: #FFF;
`

export const PrevButtonBox = styled.div`
    width: 2%;
    height: 2%;
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 1;
`

export const NextButtonBox = styled.div`
    width: 2%;
    height: 2%;
    position: absolute;
    top: 50%;
    left: 95%;
    z-index: 1;
`