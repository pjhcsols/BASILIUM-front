import styled from 'styled-components'
import { ReactComponent as Heart } from '../../../assets/SVG/hearts.svg'
import { ReactComponent as Cart } from '../../../assets/SVG/ShoppingCartIMG.svg'

export const ProductBox = styled.div`
    width: 300px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    background: none;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover{
        background: #D9D9D9;
    }
`

export const ProductTextBox = styled.div`
    width: 90%;
    height: 40%;
    margin: 0 auto;
`

export const ProductText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
`

export const ProductIMGBox = styled.div`
    width: 90%;
    height: 60%;
`

export const ProductIMG = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    background-image: url(${(props)=> props.src});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const HeartBox = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid white;
`

export const HeartIMG = styled(Heart)`
    width: 35px;
    height: 35px;
    margin: 0 auto;
    cursor: pointer;
`

export const CartBox = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid white;
`

export const CartIMG = styled(Cart)`
    width: 35px;
    height: 35px;
    margin: 0 auto;
    cursor: pointer;
`