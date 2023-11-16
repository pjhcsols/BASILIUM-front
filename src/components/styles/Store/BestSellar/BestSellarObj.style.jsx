import styled from 'styled-components'

export const BestSellarBox = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    background: #F5F9FA;
    border: none;
`

export const IMGBox = styled.div`
    width: 45%;
    height: 70%;
    transition: 0.5s ease;
    background-image: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    &:hover{
        transform: scale(1.1);
    }
    .bestsellar{
        width: 100%;
        height: 100%;
    }
`

export const TextBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleTexture = styled.a`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 27px;
    font-weight: bold;
    width: 100%;
    text-decoration: none;
`

export const SubscriptionBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
`

export const SubscriptionText = styled.span`
    width: 100%;
    height: 10%;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    font-weight: lighter;
`