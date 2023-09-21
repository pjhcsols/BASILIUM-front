import styled from 'styled-components'

export const BG = styled.div`
    width: 100%;
    height: 390px;
    min-width: 100%;
    min-height: 300px;
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

export const Carddiv = styled.div`
    width: 100%;
    height: 70%;
    margin: 0 auto;
    min-width: 100%;
    min-height: 200px;
    background-image: ${(props) => props.ImageUrl || '#D9D9D9'};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Card = styled.img`
    overflow: hidden;
    display: block;
    max-width: 100%;
    height: auto;
`

export const Textdiv = styled.div`
    width: 80%;
    height: 20%;
    padding: 10px;
    min-width: 100%;
    min-height: 100px;
`

export const Title = styled.h3`
    font-weight: bold;
    font-size: 15px;
`

export const Subscription = styled.p`
    font-weight: lighter;
    font-size: 10px;
`