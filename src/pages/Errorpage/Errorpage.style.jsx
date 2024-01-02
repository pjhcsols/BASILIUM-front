import styled from 'styled-components'

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #212529;

    .error-text{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: ${(props)=>props.size ? props.size : '15px'};
        font-weight: ${(props)=>props.weight ? props.weight: 'lighter'};
        color: white;
    }
`

export const Errorbtn = styled.button`
    width: 120px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: CYAN;
`