import styled from 'styled-components'
import Brand1 from '../../assets/Section_1/img-1.jpg'
import Brand2 from '../../assets/Section_1/img-2.jpg'
import Brand3 from '../../assets/Section_1/img-3.jpg'

export const SecondContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CasualText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: 35px;
    color: white;
`

export const Subscription = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: lighter;
    font-size: 12px;
    color: white;
`

export const CasualBox = styled.div`
    width: 50%;
    height: 50%;
    position: absolute;
    align-items: center;
    text-align: center;
    top: 200px;
`

export const SubscriptionBox = styled.div`
    width: 50%;
    height: 50%;
    position: absolute;
    align-items: center;
    text-align: center;
    top: 250px;
`

export const BrandList = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 300px;
`

export const ViewButtonBox = styled.div`
    width: 5%;
    height: 5%;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 700px;
`


export const ArrowShapeBox = styled.div`
    width: 5%;
    height: 10%;
    position: absolute;
    align-items: center;
    justify-content: center;
`

export const IMGBox = styled.div`
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: 230px;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

export const IMG1 = styled.img`
    width: 100%;
    height: 100%;
    background-image: url(${Brand1});
    background-position: top center;
    background-attachment: fixed;
    object-fit: cover;
`

export const IMG2 = styled.img`
    width: 100%;
    height: 100%;
    background-image: url(${Brand2});
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    object-fit: cover;
`

export const IMG3 = styled.img`
    width: 100%;
    height: 100%;
    right: 300px;
    background-image: url(${Brand3});
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    object-fit: cover;
`