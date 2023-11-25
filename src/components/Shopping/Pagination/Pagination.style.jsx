import styled from 'styled-components'
import { ReactComponent as NextArrow } from '../../../assets/SVG/Go.svg'
import { ReactComponent as PrevArrow } from '../../../assets/SVG/Back.svg'

export const PaginationBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const PaginationText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: bolder;
    color: white;
`

export const NextBtn = styled(NextArrow)`
    width: 50px;
    height: 80px;
    color: white;
`

export const PrevBtn = styled(PrevArrow)`
    width: 50px;
    height: 80px;
    color: white;
`