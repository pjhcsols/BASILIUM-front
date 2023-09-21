import styled from 'styled-components'

export const BestSellarBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #F5F9FA;
    border: none;
`

export const IMGBox = styled.div`
    position: absolute;
    margin: 0 auto;
    width: 40%;
    height: 70%;
    top: 5%;
    left: 20%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
`

export const TitleTexture = styled.a`
    position: absolute;
    width: 100%;
    height: 15%;
    left: 10%;
    top: 18%;
    text-decoration: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 60px;
    font-weight: bold;
`

export const SubscriptionBox = styled.div`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 13%;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const SubscriptionText = styled.span`
    width: 100%;
    height: 10%;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 18px;
    font-weight: Bolder;
`