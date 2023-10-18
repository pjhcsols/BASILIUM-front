import styled from 'styled-components'

export const SubscriptionContainer = styled.div`
    width: 80vw;
    height: 70vh;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 20px;
    border: 1px solid white;
`

export const ButtonNav = styled.div`
    width: 100vw;
    height: 7vh;
    margin-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
`

export const ButtonText = styled.span`
    color: white;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    font-weight: bolder;
    &:hover, active{
        color: greenyellow;
    }
    &:hover::after, active:after{
        content: "";
        width: 20%;
        height: 2px;
        background: greenyellow;
        position: absolute;
        bottom: 25px;
        left: 40%;
    }
    
`

export const DetailInfo = styled.div`
    width: 25%;
    height: 100%;
    &::hover{
        background-color: white;
    };
    &::after{
        background-color: white;
    }
`

export const ReviewInfo = styled.div`
    width: 25%;
    height: 100%;
    &::hover{
        background-color: white;
    };
    &::after{
        background-color: white;
    }
`

export const QnaInfo = styled.div`
    width: 25%;
    height: 100%;
    &::hover{
        background-color: white;
    };
    &::after{
        background-color: white;
    }
`

export const RequestInfo = styled.div`
    width: 25%;
    height: 100%;
    &::hover{
        background-color: white;
    };
    &::after{
        background-color: white;
    }
`

export const ExplainBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
`

export const ExplainIMG = styled.div`
    width: 100%;
    background-image: url(${props => props.src});
`

export const ExpandButton = styled.div`
    width: 400px;
    height: 50px;
    &::hover{
        background-color: white;
    };
    &::after{
        background-color: white;
    }
`