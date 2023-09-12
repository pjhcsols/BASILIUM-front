import styled from 'styled-components'
import BG from '../../assets/BG_modified.png'

export const Homepage = styled.div`
    width: 100%;
    height: 200vh;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: #212529;
`

export const Background = styled.div`
    position: relative;
    width: 1920px;
    height: 1000px;
    background-image: url(${BG});
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;
    object-fit: cover;
    z-index: -1;
`

export const Section2 = styled.div`
    width: 1920px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`