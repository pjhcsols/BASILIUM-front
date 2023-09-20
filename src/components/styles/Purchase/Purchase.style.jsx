import styled from 'styled-components';

export const BuyingHeader = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: center;
    align-items: center;
`

export const BuyingPageBG = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 10%;
    background-color: #212529;
`

export const ShopObjContainer = styled.div`
    width: 90vw;
    height: 25vw;
    position: relative;
    margin: 0 auto;
    top: 10%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`

export const ShopObjBox = styled.div`
    width: 90vw;
    height: 20vh;
    position: absolute;
    display: flex;
    flex-flow: column no-wrap;
    justify-content: center;
    align-items: center;
`

export const ShopObj = styled.div`
    width: 100vw;
    height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
`

export const ShopImgBox = styled.div`
    width: 10vw;
    height: 50vh;
    background: #D9D9D9;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Textdiv = styled.div`
    width: 35vw;
    height: 5vh;
    position: absolute;
    top: 90%;
`

export const ObjText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: bolder;
`

export const CollectBtn = styled.div`
    width: 2vw;
    height: 1vw;
    background: none;
    cursor: pointer;
`

export const ButtonContainer = styled.div`
    width: 90vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`

export const BuyBtn = styled.div`
    width: 5vw;
    height: 3vh;
    background: #fff;
`

export const CancelBtn = styled.div`
    width: 5vw;
    height: 3vh;
    background: #D9D9D9;
`