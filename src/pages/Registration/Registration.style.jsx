import styled from 'styled-components'

export const RegistrationContainer = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    display: flex;
`

export const RegistrationUploadBox = styled.div`
    width: 55vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageUploadBox = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ShowImageBox = styled.div`
    width: 90%;
    height: 90%;
    margin: 0 auto;
    background-image: url(${(props)=>props.src});
`

export const ImageUploadBtn = styled.button`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const ImageUpload = styled.input`
    width: 90%;
    height: 90%;
    display: none;
`

export const DescriptionBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
`

export const UploadText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: ${(props)=>props.size};
    font-weight: lighter;
`

export const InputBox = styled.div`
    width: 100%;
    height: ${(props)=>props.height};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputLine = styled.input`
    width: 70%;
    height: ${(props)=>props.height};
    background: #D9D9D9;
    cursor: pointer;
`

export const UploadBtn = styled.div`
    width: 100px;
    height: 50px;
    cursor: pointer;
    transition: 0.5 all ease;
    &:hover{
        transform: scale(1.1);
    }
`