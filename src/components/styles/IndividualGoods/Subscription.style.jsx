import styled from 'styled-components'

export const SubscriptionContainer = styled.div`
    width: 80%;
    height: 70%;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 20px;
    border: 1px solid white;
`

export const ButtonNav = styled.div`
    width: 100%;
    height: 7%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
`

export const ButtonText = styled.p`
    color: white;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    font-weight: bolder;
`

export const DetailInfo = styled.div`
    
`

export const ReviewInfo = styled.div`
    
`

export const QnaInfo = styled.div`
    
`

export const RequestInfo = styled.div`
    
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
    height: 30%;
    background-image: url(${props => props.src});
`

export const ExpandButton = styled.button`
    
`