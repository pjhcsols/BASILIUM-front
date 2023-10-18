import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styled from 'styled-components'

export const BG = styled.div`
    width: 220px;
    height: 380px;
    margin-bottom: 20px;
    cursor: pointer;
    /* min-width: 100%;
    min-height: 300px; */
    background-color: #212529;
`

export const Carddiv = styled.div`
    width: 100%;
    height: 80%;
    margin: 0 auto;
    min-width: 100%;
    min-height: 200px;
    background-image: ${(props) => props.ImageUrl || '#D9D9D9'};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    border: 1px solid white;
`

export const Card = styled.img`
    overflow: hidden;
    display: block;
    max-width: 100%;
    height: auto;
`

export const Heart = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    position: absolute;
    cursor: pointer;
    right: 0px;
    bottom: 0px;
    border: 1px solid black;
`

export const Cart = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    right: 55px;
    bottom: 0px;
    border: 1px solid black;
`

export const Textdiv = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 100%;
    min-height: 100px;
`

export const Title = styled.span`
    color: white;
    font-weight: bold;
    font-size: 20px;
`

export const Subscription = styled.span`
    font-weight: lighter;
    color: white;
    font-size: 15px;
`

export const Skeletondiv = styled.div`
    width: 220px;
    height: 380px;
`

export const SkeletonDesign = styled(Skeleton)`
    width: 220px;
    height: 300px;
`

export const SkeletonTitle = styled(Skeleton)`
    width: 220px;
    height: 25px;
`

export const SkeletonPrice = styled(Skeleton)`
    width: 50px;
    height: 10px;
`