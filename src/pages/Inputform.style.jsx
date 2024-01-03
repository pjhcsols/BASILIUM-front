import styled from 'styled-components'

export const InputformBox = styled.div`
    width: 70vw;
    height: 60vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export const FormBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const InputForm = styled.input`
    width: 50%;
    height: 100%;
    display: none;
`

export const InputFormBtn = styled.button`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #D9D9D9;
    border: none;
    border-radius: 10px 10px 10px 10px;
`

export const DescriptionBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DescriptionText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: ${(props) => props.size ? props.size : '15px'};
    font-weight: ${(props) => props.weight ? props.weight : 'lighter'};
    color: ${(props) => props.color ? props.color : 'white'};
`

export const CheckBtn = styled.button`
    margin-top: 50px;
    background-color: #D9D9D9;
    width: 120px;
    height: 75px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px 10px 10px 10px;
`