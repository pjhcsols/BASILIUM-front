import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    top: 20%;
    left: 20%;
    display: block;
    width: 50%;
    height: 400px;
`

export const CardBg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
`

export const Linkdiv = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
    &:hover{
        background: #212530;
    }
    &:after{
        background: #D9D9D9;
    }
`

export const CardContent = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 18px;
    height: 50%;
    white-space: normal;
    box-shadow: 2px 4px 12px rgba(0,0,0,.08);
    transition: all .3s ;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0,0,.5,1);
    transition-delay: 0s;
    transition-property: all;
`

export const Spandiv = styled.div`
    position: absolute;
    left: 0;
    padding: 30px;
    width: 20rem;
`

export const Titlediv = styled.div`
    line-height: 1.25;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    font-size: 10px;
`

export const CategoryTitle = styled.h3`
    width: 100%;
    height: 100%;
`

export const Subtitle = styled.a`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: lighter;
    font-size: 5px;
`