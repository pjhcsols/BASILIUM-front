import styled from 'styled-components'

export const DetailBox = styled.div`
    width: 55vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`

export const BtnContainer = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    border: 1px solid white;
`

export const BtnBox = styled.div`
    width: 25%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover, active{
        color: #5C7AE4;
        transform: scale(1.1);
    }
    &:hover::after, active:after{
        content: "";
        width: 2vw;
        height: 2px;
        background: #5C7AE4;
        position: absolute;
        bottom: 30px;
        transform: scale(1.1);
    }
`

export const BtnSpan = styled.span`
    font-family: 'Noto Sans KR',sans-serif;
    font-size: 15px;
    font-weight: lighter;
    text-align: center;
    color: white;
    active:after{
        color: #5C7AE4;
    }
`

export const GoodsDetail = styled.div`
    width: 55vw;
    height: 20vh;
    border: 1px solid black;
`

export const DetailContainer = styled.div`
    width: 55vw;
    display: flex;
    flex-direction: column;
`

export const DetailBtn = styled.div`
    width: 50%;
    height: 60px;
    background-color: #545F62;
    font-family: 'Noto Sans KR',sans-serif;
    font-size: 15px;
    font-weight: lighter;
    color: white;
    cursor: pointer;
`