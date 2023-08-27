import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const GoodsBG = styled.div`
    width: 100%;
    height: 2000px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: #212529;
`

export const DescriptionBox = styled.div`
    width: 80%;
    height: 50%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 100px;
    margin-bottom: 20px;
    border: 1px solid white;
`

export const SetsumeBox = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImgBox = styled.div`
    width: 37%;
    height: 100%;
    margin-left: 5%;
    margin-right: 9%;
`

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TextBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: stretch;
`

export const MainBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    padding-bottom: 5%;
    padding-left: 5%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const TitleBox = styled.div`
    width: 50%;
    height: 30%;
    padding-top: 7%;
    padding-bottom: 10%;
    margin-left: 50px;
    display: inline-block;
    border: 1px white;
    color: white;
    font-family: "Noto Sans KR", sans-serif;
`

export const Title = styled.h3`
    font-size: 15px;
    font-weight: border;
    color: white;
`

export const Subtitle = styled.p`
    font-size: 20px;
    font-weight: lighter;
`

export const Price = styled.span`
    font-size: 12px;
    font-weight: normal;
`

export const SharedBox = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
`

export const ShareBox = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
`

export const HeartBtn = styled.div`
    
`

export const SharedBtn = styled.div`
    
`

export const DeliveryBox = styled.div`
    width: 100%;
    height: 30%;
    margin-left: 50px;
    padding-bottom: 10%;
    border: 1px white;
    color: white;
    font-family: "Noto Sans KR", sans-serif;
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 20%;
    border: 1px solid white;
    align-items: stretch;
    display: flex;
    flex-direction: row;
`

export const CartButton = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    background: #D9D9D9;
`

export const BuyButton = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    box-sizing: border-box;
    background: #D9D9D9;
`

export const Navigation = styled(NavLink)`
    width: 50%;
    height: 100%;
    margin: 0;
    text-decoration: none;
    color: inherit;
`

export const CategoryButton = styled.div`
    width: 5%;
    height: 30%;
    background: #D9D9D9;
    border-radius: 15px 15px 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    font-size: 12px;
`

export const TextureBox = styled.div`
    width: 45%;
    height: 100%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    border: 1px solid white;
`