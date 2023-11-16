import styled from 'styled-components'

export const ReviewContainer = styled.div`
    width: 100%;
    height: 180px;
    background: #212529;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const ReviewIMGBox = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ReviewIMG = styled.div`
    width: 33%;
    height: 33%;
    border: 1px solid black;
    border-radius: 10%;
    background-repeat: none;
`

export const ReviewUserName = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: lighter;
`

export const ReviewTitle = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: lighter;
    
`

export const ReviewContent = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: lighter;
    
`