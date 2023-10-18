import styled from 'styled-components'

export const PaginationBG = styled.div`
    width: 100vw;
    height: 10vh;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`

export const RArrow = styled.div`
    width: 5vw;
    height: 5vh;
    margin: 0 auto;
    position: absolute;
    right: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const LArrow = styled.div`
    width: 5vw;
    height: 5vh;
    margin: 0 auto;
    position: absolute;
    left: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const MidBox = styled.div`
    width: 6vw;
    height: 5vh;
    margin: 0 auto;
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const MidText = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: white;
`