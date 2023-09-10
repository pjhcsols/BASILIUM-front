import styled from 'styled-components'

export const NotFoundBG = styled.div`
    width: 100%;
    height: 1000px;
    position: relative;
`

export const NotFoundImagediv = styled.div`
    width: 100%;
    height: 100%;
    display: display;
    justify-content: center;
    align-items: center;
`

export const Basilium = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) => props.basilium};
    background-repeat: no-repeat;
    background-size: cover;
`

export const BasiliumImg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
`