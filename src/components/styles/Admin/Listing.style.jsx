import styled from 'styled-components'

export const BG = styled.div`
    width: 100%;
    height: 950px;
    background: #212529;
    position: relative;
`

export const InputContainer = styled.div`
    width: 50%;
    height: 70%;
    position: absolute;
    top: 10%;
    left: 25%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: none;
    border: 1px solid white;
`

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    padding-top: 10%;
`

export const InputBox = styled.div`
    width: 100%;
    height: 12%;
    padding-left: 15%;
    margin-bottom: 10%;
    display: inline-block;
`

export const INPUT = styled.input`
    width: 50%;
    height: 80%;
    margin-left: 5%;
    background: #D9D9D9;
    border-radius: 15px 15px 15px 15px;
    border: none;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImgUpload = styled.input`
    position: absolute;
    width: 5px;
    height: 3px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
`

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Texture = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    font-weight: bolder;
    color: white;
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 8%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const SubmitBtn = styled.button`
    width: 15%;
    height: 100%;
    margin-right: 1%;
    border-radius: 15px 15px 15px 15px;
`

export const ClearBtn = styled.button`
    width: 15%;
    height: 100%;
    margin-right: 3%;
    border-radius: 15px 15px 15px 15px;
`