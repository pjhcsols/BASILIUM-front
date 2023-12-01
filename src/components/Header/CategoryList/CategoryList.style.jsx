import styled from 'styled-components'

export const CategoryBG = styled.div`
    width: 100vw;
    max-width: 99vw;
    height: 100vh;
    position: fixed;
    display: flex;
    background: none;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-image: url(${(props)=>props.src});
    z-index: 1;
`

export const BlurBg = styled.div`
    width: 100vw;
    height: 100vh;
    filter: blur(5px);
    -webkit-filter: blur(5px);
`

export const CategoryBox = styled.div`
    width: 35vw;
    max-width: 35vw;
    min-width: 35vh;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const CategoryTextBox = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
`

export const CategoryText = styled.a`
    font-family: 'Noto Sans KR',sans-serif;
    font-size: 25px;
    font-weight: lighter;
    text-decoration: none;
    margin-left: 10%;
`
