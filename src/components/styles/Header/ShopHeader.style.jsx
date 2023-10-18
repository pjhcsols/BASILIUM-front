import styled from 'styled-components'
import Logo from '../../../assets/LOGO.jpg'

export const Header = styled.div`
    width: 100vw;
    height: 100px;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #252129;
`

export const LogoIMG = styled.div`
    width: 10vw;
    height: 100px;
    cursor: pointer;
`

export const LogoInfo = styled.div`
    width: 45px;
    height: 55px;
    background-image: url(Logo);
    background-repeat: no-repeat;
    &::hover{
        transform: scale(1.1);
    }
`