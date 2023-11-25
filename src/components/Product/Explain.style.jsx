import styled from 'styled-components'
import { ReactComponent as HeartIMG } from '../../assets/SVG/hearts.svg'
import { ReactComponent as ShareIMG } from '../../assets/SVG/Share.svg'

export const ExplainBox = styled.div`
    width: 55vw;
    height: 70vh;
    display: flex;
    flex-flow: row nowrap;
`

export const LeftBox = styled.div`
    width: 50%;
    height: 60%;
    background-image: url(${(props)=>props.src});
`

export const RightBox = styled.div`
    width: 50%;
    height: 60%;
    background: none;
    display: flex;
    flex-flow: column nowrap;
`

export const ProductText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
`

export const CartBtn = styled.div`
    cursor: pointer;
`