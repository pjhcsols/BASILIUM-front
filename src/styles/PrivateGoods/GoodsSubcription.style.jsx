import styled from 'styled-components'
import { ReactComponent as Heart } from '../../assets/SVG/hearts.svg'
import { ReactComponent as NotHeart } from '../../assets/SVG/NotFilledHearts.svg'
import { ReactComponent as Share } from '../../assets/SVG/Share.svg'
import { ReactComponent as ShoppingCart } from '../../assets/SVG/ShoppingCartIMG.svg'

export const SubscriptionContainer = styled.div`
    width: 55vw;
    height: 95vh;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    border: 1px solid white;
`

export const SecondBox = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const TitleBox = styled.div`
    width: 65vw;
    height: 15vh;
    padding: 30px;
`

export const TitleSpan = styled.span`
    margin: 300px 0 0 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 35px;
    font-weight: bold;
    color: white;
`

export const CategoryBox = styled.div`
    margin: 20px 0 0 30px;
    width: 50px;
    height: 20px;
    border: none;
    border-radius: 10px;
    background-color: #D9D9D9;
`

export const IMGBox = styled.div`
    width: 45%;
    margin: 30px 15px 0 30px;
    border: 1px solid white;
    height: 70vh;
    overflow: hidden;
`

export const ProductContainer = styled.div`
    width: 50%;
    height: 70vh;
    margin: 30px 15px 0 30px;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
`

export const ProductExplain = styled.div`
    width: 100%;
    height: 80%;
    padding: 30px;
    display: flex;
    flex-direction: row; 
`

export const SubscriptionBox = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const IconBox = styled.div`
    width: 15%;
    height: 100%;
    background: none;
    display: flex;
    flex-direction: column;
`

export const IconContainer = styled.div`
    width: 10%;
    height: 15%;
    background: none;
`

export const GoodsName = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: white;
`

export const GoodsPrice = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    color: white;
`

export const BtnBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
`

export const Btn = styled.button`
    width: 50%;
    height: 100%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .BtnHover &:hover{
        transform: scale(1.1);
    }
`

export const BtnText = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    font-weight: bolder;
    transition: 0.1s;
`

export const ShoppingCartImg = styled(ShoppingCart)`
    width: 30px;
    height: 30px;
`

export const HeartImg = styled(Heart)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3ms ease;
    &:hover, &:after{
        transform: scale(1.1);
    }
`

export const NotHeartImg = styled(NotHeart)`
    width: 30px;
    height: 30px;
    cursor:pointer;
    transition: 0.3ms ease;
    &:hover, &:after{
        transform: scale(1.1);
    }
`

export const ShareImg = styled(Share)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`