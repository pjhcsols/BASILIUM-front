import styled from 'styled-components'
import { ReactComponent as HeartIMG } from '../../../assets/SVG/hearts.svg'
import { ReactComponent as ShareIMG } from '../../../assets/SVG/Share.svg'

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
    position: relative;
    display: flex;
    flex-flow: column nowrap;
`

export const ProductText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: ${(props)=>props.size};
    font-weight: ${(props)=>props.weight};
    color: white;
`

export const Heartdiv = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    margin: 0 auto;
    right: 0;
`

export const Heart = styled(HeartIMG)`
    width: 35px;
    height: 35px;
    color: none;
`

export const Sharediv = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    margin: 0 auto;
    top: 70px;
    right: 0;
`

export const Share = styled(ShareIMG)`
    width: 35px;
    height: 35px;
    color: none;
`

export const ExplainBtnBox = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const CartBtn = styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const BuyBtn = styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`