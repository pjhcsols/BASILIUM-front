import styled from 'styled-components'

export const HeaderContainer = styled.nav`
    width: 1320px;
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    z-index: 5;
`

export const HeaderBox = styled.div`
    width: 1320px;
    height: 50px;
    position: fixed;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 35px;
`

export const ButtonBox = styled.div`
    width: 200px;
    height: 100%;
    text-align: center;
`

export const ButtonAction = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    list-style: none;
    z-index: 10;
`

export const TextContainer = styled.span`
    font-family: "Noto Sans KR";
    font-size: 14px;
    color: #fff;
    transition: 0.5 ease-in-out;
    &:hover, active{
        color: #9b9b9f;
    }
    &:hover::after, active:after{
        content: "";
        width: 17%;
        height: 2px;
        background: #9b9b9f;
        position: absolute;
        bottom: 10px;
        left: 42%;
    }
`