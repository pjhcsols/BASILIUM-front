import styled from 'styled-components'

export const PaginationBG = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #212529;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`

export const RArrow = styled.div`
    width: 3vw;
    height: 7vh;
    position: absolute;
    right: 43vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const LArrow = styled.div`
    width: 3vw;
    height: 7vh;
    margin: 0 auto;
    position: absolute;
    left: 43vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const MidBox = styled.div`
    width: 7vw;
    height: 5vh;
    margin: 0 auto;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const MidText = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: white;
    position: absolute;
    bottom: 20px;
`