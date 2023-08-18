import styled from 'styled-components'

export const BestSellarBox = styled.div`
    width: 720px;
    height: 480px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #F5F9FA;
    border-radius: 50px;
`

export const IMGBox = styled.div`
    position: absolute;
    margin: 0 auto;
    width: 40%;
    height: 70%;
    top: 5%;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.src});
`

export const SubscriptionBox = styled.div`
    width: 100%;
    height: 30%;
    position: absolute;
    top: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const TitleTexture = styled.span`
    position: absolute;
    width: 100%;
    height: 15%;
    top: 75%;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 30px;
    font-weight: bold;
`

export const SubscriptionText = styled.span`
    width: 100%;
    height: 10%;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 10px;
    font-weight: lighter;
`