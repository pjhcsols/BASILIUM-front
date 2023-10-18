import styled from "styled-components";
import A1 from '../../assets/AI/blog_1.jpg'
import A2 from '../../assets/AI/blog_2.jpg'

export const ThirdContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const AIPostContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 30%;
    position: absolute;
    left: 25%;
    top: 20%;
    color: white;
`

export const TitleSpan = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 45px;
    color: white;
`

export const SubscriptionBox = styled.div`
    width: 100%;
    height: 30%;
    position: absolute;
    right: 5%;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
`

export const Subscription = styled.span`
    padding-left: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    color: white;
`

export const IMGBox = styled.div`
    width: 50%;
    height: 25vw;
    position: absolute;
    top: 70%;
`

export const IMGContainer = styled.div`
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: 230px;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    background-image: url(${A1});
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    object-fit: cover;
`

export const IMG2 = styled.img`
    width: 100%;
    height: 100%;
    background-image: url(${A2});
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    object-fit: cover;
`