import styled from "styled-components";
import LoginBG from '../../assets/LoginPage/SignInBG.png'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    background-image: url(${LoginBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

/* Background Container */
export const LeftSideContainer = styled.div`
    width: 55%;
    height: 100%;
`

/* This Container contains login form & Basilium LOGO title */
export const RightSideContainer = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled.div`
    width: 50%;
    height: 25%;
    margin-right: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`

