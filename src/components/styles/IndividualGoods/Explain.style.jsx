import styled from 'styled-components'

export const ExplainBG = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    margin: 0 auto;
    background: #252129;
`

export const BtnContainer = styled.div`
    width: 55vw;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    background: #252129;
    border: 1px solid white;
`

export const BtnBox = styled.div`
    width: 20vw;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 100;
    color: white;
    transition: 0.5s ease-in-out;
    justify-content: center;
    cursor: pointer;
    &:hover, active{
        transform: scale(1.1);
    };
    &:hover::after, active:after{
        content: "";
        width: 20%;
        height: 2px;
        background: #9b9b9f;
        position: absolute;
        bottom: 25px;
        left: 40%;
    }
`

export const SubscriptionBox = styled.div`
    width: 55vw;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 5vw;
    border: 1px solid white;
`

export const OpenBtn = styled.div`
    width: 15vw;
    height: 80px;
    position: fixed;
    background: #D9D9D9;
    cursor: pointer;
`