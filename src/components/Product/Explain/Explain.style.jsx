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
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgBox = styled.img`
    width: 40%;
    height: 50%;
    margin: 0 auto;
`

export const RightBox = styled.div`
    width: 50%;
    height: 60%;
    background: none;
    display: flex;
    flex-flow: column nowrap;
`

export const TextBox = styled.div`
    width: 80%;
    height: 80%;
    background: none;
    display: flex;
    flex-wrap: column nowrap;
`

export const ProductText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
`

export const BoxBox = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-wrap: column nowrap;
`

export const HeartBox = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const HeartImg = styled(HeartIMG)`
    width: 40px;
    height: 40px;
    &:hover{
        transition: scale(1.1);
    }
`

export const ShareBox = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const ShareImg = styled(ShareIMG)`
    width: 40px;
    height: 40px;
    &:hover{
        transition: scale(1.1);
    }
`

export const BtnBox = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-flow: row nowrap;
`

export const CartBtn = styled.div`
    width: 50%;
    height: 150px;
    cursor: pointer;
`

export const BuyBtn = styled.div`
    width: 50%;
    height: 150px;
    cursor: pointer;
`