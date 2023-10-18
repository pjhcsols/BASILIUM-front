import styled from 'styled-components'

export const CtContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const CtBox = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
    right: 200px;
    left: 0;
    backdrop-filter: blur(5px);
`

export const CtList = styled.div`
    width: 20vw;
    height: 50vh;
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`

export const CtSpan = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 20px;
    font-weight: bolder;
    text-decoration: none;
`

export const BrandSpan = styled.li`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 20px;
    font-weight: bolder;
`