import styled from 'styled-components'

export const DetailBox = styled.div`
    width: 55vw;
    min-width: 35vw;
    border: 1px solid white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export const DetailSource = styled.div`
    width: 55vw;
    height: 35vh;
    background-image: url(${(props)=>props.src});
    background-repeat: no-repeat;
`