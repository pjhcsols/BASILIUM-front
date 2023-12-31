import styled from "styled-components"

export const HeaderContainer = styled.nav`
    z-index: 100;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    flex-direction: row;
    width: 100%;
    height: ${(props) => {
        if(props.isScroll === true){
            return '70px'
        }else{
            return '100px'
        }
    }};
    background: ${ (props) => {
        if(props.isScroll === true){
            return '#212529'
        }else{
            return 'none'
        }
    }};
    opacity: 100%;
    transition: all 0.3s ease-out;
    z-index: 5;
`

export const HeaderLinkContainer = styled.div`
    width: 1320px;
    height: 180px;

    display: flex;
    align-items: center;

    margin: 0px auto;
`

export const HeaderLeftLinkContainer = styled.div`
    width: 30%;
    height: 100%;
    position: absolute;
    left: 20%;
    font-family: 'Noto Sans KR';
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderRightLinkContainer = styled.div`
    width: 30%;
    height: 100%;
    font-family: 'Noto Sans KR';
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 20%;
`

export const IndividualLinkContainer = styled.li`
    width: 180px;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const SpanContainer = styled.span`
    font-family: "Noto Sans KR";
    font-size: 15px;
    font-weight: 100;
    color: #fff;
    transition: 0.5 ease-in-out;
    &:hover, active{
        color: #9b9b9f;
    }
    &:hover::after, active:after{
        content: "";
        width: 20%;
        height: 2px;
        background: #9b9b9f;
        position: absolute;
        bottom: 25px;
        left: 40%;
    }
`

export const CategoryBar = styled.div`
    width: 210px;
    height: 75px;
    display: flex;
    text-align: center;
    justify-content: center;
`

export const CategoryBox = styled.div`
    width: 10%;
    height: 15%;
    display: flex;
    padding: 5px;
    text-align: center;
    justify-content: center;
`

export const XBox = styled.div`
    width: 10%;
    height: 10%;
    z-index: 5;
    display: flex;
    text-align: center;
    justify-content: center;
`

export const HeaderExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px){
        display: none;
    }
`

export const HeaderInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const LogoContainer = styled.div`
    width: 120px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

export const Logo = styled.img`
    margin: 0 auto;
    width: 37px;
    height: 100%;
`

export const OpenLinkButton = styled.button`
    width: 210px;
    height: 180px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 5;
`

export const CartContainer = styled.div`
    width: 60px;
    height: 55px;
    position: absolute;
    right: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    object-fit: cover;
    transition: 0.5s ease;
    transform: ${(props) => {
        if(props.isScroll === true){
            return 'scale(0.7)';
        }else{
            return 'none';
        }
    }};
    &:hover{
        transform: scale(1.1);
    }
`

export const UserContainer = styled.div`
    width: 60px;
    height: 55px;
    position: absolute;
    right: 16%;
    background: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    object-fit: cover;
    transition: 0.5s ease;
    transform: ${(props) => {
        if(props.isScroll === true){
            return 'scale(0.7)';
        }else{
            return 'none';
        }
    }};
    &:hover{
        transform: scale(1.1);
    }
`

export const ExpendedMenu = styled.div`
    width: 5vw;
    height: 4vw;
    position: absolute;
    right: 16%;
    top: 100%;
    border: 3px solid #fff;
    border-radius: 15px 15px 15px 15px;
`

export const Mymenu = styled.div`
    width: 5vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    border-radius: 13px 13px 0px 0px;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    color: white;
    transition: 0.5s ease;
    &:hover{
        background: #09599b;
    }
`

export const Submenu = styled.div`
    width: 5vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    border-radius: 0px 0px 13px 13px;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    color: white;
    transition: 0.5s ease;
    &:hover{
        background: #09599b;
    }
`