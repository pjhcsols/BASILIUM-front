import styled from "styled-components";

export const Wrapper = styled.div`
    width: 60%;
    height: 60%;
    margin-right: 15%;
    border: none;
    border-radius: 20px 20px 20px 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
`
export const ButtonLayer = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 20vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px 20px 0 0;
`

export const DomBtn = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${(props)=>props.checked ? "white" : "#D9D9D9"};
    font-family: 'Noto Sans KR',sans-serif;
    font-size: 22px;
    font-weight: 300;
    cursor: pointer;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

/* 1 component on Input */
export const InputBox = styled.div`
    width: 100%;
    height: 10vh;
    margin: 0 0 15px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    .title{
        text-align: left;
        margin: 0 0 10px 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: black;
    }
`

/* Input Box objects */
export const InputBlock = styled.input`
    width: 80%;
    height: 60%;
    background-color: #D9D9D9;
    border: none;
    border-radius: 5px 5px 5px 5px;
    cursor: pointer;
`

/* Under the form to clean the buttons */
export const ButtonBox = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

/* SignIn&Up button */
export const CheckButton = styled.div`
    width: 80%;
    height: 25%;
    background-color: #746C6C;
    border: none;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .signup-button-span{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 22px;
        font-weight: lighter;
        color: white;
    }
`

/* The anchor under the Login Box */
export const AnotherAccountBtn = styled.a`
    height: 25%;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    text-decoration: none;
    cursor: pointer;
`
