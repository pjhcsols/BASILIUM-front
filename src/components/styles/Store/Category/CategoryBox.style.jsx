import Carousel from 'react-multi-carousel'
import styled from 'styled-components'

export const Scrollerdiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Carouseldiv = styled(Carousel)`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

export const CarouselBox = styled.div`
    display: flex;
    align-items: center;
`