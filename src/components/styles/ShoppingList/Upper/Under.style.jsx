import styled from 'styled-components'


export const ItemsContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    margin: 0 auto;
    position: absolute;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    top: 17%;
    left: 4%;
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