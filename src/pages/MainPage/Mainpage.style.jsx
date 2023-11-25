import styled from 'styled-components'

export const MainBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${(props)=> props.src});
    background-repeat: none;
`

export const SelfSlider = styled.div`
    width: 55vw;
    height: 80vh;
    margin: 0 auto;
`