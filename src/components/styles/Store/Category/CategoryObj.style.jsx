import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    top: 20%;
    margin: 0 auto;
    display: block;
    width: 170px;
    height: 300px;
    cursor: pointer;
    transition: 0.5s ease;
`

export const CardBg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 37%;
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
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0,0,.5,1);
    transition-delay: 0s;
    transition-property: all;
    &:hover{
        transform: scale(1.1);
        background: #D9D9D9;
    };
`

export const Spandiv = styled.div`
    position: absolute;
    display: flex;
    left: 0;
    padding: 20px;
    width: 20vw;
`

export const CategoryTitle = styled.span`
    padding-right: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    font-size: 15px;
`

export const Subtitle = styled.span`
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: lighter;
    font-size: 5px;
`