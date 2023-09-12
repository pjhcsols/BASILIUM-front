import styled from "styled-components"

export const HeaderContainer = styled.nav`
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
    left: 50%;
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
    left: 47%;
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