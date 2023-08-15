import styled from 'styled-components'


export const MainContainer = styled.div`
    width: 100%;
    height: 2230px;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #212529;
    z-index: -99;
`

export const GridContainer = styled.div`
    width: 68.75%;
    height: 2000px;
    margin: 0 auto;
    position: relative;
    justify-content: center;
    align-items: center;
`

export const HeaderBox = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 80px;
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ShopLogo = styled.img`
    width: 37px;
    height: 57%;
    margin: 0 auto;
`

export const ItemsContainer = styled.div`
    width: 100%;
    height: 1870px;
    display: flex;
    margin: 0 auto;
    position: absolute;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    top: 150px;
    left: 5%;
`

export const ItemBox = styled.div`
    width: 300px;
    height: 300px;
`

export const IMGBox = styled.div`
    width: 210px;
    height: 280px;
    background: #808080;
`

export const Item = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Title = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 12px;
    font-weight: medium;
    color: white;
`

export const Subscription = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 8px;
    font-weight: lighter;
    color: white;
`