import styled from 'styled-components'

export const HeaderContainer = styled.nav`
    width: 1320px;
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
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
`

export const ButtonAction = styled.button`
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`